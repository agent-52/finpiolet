import redisClient from "../config/redis";
import goalRepository from "../repositories/goal.repository";
import { goalUpdateType } from "../types/goal";
import { ApiError } from "../utils/ApiError";

async function createGoal(
  userId: number,
  title: string,
  targetAmount: number,
  currentSavedAmount: number,
  targetDate: Date,
) {
  //checks
  const goalTitle = title.trim();
  if (goalTitle.length == 0 || goalTitle.length > 50) {
    throw new ApiError(400, 
      "goal title must be of atleast one character and should not be more than 50 characters",
    );
  }
  if (targetAmount <= 0) {
    throw new ApiError(400, "target amount must be grater than zero");
  }
  if (currentSavedAmount < 0 || currentSavedAmount > targetAmount) {
    throw new ApiError(400, 
      "saved amount should not be negative or should not exceed target amount",
    );
  }
  const today = new Date();
  if (targetDate < today) {
    throw new ApiError(400, "targetDate cant be less than todays date");
  }
  const goal = await goalRepository.createGoal(
    userId,
    goalTitle,
    targetAmount,
    currentSavedAmount,
    targetDate,
  );

  return goal;
}

async function updateGoal(
  userId: number,
  goalId: number,
  goalUpdates: goalUpdateType,
) {
  //checks
  const goal = await goalRepository.findGoalById(goalId);
  if (!goal) {
    throw new ApiError(404, "no goal exist with this goal id");
  }
  if (goal.userId !== userId) {
    throw new ApiError(403, "user is Unauthorized for this action");
  }

  //goal update field checks

  if (goalUpdates.title) {
    const goalTitle = goalUpdates.title.trim();
    if (goalTitle.length == 0 || goalTitle.length > 50) {
      throw new ApiError(400, 
        "goal title must be of atleast one character and should not be more than 50 characters",
      );
    }
  }
  if (goalUpdates.targetAmount && goalUpdates.targetAmount <= 0) {
    throw new ApiError(400,"target amount must be grater than zero");
  }
  if (
    goalUpdates.currentSavedAmount &&
    (goalUpdates.currentSavedAmount < 0 ||
      goalUpdates.currentSavedAmount > goal.targetAmount)
  ) {
    throw new ApiError(400, 
      "saved amount should not be negative or should not exceed target amount",
    );
  }
  const today = new Date();
  if (goalUpdates.targetDate && goalUpdates.targetDate < today) {
    throw new ApiError(400, "targetDate cant be less than todays date");
  }

  const updatedGoal = await goalRepository.updateGoal(goalId, goalUpdates);
  return updatedGoal;
}

async function deleteGoal(userId: number, goalId: number) {
  const goal = await goalRepository.findGoalById(goalId);
  if (!goal) {
    throw new ApiError(404, "no goal exist with this goal id");
  }
  if (goal.userId !== userId) {
    throw new ApiError(403, "user is Unauthorized for this action");
  }

  const deletedGoal = await goalRepository.deleteGoal(goalId);
  return deletedGoal;
}

async function getGoals(userId: number) {
  const key = `goals:user:${userId}`
    try {
        const value = await redisClient.get(key)

        if(value){
            try {
                const result = JSON.parse(value)
                return result
            } catch (err) {
                console.error("json parse of redis value failed for key: "+key)
            }
        }
    } catch (error) {
        console.error("redis GET failed with error "+error)
    }
  const goals = await goalRepository.getGoals(userId);

  try {
        await redisClient.set(key, JSON.stringify(goals), {EX: 300})
    } catch (error) {
        console.error("redis SET failed with error: ", error)
    }
  return goals;
}

export { createGoal, updateGoal, deleteGoal, getGoals };
