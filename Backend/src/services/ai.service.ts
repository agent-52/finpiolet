import aiRepository from "../repositories/ai.repository";
import { ApiError } from "../utils/ApiError"
import { groq } from "../utils/groq"
import { buildFinancialContext } from "./contextBuilder.service"
import { buildPrompt } from "./promptBuilder.service";



async function aiService(userId:number, message:string) {
    //Receive user message
     if(!message?.trim()){
        throw new ApiError(400, "message should be at least one character long")
    }  

    //Determine required financial context
    

    //Call financial engines/repositories
    const userFinancialContext = await buildFinancialContext(userId)

    //conversation history
    const conversationHistory = await aiRepository.getRecentMessages(userId)
    //reverse this history for proper context for ai to understand
    conversationHistory.reverse()
    //Build prompt
    const prompt = buildPrompt(userFinancialContext, message, conversationHistory)
    //Call Groq

    try {
         const completion = await groq.chat.completions.create({
            
            model:"llama-3.3-70b-versatile",

            messages:[
                {
                    role:"user",
                    content:prompt
                }
            ],
            temperature: 0.5,
        })

        const aiReplyMessage = completion.choices[0]?.message.content

        if(aiReplyMessage?.trim()){
            await aiRepository.saveMessage(userId, "USER", message)
            await aiRepository.saveMessage(userId, "ASSISTANT", aiReplyMessage)
        }

        return{
            success:true,
            reply:aiReplyMessage
        }
    } catch (error) {
        throw new ApiError(503, "AI service is temporarily unavailable")
    }
    
    
    //Return response
}

export {aiService}