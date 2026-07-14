import { prisma } from "../config/prisma"
import { TransactionType } from "../generated/prisma/enums"

async function getTotalIncome(userId:number){
    const result = await prisma.transaction.aggregate({
        where:{
            userId,
            type:TransactionType.INCOME
        },
        _sum:{
            amount:true
        }
    })
    return result._sum.amount ?? 0
}

async function getTotalExpense(userId:number){
     const result = await prisma.transaction.aggregate({
        where:{
            userId,
            type:TransactionType.EXPENSE
        },
        _sum:{
            amount:true
        }
        
     })

     return result._sum.amount ?? 0 
        
}

async function getRecentTransactions(userId:number){
    const recentTransactions = await prisma.transaction.findMany({
        where:{
            userId
        },
        orderBy:{
            transactionDate:"desc"
        },
        take:5
    })
    return recentTransactions
}

async function getTopSpendingCategory(userId:number){
    const categoryWiseSpend = await prisma.transaction.groupBy({
        where:{
            userId,
            type:TransactionType.EXPENSE
        },
        by:["categoryId"],
        _sum:{
            amount:true
        },
        orderBy:{
            _sum:{
                amount:"desc"
            }
        },
        
    })
    let categoryName
    const categoryId = categoryWiseSpend[0]?.categoryId
    if(categoryId){
        categoryName = await prisma.category.findUnique({
        where:{
            id:categoryId
        }
    })

    }
    return {
        categoryName,
        "amount":categoryWiseSpend[0]?._sum.amount
    }
}

export default{
    getTopSpendingCategory,
    getTotalExpense,
    getTotalIncome,
    getRecentTransactions
}