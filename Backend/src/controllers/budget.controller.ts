import { Request, Response } from "express";
import { Month } from "../generated/prisma/enums";
import {
  createBudget,
  deleteBudget,
  getBudgets,
  updateBudget,
} from "../services/budget.service";
import calculateBudgetUsage from "../engines/budget.engine";

const createBudgetController = async (req: Request, res: Response) => {
  const userId = Number(req.user?.userId);

  const body: {
    categoryId: number;
    amount: number;
    month: Month;
    year: number;
  } = req.body;
  const budget = await createBudget(
    userId,
    body.categoryId,
    body.amount,
    body.month,
    body.year,
  );
  return res.status(201).json({
    success: true,
    budget,
  });
};

const updateBudgetController = async (req: Request, res: Response) => {
  const userId = Number(req.user?.userId);
  const { id } = req.params;
  const budgetId = Number(id);
  if (isNaN(budgetId)) {
    return res.status(400).json({
      message: "not a valid budgetId it must be a number",
    });
  }
  const body: { amount: number } = req.body;

  const updatedBudget = await updateBudget(userId, budgetId, body.amount);

  return res.status(200).json({
    success: true,
    budget: updatedBudget,
  });
};

const deleteBudgetController = async (req: Request, res: Response) => {
  const userId = Number(req.user?.userId);
  const { id } = req.params;
  const budgetId = Number(id);
  if (isNaN(budgetId)) {
    return res.status(400).json({
      message: "not a valid budgetId it must be a number",
    });
  }

  const deletedBudget = await deleteBudget(userId, budgetId);
  return res.status(200).json({
    success: true,
    message: "budget deleted successfully",
    budget: deletedBudget,
  });
};

const getBudgetsController = async (req: Request, res: Response) => {
  const userId = Number(req.user?.userId);

  const budgets = await getBudgets(userId);
  return res.status(200).json({
    success: true,
    budgets,
  });
};

const getBudgetUsageController = async (req: Request, res: Response) => {
  const userId = Number(req.user?.userId);
  const { id } = req.params;
  const budgetId = Number(id);
  if (isNaN(budgetId)) {
    return res.status(400).json({
      message: "not a valid budgetId it must be a number",
    });
  }

  const budgetUsage = await calculateBudgetUsage(userId, budgetId);
  return res.status(200).json({
    success: true,
    budgetUsage,
  });
};

export {
  createBudgetController,
  updateBudgetController,
  deleteBudgetController,
  getBudgetsController,
  getBudgetUsageController,
};
