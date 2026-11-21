import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CompanyProfileSection from "@/components/sections/CompanyProfileSection";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* Sticky Premium Navbar */}
      <Navbar />

      {/* Full-width Hero Section with Background, Overlay, Content and Category Strip */}
      <HeroSection />

      {/* Company Profile & Governance Section */}
      <CompanyProfileSection />
    </main>
  );
}
