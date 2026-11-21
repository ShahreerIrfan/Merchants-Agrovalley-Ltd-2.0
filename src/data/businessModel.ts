export interface CapabilityCardData {
  id: string;
  title: string;
  description: string;
  iconPath: string;
}

export interface EcosystemStageData {
  number: string;
  title: string;
  imagePath: string;
  description: string;
}

export interface BottomBandItem {
  id: string;
  stat?: string;
  title: string;
  iconPath: string;
}

export const BUSINESS_MODEL_DATA = {
  header: {
    eyebrow: "OUR INTEGRATED BUSINESS MODEL",
    headingLine1: "A Connected Farm-to-Market",
    headingLine2: "Agro-Industrial Ecosystem",
    intro:
      "BritAsia Limited is developing a vertically integrated operating model connecting animal nutrition, responsible farming, hygienic processing, subzero cold-chain logistics and international trade.",
    farmlandImage:
      "/assets/integrated-business-model/images/top-right-farmland-decoration.webp",
  },

  leftCapabilities: [
    {
      id: "feed-security",
      title: "Feed Security",
      description:
        "In-house feed production for poultry, cattle, fish and small ruminants.",
      iconPath:
        "/assets/integrated-business-model/icons/svg/feed-security.svg",
    },
    {
      id: "extrusion-pelleting",
      title: "Extrusion & Pelleting",
      description:
        "Steam conditioning and high-temperature processing for safe, consistent feed.",
      iconPath:
        "/assets/integrated-business-model/icons/svg/extrusion-pelleting.svg",
    },
    {
      id: "precision-nutrition",
      title: "Precision Nutrition",
      description:
        "Computerized micro-ingredient batching matched to life-stage performance and health.",
      iconPath:
        "/assets/integrated-business-model/icons/svg/precision-nutrition.svg",
    },
  ] as CapabilityCardData[],

  rightCapabilities: [
    {
      id: "biosecure-husbandry",
      title: "Biosecure Husbandry",
      description:
        "Veterinary care, sanitary controls and responsible multi-species farming.",
      iconPath:
        "/assets/integrated-business-model/icons/svg/biosecure-husbandry.svg",
    },
    {
      id: "hygienic-food-safety",
      title: "Hygienic Food Safety",
      description:
        "Biosecurity barriers, automated CIP cleaning and quality assurance.",
      iconPath:
        "/assets/integrated-business-model/icons/svg/hygienic-food-safety.svg",
    },
    {
      id: "integrated-logistics",
      title: "Integrated Logistics",
      description:
        "Coordinated storage, refrigerated transport and export fulfillment.",
      iconPath:
        "/assets/integrated-business-model/icons/svg/integrated-logistics.svg",
    },
  ] as CapabilityCardData[],

  wheelImage:
    "/assets/integrated-business-model/images/png/ecosystem-wheel-full.png",

  stages: [
    {
      number: "01",
      title: "Feed Milling & Nutrition",
      imagePath:
        "/assets/integrated-business-model/images/jpg/feed-milling-nutrition.jpg",
      description:
        "High-capacity automated feed formulation, steam conditioning and certified nutrient blending.",
    },
    {
      number: "02",
      title: "Biosecure Farming",
      imagePath:
        "/assets/integrated-business-model/images/jpg/biosecure-farming.jpg",
      description:
        "Modern livestock, poultry, duck and aquaculture pastoral farming with veterinary oversight.",
    },
    {
      number: "03",
      title: "Hygienic Processing",
      imagePath:
        "/assets/integrated-business-model/images/jpg/hygienic-processing.jpg",
      description:
        "Sanitary meat and fish processing facilities with cold-room pre-chilling and strict QA.",
    },
    {
      number: "04",
      title: "Cryogenic Cold Chain",
      imagePath:
        "/assets/integrated-business-model/images/jpg/cryogenic-cold-chain.jpg",
      description:
        "Subzero blast freezing, continuous reefer logistics and temperature telemetry.",
    },
    {
      number: "05",
      title: "International Trade",
      imagePath:
        "/assets/integrated-business-model/images/jpg/international-trade.jpg",
      description:
        "Cross-border export compliance, L/C trade finance and bonded global distribution.",
    },
  ] as EcosystemStageData[],

  bottomBand: {
    items: [
      {
        id: "regional-development",
        stat: "4",
        title: "Regional\nDevelopment Phases",
        iconPath:
          "/assets/integrated-business-model/icons/svg/strategic-development.svg",
      },
      {
        id: "connected-supply-chain",
        stat: "1",
        title: "Connected\nSupply Chain",
        iconPath:
          "/assets/integrated-business-model/icons/svg/connected-supply-chain.svg",
      },
      {
        id: "circular-resource-recovery",
        title: "Circular Resource Recovery — Biogas & Organic Bio-Fertilizer",
        iconPath:
          "/assets/integrated-business-model/icons/svg/circular-resource-recovery.svg",
      },
      {
        id: "solar-energy-export",
        title: "Solar Energy & Global Export Ambition",
        iconPath:
          "/assets/integrated-business-model/icons/svg/solar-energy-global-export.svg",
      },
    ] as BottomBandItem[],
    backgroundImage:
      "/assets/integrated-business-model/images/footer-agricultural-landscape.webp",
  },
};
