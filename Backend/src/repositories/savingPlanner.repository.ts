import { prisma } from "../config/prisma"
import { TransactionType } from "../generated/prisma/enums"


async function getAverageCategoryExpenses(userId: number){
    const today = new Date()

    const startDate = new Date(today.getFullYear(), today.getMonth()-3, 1)

    const result  = await prisma.transaction.groupBy({
        by:"categoryId",
        where:{
            userId,
            type:TransactionType.EXPENSE,
            transactionDate:{
                lte:today,
                gte:startDate
            }
        },
        _avg:{
            amount:true
        },
        orderBy:{
            _avg:{
                amount:"desc"
            }
        }
    })

    return result
}

export default {
    getAverageCategoryExpenses
}