
export type CurrentMonthSummary = {   
 income: number;
 expense: number;
 savings: number;
 topCategory: string | undefined;
}
export type CategoryStat = {
   
 category: string | undefined;
 amount: number | null;
 percentage: string | number;
}

export type MonthlySpendingTrend = {
    year:number;
    month:number;
    monthlyExpense:number
}

export type IncomeVsExpenseTrend = {
    year:number;
    month:number
    income:number;
    expense:number;
}
export type SavingRate = {
    "month":number,
            "year":number,
            savingsRate:number
}

export interface AnalyticsResponse {
    "success":true;
    analytics:{
        monthlySpendingTrend:MonthlySpendingTrend[],
            incomeVsExpenseTrend:IncomeVsExpenseTrend[],
            categoryBreakdown:CategoryStat[],
            monthlySavingsRate:SavingRate[],
            currentMonthSummary:CurrentMonthSummary
    }
}

