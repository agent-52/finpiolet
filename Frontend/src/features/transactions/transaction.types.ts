import type { PaymentMethod, Transaction, TransactionType } from "../dashboard/dashboard.types";


export interface Category {
  id: number;
  name: string;
}
export interface TransactionDisplay {
  id: number;
  title: string;
  cat: string;
  catC: string;
  type: TransactionType;
  date: string;           // e.g. "Jul 22, 2025"
  dateMs: number;         // timestamp for sorting
  amount: number;
  method: PaymentMethod;
  notes: string;
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

export type TransactionData = {
  title: string;
  categoryId: number;
  type: TransactionType;
  amount: number;
  description?: string;
  transactionDate: Date;
  paymentMethod: PaymentMethod;
  // merchant?: string;
  // status?: TxStatus;
};

export type TransactionUpdateData = {
  categoryId?: number;
  type?: TransactionType;
  amount?: number;
  description?: string | null;
  transactionDate?: Date;
  paymentMethod?: PaymentMethod;
  // merchant?: string;
  // status?: TxStatus;
};



export interface TransactionCreateResponse {
  success: boolean;
  transaction: Transaction;
}

export interface TransactionUpdateResponse {
  success: boolean;
  transaction: Transaction;
}

export interface TransactionDeleteResponse {
  success: boolean;
  message: string;
  deletedTransaction: Transaction;
}

export interface TransactionGetResponse {
  success: boolean;
  page: string | undefined;
  limit: string | undefined;
  total: number;
  transactions: Transaction[];
}
