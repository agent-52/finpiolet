import dashboardRepository from "../repositories/dashboard.repository"
import budgetRepository from "../repositories/budget.repository"
import calculateBudgetUsage from "./budget.engine"
import goalRepository from "../repositories/goal.repository"
import { calculateGoalPlan } from "./goal.engine"


async function getDashboard(userId:number) {

    const [totalExpenses, totalIncome, topSpendingCategory, recentTransactions] = await Promise.all([
        dashboardRepository.getTotalIncome(userId),
  dashboardRepository.getTotalExpense(userId),
  dashboardRepository.getTopSpendingCategory(userId),
  dashboardRepository.getRecentTransactions(userId),
    ])

    
    const totalSavings = totalIncome - totalExpenses

    const savingsRate = totalIncome?((totalSavings/totalIncome)*100).toFixed(2):0

   

    const budgets = await budgetRepository.getBudgets(userId)
    let budgetOverview = await Promise.all(budgets.slice(0,3).map((budget) => calculateBudgetUsage(userId, budget.id)))

    const goals = await goalRepository.getGoals(userId)
    let goalOverview = await Promise.all(
        goals.slice(0,3).map((goal) => calculateGoalPlan(userId, goal.id))
    )

    
    return{
  "overview": {
    totalIncome,
    totalExpenses,
    totalSavings,
    savingsRate,
    topSpendingCategory
  },
  recentTransactions,
  budgetOverview,
  goalOverview
}
}

export {getDashboard}