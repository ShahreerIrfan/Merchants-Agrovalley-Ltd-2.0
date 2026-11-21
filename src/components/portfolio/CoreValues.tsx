"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { AGRO_PORTFOLIO_DATA } from "@/data/agroPortfolio";

export default function CoreValues() {
  const { coreValues } = AGRO_PORTFOLIO_DATA;

  return (
    <div className="pt-4">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-center max-w-3xl mx-auto mb-10 sm:mb-12"
      >
        <h3 className="font-serif font-bold text-[#013D26] text-[28px] sm:text-[34px] lg:text-[38px] leading-[1.2] mb-2 tracking-tight">
          {coreValues.heading}
        </h3>
        <p className="text-[#68A617] font-semibold text-[14.5px] sm:text-[16px] tracking-wide">
          {coreValues.subheading}
        </p>
      </motion.div>

      {/* Three Equal Core Value Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
        {coreValues.items.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: "easeOut",
            }}
            className="group bg-white border border-[#E4EDE2] hover:border-[#68A617]/70 rounded-[20px] p-7 sm:p-8 shadow-[0_6px_24px_rgba(1,61,38,0.05)] hover:shadow-[0_16px_36px_rgba(1,61,38,0.11)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col"
          >
            {/* SVG Icon Container */}
            <div className="w-[58px] h-[58px] rounded-2xl bg-[#F1F8E8] border border-[#68A617]/35 flex items-center justify-center p-3 mb-5 group-hover:scale-105 transition-transform duration-300">
              <Image
                src={card.iconPath}
                alt={`${card.title} icon`}
                width={38}
                height={38}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Title */}
            <h4 className="font-bold text-[#013D26] text-[20px] sm:text-[21px] leading-snug mb-3 group-hover:text-[#08713D] transition-colors">
              {card.title}
            </h4>

            {/* Description */}
            <p className="text-[#013D26]/85 text-[14.5px] sm:text-[15px] leading-relaxed flex-1">
              {card.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
