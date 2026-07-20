import { TransactionType } from "../generated/prisma/enums";


export interface CsvRow {
    Date: string;
    Category: string;
    Type: string;
    Amount: string;
    Description?: string;
}


export interface MappedTransaction {
    amount: number;
    category: string;
    type?: TransactionType | undefined;
    transactionDate: Date;
    description?: string | undefined;
}


export interface CreateTransactionImportInput {
    userId: number;
    amount: number;
    categoryId: number;
    type: TransactionType;
    transactionDate: Date;
    description?: string;
}


export interface ImportError {
    row: number;
    reason: string;
}


export interface ValidationResult {
    valid: boolean;
    errors: ImportError[];
}


export interface ImportResult {
    success: boolean;
    imported: number;
    failed: number;
    errors: ImportError[];
}