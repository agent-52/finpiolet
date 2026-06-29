import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware";
import {
  createTransactionController,
  deleteTransactionController,
  getTransactionsController,
  updateTransactionController,
} from "../controllers/transaction.controller";

const transactionRouter = Router();

transactionRouter.post("/", authMiddleware, createTransactionController);

transactionRouter.patch("/:id", authMiddleware, updateTransactionController);

transactionRouter.delete("/:id", authMiddleware, deleteTransactionController);

transactionRouter.get("/", authMiddleware, getTransactionsController);
