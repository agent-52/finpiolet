import { prisma } from "../config/prisma";
import { TransactionType } from "../generated/prisma/enums";

async function getTransactionsByCategoryAndMonth(
  userId: number,
  categoryId: number,
  month: number,
  year: number,
) {
  const startDate = new Date(year, month - 1, 1);
  const endDate = new Date(year, month, 1);
  const transactions = await prisma.transaction.findMany({
    where: {
      userId,
      categoryId,
      transactionDate: {
        gte: startDate,
        lt: endDate,
      },
      type: TransactionType.EXPENSE,
    },
  });

  return transactions;
}

export { getTransactionsByCategoryAndMonth };
