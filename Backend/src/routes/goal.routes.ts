import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware";
import {
  createGoalController,
  deleteGoalController,
  getGoalPlanController,
  getGoalsController,
  updateGoalController,
} from "../controllers/goal.controller";
import { asyncHandler } from "../utils/asyncHandler";
export const goalRouter = Router();

goalRouter.post("/", authMiddleware, asyncHandler(createGoalController));
goalRouter.patch("/:id", authMiddleware, asyncHandler(updateGoalController));
goalRouter.delete("/:id", authMiddleware, asyncHandler(deleteGoalController));
goalRouter.get("/", authMiddleware, asyncHandler(getGoalsController));
goalRouter.get("/:id/plan", authMiddleware, asyncHandler(getGoalPlanController ))
