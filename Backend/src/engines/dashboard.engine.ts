import dashboardRepository from "../repositories/dashboard.repository";
import budgetRepository from "../repositories/budget.repository";
import calculateBudgetUsage from "./budget.engine";
import goalRepository from "../repositories/goal.repository";
import { calculateGoalPlan } from "./goal.engine";
import redisClient from "../config/redis";

async function getDashboard(userId: number) {
  //hit cache
  const key = `dashboard:user:${userId}`;
  try {
    const value = await redisClient.get(key);
    //if cache has data
    if (value) {
      //value will be in form of a string we have to parse that
      return JSON.parse(value);
    }
  } catch (error) {
    console.error("Redis GET failed: ", error);
  }
  //if chache does not have data

  const [totalExpenses, totalIncome, topSpendingCategory, recentTransactions] =
    await Promise.all([
      dashboardRepository.getTotalIncome(userId),
      dashboardRepository.getTotalExpense(userId),
      dashboardRepository.getTopSpendingCategory(userId),
      dashboardRepository.getRecentTransactions(userId),
    ]);

  const totalSavings = totalIncome - totalExpenses;

  const savingsRate = totalIncome
    ? ((totalSavings / totalIncome) * 100).toFixed(2)
    : 0;

  const [budgets, goals] = await Promise.all([
    await budgetRepository.getBudgets(userId),
    await goalRepository.getGoals(userId),
  ]);

  const [budgetOverview, goalOverview] = await Promise.all([
    await Promise.all(
      budgets
        .slice(0, 3)
        .map((budget) => calculateBudgetUsage(userId, budget.id)),
    ),
    await Promise.all(
      goals.slice(0, 3).map((goal) => calculateGoalPlan(userId, goal.id)),
    ),
  ]);

  const dashboardResult = {
    overview: {
      totalIncome,
      totalExpenses,
      totalSavings,
      savingsRate,
      topSpendingCategory,
    },
    recentTransactions,
    budgetOverview,
    goalOverview,
  };

  //set in cache with ttl
  try {
    await redisClient.set(key, JSON.stringify(dashboardResult), { EX: 300 });
  } catch (error) {
    console.error("redis SET failed");
  }

  //return
  return dashboardResult;
}

export { getDashboard };
