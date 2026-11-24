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
      className={`sticky top-0 z-50 w-full bg-gradient-to-r from-[#FAF7EE] via-[#FDFBF4] to-[#F2F6E9] border-b border-[#E0D8BE] transition-all duration-300 ${
        scrolled
          ? "shadow-[0_4px_24px_rgba(6,78,50,0.08)] backdrop-blur-md"
          : "shadow-[0_2px_14px_rgba(6,78,50,0.04)]"
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
      {/* MAIN NAVBAR CONTAINER (BALANCED DESKTOP & MOBILE HEIGHTS)  */}
      {/* ========================================================= */}
      <div className="relative z-10 w-full max-w-[1780px] mx-auto px-3.5 sm:px-6 lg:px-8 xl:px-10 h-[64px] sm:h-[72px] lg:h-[86px] xl:h-[90px] flex items-center justify-between">
        
        {/* LEFT — LOGO AREA (Proportional, clean, uncluttered background) */}
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
              className="h-[38px] xs:h-[42px] sm:h-[48px] lg:h-[58px] xl:h-[62px] w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
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

          {/* Premium Forest-Green CTA Button (Visible on Mobile & Desktop) */}
          <MagneticButton>
            <Link
              href="#contact"
              className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#064E32] hover:bg-[#003F29] text-white font-semibold text-[12px] xs:text-[12.5px] sm:text-[13.5px] xl:text-[14px] px-3 sm:px-4.5 xl:px-5 py-1.5 sm:py-2.5 rounded-full border border-[#D9A526]/40 hover:border-[#D9A526] shadow-[0_2px_8px_rgba(6,78,50,0.18)] hover:shadow-[0_4px_16px_rgba(217,165,38,0.3)] transition-all duration-300 group focus:outline-hidden focus:ring-2 focus:ring-[#D9A526]"
            >
              <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white transition-transform duration-300 group-hover:scale-110 shrink-0" />
              <span className="hidden xs:inline">Get in Touch</span>
              <span className="xs:hidden">Contact</span>
            </Link>
          </MagneticButton>

          {/* Mobile / Tablet Hamburger Button with Refined Rounded Container */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-2 text-[#064E32] bg-[#064E32]/6 hover:bg-[#064E32]/12 border border-[#064E32]/15 rounded-lg transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#064E32] min-w-[38px] min-h-[38px] sm:min-w-[42px] sm:min-h-[42px] flex items-center justify-center cursor-pointer shadow-2xs"
            aria-label="Open mobile navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
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
