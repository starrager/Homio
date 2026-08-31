/*
  Warnings:

  - You are about to drop the `addresses` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `categories` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `order_items` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `services` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `addressId` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `cancellationReason` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `cancelledAt` on the `orders` table. All the data in the column will be lost.
  - Added the required column `address` to the `orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `service` to the `orders` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "categories_slug_key";

-- DropIndex
DROP INDEX "categories_name_key";

-- DropIndex
DROP INDEX "reviews_rating_idx";

-- DropIndex
DROP INDEX "services_slug_key";

-- DropIndex
DROP INDEX "users_phone_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "addresses";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "categories";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "order_items";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "services";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_orders" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "orderNumber" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,
    "service" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "scheduledDate" DATETIME NOT NULL,
    "scheduledTime" TEXT NOT NULL,
    "comment" TEXT,
    "status" TEXT NOT NULL DEFAULT 'NEW',
    "totalPrice" REAL NOT NULL DEFAULT 0,
    "estimatedPrice" REAL NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "orders_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_orders" ("comment", "createdAt", "estimatedPrice", "id", "orderNumber", "scheduledDate", "scheduledTime", "status", "totalPrice", "updatedAt", "userId") SELECT "comment", "createdAt", "estimatedPrice", "id", "orderNumber", "scheduledDate", "scheduledTime", "status", "totalPrice", "updatedAt", "userId" FROM "orders";
DROP TABLE "orders";
ALTER TABLE "new_orders" RENAME TO "orders";
CREATE UNIQUE INDEX "orders_orderNumber_key" ON "orders"("orderNumber");
CREATE INDEX "orders_userId_idx" ON "orders"("userId");
CREATE INDEX "orders_status_idx" ON "orders"("status");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
