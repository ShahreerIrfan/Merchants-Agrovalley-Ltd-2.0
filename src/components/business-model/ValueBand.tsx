"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ValueBand() {
  return (
    <div className="relative w-full overflow-hidden mt-4 sm:mt-6 lg:mt-8">
      {/* 1. Organic Flowing Curved Top Edge with Rich Gold Stroke matching Reference Image 2 */}
      <div className="w-full h-8 sm:h-10 lg:h-12 relative -mb-[1px] z-10">
        <svg
          viewBox="0 0 1440 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full preserve-3d"
          preserveAspectRatio="none"
        >
          <path
            d="M0 48C280 20 540 10 720 28C900 44 1180 18 1440 16V48H0Z"
            fill="#03381E"
          />
          <path
            d="M0 48C280 20 540 10 720 28C900 44 1180 18 1440 16"
            stroke="#C89B35"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* 2. Unified Dark Green Banner with Ambient Farmland Background */}
      <div className="relative bg-[#03381E] text-white pt-6 pb-12 sm:pt-8 sm:pb-14 lg:pt-8 lg:pb-16 px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 overflow-hidden">
        {/* Subtle Farmland / Tea Garden Background Image softly emerging along the bottom */}
        <div
          className="absolute inset-0 pointer-events-none select-none overflow-hidden"
          aria-hidden="true"
        >
          <Image
            src="/assets/integrated-business-model/images/footer-agricultural-landscape.webp"
            alt=""
            fill
            sizes="100vw"
            priority={false}
            className="object-cover object-bottom"
          />
          {/* Deep Green Gradient Overlay ensuring perfect contrast & seamless integration */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#03381E] via-[#03381E]/92 to-[#03381E]/75" />
        </div>

        {/* 3. Four Feature Blocks with Standalone Gold Icons & Vertical Dividers */}
        <div className="relative z-10 max-w-[1500px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 items-center">
          {/* ITEM 1: 4 Regional Development Phases */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="flex items-center gap-4 lg:pr-8 xl:pr-10 lg:border-r lg:border-[#C89B35]/35 group"
          >
            <div className="w-10 h-10 xl:w-12 xl:h-12 shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Image
                src="/assets/integrated-business-model/icons/svg/strategic-development.svg"
                alt=""
                width={46}
                height={46}
                className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(200,155,53,0.4)]"
              />
            </div>
            <div className="flex items-center gap-3">
              <span className="font-serif font-extrabold text-white text-3xl sm:text-4xl xl:text-[42px] leading-none shrink-0">
                4
              </span>
              <span className="text-white text-[13.5px] xl:text-[14.5px] font-bold leading-tight uppercase tracking-wider sm:tracking-normal sm:normal-case whitespace-pre-line">
                Regional{"\n"}Development Phases
              </span>
            </div>
          </motion.div>

          {/* ITEM 2: 1 Connected Supply Chain */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
            className="flex items-center gap-4 lg:px-8 xl:px-10 lg:border-r lg:border-[#C89B35]/35 group"
          >
            <div className="w-10 h-10 xl:w-12 xl:h-12 shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Image
                src="/assets/integrated-business-model/icons/svg/connected-supply-chain.svg"
                alt=""
                width={46}
                height={46}
                className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(200,155,53,0.4)]"
              />
            </div>
            <div className="flex items-center gap-3">
              <span className="font-serif font-extrabold text-white text-3xl sm:text-4xl xl:text-[42px] leading-none shrink-0">
                1
              </span>
              <span className="text-white text-[13.5px] xl:text-[14.5px] font-bold leading-tight uppercase tracking-wider sm:tracking-normal sm:normal-case whitespace-pre-line">
                Connected{"\n"}Supply Chain
              </span>
            </div>
          </motion.div>

          {/* ITEM 3: Circular Resource Recovery */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.16, ease: "easeOut" }}
            className="flex items-center gap-4 lg:px-8 xl:px-10 lg:border-r lg:border-[#C89B35]/35 group"
          >
            <div className="w-10 h-10 xl:w-12 xl:h-12 shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Image
                src="/assets/integrated-business-model/icons/svg/circular-resource-recovery.svg"
                alt=""
                width={46}
                height={46}
                className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(200,155,53,0.4)]"
              />
            </div>
            <span className="text-white text-[13.5px] xl:text-[14.5px] font-semibold leading-snug whitespace-pre-line">
              Circular Resource{"\n"}Recovery — Biogas &{"\n"}Organic Bio-Fertilizer
            </span>
          </motion.div>

          {/* ITEM 4: Solar Energy & Global Export Ambition */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.24, ease: "easeOut" }}
            className="flex items-center gap-4 lg:pl-8 xl:pl-10 group"
          >
            <div className="w-11 h-11 xl:w-13 xl:h-13 shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Image
                src="/assets/integrated-business-model/icons/svg/solar-energy-global-export.svg"
                alt=""
                width={48}
                height={48}
                className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(200,155,53,0.4)]"
              />
            </div>
            <span className="text-white text-[13.5px] xl:text-[14.5px] font-semibold leading-snug whitespace-pre-line">
              Solar Energy &{"\n"}Global Export{"\n"}Ambition
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
