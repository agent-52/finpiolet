import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware";
import {
  createTransactionController,
  deleteTransactionController,
  getTransactionsController,
  updateTransactionController,
} from "../controllers/transaction.controller";
import { asyncHandler } from "../utils/asyncHandler";

const transactionRouter = Router();

transactionRouter.post("/", authMiddleware, asyncHandler(createTransactionController));

transactionRouter.patch("/:id", authMiddleware, asyncHandler(updateTransactionController));

transactionRouter.delete("/:id", authMiddleware, asyncHandler(deleteTransactionController));

transactionRouter.get("/", authMiddleware, asyncHandler(getTransactionsController));
