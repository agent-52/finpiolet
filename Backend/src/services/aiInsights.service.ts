import { InsightPriority, InsightType } from "../generated/prisma/enums";
import aiInsightRepository from "../repositories/aiInsight.repository";
import { findAllUsers } from "../repositories/auth.repository";
import { ApiError } from "../utils/ApiError";
import { groq } from "../utils/groq";
import { buildFinancialContext } from "./contextBuilder.service";
import { buildInsightPrompt } from "./promptBuilder.service";

async function generateInsight(userId: number) {
    const todaysInsights = await aiInsightRepository.getToadysInsight(userId);

    if(todaysInsights.length >0){
        return `user ${userId} todays insights already exists skipping this user.`
    }
  const financialContext = await buildFinancialContext(userId);

  const prompt = buildInsightPrompt(financialContext);

  try {
    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      // response_format:{type:"json_object"},
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.5,
    });

    const rawMessage = completion.choices[0]?.message.content;
    if (rawMessage) {
      try {
        const aiReply = JSON.parse(rawMessage);
        let savedInsights = [];

        for (const reply of aiReply) {
          const insight = await aiInsightRepository.createInsight(
            userId,
            reply.type,
            reply.priority,
            reply.content,
            reply.metadata,
          );
          savedInsights.push(insight);
        }
        return {
          success: true,
          savedInsights,
        };
      } catch (error) {
        throw new ApiError(
          500,
          "unable to parse aiInsight service response returned by the ai ",
        );
      }
    }
  } catch (error) {
    throw new ApiError(
      503,
      "Ai service unavailable at this moment try again later",
    );
  }
}

async function getLatestInsightService(userId: number) {
  const todaysInsights = await aiInsightRepository.getToadysInsight(userId);
  if (todaysInsights.length == 0) {
    //no insight for today wala case
    const result = await generateInsight(userId)
    return{
        success:true,
        result
    }
  }
  return {
    success: true,
    todaysInsights,
  };
}

async function generateInsightsForAllUsers() {
  const users = await findAllUsers();
  for (const user of users) {
    try {
      const result = await generateInsight(user.id);
    } catch (err) {
      console.error(
        `insight generation for this userid ${user.id} failed , `,
        err,
      );
    }
  }
  
}
export {
  generateInsight,
  getLatestInsightService,
  generateInsightsForAllUsers,
};
