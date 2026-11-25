import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const newProducts = [
  {
    commodityName: "Automated Chicken Hatchery & Breeder Management",
    slug: "/chicken-hatchery-breeder",
    division: "Poultry & Avian",
    cardBadgeText: "Poultry Genetics",
    description: "Commercial chicken hatchery in Chattogram producing 1.2M disease-free Day-Old Chicks (DOC) monthly with automated setters, in-ovo vaccination, and climate-controlled delivery.",
    image: "/services/hatchery/primary.jpg",
    displayOrder: 5,
    status: "ACTIVE",
    breedSpeciesVariety: "Commercial Layer & Broiler Grandparent/Parent Stock, Salmonella-Free Pedigree",
    farmingHusbandryMethod: "Positive Air Pressure Breeder Housing, HEPA Filtration, Shower-In Biosecurity",
    processingColdChainTech: "Microprocessor Multi-Stage Setters & Hatchers, Automated In-Ovo Vaccination",
    cutsPackagingFormats: "Pasgar Scored (>9) Day-Old Chicks (DOC) in Ventilated Delivery Boxes",
    certificationsStandards: "Serological Disease Free Certification, Strict Quarantine Buffer Accreditation",
    exportLogisticsShipping: "Dedicated Fleet of Temperature-Ventilated Chick Delivery Vehicles Across Bangladesh",
    lifecycleImages: {
      step1: "/services/hatchery/step1.jpg",
      step1Title: "Parent Stock Rearing",
      step1Desc: "Isolated breeder sheds with automated climate control and balanced parent nutrition.",
      step2: "/services/hatchery/step2.jpg",
      step2Title: "Disinfection & Candling",
      step2Desc: "Automated egg fumigation, weight calibration & acoustic/optical candling.",
      step3: "/services/hatchery/step3.jpg",
      step3Title: "Multi-Stage Setters",
      step3Desc: "Computerized incubation controlling temperature, humidity, and egg turning cycles.",
      step4: "/services/hatchery/step4.jpg",
      step4Title: "In-Ovo Vaccination",
      step4Desc: "Automated sterile embryo injection delivering early disease immunity.",
      step5: "/services/hatchery/step5.jpg",
      step5Title: "DOC Grading & Transit",
      step5Desc: "Pasgar scoring, automated counting & temperature-controlled delivery vans."
    }
  },
  {
    commodityName: "Automated Industrial Feed Milling Plant",
    slug: "/feed-milling-plant",
    division: "Industrial Nutrition",
    cardBadgeText: "Animal Nutrition",
    description: "Industrial-scale automated feed mill in Chattogram manufacturing customized extruded and pelleted feeds for poultry, cattle, fish, and small ruminants to achieve complete feed security.",
    image: "/services/feed-mill/primary.jpg",
    displayOrder: 8,
    status: "ACTIVE",
    breedSpeciesVariety: "Poultry, Ruminant, Aqua & Dairy Feed Formulations",
    farmingHusbandryMethod: "Computerized Loss-in-Weight Micro-Ingredient Batching, SCADA Process Automation",
    processingColdChainTech: "Double-Pass Steam Conditioning, Die Extrusion, Counterflow Cooling",
    cutsPackagingFormats: "Automated 50kg Moisture-Proof Bagging with Robotic Palletizing",
    certificationsStandards: "Near-Infrared (NIR) Tested, Aflatoxin HPLC Assayed, BSTI BDS Standards",
    exportLogisticsShipping: "Covered Fleet Transport, Bulk Silo Storage (180,000 MT/Year Output)",
    lifecycleImages: {
      step1: "/services/feed-mill/step1.jpg",
      step1Title: "Raw Material Intake",
      step1Desc: "Pneumatic unloading, rotary drum pre-cleaning & aerated grain storage silos.",
      step2: "/services/feed-mill/step2.jpg",
      step2Title: "Cleaning & Grinding",
      step2Desc: "High-speed hammer mills with magnetic separators ensuring uniform particle size.",
      step3: "/services/feed-mill/step3.jpg",
      step3Title: "Formula Batching",
      step3Desc: "Microprocessor-controlled multi-scale dosing matching life-stage nutritional curves.",
      step4: "/services/feed-mill/step4.jpg",
      step4Title: "Pelleting & Cooling",
      step4Desc: "Steam conditioning, die extrusion & counterflow cooling for optimum hardness.",
      step5: "/services/feed-mill/step5.jpg",
      step5Title: "Bagging & Logistics",
      step5Desc: "Automated 50kg bagging with robotic palletizing and covered fleet transport."
    }
  },
  {
    commodityName: "Biogas & Waste-to-Energy Cogeneration Plant",
    slug: "/biogas-waste-to-energy",
    division: "Renewable Energy",
    cardBadgeText: "Circular Ecology",
    description: "Continuous anaerobic CSTR digestion complex converting farm manure, poultry litter, and agro-processing effluents into 2.5 MW green power, process steam, and pathogen-free bio-fertilizer base.",
    image: "/services/biogas/primary.jpg",
    displayOrder: 9,
    status: "ACTIVE",
    breedSpeciesVariety: "Mesophilic Methanogenesis (38°C) Organic Digestate Bio-Nutrients",
    farmingHusbandryMethod: "Continuous Automated Substrate Feeding (5,000 m³/Day), Computerized VFA Telemetry",
    processingColdChainTech: "Biological H2S Desulfurization (<50 ppm), Jenbacher CHP Biogas Engines",
    cutsPackagingFormats: "Decanter Centrifuge Separated Liquid Bio-Effluent & High-Solid Organic Cake",
    certificationsStandards: "42,000 tCO2e/Yr Methane Abatement, ISO 14001 ESG Environmental Standards",
    exportLogisticsShipping: "Zero-Grid Dependency On-Site Power Distribution to Feed Mill & Cold Storage",
    lifecycleImages: {
      step1: "/services/biogas/step1.jpg",
      step1Title: "Feedstock Collection",
      step1Desc: "Continuous scraping and slurry pumping from cattle barns and poultry sheds.",
      step2: "/services/biogas/step2.jpg",
      step2Title: "Anaerobic Digestion",
      step2Desc: "Mesophilic microbial fermentation producing biogas rich in clean methane.",
      step3: "/services/biogas/step3.jpg",
      step3Title: "Gas Conditioning",
      step3Desc: "Biological H2S scrubbing, moisture chilling, and gas dome pressure balancing.",
      step4: "/services/biogas/step4.jpg",
      step4Title: "Heat & Power (CHP)",
      step4Desc: "Biogas generators powering milling machinery while exhaust heat generates steam.",
      step5: "/services/biogas/step5.jpg",
      step5Title: "Digestate Recovery",
      step5Desc: "Decanter centrifugation separating solids for organic bio-fertilizer production."
    }
  },
  {
    commodityName: "Commercial Solar PV Plant & ESG Clean Energy",
    slug: "/commercial-solar-pv-plant",
    division: "Renewable Energy",
    cardBadgeText: "Clean Energy",
    description: "Utility-scale 2.5 MWp bifacial solar photovoltaic arrays and smart inverter substations generating 3,650,000 kWh clean renewable energy for industrial agro-processing facilities.",
    image: "/services/solar/primary.jpg",
    displayOrder: 10,
    status: "ACTIVE",
    breedSpeciesVariety: "Tier-1 Monocrystalline Bifacial PV Modules, High Monsoon Irradiance Yield",
    farmingHusbandryMethod: "Coastal-Grade Hot-Dip Galvanized & Anodized Aluminum Racking",
    processingColdChainTech: "Multi-MPPT Smart String Inverters, Automated Cloud SCADA Telemetry",
    cutsPackagingFormats: "High-Voltage Internal Farm Transformer Integration, Zero-Export Smart Meters",
    certificationsStandards: "Third-Party Audited Carbon Credits, I-REC Certified Green Kilowatt-Hours",
    exportLogisticsShipping: "Powers 70% of Daytime Industrial Operations (Feed Milling & Subzero Freezing)",
    lifecycleImages: {
      step1: "/services/solar/step1.jpg",
      step1Title: "Site Assessment",
      step1Desc: "Solar irradiance mapping, 3D shading analysis, and high-voltage grid interconnection planning.",
      step2: "/services/solar/step2.jpg",
      step2Title: "PV Installation",
      step2Desc: "Coastal-grade wind-resistant aluminum mounting frames and bifacial panel installation.",
      step3: "/services/solar/step3.jpg",
      step3Title: "Inverters & SCADA",
      step3Desc: "High-efficiency multi-MPPT string inverters and underground armored cable runs.",
      step4: "/services/solar/step4.jpg",
      step4Title: "Grid Integration",
      step4Desc: "Automated synchronization with internal farm transformers and zero-export smart meters.",
      step5: "/services/solar/step5.jpg",
      step5Title: "Maintenance & ESG",
      step5Desc: "Robotic panel cleaning, drone thermal imaging, and verified green carbon credits."
    }
  }
];

async function main() {
  console.log("=== Adjusting existing display orders to make room ===");
  // Current: Duck is 5, Fish is 6, Grocery is 10, Sugar is 11, Spices is 12, HMS is 13, Steel is 14, Fertilizer is 15, Agro is 16
  // We will place:
  // #1: Cattle
  // #2: Dairy
  // #3: Goat
  // #4: Chicken & Poultry Processing
  // #5: Chicken Hatchery & Breeder
  // #6: Duck Farming
  // #7: Fish Farming
  // #8: Feed Milling Plant
  // #9: Biogas & Waste-to-Energy
  // #10: Commercial Solar PV Plant
  // #11: Fresh Grocery
  // #12: Pure Sugar
  // #13: Natural Spices
  // #14: HMS Scrap
  // #15: Steel Rebars
  // #16: Quality Fertilizer
  // #17: Agro Corporate

  await prisma.product.updateMany({ where: { slug: "/duck-farming-processing" }, data: { displayOrder: 6 } });
  await prisma.product.updateMany({ where: { slug: "/aquaculture-fish-farming" }, data: { displayOrder: 7 } });
  await prisma.product.updateMany({ where: { slug: "/grocery" }, data: { displayOrder: 11 } });
  await prisma.product.updateMany({ where: { slug: "/sugar" }, data: { displayOrder: 12 } });
  await prisma.product.updateMany({ where: { slug: "/spices" }, data: { displayOrder: 13 } });
  await prisma.product.updateMany({ where: { slug: "/hms" }, data: { displayOrder: 14 } });
  await prisma.product.updateMany({ where: { slug: "/steel" }, data: { displayOrder: 15 } });
  await prisma.product.updateMany({ where: { slug: "/fertilizer" }, data: { displayOrder: 16 } });
  await prisma.product.updateMany({ where: { slug: "/agro" }, data: { displayOrder: 17 } });

  console.log("=== Inserting / Upserting 4 Requested Agro Objects ===");
  for (const item of newProducts) {
    const existing = await prisma.product.findUnique({ where: { slug: item.slug } });
    if (existing) {
      await prisma.product.update({
        where: { slug: item.slug },
        data: item,
      });
      console.log(`[Updated] ${item.commodityName} (${item.slug})`);
    } else {
      await prisma.product.create({
        data: item,
      });
      console.log(`[Inserted] ${item.commodityName} (${item.slug})`);
    }
  }

  const all = await prisma.product.findMany({
    select: { displayOrder: true, commodityName: true, slug: true, division: true },
    orderBy: { displayOrder: "asc" },
  });

  console.log("\n=== Current Database State (Total: " + all.length + ") ===");
  console.table(all);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
