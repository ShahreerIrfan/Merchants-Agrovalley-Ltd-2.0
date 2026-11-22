"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronUp } from "lucide-react";
import { LEADERSHIP_TEAM } from "@/data/leadership";

export default function LeadershipSection() {
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const chairman = LEADERSHIP_TEAM[0];
  const otherLeaders = LEADERSHIP_TEAM.slice(1);

  return (
    <section
      id="leadership-team"
      aria-label="Our Leadership Team"
      className="relative w-full bg-[#F8F6EF] border-t-2 border-[#C9A13B]/60 py-16 sm:py-20 lg:py-24 overflow-hidden selection:bg-[#C9A13B]/20 selection:text-[#013D26] shadow-[0_-6px_24px_rgba(201,161,59,0.12)]"
    >
      {/* TOP GOLD GRADIENT ACCENT LINE */}
      <div
        className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#C9A13B]/40 via-[#C9A13B] to-[#C9A13B]/40 z-20"
        aria-hidden="true"
      />

      {/* SUBTLE CREAM / IVORY GRADIENT BACKGROUND */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 20%, rgba(255, 255, 255, 0.8) 0%, rgba(248, 246, 239, 0.95) 60%, #F3EFE4 100%)",
        }}
        aria-hidden="true"
      />

      {/* TOP-LEFT RESTRAINED DARK GREEN & GOLD CORNER SWOOSH */}
      <div
        className="absolute top-0 left-0 w-[240px] sm:w-[320px] lg:w-[420px] h-auto pointer-events-none select-none z-0 opacity-80"
        aria-hidden="true"
      >
        <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M-50 -50 C 150 20 280 140 320 300 L -50 300 Z" fill="#013D26" opacity="0.9" />
          <path d="M-50 -50 C 150 20 280 140 320 300" stroke="#C9A13B" strokeWidth="4" />
          <path d="M-40 -40 C 155 26 283 144 322 300" stroke="#E8C979" strokeWidth="1.5" opacity="0.8" />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-4 xs:px-6 sm:px-8 md:px-12 lg:px-14 xl:px-18">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          {/* Eyebrow Pill with decorative gold lines */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-3 sm:gap-4 mb-4"
          >
            <div className="w-10 sm:w-16 h-[1.5px] bg-gradient-to-r from-transparent via-[#C9A13B]/50 to-[#C9A13B]" aria-hidden="true" />
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#FAF6E9] via-[#F3EDD7] to-[#FAF6E9] border border-[#C9A13B]/60 shadow-xs">
              <div className="w-4 h-4 text-[#5EA81E] shrink-0" aria-hidden="true">
                <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full fill-[#5EA81E]/20">
                  <path d="M4 17C12 4 23 3 29 3c0 11-5 22-18 23" />
                  <path d="M5 28c6-8 12-13 21-20" />
                  <path d="M14 18c-1-5-4-8-8-9" />
                </svg>
              </div>
              <span className="text-[12px] sm:text-[13px] font-bold text-[#013D26] uppercase tracking-[0.16em] font-sans">
                OUR MANAGEMENT
              </span>
            </div>
            <div className="w-10 sm:w-16 h-[1.5px] bg-gradient-to-l from-transparent via-[#C9A13B]/50 to-[#C9A13B]" aria-hidden="true" />
          </motion.div>

          {/* Main Title */}
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl xs:text-4xl sm:text-5xl lg:text-[52px] font-bold text-[#013D26] leading-tight tracking-tight"
          >
            Our Leadership Team
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-[15px] sm:text-[16px] text-[#4A5D53] leading-relaxed mt-3.5 sm:mt-4 font-normal"
          >
            Experienced leadership guiding responsible growth, operational excellence and international business development.
          </motion.p>
        </div>

        {/* ROW 1: CHAIRMAN PROMINENT HORIZONTAL FEATURE CARD */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="max-w-4xl xl:max-w-[1020px] mx-auto mb-12 sm:mb-16"
        >
          <div className="relative rounded-2xl sm:rounded-3xl bg-white border border-[#C9A13B]/70 shadow-[0_8px_30px_rgba(1,61,38,0.06)] hover:shadow-[0_12px_40px_rgba(201,161,59,0.2)] transition-all duration-300 overflow-hidden">
            {/* Subtle Gold Globe / International Business Watermark on Right */}
            <div
              className="absolute right-0 top-0 bottom-0 w-[280px] sm:w-[360px] pointer-events-none select-none opacity-20 z-0 flex items-center justify-end pr-4"
              aria-hidden="true"
            >
              <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto text-[#C9A13B]">
                <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 3" />
                <ellipse cx="100" cy="100" rx="45" ry="90" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 3" />
                <ellipse cx="100" cy="100" rx="90" ry="45" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 3" />
                <line x1="10" y1="100" x2="190" y2="100" stroke="currentColor" strokeWidth="1.2" />
                <line x1="100" y1="10" x2="100" y2="190" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </div>

            {/* Bottom-Right Dark Green & Gold Framing Swoosh */}
            <div
              className="absolute bottom-0 right-0 w-[180px] sm:w-[240px] pointer-events-none select-none z-0 opacity-90"
              aria-hidden="true"
            >
              <svg viewBox="0 0 240 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                <path d="M 0 100 C 80 40 160 30 240 70 L 240 100 Z" fill="#013D26" />
                <path d="M 0 100 C 80 40 160 30 240 70" stroke="#C9A13B" strokeWidth="3" />
              </svg>
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-center md:items-stretch">
              {/* Chairman Photo with Green/Gold Framing */}
              <div className="w-full md:w-[320px] lg:w-[340px] shrink-0 p-4 sm:p-5 flex items-center justify-center">
                <div className="relative w-full aspect-[4/5] max-w-[280px] md:max-w-none rounded-xl sm:rounded-2xl overflow-hidden border border-[#C9A13B]/50 shadow-md">
                  <Image
                    src={chairman.image}
                    alt={`${chairman.name} - ${chairman.designation}`}
                    fill
                    sizes="(max-width: 768px) 280px, 340px"
                    className="object-cover object-top transition-transform duration-500 hover:scale-103"
                    priority
                  />
                  {/* Subtle inner border glow */}
                  <div className="absolute inset-0 rounded-xl sm:rounded-2xl ring-1 ring-inset ring-[#C9A13B]/30 pointer-events-none" />
                </div>
              </div>

              {/* Chairman Details */}
              <div className="flex-1 p-5 sm:p-7 md:py-8 md:pr-10 flex flex-col justify-center">
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-[32px] font-bold text-[#013D26] leading-tight tracking-tight">
                  {chairman.name}
                </h3>

                {/* Designation Badge */}
                <div className="mt-2.5 mb-4">
                  <span className="inline-block px-3.5 py-1 rounded-full bg-[#013D26] text-white text-[11.5px] sm:text-[12px] font-bold tracking-[0.14em] uppercase shadow-xs">
                    {chairman.designation}
                  </span>
                </div>

                {/* Biography */}
                <p className="font-sans text-[13.5px] sm:text-[14.5px] text-[#2C4035] leading-relaxed">
                  {chairman.shortBio}
                </p>

                {/* Expanded Biography */}
                <AnimatePresence>
                  {expandedCards[chairman.id] && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="font-sans text-[13.5px] sm:text-[14.5px] text-[#2C4035] leading-relaxed pt-3 border-t border-gray-100 mt-3">
                        {chairman.fullBio}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* See More Button */}
                <div className="mt-5">
                  <button
                    onClick={() => toggleExpand(chairman.id)}
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#013D26] hover:bg-[#075B38] text-white text-[12px] font-semibold transition-all duration-200 shadow-xs hover:shadow-md cursor-pointer group"
                    aria-expanded={expandedCards[chairman.id]}
                  >
                    <span>{expandedCards[chairman.id] ? "See Less" : "See More"}</span>
                    {expandedCards[chairman.id] ? (
                      <ChevronUp className="w-3.5 h-3.5 text-white" />
                    ) : (
                      <ArrowRight className="w-3.5 h-3.5 text-white transition-transform duration-200 group-hover:translate-x-0.5" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ROWS 2 & 3: THREE COLUMNS GRID FOR THE REMAINING 6 LEADERS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-7">
          {otherLeaders.map((leader, index) => {
            const isExpanded = expandedCards[leader.id];

            return (
              <motion.div
                key={leader.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.1 * index }}
                className="flex flex-col h-full"
              >
                <div className="relative rounded-2xl bg-white border border-[#C9A13B]/60 shadow-[0_4px_18px_rgba(1,61,38,0.04)] hover:shadow-[0_8px_28px_rgba(201,161,59,0.18)] hover:-translate-y-1 transition-all duration-300 flex flex-col h-full overflow-hidden p-3.5 xs:p-4 sm:p-4.5">
                  <div className="flex flex-row gap-3.5 sm:gap-4 items-start">
                    {/* Leader Portrait */}
                    <div className="relative w-[115px] xs:w-[125px] sm:w-[130px] aspect-[4/5] shrink-0 rounded-xl overflow-hidden border border-[#C9A13B]/45 shadow-xs bg-[#EAE7DC]">
                      <Image
                        src={leader.image}
                        alt={`${leader.name} - ${leader.designation}`}
                        fill
                        sizes="130px"
                        className="object-cover object-top transition-transform duration-500 hover:scale-104"
                      />
                    </div>

                    {/* Name, Designation & Bio */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-[16px] xs:text-[17px] sm:text-[18px] font-bold text-[#013D26] leading-snug">
                        {leader.name}
                      </h3>

                      {/* Designation Badge */}
                      <div className="mt-1.5 mb-2.5">
                        <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#F7F2E2] border border-[#C9A13B]/40 text-[#7C5A14] text-[10px] sm:text-[10.5px] font-bold tracking-[0.08em] uppercase">
                          {leader.designation}
                        </span>
                      </div>

                      {/* Short Bio */}
                      <p className="font-sans text-[12px] sm:text-[12.5px] text-[#3D5246] leading-relaxed line-clamp-4">
                        {leader.shortBio}
                      </p>
                    </div>
                  </div>

                  {/* Expanded Bio within same card */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden mt-3 pt-3 border-t border-gray-100"
                      >
                        <p className="font-sans text-[12px] sm:text-[12.5px] text-[#3D5246] leading-relaxed">
                          {leader.fullBio}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* See More Button */}
                  <div className="mt-3 pt-2 flex justify-start">
                    <button
                      onClick={() => toggleExpand(leader.id)}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#013D26] hover:bg-[#075B38] text-white text-[11px] font-semibold transition-all duration-200 shadow-2xs hover:shadow-xs cursor-pointer group"
                      aria-expanded={isExpanded}
                    >
                      <span>{isExpanded ? "See Less" : "See More"}</span>
                      {isExpanded ? (
                        <ChevronUp className="w-3 h-3 text-white" />
                      ) : (
                        <ArrowRight className="w-3 h-3 text-white transition-transform duration-200 group-hover:translate-x-0.5" />
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
