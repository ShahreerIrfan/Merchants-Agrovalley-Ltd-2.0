"use client";

import React from "react";
import { motion } from "framer-motion";
import HeroContent from "./HeroContent";
import BusinessCategoryStrip from "./BusinessCategoryStrip";

export default function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden flex flex-col justify-between min-h-[640px] sm:min-h-[720px] lg:h-[calc(100vh-100px)] lg:min-h-[750px] lg:max-h-[860px] bg-[#022b1e]"
      aria-label="Merchants Agro Valley Hero"
    >
      {/* Subtle slow ambient zoom on background image */}
      <motion.div
        animate={{ scale: [1, 1.04] }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url('/images/hero-background.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
        aria-hidden="true"
      />

      {/* Primary Left-to-Right Dark Green Gradient Overlay */}
      <div
        className="absolute inset-0 z-10 pointer-events-none hero-gradient-overlay"
        aria-hidden="true"
      />

      {/* Subtle Mobile/Tablet Extra Readability Darkening Overlay */}
      <div
        className="absolute inset-0 z-10 pointer-events-none bg-[#022b1e]/40 lg:hidden"
        aria-hidden="true"
      />

      {/* Bottom Darkening Gradient Overlay for seamless blend with Category Strip */}
      <div
        className="absolute inset-0 z-10 pointer-events-none hero-bottom-overlay"
        aria-hidden="true"
      />

      {/* Main Hero Content Area */}
      <div className="relative z-20 w-full max-w-[1600px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16 flex-1 flex items-center">
        <HeroContent />
      </div>

      {/* Bottom Business Category Strip */}
      <BusinessCategoryStrip />
    </section>
  );
}
