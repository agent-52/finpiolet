import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware";
import { getAnalyticsController } from "../controllers/analytics.controller";

export const analyticsRouter = Router()

analyticsRouter.get("/", authMiddleware, getAnalyticsController )