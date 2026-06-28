import { prisma } from "../config/prisma";

async function repoGetCategories(userId?: number) {
  const categrories = await prisma.category.findMany({
    where: {
      OR: [{ userId: null }, { userId: userId ? userId : null }],
    },
  });
  return categrories;
}

async function repoCreateCategory(name: string, userId?: number) {
  const category = await prisma.category.create({
    data: {
      userId: userId ? userId : null,
      name,
    },
  });

  return category;
}

async function repoUpdateCategory(id: number, newName: string) {
  const updatedCategory = await prisma.category.update({
    where: {
      id,
    },
    data: {
      name: newName,
    },
  });

  return updatedCategory;
}

async function repoDeleteCategory(id: number) {
  const deletedCategory = await prisma.category.delete({
    where: {
      id,
    },
  });

  return deletedCategory;
}

async function findCategoryById(id: number) {
  const category = await prisma.category.findUnique({
    where: {
      id,
    },
  });

  return category;
}

async function repoFindCategoryByName(userId: number, name: string) {
  const category = await prisma.category.findFirst({
    where: {
      userId,
      name,
    },
  });

  return category;
}

export {
  findCategoryById,
  repoDeleteCategory,
  repoUpdateCategory,
  repoCreateCategory,
  repoGetCategories,
  repoFindCategoryByName,
};
