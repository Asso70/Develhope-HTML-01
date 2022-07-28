/*
  Warnings:

  - Added the required column `createdBy` to the `employee` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `employee` ADD COLUMN `createdBy` VARCHAR(255) NOT NULL,
    ADD COLUMN `updatedBy` VARCHAR(255) NULL;
