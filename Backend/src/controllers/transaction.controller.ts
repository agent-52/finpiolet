import { Request, RequestHandler, Response } from "express";
import {
  createTransaction,
  deleteTransaction,
  getTransactions,
  importTransactions,
  updateTransaction,
} from "../services/transaction.service";
import { TransactionType } from "../generated/prisma/enums";
import { ApiError } from "../utils/ApiError";

import fs from "fs"

import csv from "csv-parser";

const createTransactionController = async (req: Request, res: Response) => {
  const userId = req.user?.userId;
  if (!userId) {
    return res.status(404).json({
      message: "userId not found",
    });
  }

  const { categoryId, type, amount, description, transactionDate } = req.body;
  const transaction = await createTransaction(
    userId,
    categoryId,
    type,
    amount,
    transactionDate,
    description,
  );

  return res.status(201).json({
    success: true,
    transaction,
  });
};

const updateTransactionController = async (req: Request, res: Response) => {
  const userId = req.user?.userId;
  if (!userId) {
    return res.status(404).json({
      message: "userId not found",
    });
  }

  const { id } = req.params;

  const transactionId = Number(id);
  if (isNaN(transactionId)) {
    return res.status(400).json({
      message: "invalid route, transaction id is not valid",
    });
  }

  const data = req.body;

  const updatedTransaction = await updateTransaction(
    transactionId,
    userId,
    data,
  );

  return res.status(200).json({
    success: true,
    transaction: updatedTransaction,
  });
};

const deleteTransactionController = async (req: Request, res: Response) => {
  const userId = req.user?.userId;
  if (!userId) {
    return res.status(404).json({
      message: "userId not found",
    });
  }

  const { id } = req.params;

  const transactionId = Number(id);
  if (isNaN(transactionId)) {
    return res.status(400).json({
      message: "invalid route, transaction id is not valid",
    });
  }

  const deletedTransaction = await deleteTransaction(transactionId, userId);

  return res.status(200).json({
    success: true,
    message: "transaction deleted successfully",
    deletedTransaction,
  });
};

const getTransactionsController = async (req: Request, res: Response) => {
  const userId = req.user?.userId;
  if (!userId) {
    return res.status(404).json({
      message: "userId not found",
    });
  }
  const queryObject = req.query as TransactionQueryObject;

  const { transactions, totalTransactions } = await getTransactions(
    userId,
    queryObject,
  );
  return res.status(200).json({
    success: true,
    page: queryObject.page,
    limit: queryObject.limit,
    total: totalTransactions,
    transactions,
  });
};

export type TransactionQueryObject = {
  page?: string;
  limit?: string;
  search?: string;
  type?: TransactionType;
  categoryId?: string;

  startDate?: string;
  endDate?: string;

  sortBy?: "amount" | "transactionDate" | "createdAt";
  sortOrder?: "asc" | "desc";
};

const importTransactionsController = async (req:Request, res:Response) => {
  const userId = req.user?.userId;
  if (!userId) {
    return res.status(404).json({
      message: "userId not found",
    });
  }

  if (!req.file) {
            throw new ApiError(400, "Please upload a CSV file.");
        }

        const result = await importTransactions(
            userId,
            req.file.path
        );

        return res.status(200).json(result);


}

export {
  createTransactionController,
  updateTransactionController,
  deleteTransactionController,
  getTransactionsController,
  importTransactionsController
};
