export interface Leader {
  id: string;
  name: string;
  designation: string;
  badgeType: "primary" | "secondary";
  image: string;
  shortBio: string;
  fullBio: string;
  isChairman?: boolean;
}

export const LEADERSHIP_TEAM: Leader[] = [
  {
    id: "mohammed-h-rahman",
    name: "Mohammed H. Rahman",
    designation: "CHAIRMAN",
    badgeType: "primary",
    image: "/assets/management-leaders/01_Mohammed_H_Rahman_Chairman.webp",
    shortBio:
      "Mr. Rahman is a highly energetic management and accounting graduate with extensive knowledge in trade and corporate finance, commodities, steel and metals, land development, and precious metals mining. He is a financial analyst specializing in accounting and new business development, with more than 20 years of experience in the financial services and commodities sectors.",
    fullBio:
      "Throughout his career, he has successfully led major international investment initiatives, cross-border commercial partnerships, and large-scale agro-industrial infrastructure projects across Asia and Europe. Under his strategic vision, Merchants Agro Valley is establishing a vertically integrated agro-industrial network that sets new benchmarks for quality, corporate governance, and sustainable community prosperity.",
    isChairman: true,
  },
  {
    id: "rahat-f-chowdhury",
    name: "Rahat F. Chowdhury",
    designation: "MANAGING DIRECTOR",
    badgeType: "secondary",
    image: "/assets/management-leaders/02_Rahat_F_Chowdhury_Managing_Director.webp",
    shortBio:
      "Mr. Chowdhury brings over 20 years of extensive professional experience in property management, the hospitality sector, and corporate security services. Throughout his career, he has developed a strong and versatile business portfolio, including active involvement in import and export operations across various industries.",
    fullBio:
      "His leadership has been instrumental in optimizing supply chain infrastructure, establishing rigorous operational standards, and fostering public-private agricultural partnerships to accelerate sustainable agro-industrial development.",
  },
  {
    id: "michael-sander",
    name: "Lee Sanders",
    designation: "BUSINESS ADVISOR | UK & EUROPE",
    badgeType: "secondary",
    image: "/assets/management-leaders/03_Mr_Michael_Sander_Business_Advisor_UK_Europe.webp",
    shortBio:
      "Mr. Sander serves as a Business Advisor to British Merchants Limited, focusing on strengthening the company's international business presence and establishing strategic commercial connections across the United Kingdom and European markets. He supports cross-border opportunities, strategic partnerships, and long-term business growth.",
    fullBio:
      "With deep expertise in European regulatory frameworks, ESG compliance, and bilateral trade mechanisms, he drives Merchants Agro Valley's international expansion into Western retail and institutional distribution channels.",
  },
  {
    id: "kaikobad-mm-meah",
    name: "Kaikobad MM Meah",
    designation: "DIRECTOR",
    badgeType: "secondary",
    image: "/assets/management-leaders/04_Kaikobad_MM_Meah_Director.webp",
    shortBio:
      "Mr. Meah serves as the International Development Manager and plays a central role in expanding local and international business operations, sales performance, and service capabilities. He contributes to strengthening the company's global market presence and promoting consistently high service standards.",
    fullBio:
      "He brings comprehensive acumen in cold-chain logistics, bilateral distributor relations, and international quality certification protocols across key export corridors.",
  },
  {
    id: "mizanur-rahman-chowdhury",
    name: "Mohammed Mizanur Rahman Chowdhury",
    designation: "DIRECTOR",
    badgeType: "secondary",
    image: "/assets/management-leaders/05_Mohammed_Mizanur_Rahman_Chowdhury_Director.webp",
    shortBio:
      "Mr. Chowdhury serves as Director and Company Administrator, overseeing strategic planning, corporate governance, and overall administrative operations. He plays a key role in coordinating internal management, regulatory matters, and operational execution.",
    fullBio:
      "His expertise in corporate risk management, compliance monitoring, and statutory governance ensures that the enterprise maintains absolute integrity, fiscal discipline, and investor transparency.",
  },
  {
    id: "junior-salahuddin-sanjee",
    name: "Junior Salahuddin Sanjee",
    designation: "CHIEF EXECUTIVE OFFICER (CEO)",
    badgeType: "secondary",
    image: "/assets/management-leaders/06_Junior_Salahuddin_Sanjee_CEO.webp",
    shortBio:
      "Mr. Sanjee is a results-driven commercial leader with over 19 years of progressive experience across Telecom, Consumer Electronics, Technology, FMCG, and Enterprise Software industries. He is recognized for strategic sales transformation, market expansion, and high-performance team leadership.",
    fullBio:
      "As CEO, he steers daily operational execution, technology modernization, precision agricultural implementations, and commercial route-to-market strategies across all domestic and overseas business units.",
  },
  {
    id: "waresur-rahman",
    name: "Waresur Rahman",
    designation: "BUSINESS DEVELOPMENT MANAGER",
    badgeType: "secondary",
    image: "/assets/management-leaders/07_Waresur_Rahman_Business_Development_Manager.webp",
    shortBio:
      "Mr. Waris serves as Business Development Manager, responsible for identifying new business opportunities, developing strategic partnerships, and expanding commercial operations across domestic and international markets. He supports market presence, strategic alliances, and sustainable business growth.",
    fullBio:
      "His focused focus on market intelligence, institutional contracts, and forward procurement guarantees resilient revenue streams and value creation for farm-to-table initiatives.",
  },
];
