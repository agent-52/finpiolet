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
  recentTransactions: RecentTransaction[];
  budgetOverview: BudgetOverview[];
  goalOverview: goalOverview[];
}


export interface RecentTransaction{
  id: number;
 userId: number;
 categoryId: number;
 type: TransactionType;
 amount: number;
 title: string;
 description: string | null;
 paymentMethod: PaymentMethod;
 transactionDate: Date;
 createdAt: Date;
 updatedAt: Date | null;
    category: {
        name: string;
    };
}
export interface OverviewData{
  totalIncome:number;
  totalExpenses:number;
  totalSavings:number;
  savingsRate:string|number;
  topSpendingCategory:{
    categoryName: {
        type: CategoryType;
        userId: number | null;
        id: number;
        name: string;
        createdAt: Date;
    } | null | undefined;
    amount: number | null | undefined;
  };
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
export enum PaymentMethod {
  BANKTRANSFER,
  CASH,
  CREDITCARD,
  UPI,
  NETBANKING,
  CRYPTO
}

export type Transaction = {
  id: number;
 userId: number;
 categoryId: number;
 type: TransactionType;
 amount: number;
 title: string;
 description: string | null;
 paymentMethod: PaymentMethod;
 transactionDate: Date;
 createdAt: Date;
 updatedAt: Date | null;
 category: {
        name: string;
        id:number;
    };
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
  BEHIND = "BEHIND",
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
