import { prisma } from "../config/prisma";
import { TransactionQueryObject } from "../controllers/transaction.controller";
import { Prisma } from "../generated/prisma/client";
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

async function getTransactions(
  userId: number,
  queryObject: TransactionQueryObject,
) {
  const totalTransactions = await prisma.transaction.count({
    where: {
      userId,
      ...(queryObject.categoryId && {
        categoryId: Number(queryObject.categoryId),
      }),
      ...(queryObject.search && {
        description: {
          contains: queryObject.search,
          mode: "insensitive",
        },
      }),
      ...(queryObject.type && { type: queryObject.type }),
      ...(queryObject.startDate && {
        transactionDate: {
          gte: queryObject.startDate,
        },
      }),
    },
  });

  let orderBy: Prisma.TransactionOrderByWithRelationInput;

  switch (queryObject.sortBy) {
    case "amount":
      orderBy = {
        amount: queryObject.sortOrder === "asc" ? "asc" : "desc",
      };
      break;

    case "createdAt":
      orderBy = {
        createdAt: queryObject.sortOrder === "asc" ? "asc" : "desc",
      };
      break;

    default:
      orderBy = {
        transactionDate: queryObject.sortOrder === "asc" ? "asc" : "desc",
      };
  }
  const transactions = await prisma.transaction.findMany({
    where: {
      userId,
      ...(queryObject.categoryId && {
        categoryId: Number(queryObject.categoryId),
      }),
      ...(queryObject.search && {
        description: {
          contains: queryObject.search,
          mode: "insensitive",
        },
      }),
      ...(queryObject.type && { type: queryObject.type }),
      ...(queryObject.startDate &&
        queryObject.endDate && {
          transactionDate: {
            gte: new Date(queryObject.startDate),
            lte: new Date(queryObject.endDate),
          },
        }),
    },
    orderBy,
    take: Number(queryObject.limit) ? Number(queryObject.limit) : 10,
    skip: Number(queryObject.page)
      ? (Number(queryObject.page) - 1) * Number(queryObject.limit)
      : 0,
  });

  return { transactions, totalTransactions };
}

export default {
  getTransactions,
  createTransaction,
  updateTransaction,
  deleteTransaction,
  findTransactionById,
};
