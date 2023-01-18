/*
  Warnings:

  - You are about to drop the column `transportation` on the `quotes` table. All the data in the column will be lost.
  - Added the required column `transportations_id` to the `quotes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "quotes" DROP COLUMN "transportation",
ADD COLUMN     "transportations_id" INTEGER NOT NULL,
ALTER COLUMN "return_date" DROP NOT NULL;

-- CreateTable
CREATE TABLE "transportations" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "transportations_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "quotes" ADD CONSTRAINT "quotes_transportations_id_fkey" FOREIGN KEY ("transportations_id") REFERENCES "transportations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
