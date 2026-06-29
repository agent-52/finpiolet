import { prisma } from "../config/prisma";
import { TransactionType } from "../generated/prisma/enums";

async function createTransaction(
  userId: number,
  categoryId: number,
  type: TransactionType,
  amount: number,
  transactionDate: Date,
  description?: string,
) {
  const transaction = await prisma.transaction.create({
    data: {
      userId,
      categoryId,
      type,
      amount,
      description: description ?? null,
      transactionDate,
    },
  });
  return transaction;
}

async function updateTransaction(transactionId: number, data: any) {
  const updatedTransaction = await prisma.transaction.update({
    where: {
      id: transactionId,
    },
    data,
  });

  return updatedTransaction;
}

async function deleteTransaction(transactionId: number) {
  const deletedTransaction = await prisma.transaction.delete({
    where: {
      id: transactionId,
    },
  });
  return deletedTransaction;
}

async function findTransactionById(transactionId: number) {
  const transaction = await prisma.transaction.findUnique({
    where: {
      id: transactionId,
    },
  });
  return transaction;
}

async function getTransactions(userId: number) {
  //pagination, search, filters bhi lagana hai

  const transactions = await prisma.transaction.findMany({
    where: {
      userId,
    },
    orderBy: {
      transactionDate: "desc",
    },
  });

  return transactions;
}

export default {
  getTransactions,
  createTransaction,
  updateTransaction,
  deleteTransaction,
  findTransactionById,
};
