import type {
  TransactionDisplay,
  TransactionData,
} from "./transaction.types";

import type { Transaction, TransactionType } from "../dashboard/dashboard.types";
import type { PaymentMethod } from "../dashboard/dashboard.types";

export const fmtAmt = (n: number) =>
  "$" +
  Math.abs(n).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

export const mapTransactionToDisplay = (tx: Transaction): TransactionDisplay => {
  const dateObj = new Date(tx.transactionDate);
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  const dateStr = `${months[dateObj.getMonth()]} ${dateObj.getDate()}, ${dateObj.getFullYear()}`;

  const cat = tx.category?.name ?? tx.category.id ?? "Other";
  const catC =  "gray";

  return {
    id: tx.id,
    title: tx.title,
    cat,
    catC,
    type: tx.type,
    date: dateStr,
    dateMs: dateObj.getTime(),
    amount: tx.amount,
    method: tx.paymentMethod,
    notes: tx.description || "",
  };
};

export const validateTransactionForm = (form: {
  title: string;
  amount: string;
  categoryId: number;
  date: string;
}): Record<string, string> => {
  const errors: Record<string, string> = {};
  if (!form.title.trim()) errors.title = "Title is required";
  if (!form.amount || isNaN(Number(form.amount)) || Number(form.amount) <= 0)
    errors.amount = "Enter a valid positive amount";
  if (!form.categoryId) errors.categoryId = "Select a category";
  if (!form.date) errors.date = "Select a date";
  return errors;
};

export const prepareTransactionData = (form: {
  type: TransactionType;
  title: string;
  amount: string;
  categoryId: number;
  date: string;
  paymentMethod: PaymentMethod;
  notes?: string;
}): TransactionData => {
  const amountNum = Number(form.amount);
  return {
    type: form.type,
    title: form.title.trim(),
    amount: form.type === "EXPENSE" ? -Math.abs(amountNum) : Math.abs(amountNum),
    categoryId: form.categoryId,
    transactionDate: new Date(form.date),
    paymentMethod: form.paymentMethod as TransactionData["paymentMethod"],
    description: form.notes ,
    merchant: form.title.trim(),
  };
};

