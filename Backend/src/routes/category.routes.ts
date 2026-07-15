import { Router } from "express";
import {
  createCategoryController,
  deleteCategoryController,
  getCategoriesController,
  updateCategoryController,
} from "../controllers/category.controller";
import { authMiddleware } from "../middleware/auth.middleware";
import { asyncHandler } from "../utils/asyncHandler";

const categoryRouter = Router();

categoryRouter.get("/", authMiddleware, asyncHandler(getCategoriesController) );

categoryRouter.post("/", authMiddleware, asyncHandler(createCategoryController));

categoryRouter.patch("/:id", authMiddleware, asyncHandler(updateCategoryController));

categoryRouter.delete("/:id", authMiddleware, asyncHandler(deleteCategoryController));
