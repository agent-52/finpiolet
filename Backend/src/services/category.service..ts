import {
  findCategoryById,
  repoCreateCategory,
  repoDeleteCategory,
  repoFindCategoryByName,
  repoGetCategories,
  repoUpdateCategory,
} from "../repositories/category.repository";
import { ApiError } from "../utils/ApiError";

async function getCategories(userId: number) {
  const categories = await repoGetCategories(userId);

  return categories;
}

async function createCategory(name: string, userId: number) {
  const data = name.trim();
  if (!data.length || data.length > 50) {
    throw new ApiError(
      400,
      "category name should be of length greater than 0 and lesser than 50 characters"
    );
  }

  const categoryALreadyExists = await repoFindCategoryByName(userId, data);

  if (categoryALreadyExists) {
    throw new ApiError(409, "category of same name already exist for the user");
  }

  const category = repoCreateCategory(name, userId);
  return category;
}

async function updateCategory(
  userId: number,
  categoryId: number,
  newName: string,
) {
  const category = await findCategoryById(categoryId);
  if (!category) {
    throw new ApiError(404, "no category exists with this category id");
  }
  if (category.userId == null) {
    throw new ApiError(403, "System categories can not be updated ");
  }
  if (category.userId !== userId) {
    throw new ApiError(403, "user not authorized for this action");
  }

  if (category.userId === userId) {
    const updatedCategory = await repoUpdateCategory(categoryId, newName);

    return updatedCategory;
  }
}

async function deleteCategory(userId: number, categoryId: number) {
  const category = await findCategoryById(categoryId);
  if (!category) {
    throw new ApiError(404, "no category exists with this category id");
  }
  if (category.userId == null) {
    throw new ApiError(403, "System categories can not be deleted ");
  }
  if (category.userId !== userId) {
    throw new ApiError(403, "user not authorized for this action");
  }

  //is this category used by transsactions check

  const deletedCategory = await repoDeleteCategory(categoryId);
  return deletedCategory;
}

export { deleteCategory, updateCategory, createCategory, getCategories };
