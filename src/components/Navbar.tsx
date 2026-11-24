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
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-gradient-to-r from-[#FFFDF4] via-[#F9FCF2] to-[#F0F7E9] border-b border-[#D9A526]/30 transition-all duration-300 ${
        scrolled
          ? "shadow-[0_4px_24px_rgba(6,78,50,0.08)] backdrop-blur-md"
          : "shadow-[0_2px_16px_rgba(6,78,50,0.04)]"
      }`}
    >
      {/* ========================================================= */}
      {/* SUBTLE ORGANIC DECORATIVE ACCENTS (STRICT: ZERO CLUTTER)  */}
      {/* ========================================================= */}

      {/* 1. Subtle Left Foliage — Far extreme edge, strictly outside logo zone */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[60px] sm:w-[75px] lg:w-[90px] pointer-events-none select-none z-0 overflow-hidden opacity-60"
        aria-hidden="true"
      >
        <Image
          src="/assets/navbar/navbar-left-leaves.png"
          alt=""
          fill
          sizes="90px"
          className="object-contain object-left pointer-events-none"
          priority
        />
      </div>

      {/* 2. Subtle Right Foliage — Far extreme corner, strictly outside CTA button */}
      <div
        className="absolute right-0 top-0 w-[50px] sm:w-[65px] lg:w-[80px] h-full pointer-events-none select-none z-0 overflow-hidden opacity-60"
        aria-hidden="true"
      >
        <Image
          src="/assets/navbar/navbar-right-leaves.png"
          alt=""
          fill
          sizes="80px"
          className="object-contain object-right-top pointer-events-none"
          priority
        />
      </div>

      {/* 3. Thin Organic Wave — Subtle green-and-gold bottom hairline accent */}
      <div
        className="absolute bottom-0 right-0 w-[35%] sm:w-[28%] lg:w-[22%] max-w-[380px] h-[12px] lg:h-[15px] pointer-events-none select-none z-0 overflow-hidden opacity-50"
        aria-hidden="true"
      >
        <Image
          src="/assets/navbar/navbar-bottom-right-wave.svg"
          alt=""
          fill
          sizes="380px"
          className="object-contain object-right-bottom pointer-events-none"
          priority
        />
      </div>

      {/* ========================================================= */}
      {/* MAIN NAVBAR CONTAINER (85–95px Desktop Height)            */}
      {/* ========================================================= */}
      <div className="relative z-10 w-full max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 h-[85px] sm:h-[88px] lg:h-[92px] flex items-center justify-between">
        
        {/* LEFT — LOGO AREA (Clean, uncluttered background) */}
        <div className="flex items-center shrink-0 pl-1 sm:pl-2">
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
              className="h-[52px] sm:h-[58px] lg:h-[62px] w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
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
        <div className="flex items-center shrink-0 space-x-3 sm:space-x-4">
          {/* Subtle Vertical Gold Separator before CTA */}
          <div
            className="hidden xl:block h-7 w-[1.5px] bg-[#D9A526]/40 mr-1 shrink-0"
            aria-hidden="true"
          />

          {/* Premium Forest-Green CTA Button with Subtle Gold Hover Accent */}
          <MagneticButton>
            <Link
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 bg-[#064E32] hover:bg-[#003F29] text-white font-semibold text-[14px] px-5 py-2.5 rounded-full border border-transparent hover:border-[#D9A526] shadow-[0_2px_8px_rgba(6,78,50,0.18)] hover:shadow-[0_4px_16px_rgba(217,165,38,0.3)] transition-all duration-300 group focus:outline-hidden focus:ring-2 focus:ring-[#D9A526]"
            >
              <Mail className="w-4 h-4 text-white transition-transform duration-300 group-hover:scale-110" />
              <span>Get in Touch</span>
            </Link>
          </MagneticButton>

          {/* Mobile / Tablet Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-2 text-[#064E32] hover:bg-[#064E32]/10 rounded-full transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#064E32] min-w-[42px] min-h-[42px] flex items-center justify-center cursor-pointer"
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
