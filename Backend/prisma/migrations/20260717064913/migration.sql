-- CreateEnum
CREATE TYPE "AiRole" AS ENUM ('User', 'ASSISTANT');

-- CreateTable
CREATE TABLE "AiConversation" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "role" "AiRole" NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AiConversation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "AiConversation" ADD CONSTRAINT "AiConversation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
