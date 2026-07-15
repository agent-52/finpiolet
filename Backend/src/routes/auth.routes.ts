import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware";
import {
  getCurrentUser,
  logoutController,
  refreshController,
  signinController,
  signupController,
} from "../controllers/auth.controller";
import { asyncHandler } from "../utils/asyncHandler";

export const authRouter = Router();

authRouter.get("/me", authMiddleware, asyncHandler(getCurrentUser) );

authRouter.post("/signup", asyncHandler(signupController));

authRouter.post("/signin", asyncHandler(signinController));

authRouter.post("/refresh", asyncHandler(refreshController));

authRouter.post("/logout", asyncHandler(logoutController));
