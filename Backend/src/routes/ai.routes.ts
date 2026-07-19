import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware";
import { asyncHandler } from "../utils/asyncHandler";
import { aiBudgetWarningController, aiController, aiGoalProgressController, aiInsightController, aiMonthlySummaryController, aiSavingPlanExplainerController } from "../controllers/ai.controllers";


export const aiRouter = Router()

aiRouter.post("/chat", authMiddleware, asyncHandler(aiController))

aiRouter.post("/insights", authMiddleware, asyncHandler(aiInsightController))

aiRouter.post("/monthly-summary", authMiddleware, asyncHandler(aiMonthlySummaryController))

aiRouter.post("/budget-warnings", authMiddleware, asyncHandler(aiBudgetWarningController))

aiRouter.post("/goal-progress", authMiddleware, asyncHandler(aiGoalProgressController))

aiRouter.post("/saving-planner-explanation", authMiddleware, asyncHandler(aiSavingPlanExplainerController))