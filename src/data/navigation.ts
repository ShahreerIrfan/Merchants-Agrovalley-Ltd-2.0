export interface NavItem {
  name: string;
  href: string;
  iconName: string;
  isActive?: boolean;
}

export const NAV_ITEMS: NavItem[] = [
  {
    name: "Home",
    href: "/",
    iconName: "Home",
    isActive: true,
  },
  {
    name: "Who We Are",
    href: "/#about",
    iconName: "Users",
  },
  {
    name: "Management",
    href: "/management",
    iconName: "Briefcase",
  },
  {
    name: "Product & Service",
    href: "#portfolio",
    iconName: "Package",
  },
  {
    name: "Environment",
    href: "#business-model",
    iconName: "Leaf",
  },
  {
    name: "Human Right",
    href: "#human-rights",
    iconName: "HeartHandshake",
  },
  {
    name: "Health & Safety",
    href: "#health-safety",
    iconName: "ShieldCheck",
  },
  {
    name: "We Love Local",
    href: "#we-love-local",
    iconName: "Heart",
  },
];

export interface BusinessCategory {
  id: string;
  name: string;
  iconPath: string;
  href: string;
}

export const BUSINESS_CATEGORIES: BusinessCategory[] = [
  {
    id: "poultry-eggs",
    name: "Poultry & Eggs",
    iconPath: "/icons/poultry-eggs.svg",
    href: "#poultry-eggs",
  },
  {
    id: "cattle-dairy",
    name: "Cattle & Dairy",
    iconPath: "/icons/cattle-dairy.svg",
    href: "#cattle-dairy",
  },
  {
    id: "goat-duck",
    name: "Goat & Duck",
    iconPath: "/icons/goat-duck.svg",
    href: "#goat-duck",
  },
  {
    id: "fish-aquaculture",
    name: "Fish & Aquaculture",
    iconPath: "/icons/fish-aquaculture.svg",
    href: "#fish-aquaculture",
  },
  {
    id: "food-processing",
    name: "Food Processing",
    iconPath: "/icons/food-processing.svg",
    href: "#food-processing",
  },
  {
    id: "renewable-energy",
    name: "Renewable Energy",
    iconPath: "/icons/renewable-energy.svg",
    href: "#renewable-energy",
  },
  {
    id: "cold-chain-export",
    name: "Cold Chain & Export",
    iconPath: "/icons/cold-chain-export.svg",
    href: "#cold-chain-export",
  },
];
