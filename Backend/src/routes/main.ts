import { Router } from "express";
import { authRouter } from "./auth.routes";

export const mainRouter = Router();

mainRouter.use("/auth", authRouter);
