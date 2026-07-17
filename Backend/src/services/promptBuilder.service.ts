export function buildPrompt(financialContext:any, userQuestion:string):string{



 return `
You are FinPilot AI, an intelligent personal finance assistant.

IMPORTANT RULES:
- Use ONLY the financial information provided below.
- Never invent financial values.
- If some required information is unavailable, clearly say so.
- Give practical and actionable financial advice.
- Keep responses concise unless the user requests a detailed explanation.
- Whenever possible, refer to actual numbers from the user's financial data.

==================================================
USER FINANCIAL CONTEXT
==================================================

## DASHBOARD OVERVIEW

Total Income: ₹${financialContext.dashboard.overview.totalIncome}
Total Expenses: ₹${financialContext.dashboard.overview.totalExpenses}
Total Savings: ₹${financialContext.dashboard.overview.totalSavings}
Savings Rate: ${financialContext.dashboard.overview.savingsRate}%

Top Spending Category:
- Category: ${financialContext.dashboard.overview.topSpendingCategory.categoryName?.name ?? "N/A"}
- Amount: ₹${financialContext.dashboard.overview.topSpendingCategory.amount ?? 0}

==================================================
RECENT TRANSACTIONS
==================================================

${
financialContext.dashboard.recentTransactions.length > 0
? financialContext.dashboard.recentTransactions.map((transaction:any) => `
----------------------------------------
Date: ${transaction.transactionDate.toLocaleDateString()}
Type: ${transaction.type}
Amount: ₹${transaction.amount}
Category ID: ${transaction.categoryId}
Description: ${transaction.description ?? "No Description"}
`).join("")
: "No recent transactions available."
}

==================================================
BUDGET OVERVIEW
==================================================

${
financialContext.dashboard.budgetOverview.length > 0
? financialContext.dashboard.budgetOverview.map((budget:any) => `
----------------------------------------
Category: ${budget.categoryName}
Budget: ₹${budget.budget}
Spent: ₹${budget.spent}
Remaining: ₹${budget.remaining}
Usage: ${budget.usagePercentage}%
Status: ${budget.status}
`).join("")
: "No budget overview available."
}

==================================================
GOAL OVERVIEW
==================================================

${
financialContext.dashboard.goalOverview.length > 0
? financialContext.dashboard.goalOverview.map((goal:any) => `
----------------------------------------
Goal: ${goal.title}
Target Amount: ₹${goal.targetAmount}
Saved: ₹${goal.currentSavedAmount}
Remaining: ₹${goal.remainingAmount}
Progress: ${goal.progressPercentage}%
Required Monthly Saving: ₹${goal.requiredMonthlySavings}
Status: ${goal.status}
Target Date: ${new Date(goal.targetDate).toLocaleDateString()}
`).join("")
: "No financial goals available."
}

==================================================
ANALYTICS
==================================================

Current Month Summary

Income: ₹${financialContext.analytics.analytics.currentMonthSummary.income}
Expense: ₹${financialContext.analytics.analytics.currentMonthSummary.expense}
Savings: ₹${financialContext.analytics.analytics.currentMonthSummary.savings}
Top Expense Category: ${financialContext.analytics.analytics.currentMonthSummary.topCategory ?? "N/A"}

----------------------------------------

Category Breakdown

${
financialContext.analytics.analytics.categoryBreakdown.length > 0
? financialContext.analytics.analytics.categoryBreakdown.map((category:any) => `
Category: ${category.category ?? "Unknown"}
Amount: ₹${category.amount ?? 0}
Contribution: ${category.percentage}%
`).join("")
: "No category breakdown available."
}

----------------------------------------

Monthly Spending Trend

${JSON.stringify(financialContext.analytics.analytics.monthlySpendingTrend, null, 2)}

----------------------------------------

Income vs Expense Trend

${JSON.stringify(financialContext.analytics.analytics.incomeVsExpenseTrend, null, 2)}

----------------------------------------

Monthly Savings Rate Trend

${JSON.stringify(financialContext.analytics.analytics.monthlySavingsRate, null, 2)}

==================================================
ALL GOALS
==================================================

${
financialContext.goals.length > 0
? financialContext.goals.map((goal:any) => `
----------------------------------------
Title: ${goal.title}
Target Amount: ₹${goal.targetAmount}
Current Saved: ₹${goal.currentSavedAmount}
Target Date: ${goal.targetDate.toLocaleDateString()}
Created: ${goal.createdAt.toLocaleDateString()}
`).join("")
: "No goals available."
}

==================================================
ALL BUDGETS
==================================================

${
financialContext.budgets.length > 0
? financialContext.budgets.map((budget:any) => `
----------------------------------------
Category: ${budget.category.name}
Budget Amount: ₹${budget.amount}
Month: ${budget.month}
Year: ${budget.year}
`).join("")
: "No budgets available."
}

==================================================
USER QUESTION
==================================================

${userQuestion}
`;
}