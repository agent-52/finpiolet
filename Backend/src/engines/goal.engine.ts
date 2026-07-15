import goalRepository from "../repositories/goal.repository";
import { ApiError } from "../utils/ApiError";

export enum GoalStatus {
  COMPLETED = "COMPLETED",
  IN_PROGRESS = "IN_PROGRESS",
  ON_TRACK = "ON_TRACK",
  AT_RISK = "AT_RISK",
}
async function calculateGoalPlan(userId: number, goalId: number) {
  const goal = await goalRepository.findGoalById(goalId);
  if (!goal) {
    throw new ApiError(404, "no goal exist with this goal id");
  }
  if (goal.userId != userId) {
    throw new ApiError(403, "user unauthorized for this action");
  }
  const remainingAmount = goal.targetAmount - goal.currentSavedAmount;
  const today = new Date()
  const remainingMonths = ((goal.targetDate.getFullYear() - today.getFullYear())*12) +(goal.targetDate.getMonth() - today.getMonth());
  if (remainingMonths < 0) {
    //goal not met logic
  }
  const requiredMonthlySavings = (remainingMonths)? (remainingAmount / remainingMonths): remainingAmount;
  const currentProgress = +(
    (goal.currentSavedAmount / goal.targetAmount) *
    100
  ).toFixed(2);

  let goalStatus: GoalStatus;

  if (currentProgress >= 100) {
    goalStatus = GoalStatus.COMPLETED;
  } else {
    goalStatus = GoalStatus.IN_PROGRESS;
  }

  return { 
    goal,
    remainingAmount,
    remainingMonths,
    requiredMonthlySavings,
    currentProgress,
    goalStatus,
  };
}

export { calculateGoalPlan };
