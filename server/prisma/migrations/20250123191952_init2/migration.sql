/*
  Warnings:

  - You are about to drop the column `end` on the `exam` table. All the data in the column will be lost.
  - The values [MODAY] on the enum `Lesson_day` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `Phone` on the `parent` table. All the data in the column will be lost.
  - You are about to drop the column `sername` on the `parent` table. All the data in the column will be lost.
  - You are about to drop the column `assigmentId` on the `result` table. All the data in the column will be lost.
  - You are about to drop the column `Phone` on the `student` table. All the data in the column will be lost.
  - You are about to drop the column `sername` on the `student` table. All the data in the column will be lost.
  - You are about to drop the `_classtograde` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_classtoteacher` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `assigment` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[username]` on the table `Parent` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[phone]` on the table `Parent` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[username]` on the table `Student` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[phone]` on the table `Student` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `capacity` to the `Class` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gradeId` to the `Class` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endTime` to the `Exam` table without a default value. This is not possible if the table is not empty.
  - Added the required column `address` to the `Parent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `Parent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `surname` to the `Parent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `address` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `surname` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `birthday` to the `Teacher` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Announcement_classId_fkey` ON `announcement`;

-- DropIndex
DROP INDEX `Attendance_lessonId_fkey` ON `attendance`;

-- DropIndex
DROP INDEX `Attendance_studentId_fkey` ON `attendance`;

-- DropIndex
DROP INDEX `Event_classId_fkey` ON `event`;

-- DropIndex
DROP INDEX `Exam_lessonId_fkey` ON `exam`;

-- DropIndex
DROP INDEX `Lesson_classId_fkey` ON `lesson`;

-- DropIndex
DROP INDEX `Lesson_subjectId_fkey` ON `lesson`;

-- DropIndex
DROP INDEX `Lesson_teacherId_fkey` ON `lesson`;

-- DropIndex
DROP INDEX `Parent_Phone_key` ON `parent`;

-- DropIndex
DROP INDEX `Parent_name_key` ON `parent`;

-- DropIndex
DROP INDEX `Result_assigmentId_fkey` ON `result`;

-- DropIndex
DROP INDEX `Result_examId_fkey` ON `result`;

-- DropIndex
DROP INDEX `Result_studentId_fkey` ON `result`;

-- DropIndex
DROP INDEX `Student_Phone_key` ON `student`;

-- DropIndex
DROP INDEX `Student_classId_fkey` ON `student`;

-- DropIndex
DROP INDEX `Student_gradeId_fkey` ON `student`;

-- DropIndex
DROP INDEX `Student_name_key` ON `student`;

-- DropIndex
DROP INDEX `Student_parentId_fkey` ON `student`;

-- AlterTable
ALTER TABLE `class` ADD COLUMN `capacity` INTEGER NOT NULL,
    ADD COLUMN `gradeId` INTEGER NOT NULL,
    ADD COLUMN `supervisorId` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `exam` DROP COLUMN `end`,
    ADD COLUMN `endTime` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `lesson` MODIFY `day` ENUM('MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY') NOT NULL;

-- AlterTable
ALTER TABLE `parent` DROP COLUMN `Phone`,
    DROP COLUMN `sername`,
    ADD COLUMN `address` VARCHAR(191) NOT NULL,
    ADD COLUMN `phone` VARCHAR(191) NOT NULL,
    ADD COLUMN `surname` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `result` DROP COLUMN `assigmentId`,
    ADD COLUMN `assignmentId` INTEGER NULL;

-- AlterTable
ALTER TABLE `student` DROP COLUMN `Phone`,
    DROP COLUMN `sername`,
    ADD COLUMN `address` VARCHAR(191) NOT NULL,
    ADD COLUMN `phone` VARCHAR(191) NULL,
    ADD COLUMN `surname` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `teacher` ADD COLUMN `birthday` DATETIME(3) NOT NULL;

-- DropTable
DROP TABLE `_classtograde`;

-- DropTable
DROP TABLE `_classtoteacher`;

-- DropTable
DROP TABLE `assigment`;

-- CreateTable
CREATE TABLE `Admin` (
    `id` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Admin_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Assignment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `startDate` DATETIME(3) NOT NULL,
    `dueDate` DATETIME(3) NOT NULL,
    `lessonId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Parent_username_key` ON `Parent`(`username`);

-- CreateIndex
CREATE UNIQUE INDEX `Parent_phone_key` ON `Parent`(`phone`);

-- CreateIndex
CREATE UNIQUE INDEX `Student_username_key` ON `Student`(`username`);

-- CreateIndex
CREATE UNIQUE INDEX `Student_phone_key` ON `Student`(`phone`);

-- AddForeignKey
ALTER TABLE `Student` ADD CONSTRAINT `Student_parentId_fkey` FOREIGN KEY (`parentId`) REFERENCES `Parent`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Student` ADD CONSTRAINT `Student_classId_fkey` FOREIGN KEY (`classId`) REFERENCES `Class`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Student` ADD CONSTRAINT `Student_gradeId_fkey` FOREIGN KEY (`gradeId`) REFERENCES `Grade`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Class` ADD CONSTRAINT `Class_supervisorId_fkey` FOREIGN KEY (`supervisorId`) REFERENCES `Teacher`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Class` ADD CONSTRAINT `Class_gradeId_fkey` FOREIGN KEY (`gradeId`) REFERENCES `Grade`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Lesson` ADD CONSTRAINT `Lesson_subjectId_fkey` FOREIGN KEY (`subjectId`) REFERENCES `Subject`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Lesson` ADD CONSTRAINT `Lesson_classId_fkey` FOREIGN KEY (`classId`) REFERENCES `Class`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Lesson` ADD CONSTRAINT `Lesson_teacherId_fkey` FOREIGN KEY (`teacherId`) REFERENCES `Teacher`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Exam` ADD CONSTRAINT `Exam_lessonId_fkey` FOREIGN KEY (`lessonId`) REFERENCES `Lesson`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Assignment` ADD CONSTRAINT `Assignment_lessonId_fkey` FOREIGN KEY (`lessonId`) REFERENCES `Lesson`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Result` ADD CONSTRAINT `Result_examId_fkey` FOREIGN KEY (`examId`) REFERENCES `Exam`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Result` ADD CONSTRAINT `Result_assignmentId_fkey` FOREIGN KEY (`assignmentId`) REFERENCES `Assignment`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Result` ADD CONSTRAINT `Result_studentId_fkey` FOREIGN KEY (`studentId`) REFERENCES `Student`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Attendance` ADD CONSTRAINT `Attendance_studentId_fkey` FOREIGN KEY (`studentId`) REFERENCES `Student`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Attendance` ADD CONSTRAINT `Attendance_lessonId_fkey` FOREIGN KEY (`lessonId`) REFERENCES `Lesson`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Event` ADD CONSTRAINT `Event_classId_fkey` FOREIGN KEY (`classId`) REFERENCES `Class`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Announcement` ADD CONSTRAINT `Announcement_classId_fkey` FOREIGN KEY (`classId`) REFERENCES `Class`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_SubjectToTeacher` ADD CONSTRAINT `_SubjectToTeacher_A_fkey` FOREIGN KEY (`A`) REFERENCES `Subject`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_SubjectToTeacher` ADD CONSTRAINT `_SubjectToTeacher_B_fkey` FOREIGN KEY (`B`) REFERENCES `Teacher`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
