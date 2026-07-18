import { prisma } from "../config/prisma";
import { AiRole } from "../generated/prisma/enums";

async function saveMessage(userId:number, role:AiRole, message:string){
    await prisma.aiConversation.create({
        data:{
            userId,
            role,
            message
        }
    })
    
}

async function getRecentMessages(userId:number){
    const recentMessages = await prisma.aiConversation.findMany({
        where:{
            userId
        },
        orderBy:{
            createdAt:"desc"
        },
        select:{
            role:true,
            message:true
        },
        take:15
    })
    return recentMessages
}

async function deleteOldMessages(userId:number){
    const today = new Date()
    const deleteDate = new Date(today.getFullYear(), today.getMonth()-1, 1)
    const result = await prisma.aiConversation.deleteMany({
        where:{
            userId,
            createdAt:{
                lte:deleteDate
            }
        }
    })
    return result
}

export default{
    saveMessage,
    getRecentMessages,
    deleteOldMessages
}