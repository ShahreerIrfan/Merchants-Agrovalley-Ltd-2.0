export interface PortfolioCategory {
  id: string;
  title: string;
  iconPath: string;
}

export interface ValueCard {
  id: string;
  title: string;
  description: string;
  iconPath: string;
}

export const AGRO_PORTFOLIO_DATA = {
  header: {
    eyebrow: "OUR AGRO PORTFOLIO",
    headingPart1: "Commercial Rearing, Hygienic Processing &",
    headingPart2: "Global Trade",
    intro:
      "An integrated farm-to-market model combining commercial livestock, poultry and aquaculture operations with hygienic processing centres. Our export objective is the UK, Europe and Middle East, supported by professional farm management, sanitary processing, subzero cold-chain logistics and cross-border trade finance.",
  },

  feature: {
    imagePath: "/images/agro-farm-portfolio.webp",
    imageAlt: "BritAsia Agro Portfolio - Integrated Modern Farm Facility",
    headingPart1: "One Integrated",
    headingAccent: "Farm-to-Market",
    headingPart2: "Portfolio",
    description:
      "Combining responsible farming, modern processing and export-ready logistics to deliver safe, high-quality protein from Bangladesh to international markets.",
    categories: [
      {
        id: "livestock",
        title: "Livestock",
        iconPath: "/icons/livestock.svg",
      },
      {
        id: "poultry",
        title: "Poultry",
        iconPath: "/icons/poultry.svg",
      },
      {
        id: "aquaculture",
        title: "Aquaculture",
        iconPath: "/icons/aquaculture.svg",
      },
    ] as PortfolioCategory[],
  },

  coreValues: {
    heading: "Our Core Value System",
    subheading:
      "Uncompromising Quality, Ethical Husbandry & Unbroken Cold-Chain Logistics",
    items: [
      {
        id: "cold-chain",
        title: "Cold Chain Integrity",
        description:
          "Cryogenic blast freezing, unbroken reefer transit and real-time digital temperature telemetry.",
        iconPath: "/icons/cold-chain.svg",
      },
      {
        id: "ethical-husbandry",
        title: "Ethical Husbandry",
        description:
          "Natural and biosecure stress-free ventilated rearing, natural forage and verified biosecurity buffers.",
        iconPath: "/icons/ethical-husbandry.svg",
      },
      {
        id: "institutional-quality",
        title: "Institutional Quality",
        description:
          "Veterinary health certification, microbial profiling and destination-market food safety directives.",
        iconPath: "/icons/institutional-quality.svg",
      },
    ] as ValueCard[],
  },

  visionMission: {
    vision: {
      title: "Our Vision",
      iconPath: "/icons/vision.svg",
      statement:
        "To become one of Bangladesh's leading integrated agro-industrial enterprises, recognised for innovation, operational excellence, sustainable production, food safety and international business development.",
    },
    mission: {
      title: "Our Mission",
      iconPath: "/icons/mission.svg",
      statement:
        "To develop a commercially viable and environmentally responsible agro-industrial ecosystem that delivers high-quality food products, generates renewable energy, maximises agricultural resource utilisation and creates long-term value for consumers, business partners, investors and the wider community.",
      bullets: [
        "Commercially viable livestock, poultry and fish farms",
        "Hygiene and food-safety controls",
        "Dependable, traceable supply chain",
        "Export capabilities aligned with UK and European markets",
        "Long-term buyer partnerships",
        "Rural employment and responsible resource stewardship",
      ],
    },
  },
};
