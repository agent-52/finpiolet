import { prisma } from "../config/prisma";
import { Month } from "../generated/prisma/enums";

async function createBudget(
  userId: number,
  categoryId: number,
  amount: number,
  month: Month,
  year: number,
) {
  const budget = await prisma.budget.create({
    data: {
      userId,
      categoryId,
      amount,
      month,
      year,
    },
  });
  return budget;
}

async function updateBudget(budgetId: number, amount: number) {
  const updatedBudget = await prisma.budget.update({
    where: {
      id: budgetId,
    },
    data: {
      amount,
    },
  });

  return updatedBudget;
}

async function deleteBudget(budgetId: number) {
  const deletedBudget = await prisma.budget.delete({
    where: {
      id: budgetId,
    },
  });

  return deletedBudget;
}

async function findBudgetById(budgetId: number) {
  const budget = await prisma.budget.findUnique({
    where: {
      id: budgetId,
    },
  });

  return budget;
}

async function findBudgetByCategoryAndMonth(
  userId: number,
  month: Month,
  year: number,
  categoryId: number,
) {
  const budget = await prisma.budget.findFirst({
    where: {
      categoryId,
      userId,
      month,
      year,
    },
  });
  return budget;
}

async function getBudgets(userId: number) {
  const budgets = await prisma.budget.findMany({
    where: {
      userId,
    },
    include: {
      category: true,
    },
    orderBy:{
      createdAt:"desc"
    }
  });
  return budgets;
}

export default {
  createBudget,
  updateBudget,
  deleteBudget,
  getBudgets,
  findBudgetByCategoryAndMonth,
  findBudgetById,
};
