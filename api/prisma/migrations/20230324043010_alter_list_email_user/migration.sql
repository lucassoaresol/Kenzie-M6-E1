-- DropForeignKey
ALTER TABLE "list_email" DROP CONSTRAINT "list_email_userId_fkey";

-- AddForeignKey
ALTER TABLE "list_email" ADD CONSTRAINT "list_email_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
