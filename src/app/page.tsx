import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CompanyProfileSection from "@/components/sections/CompanyProfileSection";
import AgroPortfolioSection from "@/components/portfolio/AgroPortfolioSection";
import BusinessModelSection from "@/components/business-model/BusinessModelSection";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col bg-white overflow-x-clip">
      {/* Sticky Premium Navbar */}
      <Navbar />

      {/* Full-width Hero Section with Background, Overlay, Content and Category Strip */}
      <HeroSection />

      {/* Company Profile & Governance Section */}
      <CompanyProfileSection />

      {/* BritAsia Agro Portfolio Section */}
      <AgroPortfolioSection />

      {/* Our Integrated Business Model Section */}
      <BusinessModelSection />
    </main>
  );
}
