import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware";
import {
  createTransactionController,
  deleteTransactionController,
  getTransactionsController,
  updateTransactionController,
  importTransactionsController,
} from "../controllers/transaction.controller";
import { asyncHandler } from "../utils/asyncHandler";
import upload from "../middleware/upload.middleware";

const transactionRouter = Router();

transactionRouter.post("/", authMiddleware, asyncHandler(createTransactionController));

transactionRouter.patch("/:id", authMiddleware, asyncHandler(updateTransactionController));

transactionRouter.delete("/:id", authMiddleware, asyncHandler(deleteTransactionController));

transactionRouter.get("/", authMiddleware, asyncHandler(getTransactionsController));

transactionRouter.post("/import", authMiddleware, upload.single("file"), asyncHandler(importTransactionsController))
