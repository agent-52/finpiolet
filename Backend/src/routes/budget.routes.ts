import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware";
import {
  createBudgetController,
  deleteBudgetController,
  getBudgetsController,
  updateBudgetController,
} from "../controllers/budget.controller";

export const budgetRouter = Router();

budgetRouter.get("/", authMiddleware, getBudgetsController);

budgetRouter.post("/", authMiddleware, createBudgetController);

budgetRouter.patch("/:id", authMiddleware, updateBudgetController);

budgetRouter.delete("/:id", authMiddleware, deleteBudgetController);
