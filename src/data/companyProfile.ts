export interface GovernanceCard {
  id: string;
  number: string;
  title: string;
  description: string;
  iconPath: string;
}

export interface CapabilityItem {
  id: string;
  title: string;
  iconPath: string;
}

export const COMPANY_PROFILE_DATA = {
  eyebrow: "COMPANY PROFILE & GOVERNANCE",
  heading: {
    line1: "Our Company Profile",
    line2: "& Governance",
  },
  introduction:
    "Merchants Agro Valley is a Bangladesh-based integrated agro-industrial enterprise, combining trading excellence with large-scale agricultural production, livestock, food processing and international trade. Built on strong corporate governance and industry experience, we are developing a modern, vertically integrated agro ecosystem to serve domestic and global markets.",

  governanceCards: [
    {
      id: "operational-integrity",
      number: "01",
      title: "Operational Integrity",
      description:
        "Reliable operations, zero default record and transparent commercial accountability.",
      iconPath: "/icons/operational-integrity.svg",
    },
    {
      id: "banking-trade-finance",
      number: "02",
      title: "Banking & Trade Finance",
      description:
        "Strong institutional banking relationships and structured L/C facilities.",
      iconPath: "/icons/banking-trade-finance.svg",
    },
    {
      id: "statutory-governance",
      number: "03",
      title: "Statutory Governance",
      description:
        "A duly registered company with a comprehensive commercial charter, tax identification and bonded trade permissions.",
      iconPath: "/icons/statutory-governance.svg",
    },
  ] as GovernanceCard[],

  strategicEvolution: {
    headingPart1: "Strategic Evolution into a",
    headingAccent: "Modern Agro-Industry",
    description:
      "Leveraging our established trading networks, we are deploying substantial capital into vertically integrated agro-farming, automated processing and export cold chains to serve discerning buyers in the UK, Europe, GCC and international markets.",
    imagePath: "/images/agro-industrial-facility.webp",
    imageAlt:
      "Merchants Agro Valley Modern Agro-Industrial Facility with advanced silo infrastructure and processing plants",
  },

  capabilities: [
    {
      id: "integrated-production",
      title: "Vertically Integrated\nProduction & Processing",
      iconPath: "/icons/integrated-production.svg",
    },
    {
      id: "food-safety-quality",
      title: "International-Standard\nFood Safety & Quality",
      iconPath: "/icons/food-safety-quality.svg",
    },
    {
      id: "export-logistics",
      title: "Export-Ready\nCold Chain & Logistics",
      iconPath: "/icons/export-logistics.svg",
    },
  ] as CapabilityItem[],

  buttons: {
    primary: {
      text: "Our Corporate Profile",
      href: "#corporate-profile",
    },
    secondary: {
      text: "Company Overview",
      href: "#overview",
    },
  },

  decor: {
    leafAccent: "/decor/top-right-leaf-accent.svg",
    bottomWave: "/decor/bottom-organic-wave.svg",
  },
};
