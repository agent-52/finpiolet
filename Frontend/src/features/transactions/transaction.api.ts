import api from "../../api/axiosApi";
import type { TransactionCreateResponse, TransactionData, TransactionDeleteResponse, TransactionGetResponse, TransactionQueryObject, TransactionUpdateData, TransactionUpdateResponse } from "./transaction.types";

async function getTransactions(queryObject:TransactionQueryObject):Promise<TransactionGetResponse> {
    const queryString = new URLSearchParams(queryObject).toString()
    const response = await api.get(`/transaction${queryString}`)
    return response.data
}

async function createTransaction(data:TransactionData):Promise<TransactionCreateResponse> {
    const response = await api.post("/transaction", data)
    return response.data
}

async function updateTransaction(data:{id:number, transactionData:TransactionUpdateData}):Promise<TransactionUpdateResponse> {
    const response = await api.patch(`/transaction/${data.id}`, data.transactionData)
    return response.data
}

async function deleteTransaction(id:number):Promise<TransactionDeleteResponse> {
    const response = await api.delete(`/transaction/${id}`)
    return response.data
}

export {
    getTransactions, updateTransaction, createTransaction, deleteTransaction
}