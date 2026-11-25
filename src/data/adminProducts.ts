export interface AdminProductRecord {
  id: string;
  image: string;
  commodityName: string;
  slug: string;
  division: string;
  category: string;
  description: string;
  displayOrder: number;
  status: "Active on Site" | "Inactive";
}

export const ADMIN_PRODUCTS_DATA: AdminProductRecord[] = [
  {
    id: "prod-1",
    commodityName: "Cattle Farming, Processing & Export Division",
    slug: "/cattle-farming-beef",
    division: "Agro Livestock",
    category: "Livestock & Meat",
    description:
      "Commercial cattle feedlot fattening, 100% certified Halal abattoir dressing, individual RFID traceability, and cryogenic cold-chain beef export.",
    displayOrder: 1,
    status: "Active on Site",
    image: "/assets/admin/products/cattle-farming.jpg",
  },
  {
    id: "prod-2",
    commodityName: "Commercial Dairy Farming & Hygienic Milk Division",
    slug: "/commercial-dairy-farming",
    division: "Dairy & Milk",
    category: "Dairy Products",
    description:
      "Selective dairy herd breeding, continuous rotary milking platform, rapid 4°C plate chilling, pasteurization, and aseptic dairy distribution.",
    displayOrder: 2,
    status: "Active on Site",
    image: "/assets/admin/products/dairy-farming.jpg",
  },
  {
    id: "prod-3",
    commodityName: "Goat Farming, Mutton Processing & Export Division",
    slug: "/goat-farming-halal-mutton",
    division: "Small Ruminants",
    category: "Livestock & Meat",
    description:
      "Purebred Black Bengal goat breeding on elevated slatted housing, certified Islamic Halal butchering, and fresh chilled mutton air-freighted to GCC destinations.",
    displayOrder: 3,
    status: "Active on Site",
    image: "/assets/admin/products/goat-farming.jpg",
  },
  {
    id: "prod-4",
    commodityName: "Chicken & Poultry Processing Division",
    slug: "/chicken-poultry-processing",
    division: "Poultry & Avian",
    category: "Poultry & Waterfowl",
    description:
      "Climate-controlled tunnel-ventilated housing, automated evisceration, certified zero-antibiotic diet, and -40°C cryogenic IQF blast-frozen Grade-A chicken portions.",
    displayOrder: 4,
    status: "Active on Site",
    image: "/assets/admin/products/chicken-poultry.jpg",
  },
  {
    id: "prod-5",
    commodityName: "Duck Farming & Avian Processing Division",
    slug: "/duck-farming-processing",
    division: "Waterfowl Division",
    category: "Poultry & Waterfowl",
    description:
      "Free-range foraging in natural Haor wetland pastures, natural aquatic nutrition, specialized wax defeathering, and calibrated whole export ducks.",
    displayOrder: 5,
    status: "Active on Site",
    image: "/assets/admin/products/duck-farming.jpg",
  },
  {
    id: "prod-6",
    commodityName: "Fish Farming & Aquaculture Processing Division",
    slug: "/aquaculture-fish-farming",
    division: "Fisheries & Marine",
    category: "Fisheries",
    description:
      "Scientific aerated freshwater earthen ponds, probiotic limnological management, automated filleting, Modified Atmosphere Packaging (MAP), and EU/US-FDA compliance.",
    displayOrder: 6,
    status: "Active on Site",
    image: "/assets/admin/products/fish-aquaculture.jpg",
  },
  {
    id: "prod-7",
    commodityName: "Fresh Grocery & Grains",
    slug: "/grocery",
    division: "Bulk Commodities",
    category: "Food Commodities",
    description:
      "High-grade bulk rice, pulses, wheat, and essential food staples sourced from verified farming belts with strict quality grading.",
    displayOrder: 7,
    status: "Active on Site",
    image: "/assets/admin/products/fresh-grocery.jpg",
  },
  {
    id: "prod-8",
    commodityName: "Pure Sugar",
    slug: "/sugar",
    division: "Bulk Commodities",
    category: "Food Commodities",
    description:
      "Clean refined cane sugar and raw crystal sugar meeting stringent ICUMSA 45 food-grade specifications for industrial and retail use.",
    displayOrder: 8,
    status: "Active on Site",
    image: "/assets/admin/products/pure-sugar.jpg",
  },
  {
    id: "prod-9",
    commodityName: "Natural Spices",
    slug: "/spices",
    division: "Bulk Commodities",
    category: "Food Commodities",
    description:
      "Aromatic whole and ground turmeric, chili, coriander, ginger, and cumin rich in natural essential oils and authentic culinary aroma.",
    displayOrder: 9,
    status: "Active on Site",
    image: "/assets/admin/products/natural-spices.png",
  },
];

export const DIVISIONS_LIST = [
  "All Divisions",
  "Agro Livestock",
  "Dairy & Milk",
  "Small Ruminants",
  "Poultry & Avian",
  "Waterfowl Division",
  "Fisheries & Marine",
  "Bulk Commodities",
];

export const CATEGORIES_LIST = [
  "All Categories",
  "Livestock & Meat",
  "Dairy Products",
  "Poultry & Waterfowl",
  "Fisheries",
  "Food Commodities",
];
