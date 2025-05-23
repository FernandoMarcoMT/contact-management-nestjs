-- AlterTable
ALTER TABLE `addresses` MODIFY `street` VARCHAR(255) NULL,
    MODIFY `city` VARCHAR(100) NULL,
    MODIFY `province` VARCHAR(100) NULL;

-- AlterTable
ALTER TABLE `contacts` MODIFY `last_name` VARCHAR(100) NULL,
    MODIFY `email` VARCHAR(100) NULL,
    MODIFY `phone` VARCHAR(20) NULL;
