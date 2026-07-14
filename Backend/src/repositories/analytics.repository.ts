import { prisma } from "../config/prisma";
import { TransactionType } from "../generated/prisma/enums";


async function getTransactionsByCategoryAndMonth(
  userId: number,
  categoryId: number,
  month: number,
  year: number,
) {
  const startDate = new Date(year, month - 1, 1);
  const endDate = new Date(year, month, 1);
  const transactions = await prisma.transaction.findMany({
    where: {
      userId,
      categoryId,
      transactionDate: {
        gte: startDate,
        lt: endDate,
      },
      type: TransactionType.EXPENSE,
    },
  });

  return transactions;
}

async function getMonthlyExpenseTrend(userId:number) {
  

  const result = await prisma.$queryRaw`
  select extract(year from "transactionDate") as year,
  extract(month from "transactionDate") as month,
  sum(amount) as "monthlyExpense" from "Transaction" where type = 'EXPENSE' and userId = ${userId} group by year , month
  order by year desc, month desc;
  `

  return result
}

async function getMonthlyIncomeExpenseTrend(userId:number):Promise<any> {

  const result = await prisma.$queryRaw`
  select extract(year from "transactionDate") as year ,
  extract(month from "transactionDate")as month,

  sum(
    case 
      when type = 'INCOME'
      then amount
      else 0
    end
  ) as income,

  sum(
    case 
      when type = 'EXPENSE'
      then amount
      else 0
    end
  ) as expense

  from "Transaction"

  where "userId" = ${userId}
  group by year, month
  order by year, month;
  `

  return result
  
}

async function getCategoryBreakdown(userId:number) {
  const categoryWiseExpense = await prisma.transaction.groupBy({
    by:["categoryId"],
    where:{
      userId,
      type:TransactionType.EXPENSE
    },
    _sum:{
      amount:true
    }
  })

  const categoryBreakdown = 
    categoryWiseExpense.map((c) => {
      
    return{
      "categoryId":c.categoryId,
      "amount":c._sum.amount,

    }
  })
  

  return categoryBreakdown
}

async function getCurrentMonthIncome(userId:number) {
  const today = new Date()
  const monthStart = new Date(
    today.getFullYear(),
    today.getMonth(),
    1
  )
  const result = await prisma.transaction.aggregate({
    where:{
      userId,
      type:TransactionType.INCOME,
      transactionDate:{
        gte:monthStart,
        lte:today
      }
    },
    _sum:{
      amount:true
    }
  })

  return result._sum.amount??0
}

async function getCurrentMonthExpense(userId:number) {
  const today = new Date()
  const monthStart = new Date(
    today.getFullYear(),
    today.getMonth(),
    1
  )
  const result = await prisma.transaction.aggregate({
    where:{
      userId,
      type:TransactionType.EXPENSE,
      transactionDate:{
        gte:monthStart,
        lte:today
      }
    },
    _sum:{
      amount:true
    }
  })

  return result._sum.amount??0
}

async function getTopExpenseCategoryOfCurrentMonth(userId:number) {
  const today = new Date();
  const monthStart = new Date(today.getFullYear(), today.getMonth(), 1)

  const result = await prisma.transaction.groupBy({
    by:["categoryId"],
    where:{
      userId,
      type:TransactionType.EXPENSE,
      transactionDate:{
        gte:monthStart,
        lte:today
      }
    },
    _sum:{
      amount:true
    },
    orderBy:{
      _sum:{
        amount:"desc"
      }
    }
  })

  return result[0]?.categoryId


}
export default { getTransactionsByCategoryAndMonth, getMonthlyExpenseTrend, getCategoryBreakdown, getMonthlyIncomeExpenseTrend , getCurrentMonthExpense, getCurrentMonthIncome, getTopExpenseCategoryOfCurrentMonth};
