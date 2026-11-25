import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("=== Disconnecting any foreign key references from Product ===");
  await prisma.product.updateMany({
    data: {
      categoryId: null,
    },
  });

  console.log("=== Deleting all categories from database ===");
  const res = await prisma.category.deleteMany({});
  console.log(`Deleted ${res.count} categories.`);

  const remaining = await prisma.category.count();
  console.log(`Remaining categories in database: ${remaining}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
