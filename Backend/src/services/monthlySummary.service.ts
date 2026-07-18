//goal:- generate montly report of the user

import { InsightType } from "../generated/prisma/enums";
import aiInsightRepository from "../repositories/aiInsight.repository";
import { ApiError } from "../utils/ApiError";
import { groq } from "../utils/groq";
import { buildFinancialContext } from "./contextBuilder.service";
import { buildBudgetWarningPrompt, buildMonthlySummaryPrompt } from "./promptBuilder.service";


async function generateMonthlySummaryService(userId:number) {
    
    const financialContext = await buildFinancialContext(userId)

    const prompt = buildMonthlySummaryPrompt(financialContext)

    const aiReply =  await generateInsight(prompt, userId)

    const summary = await aiInsightRepository.createInsight(userId, aiReply.type, aiReply.priority, aiReply.content, aiReply.metadata)

    return {
        "success":true,
        summary
    }


}

async function generateInsight(prompt:string, userId:number) {
    try {
        const completion = await groq.chat.completions.create({
            model:"llama-3.3-70b-versatile",
            response_format:{type:"json_object"},
            messages:[{
                role:"user",
                content:prompt
            }],
            temperature:0.5
        })

        const rawMessage = completion.choices[0]?.message.content
        if (!rawMessage) {
            throw new ApiError(500, "AI returned an empty response");
        }
       
        try {
            const aiReply = JSON.parse(rawMessage)
            
            return aiReply
            


        } catch (error) {
            throw new ApiError(500, "unable to parse aiInsight service response returned by the ai ")
        }
        
    } catch (error) {
        throw new ApiError(503, "Ai service unavailable at this moment try again later")
    }
}

async function generateBudgetWarningService(userId:number) {
    const financialContext = await buildFinancialContext(userId)

    const prompt = buildBudgetWarningPrompt(financialContext)

    const aiReply =  await generateInsight(prompt, userId)

    if (!Array.isArray(aiReply.insights)) {
    throw new ApiError(
        500,
        "Invalid AI response format."
    );
}

    const budgetWarnings = await Promise.all(
    aiReply.insights.map((insight: any) =>
        aiInsightRepository.createInsight(
            userId,
            insight.type,
            insight.priority,
            insight.content,
            insight.metadata
        )
    )
);

    return {
        "success":true,
        budgetWarnings
    }



}
export {generateMonthlySummaryService, generateBudgetWarningService}