import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* Sticky Premium Navbar */}
      <Navbar />

      {/* Full-width Hero Section with Background, Overlay, Content and Category Strip */}
      <HeroSection />
    </main>
  );
}
