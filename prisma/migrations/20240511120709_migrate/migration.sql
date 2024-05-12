/*
  Warnings:

  - You are about to drop the `ucapan` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `ucapan`;

-- CreateTable
CREATE TABLE `Submission` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `text` VARCHAR(191) NOT NULL,
    `number` VARCHAR(191) NOT NULL,
    `isHadir` BOOLEAN NOT NULL,
    `jumlahKehadiran` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
