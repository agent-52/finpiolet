import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware";
import { asyncHandler } from "../utils/asyncHandler";
import { getDashboardController } from "../controllers/dashboard.controller";

export const dashboardRouter = Router()

dashboardRouter.get("/", authMiddleware, asyncHandler(getDashboardController))