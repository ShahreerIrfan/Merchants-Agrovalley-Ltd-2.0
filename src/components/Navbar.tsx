"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Users,
  Briefcase,
  Package,
  Leaf,
  HeartHandshake,
  ShieldCheck,
  Heart,
  Mail,
  Menu,
} from "lucide-react";
import { motion } from "framer-motion";
import { NAV_ITEMS } from "@/data/navigation";
import MobileMenu from "./MobileMenu";
import MagneticButton from "./animations/MagneticButton";

const NAV_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Home: Home,
  Users: Users,
  Briefcase: Briefcase,
  Package: Package,
  Leaf: Leaf,
  HeartHandshake: HeartHandshake,
  ShieldCheck: ShieldCheck,
  Heart: Heart,
};

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 pointer-events-none px-2 sm:px-4 lg:px-6 xl:px-8 ${
        scrolled ? "pt-2 pb-1 sm:pt-2.5 sm:pb-1.5" : "pt-2.5 pb-2 sm:pt-3.5 sm:pb-2.5"
      }`}
    >
      {/* CAPSULE NAVBAR CONTAINER */}
      <div className="relative max-w-[1740px] mx-auto rounded-full overflow-hidden border border-[#DFD6BD]/90 shadow-[0_8px_32px_rgba(15,45,25,0.09),0_2px_8px_rgba(0,0,0,0.04)] bg-gradient-to-r from-[#FAF6E8] via-[#FDF9EE] to-[#EFF6E3] pointer-events-auto h-[68px] sm:h-[74px] lg:h-[78px] xl:h-[82px] flex items-center justify-between px-3 sm:px-5 lg:px-5 xl:px-7 select-none">
        
        {/* ========================================================= */}
        {/* BACKGROUND DECORATIVE ASSETS (STRICT: NO FILTERS / CLEAN) */}
        {/* ========================================================= */}

        {/* 1. Left Decorative Foliage */}
        <div className="absolute left-0 top-0 bottom-0 w-[140px] sm:w-[170px] lg:w-[200px] xl:w-[220px] 2xl:w-[240px] h-full pointer-events-none z-0">
          <Image
            src="/assets/navbar/navbar-left-leaves.png"
            alt=""
            fill
            sizes="(max-width: 768px) 140px, (max-width: 1200px) 200px, 240px"
            className="object-contain object-left pointer-events-none"
            priority
          />
        </div>

        {/* 2. Bottom-Right Wave Accent */}
        <div className="absolute bottom-0 right-0 w-[55%] sm:w-[48%] lg:w-[42%] xl:w-[38%] max-w-[700px] h-[34px] sm:h-[40px] lg:h-[44px] pointer-events-none z-0">
          <Image
            src="/assets/navbar/navbar-bottom-right-wave.svg"
            alt=""
            fill
            sizes="(max-width: 768px) 55vw, (max-width: 1200px) 42vw, 700px"
            className="object-contain object-right-bottom pointer-events-none"
            priority
          />
        </div>

        {/* 3. Right Decorative Foliage */}
        <div className="absolute right-0 top-0 w-[110px] sm:w-[130px] lg:w-[150px] xl:w-[170px] h-full pointer-events-none z-0">
          <Image
            src="/assets/navbar/navbar-right-leaves.png"
            alt=""
            fill
            sizes="(max-width: 768px) 110px, (max-width: 1200px) 150px, 170px"
            className="object-contain object-right-top pointer-events-none"
            priority
          />
        </div>

        {/* ========================================================= */}
        {/* FOREGROUND CONTENT LAYER (Z-10) */}
        {/* ========================================================= */}

        {/* LEFT — EMBLEM LOGO & GOLDEN DIVIDER */}
        <div className="relative z-10 flex items-center shrink-0 pl-1 sm:pl-2">
          <Link
            href="/"
            className="relative block group focus:outline-hidden focus:ring-2 focus:ring-[#00452C] rounded-lg"
            aria-label="Merchants Agro Valley Home"
          >
            <Image
              src="/logo/merchants-agro-valley-emblem.png"
              alt="Merchants Agro Valley Emblem Logo"
              width={160}
              height={90}
              priority
              className="h-[46px] xs:h-[50px] sm:h-[56px] lg:h-[60px] xl:h-[64px] w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </Link>

          {/* Subtle Golden Accent Divider */}
          <div
            className="hidden lg:block h-7 xl:h-8 w-[1.5px] bg-[#D7CFA7] ml-3 xl:ml-4 mr-1 xl:mr-2 shrink-0"
            aria-hidden="true"
          />
        </div>

        {/* CENTER — NAVIGATION LINKS WITH ICONS (DESKTOP) */}
        <nav
          className="relative z-10 hidden lg:flex items-center space-x-0.5 xl:space-x-1 2xl:space-x-1.5"
          aria-label="Main Navigation"
        >
          {NAV_ITEMS.map((item) => {
            const IconComponent = NAV_ICONS[item.iconName] || Home;
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : item.href.startsWith("/#")
                ? false
                : item.href.startsWith("/")
                ? pathname === item.href || pathname.startsWith(item.href + "/")
                : false;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative flex items-center gap-1.5 py-1.5 xl:py-2 px-2 xl:px-2.5 2xl:px-3.5 rounded-full text-[12px] xl:text-[13px] 2xl:text-[13.5px] font-semibold whitespace-nowrap transition-all duration-200 focus:outline-hidden focus:ring-2 focus:ring-[#00452C] ${
                  isActive
                    ? "bg-[#00452C] text-white shadow-[0_2px_12px_rgba(0,69,44,0.3)]"
                    : "text-[#00452C] hover:text-[#08713D] hover:bg-[#00452C]/6"
                }`}
              >
                <IconComponent
                  className={`w-3.5 h-3.5 xl:w-4 xl:h-4 shrink-0 transition-colors duration-200 ${
                    isActive ? "text-white" : "text-[#00452C] group-hover:text-[#08713D]"
                  }`}
                />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* RIGHT — GOLDEN DIVIDER, CTA BUTTON & MOBILE TOGGLE */}
        <div className="relative z-10 flex items-center shrink-0 space-x-2 sm:space-x-3">
          {/* Subtle Golden Accent Divider */}
          <div
            className="hidden lg:block h-7 xl:h-8 w-[1.5px] bg-[#D7CFA7] mr-1 xl:mr-2 shrink-0"
            aria-hidden="true"
          />

          {/* Golden Amber Gradient CTA Button */}
          <MagneticButton>
            <Link
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-[#E59300] via-[#EFA318] to-[#F3B329] hover:from-[#D98700] hover:to-[#EAA418] text-white font-semibold text-[12.5px] xl:text-[13.5px] px-4 xl:px-5 py-2 sm:py-2.5 rounded-full shadow-[0_4px_16px_rgba(229,147,0,0.32)] hover:shadow-[0_6px_22px_rgba(229,147,0,0.45)] hover:scale-[1.02] transition-all duration-300 group focus:outline-hidden focus:ring-2 focus:ring-[#E59300]"
            >
              <Mail className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-white transition-transform duration-300 group-hover:scale-110" />
              <span>Get in Touch</span>
            </Link>
          </MagneticButton>

          {/* Mobile / Tablet Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-2 text-[#00452C] hover:bg-[#00452C]/10 rounded-full transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#00452C] min-w-[40px] min-h-[40px] flex items-center justify-center cursor-pointer"
            aria-label="Open mobile navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </header>
  );
}
