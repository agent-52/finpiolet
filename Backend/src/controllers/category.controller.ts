import { Request, Response } from "express";
import {
  createCategory,
  deleteCategory,
  getCategories,
  updateCategory,
} from "../services/category.service.";

const getCategoriesController = async (req: Request, res: Response) => {
  const userId = req.user?.userId;
  if (!userId) {
    return res.status(401).json({
      messsage: "user id does not exist",
    });
  }
  const categories = await getCategories(userId);
  return res.status(200).json({
    success: true,
    categories,
  });
};

const createCategoryController = async (req: Request, res: Response) => {
  const userId = req.user?.userId;
  if (!userId) {
    return res.status(401).json({
      messsage: "user id does not exist",
    });
  }
  const { name } = req.body;
  const category = await createCategory(name, userId);
  return res.status(201).json({
    success: true,
    category,
  });
};

const updateCategoryController = async (req: Request, res: Response) => {
  const userId = req.user?.userId;
  if (!userId) {
    return res.status(401).json({
      messsage: "user id does not exist",
    });
  }
  const { id } = req.params;
  const categoryId = Number(id);
  if (isNaN(categoryId)) {
    return res.status(404).json({
      message: "not a valid route category id invalid",
    });
  }
  const { newName } = req.body;

  const updatedCategory = await updateCategory(userId, categoryId, newName);

  return res.status(200).json({
    success: true,
    updatedCategory,
  });
};

const deleteCategoryController = async (req: Request, res: Response) => {
  const userId = req.user?.userId;
  if (!userId) {
    return res.status(401).json({
      messsage: "user id does not exist",
    });
  }

  const { id } = req.params;

  const categoryId = Number(id);
  if (isNaN(categoryId)) {
    return res.status(404).json({
      message: "not a valid route category id invalid",
    });
  }

  const deletedCategory = await deleteCategory(userId, categoryId);
  return res.status(200).json({
    success: true,
    deletedCategory,
  });
};

export {
  deleteCategoryController,
  updateCategoryController,
  createCategoryController,
  getCategoriesController,
};
