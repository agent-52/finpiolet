import { TransactionType } from "../generated/prisma/enums";
import { getTransactionsByCategoryAndMonth } from "../repositories/analytics.repository";
import budgetRepo from "../repositories/budget.repository";
import { monthMap } from "../utils/date";

export type BudgetStatus = "SAFE" | "WARNING" | "EXCEEDED";

async function calculateBudgetUsage(userId: number, budgetId: number) {
  const budget = await budgetRepo.findBudgetById(budgetId);
  if (!budget) {
    throw new Error("no budget exist with this budget id");
  }
  if (budget.userId !== userId) {
    throw new Error("Unauthorized ");
  }
  //all expenses in that category in that month , year by that user

  const month = monthMap[budget.month];
  const transactions = await getTransactionsByCategoryAndMonth(
    userId,
    budget.categoryId,
    month,
    budget.year,
  );

  let expenseSum = 0;
  transactions.forEach((t) => {
    expenseSum += t.amount;
  });
  const remainingBudget = budget.amount - expenseSum;
  const usagePercentage = Number(
    ((expenseSum / budget.amount) * 100).toFixed(2),
  );
  let status: BudgetStatus;
  if (usagePercentage >= 100) {
    status = "EXCEEDED";
  } else if (usagePercentage < 100 && usagePercentage >= 80) {
    status = "WARNING";
  } else {
    status = "SAFE";
  }

  return {
    budget: budget.amount,
    spent: expenseSum,
    remaining: remainingBudget,
    usagePercentage,
    status,
  };
}

export default calculateBudgetUsage;
