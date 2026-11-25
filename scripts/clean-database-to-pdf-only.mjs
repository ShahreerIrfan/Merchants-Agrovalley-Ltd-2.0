import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("=== 1. Deleting non-PDF commodities from database ===");
  const nonPdfSlugs = ["/grocery", "/sugar", "/spices", "/hms", "/steel"];
  
  const deleteResult = await prisma.product.deleteMany({
    where: {
      slug: {
        in: nonPdfSlugs,
      },
    },
  });
  console.log(`Deleted ${deleteResult.count} non-PDF commodities.`);

  console.log("=== 2. Updating Bio-Fertilizer to exact PDF specs & extracted images ===");
  const existingFertilizer = await prisma.product.findFirst({
    where: {
      OR: [
        { slug: "/fertilizer" },
        { slug: "/organic-bio-fertilizer" }
      ]
    }
  });

  const bioFertilizerData = {
    commodityName: "Organic Bio-Fertilizer Granulation Plant",
    slug: "/organic-bio-fertilizer",
    division: "Agro Eco-Fertilizer",
    cardBadgeText: "Organic Bio-Fertilizer",
    description: "Closing the loop of circular agro ecosystem in Chattogram converting digested organic solids from biogas plants into BSTI BDS 1450 certified granular bio-fertilizer.",
    image: "/services/bio-fertilizer/primary.jpg",
    status: "ACTIVE",
    breedSpeciesVariety: "Humic-Rich Organic Matter (>45%), Trichoderma & Nitrogen-Fixing Inoculants",
    farmingHusbandryMethod: "Continuous Rotary Drum Granulation, Liquid Bio-Binder Agglomeration (2-4mm)",
    processingColdChainTech: "Counterflow Rotary Thermal Drying (<12% Moisture), Heat-Sanitized Pathogen Free",
    cutsPackagingFormats: "Moisture-Proof 50kg Bag Packing with Automated Stitching",
    certificationsStandards: "BSTI BDS 1450 Certified Organic Formulation, ISO 9001 Quality Assured",
    exportLogisticsShipping: "Direct Regional Logistics Fleet, 35,000 MT/Year Industrial Output",
    lifecycleImages: {
      step1: "/services/bio-fertilizer/step1.jpg",
      step1Title: "Digestate Reception",
      step1Desc: "Intake of separated solid bio-solids, moisture testing, and pre-fermentation conditioning.",
      step2: "/services/bio-fertilizer/step2.jpg",
      step2Title: "Formulation Blending",
      step2Desc: "Incorporation of rock phosphate, dolomite, and neem cake for balanced N-P-K ratios.",
      step3: "/services/bio-fertilizer/step3.jpg",
      step3Title: "Drum Granulation",
      step3Desc: "Rotary pan agglomeration with liquid bio-binder forming calibrated 2–4mm round pellets.",
      step4: "/services/bio-fertilizer/step4.jpg",
      step4Title: "Drying & Sieving",
      step4Desc: "Thermal rotary drum drying, vibratory screening, and microbial inoculation spray.",
      step5: "/services/bio-fertilizer/step5.jpg",
      step5Title: "Bagging & Dispatch",
      step5Desc: "Moisture-proof 50kg bag packing with automated stitching and regional logistics fleet."
    }
  };

  if (existingFertilizer) {
    await prisma.product.update({
      where: { id: existingFertilizer.id },
      data: bioFertilizerData
    });
    console.log("Updated Fertilizer to Organic Bio-Fertilizer Granulation Plant.");
  } else {
    await prisma.product.create({
      data: bioFertilizerData
    });
    console.log("Created Organic Bio-Fertilizer Granulation Plant.");
  }

  console.log("=== 3. Re-ordering display orders sequentially (1 to 12) ===");
  const orderedSlugs = [
    "/cattle-farming-beef",
    "/commercial-dairy-farming",
    "/goat-farming-halal-mutton",
    "/chicken-poultry-processing",
    "/chicken-hatchery-breeder",
    "/duck-farming-processing",
    "/aquaculture-fish-farming",
    "/feed-milling-plant",
    "/biogas-waste-to-energy",
    "/commercial-solar-pv-plant",
    "/organic-bio-fertilizer",
    "/agro"
  ];

  for (let i = 0; i < orderedSlugs.length; i++) {
    await prisma.product.updateMany({
      where: { slug: orderedSlugs[i] },
      data: { displayOrder: i + 1 }
    });
  }

  const finalProducts = await prisma.product.findMany({
    select: { displayOrder: true, commodityName: true, slug: true, division: true, image: true },
    orderBy: { displayOrder: "asc" }
  });

  console.log(`\n=== FINAL PRODUCTS IN DATABASE (${finalProducts.length} total) ===`);
  console.table(finalProducts);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
