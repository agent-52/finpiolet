/*
  Warnings:

  - The values [Monthly_Summary,Spending_Insight,Saving_Recommendation] on the enum `InsightType` will be removed. If these variants are still used in the database, this will fail.
  - Added the required column `priority` to the `AiInsight` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "InsightPriority" AS ENUM ('LOW', 'MEDIUM', 'HIGH');

-- AlterEnum
BEGIN;
CREATE TYPE "InsightType_new" AS ENUM ('MONTHLY_SUMMARY', 'SPENDING_INSIGHT', 'SAVING_RECOMMENDATION', 'BUDGET_WARNING', 'GOAL_PROGRESS', 'GOAL_ACHIEVED', 'GOAL_AT_RISK', 'CASHFLOW_ALERT', 'SUBSCRIPTION_ALERT', 'SPENDING_SPIKE', 'CATEGORY_TREND');
ALTER TABLE "AiInsight" ALTER COLUMN "type" TYPE "InsightType_new" USING ("type"::text::"InsightType_new");
ALTER TYPE "InsightType" RENAME TO "InsightType_old";
ALTER TYPE "InsightType_new" RENAME TO "InsightType";
DROP TYPE "public"."InsightType_old";
COMMIT;

-- AlterTable
ALTER TABLE "AiInsight" ADD COLUMN     "isRead" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "priority" "InsightPriority" NOT NULL,
ALTER COLUMN "metadata" DROP NOT NULL;
