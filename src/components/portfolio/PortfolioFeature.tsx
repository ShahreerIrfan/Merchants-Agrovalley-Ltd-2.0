"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { AGRO_PORTFOLIO_DATA } from "@/data/agroPortfolio";

export default function PortfolioFeature() {
  const { feature } = AGRO_PORTFOLIO_DATA;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 xl:gap-14 items-center">
      {/* LEFT COLUMN: Farm Image with Rounded Crop & Lime-green corner accent */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative flex flex-col h-full min-h-[300px] sm:min-h-[380px] lg:min-h-[420px]"
      >
        {/* Main Image Container */}
        <div className="relative w-full h-full min-h-[300px] sm:min-h-[380px] lg:min-h-0 rounded-[22px] sm:rounded-[26px] overflow-hidden shadow-[0_12px_36px_rgba(1,61,38,0.08)] border border-[#E4EDE2] z-10 group">
          <Image
            src={feature.imagePath}
            alt={feature.imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority={false}
            className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
          />
        </div>

        {/* Lime-green corner accent hugging bottom-left curve */}
        <div
          className="absolute -bottom-2 -left-2 w-28 sm:w-36 h-14 sm:h-18 border-b-[5px] border-l-[5px] border-[#68A617] rounded-bl-[28px] sm:rounded-bl-[32px] pointer-events-none z-0"
          aria-hidden="true"
        />
      </motion.div>

      {/* RIGHT COLUMN: Editorial Copy & Three Portfolio Categories */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        className="flex flex-col justify-center h-full"
      >
        {/* Heading */}
        <h3 className="font-serif font-bold text-[#013D26] text-[28px] sm:text-[34px] lg:text-[38px] leading-[1.16] tracking-tight">
          <span>{feature.headingPart1} </span>
          <span className="text-[#68A617]">{feature.headingAccent} </span>
          <span>{feature.headingPart2}</span>
        </h3>

        {/* Thin Divider Line under Heading */}
        <div
          className="w-full h-[1.5px] bg-[#68A617]/35 mt-3 mb-4"
          aria-hidden="true"
        />

        {/* Supporting Copy */}
        <p className="text-[#013D26] text-[15px] sm:text-[16px] lg:text-[16.5px] leading-[1.7] font-normal mb-7 text-pretty">
          {feature.description}
        </p>

        {/* Three Portfolio Categories (Livestock, Poultry, Aquaculture) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4">
          {feature.categories.map((cat) => (
            <div
              key={cat.id}
              className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl bg-[#F1F8E8] border border-[#E4EDE2] hover:border-[#68A617]/60 hover:shadow-sm transition-all duration-300 group"
            >
              {/* Category SVG Icon */}
              <div className="w-[36px] h-[36px] shrink-0 flex items-center justify-center p-1 rounded-lg bg-white shadow-2xs group-hover:scale-105 transition-transform">
                <Image
                  src={cat.iconPath}
                  alt={cat.title}
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Title */}
              <span className="font-bold text-[15px] sm:text-[15.5px] text-[#013D26] group-hover:text-[#08713D] transition-colors">
                {cat.title}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
