import { prisma } from "../config/prisma";
import parseCsv from "../utils/csvParser";
import mapCsvRow from "../utils/csvMapper";
import validateTransaction from "../utils/csvValidator";

import {
    CreateTransactionImportInput,
    ImportError,
    ImportResult
} from "../types/transactionImport.types";

import { repoGetCategories } from "../repositories/category.repository";

async function importTransactions(
    userId: number,
    filePath: string
): Promise<ImportResult> {

    // -----------------------------
    // Parse CSV
    // -----------------------------

    const rows = await parseCsv(filePath);

    // -----------------------------
    // Load Categories Once
    // -----------------------------

    const categories = await repoGetCategories(userId);

    // -----------------------------
    // Build Category Lookup
    // -----------------------------

    const categoryMap = new Map<string, number>();

    for (const category of categories) {

        categoryMap.set(
            category.name.toLowerCase(),
            category.id
        );

    }

    // -----------------------------
    // Arrays
    // -----------------------------

    const validTransactions: CreateTransactionImportInput[] = [];

    const errors: ImportError[] = [];

    // -----------------------------
    // Process CSV
    // -----------------------------

    let rowNumber = 1;

    for (const row of rows) {

        const mappedTransaction = mapCsvRow(row);

        const result = validateTransaction(
            rowNumber,
            mappedTransaction,
            userId,
            categoryMap
        );

        if (!result.validation.valid) {

            errors.push(...result.validation.errors);

        } else {

            validTransactions.push(result.transaction!);

        }

        rowNumber++;

    }

    // -----------------------------
    // Bulk Insert
    // -----------------------------

    if (validTransactions.length > 0) {

        await prisma.$transaction(async (tx) => {

            await tx.transaction.createMany({

                data: validTransactions

            });

        });

    }

    // -----------------------------
    // Return
    // -----------------------------

    return {

        success: errors.length === 0,

        imported: validTransactions.length,

        failed: errors.length,

        errors

    };

}

export {
    importTransactions
};