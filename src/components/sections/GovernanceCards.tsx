"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { COMPANY_PROFILE_DATA } from "@/data/companyProfile";

export default function GovernanceCards() {
  const { governanceCards } = COMPANY_PROFILE_DATA;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7 lg:gap-8">
      {governanceCards.map((card, index) => (
        <motion.div
          key={card.id}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{
            duration: 0.55,
            delay: index * 0.12,
            ease: "easeOut",
          }}
          className="group relative bg-white border border-[#D9ECC9] hover:border-[#68A617]/70 rounded-[20px] p-5 sm:p-7 lg:p-8 shadow-[0_6px_24px_rgba(1,61,38,0.05)] hover:shadow-[0_16px_36px_rgba(1,61,38,0.11)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
        >
          {/* Card Content Row: Icon & Text (Responsive flex on small screens) */}
          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5">
            {/* 76px x 76px Icon Container */}
            <div className="w-[62px] h-[62px] sm:w-[76px] sm:h-[76px] shrink-0 rounded-2xl bg-[#013D26] border-2 border-[#68A617] flex items-center justify-center p-3.5 sm:p-4 shadow-sm group-hover:shadow-md transition-shadow">
              <Image
                src={card.iconPath}
                alt={`${card.title} icon`}
                width={40}
                height={40}
                className="w-full h-full object-contain brightness-0 invert"
              />
            </div>

            {/* Heading & Description */}
            <div className="flex-1">
              <h3 className="font-sans font-bold text-[#013D26] text-[18px] sm:text-[21px] lg:text-[22px] leading-snug mb-2 group-hover:text-[#08713D] transition-colors">
                {card.title}
              </h3>
              <p className="text-[#013D26]/85 text-[14px] sm:text-[15px] lg:text-[15.5px] leading-relaxed">
                {card.description}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
