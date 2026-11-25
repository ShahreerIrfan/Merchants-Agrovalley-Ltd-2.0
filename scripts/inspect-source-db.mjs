import { PrismaClient } from "@prisma/client";

const sourcePrisma = new PrismaClient({
  datasources: {
    db: {
      url: "postgresql://postgres:nyWf75NYpnPkoB59IgZO@31.97.239.234:5433/BritishMerchantsDB",
    },
  },
});

async function main() {
  const services = await sourcePrisma.$queryRawUnsafe(`
    SELECT id, name, slug, category, badge, "order", "isActive", image, "step1Image", "step2Image", "step3Image", "step4Image", "step5Image"
    FROM "Service" 
    ORDER BY "order" ASC;
  `);
  
  console.log(`=== TOTAL SERVICES: ${services.length} ===`);
  services.forEach((s, i) => {
    console.log(`${i + 1}. [Order: ${s.order}] ${s.name} (${s.slug})`);
    console.log(`   Badge: ${s.badge} | Image: ${s.image}`);
    console.log(`   Steps: 1: ${s.step1Image} | 2: ${s.step2Image} | 3: ${s.step3Image} | 4: ${s.step4Image} | 5: ${s.step5Image}`);
  });
}

main().finally(() => sourcePrisma.$disconnect());
