import { Request, RequestHandler, Response } from "express";
import {
  createTransaction,
  deleteTransaction,
  getTransactions,
  updateTransaction,
} from "../services/transaction.service";

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
  const transactions = await getTransactions(userId);
  return res.status(200).json({
    success: true,
    transactions,
  });
};
export {
  createTransactionController,
  updateTransactionController,
  deleteTransactionController,
  getTransactionsController,
};
