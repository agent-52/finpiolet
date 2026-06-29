import { prisma } from "../config/prisma";
import { TransactionQueryObject } from "../controllers/transaction.controller";
import { TransactionType } from "../generated/prisma/enums";
import { findCategoryById } from "../repositories/category.repository";
import repository from "../repositories/transaction.repository";

async function createTransaction(
  userId: number,
  categoryId: number,
  type: TransactionType,
  amount: number,
  transactionDate: Date,
  description?: string,
) {
  if (amount <= 0) {
    throw new Error("amount must be more than zero");
  }
  const category = await findCategoryById(categoryId);
  if (!category) {
    throw new Error("category does not exist");
  }
  if (category.userId != null && category.userId != userId) {
    throw new Error(
      "user is not authorized for a transaction in this category",
    );
  }

  //transaction date validation

  const today = new Date();

  const convertedTransactionDate = new Date(transactionDate);

  if (transactionDate > today) {
    throw new Error("future transactions are not valid");
  }

  const transaction = await repository.createTransaction(
    userId,
    categoryId,
    type,
    amount,
    convertedTransactionDate,
    description,
  );

  return transaction;
}

async function updateTransaction(
  transactionId: number,
  userId: number,
  data: any,
) {
  const transaction = await repository.findTransactionById(transactionId);

  if (!transaction) {
    throw new Error("transaction with this id does not exist");
  }
  if (transaction.userId != userId) {
    throw new Error("user is not authorized for updating this transaction");
  }

  //update data validation checks
  if (data.amount && data.amount <= 0) {
    throw new Error("amount must be greater than 0");
  }

  if (data.categoryId) {
    const category = await findCategoryById(data.categoryId);
    if (!category) {
      throw new Error("category id is invalid");
    }
  }
  const updatedTransaction = await repository.updateTransaction(
    transactionId,
    data,
  );

  return updatedTransaction;
}

async function deleteTransaction(transactionId: number, userId: number) {
  const transaction = await repository.findTransactionById(transactionId);

  if (!transaction) {
    throw new Error("transaction with this id does not exist");
  }
  if (transaction.userId != userId) {
    throw new Error("user is not authorized for deleting this transaction");
  }

  const deletedTransaction = await repository.deleteTransaction(transactionId);

  return deletedTransaction;
}

async function getTransactions(
  userId: number,
  queryObject: TransactionQueryObject,
) {
  const { transactions, totalTransactions } = await repository.getTransactions(
    userId,
    queryObject,
  );

  return { transactions, totalTransactions };
}

export {
  getTransactions,
  deleteTransaction,
  updateTransaction,
  createTransaction,
};
