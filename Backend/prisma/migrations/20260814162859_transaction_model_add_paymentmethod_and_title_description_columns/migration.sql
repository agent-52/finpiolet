/*
  Warnings:

  - Added the required column `title` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "PaymentMethod" AS ENUM ('BANKTRANSFER', 'CASH', 'CREDITCARD', 'UPI', 'NETBANKING', 'CRYPTO');

-- AlterTable
ALTER TABLE "Transaction" ADD COLUMN     "paymentMethod" "PaymentMethod" NOT NULL DEFAULT 'UPI',
ADD COLUMN     "title" TEXT NOT NULL;
