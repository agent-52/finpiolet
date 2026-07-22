import { aiInsightsCronJob } from "./aiInsight.job";


export async function startCronJobs() {
    aiInsightsCronJob()
}