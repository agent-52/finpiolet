import redisClient from "../config/redis"
import analyticsRepository from "../repositories/analytics.repository"
import { findCategoryById } from "../repositories/category.repository"
import dashboardRepository from "../repositories/dashboard.repository"

export async function getAnalytics(userId:number) {
    
    const key = `analytics:user:${userId}`
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
        categoryWiseSpend.map(async (category) => {
            const categoryName = await findCategoryById(category.categoryId).then((c) => c?.name)
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
    const finalResult = {
        "success": true,
        "analytics": {
            monthlySpendingTrend:monthlyExpenseTrend,
            incomeVsExpenseTrend:monthlyIncomeExpenseTrend,
            categoryBreakdown,
            monthlySavingsRate,
            currentMonthSummary
        }
    }

    try {
        await redisClient.set(key, JSON.stringify(finalResult), {EX: 300})
    } catch (error) {
        console.error("redis SET failed with error: ", error)
    }
    return finalResult
}