"use client";

import React from "react";
import { motion } from "framer-motion";
import { Eye, Target, Compass, Sparkles } from "lucide-react";

export default function VisionMissionPhilosophySection() {
  return (
    <section
      id="vision-mission-philosophy"
      aria-label="Our Vision, Mission and Core Business Philosophy"
      className="relative w-full bg-[#FAFDF6] text-[#193B28] overflow-hidden py-16 sm:py-20 lg:py-24 border-t border-[#E1ECD8]"
    >
      <div className="relative z-10 max-w-[1600px] mx-auto px-4 xs:px-6 sm:px-8 md:px-12 lg:px-14 xl:px-18">
        
        {/* SECTION HEADER */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2.5 mb-3 sm:mb-4"
          >
            <span className="w-6 h-[2.5px] bg-[#8CCF24] rounded-full inline-block" />
            <span className="text-[12px] sm:text-[13px] font-bold text-[#013D26] uppercase tracking-[0.18em] font-sans">
              PURPOSE & GUIDING PRINCIPLES
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-3xl xs:text-4xl sm:text-[42px] lg:text-[46px] font-bold leading-[1.18] tracking-tight text-[#013D26]"
          >
            Our Vision, Mission &amp;{" "}
            <span className="text-[#8CCF24] block sm:inline">
              Core Business Philosophy
            </span>
          </motion.h2>
        </div>

        {/* 1. TOP ROW: OUR VISION & OUR MISSION (2 EQUAL CARDS) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-12">
          
          {/* OUR VISION CARD */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-3xl bg-[#013D26] p-7 sm:p-9 text-white shadow-[0_12px_36px_rgba(1,61,38,0.18)] border border-[#8CCF24]/30 flex flex-col justify-between relative overflow-hidden group"
          >
            <div>
              {/* Header: Icon & Title */}
              <div className="flex items-center gap-4 mb-5">
                <div className="w-13 h-13 rounded-2xl bg-white/10 border border-[#8CCF24]/40 flex items-center justify-center p-3 text-[#8CCF24] shrink-0 group-hover:scale-105 transition-transform duration-300">
                  <Eye className="w-6 h-6 stroke-[2.2]" />
                </div>
                <h3 className="font-serif font-bold text-white text-2xl sm:text-[28px] tracking-tight">
                  Our Vision
                </h3>
              </div>

              {/* Exact Vision Statement */}
              <p className="text-white/95 text-[15.5px] sm:text-[16.5px] leading-[1.72] font-normal">
                To become one of Bangladesh&apos;s leading integrated agro-industrial enterprises, recognised for innovation, operational excellence, sustainable production, food safety and international business development.
              </p>
            </div>

            {/* Subtle bottom accent line */}
            <div className="w-20 h-[3.5px] bg-[#8CCF24] rounded-full mt-7" aria-hidden="true" />
          </motion.div>

          {/* OUR MISSION CARD */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-3xl bg-[#F2F8EC] p-7 sm:p-9 text-[#013D26] shadow-[0_8px_28px_rgba(1,61,38,0.05)] border-2 border-[#D2E7C2] hover:border-[#8CCF24] flex flex-col justify-between relative overflow-hidden transition-colors duration-300 group"
          >
            <div>
              {/* Header: Icon & Title */}
              <div className="flex items-center gap-4 mb-5">
                <div className="w-13 h-13 rounded-2xl bg-[#E2F2D4] border border-[#8CCF24]/50 flex items-center justify-center p-3 text-[#013D26] shrink-0 group-hover:scale-105 transition-transform duration-300">
                  <Target className="w-6 h-6 stroke-[2.2]" />
                </div>
                <h3 className="font-serif font-bold text-[#013D26] text-2xl sm:text-[28px] tracking-tight">
                  Our Mission
                </h3>
              </div>

              {/* Exact Mission Statement */}
              <p className="text-[#142C23]/90 text-[15.5px] sm:text-[16.5px] leading-[1.72] font-normal">
                To develop a commercially viable and environmentally responsible agro-industrial ecosystem that delivers high-quality food products, generates renewable energy, maximises agricultural resource utilisation and creates long-term value for consumers, business partners, investors and the wider community.
              </p>
            </div>

            {/* Subtle bottom accent line */}
            <div className="w-20 h-[3.5px] bg-[#013D26] rounded-full mt-7" aria-hidden="true" />
          </motion.div>

        </div>

        {/* 2. BOTTOM ROW: OUR CORE BUSINESS PHILOSOPHY */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-3xl bg-gradient-to-br from-[#FAF7EE] via-[#FDFBF5] to-[#F3F8EC] border-2 border-[#E3DAC0] shadow-[0_10px_32px_rgba(201,161,59,0.08)] p-7 sm:p-10 lg:p-12 relative overflow-hidden"
        >
          {/* Subtle top gold accent bar */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#D9A526] to-transparent" aria-hidden="true" />

          {/* Header */}
          <div className="flex items-center gap-3.5 mb-6">
            <div className="w-11 h-11 rounded-xl bg-[#EDE4CC] border border-[#D9A526]/50 flex items-center justify-center text-[#996F12] shrink-0">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11.5px] sm:text-[12px] font-bold text-[#D9A526] tracking-widest uppercase font-sans">
                GUIDING ETHOS
              </span>
              <h3 className="font-serif font-bold text-[#013D26] text-2xl sm:text-[28px] lg:text-[32px] tracking-tight">
                Our Core Business Philosophy
              </h3>
            </div>
          </div>

          {/* Philosophy Paragraphs */}
          <div className="space-y-4 max-w-5xl text-[#2F4438] text-[15.5px] sm:text-[16.5px] leading-[1.78]">
            <p>
              At Merchants AgroValley Ltd., we believe that the future of agriculture lies in integration, innovation and sustainability. By connecting farming, feed production, livestock management, food processing, renewable energy and export-oriented operations, we aim to minimise waste, optimise resources and maximise productivity across the entire value chain.
            </p>
            <p>
              We are committed to adopting modern technology, maintaining stringent hygiene and quality standards, developing skilled human resources and building strong relationships with farmers, suppliers, distributors, institutional buyers and international trading partners.
            </p>
          </div>

          {/* Highlighted Tagline Card */}
          <div className="mt-8 sm:mt-10 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#013D26] via-[#054D32] to-[#013D26] border border-[#D9A526]/60 shadow-[0_6px_22px_rgba(1,61,38,0.2)] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-9 h-9 rounded-full bg-[#8CCF24]/20 border border-[#8CCF24]/60 flex items-center justify-center text-[#8CCF24] shrink-0">
                <Sparkles className="w-4 h-4" />
              </div>
              <p className="font-sans font-bold text-white text-[15px] sm:text-[16.5px] tracking-wide">
                Merchants AgroValley Ltd. – Growing Agriculture, Empowering Industry and Nourishing the Future.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
