import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware";
import { asyncHandler } from "../utils/asyncHandler";
import { savingPlannerController } from "../controllers/savings.controller";

export const savingPlanRouter = Router()

savingPlanRouter.post("/", authMiddleware, asyncHandler(savingPlannerController))