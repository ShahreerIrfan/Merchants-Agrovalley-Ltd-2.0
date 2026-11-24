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
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-gradient-to-r from-[#FFFDF2] via-[#F8FCF0] to-[#EEF7E6] border-b border-[#D9A526]/30 transition-all duration-300 ${
        scrolled
          ? "shadow-[0_4px_24px_rgba(6,78,50,0.08)] backdrop-blur-md"
          : "shadow-[0_2px_16px_rgba(6,78,50,0.04)]"
      }`}
    >
      {/* ========================================================= */}
      {/* SUBTLE ORGANIC FOLIAGE (DESKTOP ONLY — ZERO OVERLAP)      */}
      {/* ========================================================= */}

      {/* 1. Subtle Left Leaves — Far outer edge only, strictly outside logo zone */}
      <div
        className="hidden md:block absolute left-0 top-0 bottom-0 w-[55px] lg:w-[75px] xl:w-[85px] pointer-events-none select-none z-0 overflow-hidden opacity-50"
        aria-hidden="true"
      >
        <Image
          src="/assets/navbar/navbar-left-leaves.png"
          alt=""
          fill
          sizes="(max-width: 1200px) 75px, 85px"
          className="object-contain object-left pointer-events-none"
          priority
        />
      </div>

      {/* 2. Subtle Right Leaves — Far corner only, strictly outside CTA button */}
      <div
        className="hidden md:block absolute right-0 top-0 w-[45px] lg:w-[65px] xl:w-[75px] h-full pointer-events-none select-none z-0 overflow-hidden opacity-50"
        aria-hidden="true"
      >
        <Image
          src="/assets/navbar/navbar-right-leaves.png"
          alt=""
          fill
          sizes="(max-width: 1200px) 65px, 75px"
          className="object-contain object-right-top pointer-events-none"
          priority
        />
      </div>

      {/* ========================================================= */}
      {/* FULL-WIDTH BOTTOM ORGANIC SHAPE (GENERATED WITH NANO BANANA) */}
      {/* ========================================================= */}
      <div
        className="absolute bottom-0 left-0 right-0 w-full h-[16px] sm:h-[20px] lg:h-[24px] pointer-events-none select-none z-0 overflow-hidden"
        aria-hidden="true"
      >
        <Image
          src="/assets/navbar/navbar-bottom-full-wave.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-bottom pointer-events-none opacity-85"
          priority
        />
      </div>

      {/* ========================================================= */}
      {/* MAIN NAVBAR CONTAINER (BALANCED DESKTOP & MOBILE HEIGHTS)  */}
      {/* ========================================================= */}
      <div className="relative z-10 w-full max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 h-[66px] sm:h-[74px] lg:h-[88px] xl:h-[92px] flex items-center justify-between">
        
        {/* LEFT — LOGO AREA (Proportional, perfectly uncluttered background) */}
        <div className="flex items-center shrink-0">
          <Link
            href="/"
            className="relative block group focus:outline-hidden focus:ring-2 focus:ring-[#064E32] rounded-lg"
            aria-label="Merchants Agro Valley Home"
          >
            <Image
              src="/logo/merchants-agro-valley-emblem.png"
              alt="Merchants Agro Valley Emblem Logo"
              width={168}
              height={94}
              priority
              className="h-[38px] xs:h-[42px] sm:h-[50px] lg:h-[58px] xl:h-[62px] w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </Link>

          {/* Subtle Vertical Gold Separator */}
          <div
            className="hidden xl:block h-7 w-[1.5px] bg-[#D9A526]/40 ml-5 mr-3 shrink-0"
            aria-hidden="true"
          />
        </div>

        {/* CENTER — NAVIGATION LINKS (Desktop: 14–15px, Forest Green / Deep Green Active Pill) */}
        <nav
          className="hidden lg:flex items-center justify-center space-x-1 xl:space-x-1.5 2xl:space-x-2"
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
                className={`relative flex items-center gap-1.5 py-2 px-2.5 xl:px-3 2xl:px-3.5 rounded-full text-[13.5px] xl:text-[14px] 2xl:text-[14.5px] whitespace-nowrap transition-all duration-200 focus:outline-hidden focus:ring-2 focus:ring-[#064E32] ${
                  isActive
                    ? "bg-[#003F29] text-white font-semibold shadow-[0_2px_8px_rgba(0,63,41,0.25)]"
                    : "text-[#064E32] hover:text-[#003F29] hover:bg-[#064E32]/8 font-medium"
                }`}
              >
                <IconComponent
                  className={`w-4 h-4 shrink-0 transition-colors duration-200 ${
                    isActive ? "text-white" : "text-[#064E32] group-hover:text-[#003F29]"
                  }`}
                />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* RIGHT — CTA BUTTON & MOBILE HAMBURGER */}
        <div className="flex items-center shrink-0 space-x-2 sm:space-x-3.5">
          {/* Subtle Vertical Gold Separator before CTA */}
          <div
            className="hidden xl:block h-7 w-[1.5px] bg-[#D9A526]/40 mr-1 shrink-0"
            aria-hidden="true"
          />

          {/* Premium Forest-Green CTA Button with Subtle Gold Hover Accent */}
          <MagneticButton>
            <Link
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 bg-[#064E32] hover:bg-[#003F29] text-white font-semibold text-[13.5px] xl:text-[14px] px-4.5 xl:px-5 py-2 sm:py-2.5 rounded-full border border-transparent hover:border-[#D9A526] shadow-[0_2px_8px_rgba(6,78,50,0.18)] hover:shadow-[0_4px_16px_rgba(217,165,38,0.3)] transition-all duration-300 group focus:outline-hidden focus:ring-2 focus:ring-[#D9A526]"
            >
              <Mail className="w-4 h-4 text-white transition-transform duration-300 group-hover:scale-110" />
              <span>Get in Touch</span>
            </Link>
          </MagneticButton>

          {/* Mobile / Tablet Hamburger Toggle (Clean, aligned on right) */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-2 text-[#064E32] hover:bg-[#064E32]/10 rounded-full transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#064E32] min-w-[40px] min-h-[40px] flex items-center justify-center cursor-pointer"
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
