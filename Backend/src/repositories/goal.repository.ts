import { prisma } from "../config/prisma";
import { goalUpdateType } from "../types/goal";

async function createGoal(
  userId: number,
  title: string,
  targetAmount: number,
  currentSavedAmount: number,
  targetDate: Date,
) {
  const goal = await prisma.goal.create({
    data: {
      userId,
      title,
      targetAmount,
      currentSavedAmount,
      targetDate,
    },
  });
  return goal;
}

async function updateGoal(goalId: number, goalUpdates: goalUpdateType) {
  const updatedGoal = await prisma.goal.update({
    where: {
      id: goalId,
    },
    data: goalUpdates,
  });

  return updatedGoal;
}

async function deleteGoal(goalId: number) {
  const deletedGoal = await prisma.goal.delete({
    where: {
      id: goalId,
    },
  });

  return deletedGoal;
}

async function findGoalById(goalId: number) {
  const goal = await prisma.goal.findUnique({
    where: {
      id: goalId,
    },
  });

  return goal;
}

async function getGoals(userId: number) {
  const goals = await prisma.goal.findMany({
    where: {
      userId,
    },
    orderBy:{
      createdAt:"desc"
    }
  });

  return goals;
}

export default {
  createGoal,
  updateGoal,
  deleteGoal,
  findGoalById,
  getGoals,
};
