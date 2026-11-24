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
  User,
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

// Safe storage helpers for navigation direction tracking
const STORAGE_KEY = "mav_nav_last_index";

function getStoredIndex(): number {
  if (typeof window === "undefined") return -1;
  try {
    const val = sessionStorage.getItem(STORAGE_KEY);
    return val !== null ? parseInt(val, 10) : -1;
  } catch {
    return -1;
  }
}

function setStoredIndex(idx: number) {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.setItem(STORAGE_KEY, String(idx));
  } catch {
    // ignore
  }
}

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Determine current active item index
  const currentIndex = NAV_ITEMS.findIndex((item) =>
    item.href === "/"
      ? pathname === "/"
      : item.href.startsWith("/#")
      ? false
      : item.href.startsWith("/")
      ? pathname === item.href || pathname.startsWith(item.href + "/")
      : false
  );

  // Track previous navigation index to determine horizontal direction (left vs right)
  const [prevIndex, setPrevIndex] = useState<number>(-1);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const stored = getStoredIndex();
    setPrevIndex(stored);

    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update stored index whenever currentIndex updates
  useEffect(() => {
    if (currentIndex !== -1 && isClient) {
      setStoredIndex(currentIndex);
    }
  }, [currentIndex, isClient]);

  // Determine horizontal slide animation parameters
  // delta < 0: moving from left to right (e.g. index 0 -> 2) -> came from left (-65px)
  // delta > 0: moving from right to left (e.g. index 3 -> 1) -> came from right (+65px)
  const hasDirection = isClient && prevIndex !== -1 && prevIndex !== currentIndex && currentIndex !== -1;
  const delta = hasDirection ? prevIndex - currentIndex : 0;
  const slideStartX = delta < 0 ? -75 : delta > 0 ? 75 : 0;

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-gradient-to-r from-[#FDF0BE] via-[#F3F2BA] to-[#D8F0B0] border-b-2 border-[#D4A72C] transition-all duration-300 ${
        scrolled
          ? "shadow-[0_8px_28px_rgba(160,120,20,0.22),0_2px_10px_rgba(6,78,50,0.12)] backdrop-blur-md"
          : "shadow-[0_4px_20px_rgba(180,140,20,0.16),0_2px_8px_rgba(6,78,50,0.06)]"
      }`}
    >
      {/* ========================================================= */}
      {/* SUBTLE ORGANIC FOLIAGE (DESKTOP ONLY — ZERO OVERLAP)      */}
      {/* ========================================================= */}

      {/* 1. Subtle Left Leaves — Far outer edge only, strictly outside logo zone */}
      <div
        className="hidden md:block absolute left-0 top-0 bottom-0 w-[55px] lg:w-[75px] xl:w-[85px] pointer-events-none select-none z-0 overflow-hidden opacity-60"
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
        className="hidden md:block absolute right-0 top-0 w-[45px] lg:w-[65px] xl:w-[75px] h-full pointer-events-none select-none z-0 overflow-hidden opacity-60"
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
      <div className="relative z-10 w-full max-w-[1780px] mx-auto px-3.5 sm:px-6 lg:px-6 xl:px-10 h-[64px] sm:h-[72px] lg:h-[86px] xl:h-[90px] flex items-center justify-between">
        
        {/* LEFT — LOGO AREA (Proportional, clean, uncluttered background) */}
        <div className="flex items-center shrink-0">
          <Link
            href="/"
            onClick={() => {
              if (currentIndex !== -1) setStoredIndex(currentIndex);
            }}
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
            className="hidden xl:block h-7 w-[1.5px] bg-[#BFA032] ml-4 xl:ml-5 mr-2 xl:mr-3 shrink-0"
            aria-hidden="true"
          />
        </div>

        {/* CENTER — NAVIGATION LINKS WITH PURE HORIZONTAL DIRECTIONAL SLIDE */}
        <nav
          className="hidden lg:flex items-center justify-center space-x-1 xl:space-x-1.5 2xl:space-x-2"
          aria-label="Main Navigation"
        >
          {NAV_ITEMS.map((item, index) => {
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
                onClick={() => {
                  if (currentIndex !== -1) {
                    setStoredIndex(currentIndex);
                  }
                }}
                className={`relative flex items-center gap-1.5 py-1.5 xl:py-2 px-2.5 xl:px-3 2xl:px-3.5 rounded-full text-[12.5px] xl:text-[13px] 2xl:text-[14px] whitespace-nowrap transition-colors duration-200 focus:outline-hidden focus:ring-2 focus:ring-[#064E32] select-none ${
                  isActive
                    ? "text-white font-semibold"
                    : "bg-white/40 backdrop-blur-xs border border-[#064E32]/18 text-[#064E32] hover:bg-white/75 hover:border-[#064E32]/35 hover:shadow-xs font-semibold shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
                }`}
              >
                {/* Horizontal-Only Directional Sliding Active Pill */}
                {isActive && (
                  <motion.div
                    initial={
                      hasDirection
                        ? {
                            x: slideStartX,
                            opacity: 0.35,
                          }
                        : false
                    }
                    animate={{
                      x: 0,
                      opacity: 1,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 190,
                      damping: 24,
                      mass: 0.8,
                    }}
                    style={{ y: 0 }}
                    className="absolute inset-0 bg-[#003F29] rounded-full border border-[#003F29] shadow-[0_3px_10px_rgba(0,63,41,0.35)] -z-0 pointer-events-none"
                  />
                )}

                <span className="relative z-10 flex items-center gap-1.5">
                  <IconComponent
                    className={`w-3.5 h-3.5 xl:w-4 xl:h-4 shrink-0 transition-colors duration-200 ${
                      isActive ? "text-white" : "text-[#064E32]"
                    }`}
                  />
                  <span>{item.name}</span>
                </span>
              </Link>
            );
          })}
        </nav>

        {/* RIGHT — CTA BUTTON & MOBILE HAMBURGER */}
        <div className="flex items-center shrink-0 space-x-2 sm:space-x-3.5">
          {/* Subtle Vertical Gold Separator before CTA */}
          <div
            className="hidden xl:block h-7 w-[1.5px] bg-[#BFA032] mr-1 shrink-0"
            aria-hidden="true"
          />

          {/* Sign In / Register CTA Button */}
          <MagneticButton>
            <Link
              href="/login"
              className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#003F29] hover:bg-[#064E32] text-white font-semibold text-[12px] xs:text-[12.5px] sm:text-[13.5px] xl:text-[14px] px-3.5 sm:px-4.5 xl:px-5 py-1.5 sm:py-2.5 rounded-full border-2 border-[#D4A72C] shadow-[0_3px_12px_rgba(0,63,41,0.28)] hover:shadow-[0_6px_20px_rgba(212,167,44,0.45)] hover:scale-[1.02] transition-all duration-300 group focus:outline-hidden focus:ring-2 focus:ring-[#D4A72C]"
            >
              <User className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F3C34D] transition-transform duration-300 group-hover:scale-110 shrink-0" />
              <span className="hidden xs:inline">Sign In / Register</span>
              <span className="xs:hidden">Sign In</span>
            </Link>
          </MagneticButton>

          {/* Mobile / Tablet Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-2 text-[#003F29] bg-[#003F29]/10 hover:bg-[#003F29]/18 border border-[#BFA032]/40 rounded-lg transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#003F29] min-w-[38px] min-h-[38px] sm:min-w-[42px] sm:min-h-[42px] flex items-center justify-center cursor-pointer shadow-xs"
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
