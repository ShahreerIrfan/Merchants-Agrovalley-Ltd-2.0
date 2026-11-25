import { PrismaClient } from "@prisma/client";

// 1. Source Database (BritishMerchantsDB)
const sourcePrisma = new PrismaClient({
  datasources: {
    db: {
      url: "postgresql://postgres:nyWf75NYpnPkoB59IgZO@31.97.239.234:5433/BritishMerchantsDB",
    },
  },
});

// 2. Target Database (Current Merchants AgroValley)
const targetPrisma = new PrismaClient({
  datasources: {
    db: {
      url: "postgresql://postgres:qZWkj5Rf36cWF0Cnk7Gl@189.72.158.183:5432/postgres",
    },
  },
});

const STEP_TITLES = [
  "Farming / Production",
  "Processing / Abattoir",
  "Packaging / Export Pack",
  "Maritime Export & Shipping",
  "Culinary Application",
];

async function migrate() {
  console.log("=== Fetching Services from BritishMerchantsDB ===");
  const sourceServices = await sourcePrisma.$queryRawUnsafe(`
    SELECT * FROM "Service" ORDER BY "order" ASC;
  `);

  console.log(`Retrieved ${sourceServices.length} services from source database.`);

  console.log("\n=== Clearing old products in target database ===");
  await targetPrisma.product.deleteMany({});
  console.log("Cleaned target Product table.");

  console.log("\n=== Importing to Target PostgreSQL Database ===");
  for (const s of sourceServices) {
    let cleanSlug = s.slug.trim();
    if (!cleanSlug.startsWith("/")) {
      cleanSlug = `/${cleanSlug}`;
    }

    // Build 5-step lifecycle images array if available
    const lifecycleImages = [];
    if (s.step1Image || s.step2Image || s.step3Image || s.step4Image || s.step5Image) {
      const stepImgs = [s.step1Image, s.step2Image, s.step3Image, s.step4Image, s.step5Image];
      for (let i = 0; i < 5; i++) {
        if (stepImgs[i]) {
          lifecycleImages.push({
            stepNumber: i + 1,
            title: STEP_TITLES[i],
            imageUrl: stepImgs[i],
          });
        }
      }
    }

    const created = await targetPrisma.product.create({
      data: {
        commodityName: s.name.trim(),
        slug: cleanSlug,
        division: s.badge ? s.badge.trim() : s.category || "General",
        cardBadgeText: s.badge ? s.badge.trim() : s.category || "General",
        description: s.desc ? s.desc.trim() : "",
        image: s.image ? s.image.trim() : null,
        displayOrder: s.order ?? 0,
        status: s.isActive === false ? "INACTIVE" : "ACTIVE",
        breedSpeciesVariety: s.breed ? s.breed.trim() : null,
        farmingHusbandryMethod: s.farmingMethod ? s.farmingMethod.trim() : null,
        processingColdChainTech: s.processingMethod ? s.processingMethod.trim() : null,
        cutsPackagingFormats: s.packaging ? s.packaging.trim() : null,
        certificationsStandards: s.certifications ? s.certifications.trim() : null,
        exportLogisticsShipping: s.logistics ? s.logistics.trim() : null,
        lifecycleImages: lifecycleImages.length > 0 ? lifecycleImages : null,
      },
    });

    console.log(`[Imported #${created.displayOrder}] ${created.commodityName} (${created.slug})`);
  }

  const finalCount = await targetPrisma.product.count();
  console.log(`\n=== Migration Complete! Total Products in Target DB: ${finalCount} ===`);
}

migrate()
  .catch((e) => {
    console.error("Migration failed:", e);
  })
  .finally(async () => {
    await sourcePrisma.$disconnect();
    await targetPrisma.$disconnect();
  });
