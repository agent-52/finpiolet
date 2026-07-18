/*
  Warnings:

  - The values [User] on the enum `AiRole` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "AiRole_new" AS ENUM ('USER', 'ASSISTANT');
ALTER TABLE "AiConversation" ALTER COLUMN "role" TYPE "AiRole_new" USING ("role"::text::"AiRole_new");
ALTER TYPE "AiRole" RENAME TO "AiRole_old";
ALTER TYPE "AiRole_new" RENAME TO "AiRole";
DROP TYPE "public"."AiRole_old";
COMMIT;
