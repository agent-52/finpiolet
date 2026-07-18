import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware";
import { asyncHandler } from "../utils/asyncHandler";
import { aiController, aiInsightController } from "../controllers/ai.controllers";


export const aiRouter = Router()

aiRouter.post("/chat", authMiddleware, asyncHandler(aiController))

aiRouter.post("/insights", authMiddleware, asyncHandler(aiInsightController))