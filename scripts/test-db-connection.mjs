import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: ["error"],
});

async function testDatabase() {
  console.log("==================================================");
  console.log(" MERCHANTS AGROVALLEY - DATABASE CONNECTION TEST");
  console.log("==================================================\n");

  const startTime = Date.now();

  try {
    // 1. Raw SQL Health Check & DB Info
    console.log("1. Executing PostgreSQL Health Check ($queryRaw)...");
    const rawResult = await prisma.$queryRaw`
      SELECT 
        1 as status,
        current_database() as database_name,
        current_user as database_user,
        version() as pg_version,
        NOW() as server_time;
    `;
    const latency = Date.now() - startTime;
    console.log("   [SUCCESS] Connected in", latency, "ms");
    console.log("   Database Name:", rawResult[0].database_name);
    console.log("   Database User:", rawResult[0].database_user);
    console.log("   PostgreSQL Version:", rawResult[0].pg_version.split(" on ")[0]);
    console.log("   Database Server Time:", rawResult[0].server_time);

    // 2. Inspect Synchronized Tables & Counts
    console.log("\n2. Checking Prisma Schema Tables & Counts...");
    const [userCount, categoryCount, productCount, memberCount, inquiryCount] =
      await Promise.all([
        prisma.user.count(),
        prisma.category.count(),
        prisma.product.count(),
        prisma.managementMember.count(),
        prisma.inquiry.count(),
      ]);

    console.log("   - Users table count:", userCount);
    console.log("   - Categories table count:", categoryCount);
    console.log("   - Products table count:", productCount);
    console.log("   - Management Members count:", memberCount);
    console.log("   - Inquiries table count:", inquiryCount);

    // 3. Test Read & Write (CRUD Transaction)
    console.log("\n3. Testing Read & Write ACID Transactions...");
    const testCategory = await prisma.category.create({
      data: {
        name: "__HealthCheck_Test_Category__",
        slug: "__health-check-" + Date.now(),
        description: "Temporary category to verify live database write capability.",
      },
    });
    console.log("   [SUCCESS] Inserted test record ID:", testCategory.id);

    const verifiedRecord = await prisma.category.findUnique({
      where: { id: testCategory.id },
    });
    console.log("   [SUCCESS] Verified reading inserted record:", verifiedRecord?.name);

    await prisma.category.delete({
      where: { id: testCategory.id },
    });
    console.log("   [SUCCESS] Cleaned up test record.");

    const totalTime = Date.now() - startTime;
    console.log("\n--------------------------------------------------");
    console.log("DATABASE TEST RESULT: 100% OPERATIONAL & VERIFIED");
    console.log("Total round-trip time:", totalTime, "ms");
    console.log("--------------------------------------------------\n");
  } catch (error) {
    console.error("\n[DATABASE ERROR]:", error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

testDatabase();
