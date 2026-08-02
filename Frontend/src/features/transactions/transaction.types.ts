import type { TransactionType } from "../dashboard/dashboard.types";


export type Transaction = {
 type: TransactionType;
 amount: number;
 description: string | null;
 transactionDate: Date;
 createdAt: Date;
 updatedAt: Date | null;
 id: number;
 userId: number;
 categoryId: number;
}

export type TransactionQueryObject = {
  page?: string;
  limit?: string;
  search?: string;
  type?: TransactionType;
  categoryId?: string;

  startDate?: string;
  endDate?: string;

  sortBy?: "amount" | "transactionDate" | "createdAt";
  sortOrder?: "asc" | "desc";
};

export type TransactionUpdateData = {
    categoryId?:number,
    type?:TransactionType,
    amount?: number;
    description?: string | null;
    transactionDate?: Date;

}
export type TransactionData = { categoryId:number, type:TransactionType, amount:number, description:string, transactionDate:Date }

export interface TransactionCreateResponse{
    success:boolean;
    transaction:Transaction
}

export interface TransactionUpdateResponse{
    success:boolean;
    transaction:Transaction
}

export interface TransactionDeleteResponse{
    success:boolean;
    message:string;
    deletedTransaction:Transaction
}

export interface TransactionGetResponse {
    success: boolean,
    page: string | undefined,
    limit: string | undefined,
    total: number,
    transactions:Transaction[],
}