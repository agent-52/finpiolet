import { prisma } from "../config/prisma"
import { InsightPriority, InsightType } from "../generated/prisma/client"

async function createInsight(userId:number, type:InsightType, priority:InsightPriority ,content:string, metadata:any ){
  const insight = await prisma.aiInsight.create({
    data:{
        userId,
        type,
        priority,
        content,
        metadata
    }
  }) 
  return insight 
}

async function getInsights(userId:number){
  const insights = await prisma.aiInsight.findMany({
    where:{
      userId
    },
    orderBy:{
      generatedAt: "desc"
    }
  })

  return insights
}

async function deleteOldInsights(userId:number){
  const today = new Date()
  const lastMonthDate = new Date(today.getFullYear(), today.getMonth()-1, 1)

  const deletedInsights = await prisma.aiInsight.deleteMany({
    where:{
      userId,
      generatedAt:{
        lte:lastMonthDate
      }
    }
  })

  return deletedInsights
}

async function getToadysInsight(userId:number) {
  const today = new Date()
  const result = await prisma.aiInsight.findMany({
    where:{
      userId,
      generatedAt:today
    }
  })
  return result
}

export default {
    createInsight,
    getInsights,
    deleteOldInsights,
    getToadysInsight
}