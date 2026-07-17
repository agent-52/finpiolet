import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware";
import { asyncHandler } from "../utils/asyncHandler";
import { aiController } from "../controllers/ai.controller";


export const aiRouter = Router()

aiRouter.post("/chat", authMiddleware, asyncHandler(aiController))