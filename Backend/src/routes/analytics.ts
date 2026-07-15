import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware";
import { getAnalyticsController } from "../controllers/analytics.controller";
import { asyncHandler } from "../utils/asyncHandler";

export const analyticsRouter = Router()

analyticsRouter.get("/", authMiddleware,asyncHandler(getAnalyticsController) )