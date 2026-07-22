import pLimit from "p-limit";
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

  //naive way only use if only a few users because agar 1user ka response 5 sec leta hai aur 10000 users hai to one by one execute hone mai pura laghbhag 8 ghante lagenge
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
  //promise.all() wali approach is also wrong because if 10000 concurrent request to groq hue to problems jaise ki rate limiting , high memory usage etc aa jaegi 

    //await Promise.all(users.map((user) => generateInsight(user.id)))

  //correct way (Concurrency Limiting) :- instead of 1000 at once or 1 at once we do 10 at a time then next 10 and so on
    //using p-limit library

    // const limit = pLimit(10)
    // await Promise.all(
    //   users.map(user => limit(() => generateInsight(user.id)))
    // )

  
}
export {
  generateInsight,
  getLatestInsightService,
  generateInsightsForAllUsers,
};
