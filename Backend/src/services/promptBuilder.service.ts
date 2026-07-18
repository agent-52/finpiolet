import { ConversationHistory } from "../types/ai";

export function buildPrompt(financialContext:any, userQuestion:string, conversationHistory:ConversationHistory):string{



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
CONVERSATION HISTORY
==================================================

${conversationHistory}


==================================================
CURRENT USER QUESTION
==================================================

${userQuestion}
`;
}

function buildFinancialContextString(financialContext:any){
  return (`
    

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


   `)
}

export function buildInsightPrompt(financialContext:any){
    return (
    `
   You are FinPilot AI.

Analyze the user's financial data and generate between 3 and 5 useful financial insights.

Rules:

- Use ONLY the supplied financial data.
- Never invent numbers.
- Every insight should be actionable.
- Do not repeat similar insights.
- Prefer meaningful observations over generic advice.
- Return ONLY valid JSON.
- Do not include markdown.
- Do not include explanations.

Each insight must follow this schema:

[
  {
    "type": "SPENDING_INSIGHT",
    "priority": "HIGH",
    "content": "Your shopping expenses increased by ₹3,400 compared to last month.",
    "metadata": {
      "category": "Shopping"
    }
  }
]

Allowed types:

MONTHLY_SUMMARY
SPENDING_INSIGHT
SAVING_RECOMMENDATION
BUDGET_WARNING
GOAL_PROGRESS
GOAL_ACHIEVED
GOAL_AT_RISK
CASHFLOW_ALERT
SUBSCRIPTION_ALERT
SPENDING_SPIKE
CATEGORY_TREND

Allowed priorities:

LOW
MEDIUM
HIGH

 `+buildFinancialContextString(financialContext))
}

export function buildMonthlySummaryPrompt(financialContext:any){
  return `
You are FinPilot AI, an intelligent personal finance assistant.

Your task is to generate a comprehensive monthly financial summary for the user based ONLY on the financial data provided below.

===========================
RULES
===========================

- Use ONLY the provided financial data.
- Never invent numbers or financial facts.
- If a piece of information is unavailable, simply omit it.
- Keep the summary professional, concise and personalized.
- Mention actual amounts wherever possible.
- Highlight positive achievements as well as potential concerns.
- Provide practical recommendations that the user can follow next month.
- Return ONLY valid JSON.
- Do NOT use markdown.
- Do NOT wrap the JSON inside code blocks.

===========================
RESPONSE FORMAT
===========================

{
    "priority":"LOW | MEDIUM | HIGH",
    "type": "MONTHLY_SUMMARY",
    "content":"A well written monthly financial summary.",
    "metadata":{
        "month":"Current Month"
    }
}

The "content" field should contain one continuous summary with the following sections naturally integrated:

1. Financial Overview
- Income
- Expenses
- Savings
- Savings Rate

2. Spending Analysis
- Highest spending category
- Major spending trends
- Any unusual spending patterns

3. Budget Performance
- Budgets close to being exhausted
- Budgets successfully maintained

4. Goal Progress
- Progress towards financial goals
- Goals achieved
- Goals falling behind

5. Recommendations
- Practical suggestions for improving finances next month
- Mention opportunities to save more if applicable

The summary should sound like a real financial advisor, not a robot.

`+buildFinancialContextString(financialContext);
}

export function buildBudgetWarningPrompt(financialContext:any){
  return (`You are FinPilot AI.

Your task is to analyze the user's current budgets and identify budgets that require attention.

Rules:

- Use ONLY the provided financial data.
- Never invent numbers.
- Return ONLY valid JSON.
- Do not use markdown.
- Ignore budgets that are comfortably within limits.
- Generate warnings only for budgets that deserve user attention.

Return JSON in the following format:

{
  "insights":[
    {
      "type":"BUDGET_WARNING",
      "priority":"HIGH",
      "content":"Your Shopping budget is already 91% utilized with several days remaining in the month. Consider reducing discretionary spending to avoid exceeding your budget.",
      "metadata":{
          "category":"Shopping"
      }
    }
  ]
}

Priority Guidelines:

LOW
- Budget usage below 75%

MEDIUM
- Budget usage between 75% and 90%

HIGH
- Budget usage above 90%

Generate between 0 and 5 warnings depending on the user's financial data.

Financial Data:

${buildFinancialContextString(financialContext)}`)
}