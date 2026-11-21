export interface NavItem {
  name: string;
  href: string;
  hasDropdown?: boolean;
  isActive?: boolean;
  dropdownItems?: {
    name: string;
    href: string;
    description?: string;
  }[];
}

export const NAV_ITEMS: NavItem[] = [
  {
    name: "Home",
    href: "#",
    isActive: true,
  },
  {
    name: "About Us",
    href: "#about",
    hasDropdown: true,
    dropdownItems: [
      {
        name: "Corporate Profile",
        href: "#corporate-profile",
        description: "Leading agro-industrial conglomerate in Bangladesh",
      },
      {
        name: "Vision, Mission & Values",
        href: "#vision-mission",
        description: "Sustainable nourishment and global market excellence",
      },
      {
        name: "Board of Directors",
        href: "#leadership",
        description: "Visionary industry pioneers and executives",
      },
      {
        name: "Milestones & Heritage",
        href: "#history",
        description: "Decades of agricultural development and innovation",
      },
    ],
  },
  {
    name: "Our Businesses",
    href: "#businesses",
    hasDropdown: true,
    dropdownItems: [
      {
        name: "Poultry & Eggs",
        href: "#poultry-eggs",
        description: "Integrated breeding, hatcheries and commercial poultry",
      },
      {
        name: "Cattle & Dairy",
        href: "#cattle-dairy",
        description: "Modern dairy farming, genetics and milk processing",
      },
      {
        name: "Goat & Duck",
        href: "#goat-duck",
        description: "Commercial pastoral farming and high-yield genetics",
      },
      {
        name: "Fish & Aquaculture",
        href: "#fish-aquaculture",
        description: "Freshwater aquaculture and advanced hatchery systems",
      },
      {
        name: "Food Processing",
        href: "#food-processing",
        description: "Value-added agro-food production and packaging",
      },
      {
        name: "Renewable Energy",
        href: "#renewable-energy",
        description: "Biogas, solar agro-voltaics and circular energy",
      },
      {
        name: "Cold Chain & Export",
        href: "#cold-chain-export",
        description: "Temperature-controlled logistics and global trade",
      },
    ],
  },
  {
    name: "Sustainability",
    href: "#sustainability",
  },
  {
    name: "Quality & Compliance",
    href: "#quality-compliance",
  },
  {
    name: "Export & Trade",
    href: "#export-trade",
  },
  {
    name: "Media",
    href: "#media",
    hasDropdown: true,
    dropdownItems: [
      {
        name: "Press Releases",
        href: "#press-releases",
        description: "Latest announcements and corporate news",
      },
      {
        name: "Photo & Video Gallery",
        href: "#gallery",
        description: "High-tech facility tours and agricultural harvest",
      },
      {
        name: "Publications & Reports",
        href: "#reports",
        description: "Annual reports and agro-economic research",
      },
    ],
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
