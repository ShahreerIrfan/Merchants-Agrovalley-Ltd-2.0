import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const phaseCategories = [
  {
    name: "Phase-01: Agro-Industrial Base",
    slug: "/phase-01",
    description: "Layer Chicken Aviaries, Automated Feed Mill, Biogas Cogeneration, Solar PV & Bio-Fertilizer.",
  },
  {
    name: "Phase-02: Commercial Livestock",
    slug: "/phase-02",
    description: "Commercial Feedlot Cattle Farming, Beef Processing & Automated Commercial Dairy.",
  },
  {
    name: "Phase-03: Sylhet Regional Verticals",
    slug: "/phase-03",
    description: "Black Bengal Goat Breeding, Halal Abattoir, Wetland Duck Rearing & Commercial Aquaculture.",
  },
  {
    name: "Phase-04: Poultry Breeding Hatchery",
    slug: "/phase-04",
    description: "Multi-Stage Automated Setters, In-Ovo Vaccination & Day-Old Chick (DOC) Distribution.",
  },
];

async function main() {
  console.log("=== Creating Phase-01 to Phase-04 Categories ===");
  // Clear any existing categories first
  await prisma.category.deleteMany({});
  
  for (const cat of phaseCategories) {
    const created = await prisma.category.create({
      data: cat,
    });
    console.log(`[Created] ${created.name} (${created.slug})`);
  }

  const all = await prisma.category.findMany({
    orderBy: { slug: "asc" },
  });
  console.log(`\n=== Total Categories in DB: ${all.length} ===`);
  console.table(all);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
