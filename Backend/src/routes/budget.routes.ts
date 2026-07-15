import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware";
import {
  createBudgetController,
  deleteBudgetController,
  getBudgetsController,
  getBudgetUsageController,
  updateBudgetController,
} from "../controllers/budget.controller";
import { asyncHandler } from "../utils/asyncHandler";

export const budgetRouter = Router();

budgetRouter.get("/", authMiddleware, asyncHandler(getBudgetsController) );

budgetRouter.post("/", authMiddleware, asyncHandler(createBudgetController));

budgetRouter.patch("/:id", authMiddleware, asyncHandler(updateBudgetController));

budgetRouter.delete("/:id", authMiddleware, asyncHandler(deleteBudgetController));

budgetRouter.get("/:id/usage", authMiddleware, asyncHandler(getBudgetUsageController));
