"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CapabilityCardData } from "@/data/businessModel";

interface CapabilityCardProps {
  card: CapabilityCardData;
  index: number;
}

export default function CapabilityCard({ card, index }: CapabilityCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -5 }}
      data-cursor="card"
      className="group bg-white border border-[#E4EDE2] hover:border-[#C89B35] rounded-[18px] sm:rounded-[20px] p-5 sm:p-6 shadow-[0_4px_20px_rgba(1,61,38,0.04)] hover:shadow-[0_12px_32px_rgba(200,155,53,0.15)] transition-all duration-300 flex items-start gap-4 sm:gap-4.5 cursor-default"
    >
      {/* Dark Green Circle Icon Tile */}
      <div className="w-[52px] h-[52px] sm:w-[58px] sm:h-[58px] shrink-0 rounded-full flex items-center justify-center p-0.5 group-hover:scale-108 transition-transform duration-300 shadow-2xs">
        <Image
          src={card.iconPath}
          alt={`${card.title} icon`}
          width={58}
          height={58}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Title & Description */}
      <div className="flex-1">
        <h3 className="font-sans font-bold text-[#013D26] text-[17px] sm:text-[18px] leading-snug mb-1.5 group-hover:text-[#075B38] transition-colors">
          {card.title}
        </h3>
        <p className="text-[#013D26]/80 text-[13.5px] sm:text-[14px] leading-relaxed">
          {card.description}
        </p>
      </div>
    </motion.div>
  );
}
