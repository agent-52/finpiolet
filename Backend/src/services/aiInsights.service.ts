
import { InsightPriority, InsightType } from "../generated/prisma/enums";
import aiInsightRepository from "../repositories/aiInsight.repository";
import { ApiError } from "../utils/ApiError";
import { groq } from "../utils/groq";
import { buildFinancialContext } from "./contextBuilder.service";
import { buildInsightPrompt } from "./promptBuilder.service";

async function aiInsightService(userId:number) {
    
    const financialContext = await buildFinancialContext(userId)

    const prompt =  buildInsightPrompt(financialContext)

    try {
        const completion = await groq.chat.completions.create({
            model:"llama-3.3-70b-versatile",
            // response_format:{type:"json_object"},
            messages:[{
                role:"user",
                content:prompt
            }],
            temperature:0.5
        })

        const rawMessage = completion.choices[0]?.message.content
        if(rawMessage){
            try {
                const aiReply = JSON.parse(rawMessage)
                let savedInsights = []
                
                for (const reply of aiReply) {
                    const insight = await aiInsightRepository.createInsight(userId, reply.type, reply.priority, reply.content, reply.metadata )
                    savedInsights.push(insight)

                }
                return {
                    "success":true,
                    savedInsights
                }


            } catch (error) {
                throw new ApiError(500, "unable to parse aiInsight service response returned by the ai ")
            }
        }
    } catch (error) {
        throw new ApiError(503, "Ai service unavailable at this moment try again later")
    }
}

export{aiInsightService}
