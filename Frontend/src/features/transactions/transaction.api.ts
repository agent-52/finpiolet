import api from "../../api/axiosApi";

async function getTransactions() {
    const response = await api.get("/transaction")
    return response.data
}

async function createTransaction(data:TransactionData) {
    const response = await api.post("/transaction", data)
    return response.data
}

async function updateTransaction(data:TransactionUpdateData) {
    const response = await api.patch("/transaction", data)
    return response.data
}

async function deleteTransaction(data:{id:number}) {
    const response = await api.delete("/transaction", data)
    return response.data
}

export {
    getTransactions, updateTransaction, createTransaction, deleteTransaction
}