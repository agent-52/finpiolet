import { Request, Response } from "express";
import {
  createGoal,
  deleteGoal,
  getGoals,
  updateGoal,
} from "../services/goal.service";
import { goalUpdateType } from "../repositories/goal.repository";
import { calculateGoalPlan } from "../services/goal.engine";

const createGoalController = async (req: Request, res: Response) => {
  const userId = Number(req.user?.userId);

  const body: {
    title: string;
    targetAmount: number;
    currentSavedAmount: number;
    targetDate: string;
  } = req.body;

  const targetDate = new Date(body.targetDate);
  //if frontend sends an invalid or empty date uske liye check
  if (isNaN(targetDate.getTime())) {
    return res.status(400).json({ error: "Invalid date format provided" });
  }

  const goal = await createGoal(
    userId,
    body.title,
    body.targetAmount,
    body.currentSavedAmount,
    targetDate,
  );

  return res.status(201).json({
    success: true,
    goal,
  });
};

const updateGoalController = async (req: Request, res: Response) => {
  const userId = Number(req.user?.userId);
  const { id } = req.params;
  const goalId = Number(id);
  if (isNaN(goalId)) {
    return res.status(400).json({
      message: "invalid goal id , it must be a number",
    });
  }
  const body: goalUpdateType = req.body;
  if (body.targetDate) {
    body.targetDate = new Date(body.targetDate);
    if (isNaN(body.targetDate.getTime())) {
      return res.status(400).json({ error: "Invalid date format provided" });
    }
  }

  const updatedGoal = await updateGoal(userId, goalId, body);

  return res.status(200).json({
    success: true,
    goal: updatedGoal,
  });
};

const deleteGoalController = async (req: Request, res: Response) => {
  const userId = Number(req.user?.userId);
  const { id } = req.params;
  const goalId = Number(id);
  if (isNaN(goalId)) {
    return res.status(400).json({
      message: "invalid goal id , it must be a number",
    });
  }
  const deletedGoal = await deleteGoal(userId, goalId);

  return res.status(200).json({
    success: true,
    goal: deletedGoal,
  });
};

const getGoalsController = async (req: Request, res: Response) => {
  const userId = Number(req.user?.userId);

  const goals = await getGoals(userId);
  return res.status(200).json({
    success: true,
    goals,
  });
};

const getGoalPlanController = async (req: Request, res: Response) => {
  const userId = Number(req.user?.userId);
  const { id } = req.params;
  const goalId = Number(id)
  if(isNaN(goalId)){
    return res.status(400).json({
      message: "invalid goal id , it must be a number",
    })
  }
  const goalPlan = await calculateGoalPlan(userId, goalId);
  return res.status(200).json({
    success:true,
    goalPlan:{
      goal:goalPlan.goal.title,
      targetAmount:goalPlan.goal.targetAmount,
      savedAmount:goalPlan.goal.currentSavedAmount,
      remainingAmount:goalPlan.remainingAmount,
      progressPercentage:goalPlan.currentProgress,
      monthsRemaining:goalPlan.remainingMonths,
      requiredMonthlySaving:goalPlan.requiredMonthlySavings,
      status:goalPlan.goalStatus
    }

  })
};
export {
  createGoalController,
  updateGoalController,
  deleteGoalController,
  getGoalsController,
  getGoalPlanController
};
