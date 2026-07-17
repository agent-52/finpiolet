import { getAnalytics } from "../engines/analytics.engine";
import { getDashboard } from "../engines/dashboard.engine";
import { getBudgets } from "./budget.service";
import { getGoals } from "./goal.service";

async function buildFinancialContext(userId:number) {
    
    const [dashboard, analytics, goals, budgets] = await Promise.all([
        getDashboard(userId),
        getAnalytics(userId),
        getGoals(userId),
        getBudgets(userId)
    ])

    const context = {
        dashboard,
        analytics,
        goals,
        budgets
    }

    return context
}

export {buildFinancialContext}