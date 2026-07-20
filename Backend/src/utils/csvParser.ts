import fs from "fs";
import csv from "csv-parser";
import { CsvRow } from "../types/transactionImport.types";


async function parseCsv(filePath: string): Promise<CsvRow[]> {
    return new Promise((resolve, reject) => {

        const rows: CsvRow[] = [];

        fs.createReadStream(filePath)
            .pipe(csv())

            .on("data", (row: CsvRow) => {
                rows.push(row);
            })

            .on("end", () => {

                // Remove temporary uploaded file
                fs.unlink(filePath, (err) => {
                    if (err) {
                        console.error("Failed to delete uploaded CSV:", err);
                    }
                });

                resolve(rows);
            })

            .on("error", (error) => {

                fs.unlink(filePath, () => {});

                reject(error);
            });

    });
}

export default parseCsv;