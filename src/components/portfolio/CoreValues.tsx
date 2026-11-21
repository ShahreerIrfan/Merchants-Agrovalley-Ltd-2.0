"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { AGRO_PORTFOLIO_DATA } from "@/data/agroPortfolio";

export default function CoreValues() {
  const { coreValues } = AGRO_PORTFOLIO_DATA;

  return (
    <div className="pt-2">
      {/* Header: Title | Subtitle in single sleek row (Reference Match) */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col md:flex-row items-start md:items-center mb-8 sm:mb-9 gap-2 md:gap-0"
      >
        <h3 className="font-serif font-bold text-[#013D26] text-[26px] sm:text-[30px] lg:text-[32px] leading-tight shrink-0 tracking-tight">
          {coreValues.heading}
        </h3>
        <span
          className="hidden md:inline-block w-[1.5px] h-6 bg-gray-300/80 mx-5 shrink-0"
          aria-hidden="true"
        />
        <p className="text-[#013D26]/90 font-medium text-[14.5px] sm:text-[15.5px] leading-snug">
          {coreValues.subheading}
        </p>
      </motion.div>

      {/* Three Equal Core Value Cards with Horizontal Internal Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
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
            className="group bg-white border border-[#D9ECC9] hover:border-[#68A617] rounded-[18px] p-5 sm:p-6 shadow-[0_6px_20px_rgba(1,61,38,0.04)] hover:shadow-[0_14px_32px_rgba(104,166,23,0.13)] hover:-translate-y-1 transition-all duration-300 flex items-start gap-4 sm:gap-4.5"
          >
            {/* Left: Soft Lime-Green Icon Tile */}
            <div className="w-[60px] h-[60px] sm:w-[66px] sm:h-[66px] rounded-[16px] bg-[#EBF6DF] border border-[#68A617]/25 flex items-center justify-center p-3.5 shrink-0 group-hover:scale-105 transition-transform duration-300">
              <Image
                src={card.iconPath}
                alt={`${card.title} icon`}
                width={38}
                height={38}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Right: Title & Description */}
            <div className="flex-1">
              <h4 className="font-bold text-[#013D26] text-[17.5px] sm:text-[18.5px] leading-snug mb-1.5 group-hover:text-[#68A617] transition-colors">
                {card.title}
              </h4>
              <p className="text-[#013D26]/80 text-[13.5px] sm:text-[14px] leading-relaxed">
                {card.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
