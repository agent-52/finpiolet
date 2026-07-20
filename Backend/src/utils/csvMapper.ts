import { TransactionType } from "../generated/prisma/enums";
import {
    CsvRow,
    MappedTransaction
} from "../types/transactionImport.types";


function mapCsvRow(row: CsvRow): MappedTransaction {

    let type: TransactionType | undefined;

    switch (row.Type.trim().toLowerCase()) {

        case "expense":
            type = TransactionType.EXPENSE;
            break;

        case "income":
            type = TransactionType.INCOME;
            break;

        default:
            type = undefined;
    }

    return {

        amount: Number(row.Amount),

        category: row.Category.trim(),

        type,

        transactionDate: new Date(row.Date),

        description: row.Description?.trim()

    };

}

export default mapCsvRow;