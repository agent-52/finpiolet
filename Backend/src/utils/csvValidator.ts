import {
    CreateTransactionImportInput,
    ImportError,
    MappedTransaction,
    ValidationResult
} from "../types/transactionImport.types";

/**
 * Validates one mapped transaction.
 * If valid, converts category name -> categoryId and
 * returns the final object ready for database insertion.
 */
function validateTransaction(
    rowNumber: number,
    transaction: MappedTransaction,
    userId: number,
    categoryMap: Map<string, number>
): {
    validation: ValidationResult;
    transaction?: CreateTransactionImportInput;
} {

    const errors: ImportError[] = [];

    // -----------------------------
    // Amount
    // -----------------------------

    if (isNaN(transaction.amount) || transaction.amount <= 0) {
        errors.push({
            row: rowNumber,
            reason: "Invalid amount"
        });
    }

    // -----------------------------
    // Transaction Type
    // -----------------------------

    if (!transaction.type) {
        errors.push({
            row: rowNumber,
            reason: "Transaction type must be either 'Income' or 'Expense'"
        });
    }

    // -----------------------------
    // Date
    // -----------------------------

    if (isNaN(transaction.transactionDate.getTime())) {
        errors.push({
            row: rowNumber,
            reason: "Invalid transaction date"
        });
    }

    // -----------------------------
    // Category
    // -----------------------------

    const categoryId = categoryMap.get(
        transaction.category.toLowerCase()
    );

    if (!categoryId) {
        errors.push({
            row: rowNumber,
            reason: `Category '${transaction.category}' does not exist`
        });
    }

    // -----------------------------
    // Return Errors
    // -----------------------------

    if (errors.length > 0) {

        return {
            validation: {
                valid: false,
                errors
            }
        };

    }

    // -----------------------------
    // Final DTO
    // -----------------------------

    return {

        validation: {
            valid: true,
            errors: []
        },

        transaction: {

            userId,

            amount: transaction.amount,

            categoryId: categoryId!,

            type: transaction.type!,

            transactionDate: transaction.transactionDate,

            ...(transaction.description && {description: transaction.description})

        }

    };

}

export default validateTransaction;