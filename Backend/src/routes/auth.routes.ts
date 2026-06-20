import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware";
import {
  getCurrentUser,
  logoutController,
  refreshController,
  signinController,
  signupController,
} from "../controllers/auth.controller";

export const authRouter = Router();

authRouter.get("/me", authMiddleware, getCurrentUser);

authRouter.post("/signup", signupController);

authRouter.post("/signin", signinController);

authRouter.post("/refresh", refreshController);

authRouter.post("/logout", logoutController);
