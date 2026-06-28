import { Router } from "express";
import {
  createCategoryController,
  deleteCategoryController,
  getCategoriesController,
  updateCategoryController,
} from "../controllers/category.controller";
import { authMiddleware } from "../middleware/auth.middleware";

const categoryRouter = Router();

categoryRouter.get("/", authMiddleware, getCategoriesController);

categoryRouter.post("/", authMiddleware, createCategoryController);

categoryRouter.patch("/:id", authMiddleware, updateCategoryController);

categoryRouter.delete("/:id", authMiddleware, deleteCategoryController);
