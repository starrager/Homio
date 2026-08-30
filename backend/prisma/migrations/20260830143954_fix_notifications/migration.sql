-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "password" TEXT NOT NULL,
    "nameFirst" TEXT NOT NULL,
    "nameLast" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'CLIENT',
    "address" TEXT,
    "order" BOOLEAN DEFAULT false,
    "reminders" BOOLEAN DEFAULT false,
    "news" BOOLEAN DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_users" ("address", "createdAt", "email", "id", "nameFirst", "nameLast", "news", "order", "password", "phone", "reminders", "role", "updatedAt") SELECT "address", "createdAt", "email", "id", "nameFirst", "nameLast", "news", "order", "password", "phone", "reminders", "role", "updatedAt" FROM "users";
DROP TABLE "users";
ALTER TABLE "new_users" RENAME TO "users";
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
CREATE UNIQUE INDEX "users_phone_key" ON "users"("phone");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
