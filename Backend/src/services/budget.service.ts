import { Month } from "../generated/prisma/enums";
import repo from "../repositories/budget.repository";
import { findCategoryById } from "../repositories/category.repository";

async function createBudget(
  userId: number,
  categoryId: number,
  amount: number,
  month: Month,
  year: number,
) {
  if (amount <= 0) {
    throw new Error("amount should be more than zero");
  }
  const category = await findCategoryById(categoryId);
  if (!category) {
    throw new Error("no such category exist with this category id");
  }
  if (category.userId && category.userId != userId) {
    throw new Error("UnAuthorized");
  }
  if (category.type == "INCOME") {
    throw new Error("budgets are only for expense categories");
  }

  //there should onnly be onne budget for a user for a category a month a year

  const budgetExists = await repo.findBudgetByCategoryAndMonth(
    userId,
    month,
    year,
    categoryId,
  );

  if (budgetExists) {
    throw new Error(
      "Budget of this category already exist this month for this user",
    );
  }

  const budget = await repo.createBudget(
    userId,
    categoryId,
    amount,
    month,
    year,
  );

  return budget;
}

async function updateBudget(userId: number, budgetId: number, amount: number) {
  const budgetExist = await repo.findBudgetById(budgetId);
  if (!budgetExist) {
    throw new Error("no budget with this id exists");
  }
  if (budgetExist.userId != userId) {
    throw new Error("user not authorized for this action");
  }
  if (amount <= 0) {
    throw new Error("amount should be more than 0");
  }
  const updatedBudget = await repo.updateBudget(budgetId, amount);
  return updatedBudget;
}

async function deleteBudget(userId: number, budgetId: number) {
  const budgetExist = await repo.findBudgetById(budgetId);
  if (!budgetExist) {
    throw new Error("no budget with this id exists");
  }
  if (budgetExist.userId != userId) {
    throw new Error("user not authorized for this action");
  }
  const deletedBudget = await repo.deleteBudget(budgetId);
  return deletedBudget;
}

async function getBudgets(userId: number) {
  const budgets = await repo.getBudgets(userId);
  return budgets;
}

export { deleteBudget, createBudget, updateBudget, getBudgets };
