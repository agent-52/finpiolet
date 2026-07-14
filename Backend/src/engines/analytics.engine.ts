import analyticsRepository from "../repositories/analytics.repository"
import { findCategoryById } from "../repositories/category.repository"
import dashboardRepository from "../repositories/dashboard.repository"

export async function getAnalytics(userId:number) {
    
    const [categoryWiseSpend, currentMonthExpense, currentMonthIncome, monthlyExpenseTrend, monthlyIncomeExpenseTrend, topExpenseCategoryOfCurrentMonth, totalExpense ] = await Promise.all([
        analyticsRepository.getCategoryBreakdown(userId),
        analyticsRepository.getCurrentMonthExpense(userId),
        analyticsRepository.getCurrentMonthIncome(userId),
        analyticsRepository.getMonthlyExpenseTrend(userId),
        analyticsRepository.getMonthlyIncomeExpenseTrend(userId),
        analyticsRepository.getTopExpenseCategoryOfCurrentMonth(userId),
        dashboardRepository.getTotalExpense(userId)
    ])

    
    const categoryBreakdown = await Promise.all(
        categoryWiseSpend.map((category) => {
            const categoryName = findCategoryById(category.categoryId).then((c) => c?.name)
            const percentage = (category.amount && totalExpense)?((category.amount/totalExpense)*100).toFixed(2):0

            return {
                "category":categoryName,
                "amount":category.amount,
                percentage
            }

        })
    )

    const monthlySavingsRate = monthlyIncomeExpenseTrend.map((obj:any) => {
        const savingsRate = obj.income?(((obj.income - obj.expense)/obj.income)*100).toFixed(2):0
        return{
            "month":obj.month,
            "year":obj.year,
            savingsRate
        }
    })

    let topCategoryName
    if(topExpenseCategoryOfCurrentMonth){
        const topCategory = await findCategoryById(topExpenseCategoryOfCurrentMonth)
        topCategoryName = topCategory?.name

    }

    const currentMonthSummary = {
        "income":currentMonthIncome,
        "expense":currentMonthExpense,
        "savings": currentMonthIncome - currentMonthExpense,
        "topCategory": topCategoryName
    }

    return {
        "success": true,
        "analytics": {
            monthlySpendingTrend:monthlyExpenseTrend,
            incomeVsExpenseTrend:monthlyIncomeExpenseTrend,
            categoryBreakdown,
            monthlySavingsRate,
            currentMonthSummary
        }
    }
}