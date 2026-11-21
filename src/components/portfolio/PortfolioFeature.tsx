"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { AGRO_PORTFOLIO_DATA } from "@/data/agroPortfolio";

export default function PortfolioFeature() {
  const { feature } = AGRO_PORTFOLIO_DATA;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 xl:gap-12 items-center">
      {/* LEFT COLUMN: Farm Image with Rounded Crop & Image Reveal on Scroll */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 25 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative flex flex-col h-full min-h-[300px] sm:min-h-[360px] lg:min-h-[380px]"
        data-cursor="image"
      >
        {/* Main Image Container */}
        <div className="relative w-full h-full min-h-[300px] sm:min-h-[360px] lg:min-h-0 rounded-[22px] sm:rounded-[26px] overflow-hidden shadow-[0_12px_36px_rgba(1,61,38,0.08)] border border-[#E4EDE2] z-10 group">
          <Image
            src={feature.imagePath}
            alt={feature.imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority={false}
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
        </div>

        {/* Lime-green corner accent hugging bottom-left curve */}
        <div
          className="absolute -bottom-2 -left-2 w-28 sm:w-36 h-14 sm:h-18 border-b-[5px] border-l-[5px] border-[#68A617] rounded-bl-[28px] sm:rounded-bl-[32px] pointer-events-none z-0"
          aria-hidden="true"
        />
      </motion.div>

      {/* RIGHT COLUMN: Editorial Copy & 3 Clean Categories with Vertical Dividers */}
      <motion.div
        initial={{ opacity: 0, x: 25 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col justify-center h-full"
      >
        {/* Heading */}
        <h3 className="font-serif font-bold text-[#013D26] text-[28px] sm:text-[34px] lg:text-[38px] leading-[1.16] tracking-tight">
          <span>{feature.headingPart1} </span>
          <span className="text-[#68A617]">{feature.headingAccent} </span>
          <span>{feature.headingPart2}</span>
        </h3>

        {/* Thin Divider Line under Heading */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="w-full h-[1.5px] bg-[#68A617]/35 mt-3 mb-4 origin-left"
          aria-hidden="true"
        />

        {/* Supporting Copy */}
        <p className="text-[#013D26] text-[14.5px] sm:text-[15.5px] lg:text-[16px] leading-[1.68] font-normal mb-8 text-pretty">
          {feature.description}
        </p>

        {/* Three Portfolio Categories */}
        <div className="flex flex-row items-center justify-between w-full py-2">
          {feature.categories.map((cat, index) => {
            const isLast = index === feature.categories.length - 1;

            return (
              <React.Fragment key={cat.id}>
                {/* Category Column */}
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="flex-1 flex flex-col items-center text-center px-2 group cursor-default"
                  data-cursor="hover"
                >
                  {/* Category SVG Icon */}
                  <div className="w-[42px] h-[42px] sm:w-[46px] sm:h-[46px] mb-2 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <Image
                      src={cat.iconPath}
                      alt={cat.title}
                      width={44}
                      height={44}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Title */}
                  <span className="font-bold text-[15px] sm:text-[16px] text-[#013D26] group-hover:text-[#68A617] transition-colors duration-200">
                    {cat.title}
                  </span>
                </motion.div>

                {/* Thin Vertical Divider between categories */}
                {!isLast && (
                  <div
                    className="w-[1px] h-12 bg-gray-200 shrink-0 self-center mx-1 sm:mx-2"
                    aria-hidden="true"
                  />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
