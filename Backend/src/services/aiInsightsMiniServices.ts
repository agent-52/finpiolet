//goal:- generate montly report of the user

import { savingPlannerEngine } from "../engines/savingPlanner.engine";
import { InsightType } from "../generated/prisma/enums";
import aiInsightRepository from "../repositories/aiInsight.repository";
import { ApiError } from "../utils/ApiError";
import { groq } from "../utils/groq";
import { buildFinancialContext } from "./contextBuilder.service";
import { buildBudgetWarningPrompt, buildGoalProgressCoachPrompt, buildMonthlySummaryPrompt, buildSavingPlannerExplainerPrompt } from "./promptBuilder.service";


async function generateAiMonthlySummaryService(userId:number) {
    
    const financialContext = await buildFinancialContext(userId)

    const prompt = buildMonthlySummaryPrompt(financialContext)

    const aiReply =  await generateInsight(prompt)

    const summary = await aiInsightRepository.createInsight(userId, aiReply.type, aiReply.priority, aiReply.content, aiReply.metadata)

    return {
        "success":true,
        summary
    }


}

async function generateInsight(prompt:string) {
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

async function generateAiBudgetWarningService(userId:number) {
    const financialContext = await buildFinancialContext(userId)

    const prompt = buildBudgetWarningPrompt(financialContext)

    const aiReply =  await generateInsight(prompt)

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


async function generateAiGoalProgressServie(userId:number) {
    const financialContext = await buildFinancialContext(userId)

    const prompt = buildGoalProgressCoachPrompt(financialContext)

    const aiReply =  await generateInsight(prompt)

    if (!Array.isArray(aiReply.insights)) {
    throw new ApiError(
        500,
        "Invalid AI response format."
    );
}

    const goalProgressInsights = await Promise.all(
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
        goalProgressInsights
    }

}

async function generateAiSavingPlannerExplanationService(userId:number, targetAdditionalSaving:number) {
    
    const savingPlan = await savingPlannerEngine(userId, targetAdditionalSaving)

    const prompt = buildSavingPlannerExplainerPrompt(savingPlan)

    const aiReply = await generateInsight(prompt)

    const savingPlanInsight = await aiInsightRepository.createInsight(userId, aiReply.type, aiReply.priority, aiReply.content, aiReply.metadata)

    return {
        "success":true,
        savingPlanInsight
    }
}
export {generateAiMonthlySummaryService, generateAiBudgetWarningService, generateAiGoalProgressServie, generateAiSavingPlannerExplanationService}