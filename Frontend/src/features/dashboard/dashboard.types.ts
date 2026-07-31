export interface DashboardResponse {
  overview: {
    totalIncome: number;
    totalExpenses: number;
    totalSavings: number;
    savingsRate: string | number;
    topSpendingCategory: {
      categoryName:
        | {
            type: CategoryType;
            userId: number | null;
            id: number;
            name: string;
            createdAt: Date;
          }
        | null
        | undefined;
      amount: number | null | undefined;
    };
  };
  recentTransactions: Transaction[];
  budgetOverview: BudgetOverview[];
  goalOverview: goalOverview[];
}

export const CategoryType = {
  INCOME: "INCOME",
  EXPENSE: "EXPENSE",
} as const;

export type CategoryType = (typeof CategoryType)[keyof typeof CategoryType];

export const TransactionType = {
  INCOME: "INCOME",
  EXPENSE: "EXPENSE",
} as const;

export type TransactionType =
  (typeof TransactionType)[keyof typeof TransactionType];

export type BudgetStatus = "SAFE" | "WARNING" | "EXCEEDED";

export type Transaction = {
  type: TransactionType;
  userId: number;
  amount: number;
  id: number;
  categoryId: number;
  createdAt: Date;
  description: string | null;
  transactionDate: Date;
  updatedAt: Date | null;
};

export type BudgetOverview = {
  budget: number;
  spent: number;
  remaining: number;
  usagePercentage: number;
  status: BudgetStatus;
};

export enum GoalStatus {
  COMPLETED = "COMPLETED",
  IN_PROGRESS = "IN_PROGRESS",
  ON_TRACK = "ON_TRACK",
  AT_RISK = "AT_RISK",
}

export type goalOverview = {
  goal: {
    userId: number;
    id: number;
    createdAt: Date;
    updatedAt: Date;
    title: string;
    targetAmount: number;
    currentSavedAmount: number;
    targetDate: Date;
  };
  remainingAmount: number;
  remainingMonths: number;
  requiredMonthlySavings: number;
  currentProgress: number;
  goalStatus: GoalStatus.COMPLETED | GoalStatus.IN_PROGRESS;
};
