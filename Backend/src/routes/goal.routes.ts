import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware";
import {
  createGoalController,
  deleteGoalController,
  getGoalPlanController,
  getGoalsController,
  updateGoalController,
} from "../controllers/goal.controller";

export const goalRouter = Router();

goalRouter.post("/", authMiddleware, createGoalController);
goalRouter.patch("/:id", authMiddleware, updateGoalController);
goalRouter.delete("/:id", authMiddleware, deleteGoalController);
goalRouter.get("/", authMiddleware, getGoalsController);
goalRouter.get("/:id/plan", authMiddleware, getGoalPlanController )
