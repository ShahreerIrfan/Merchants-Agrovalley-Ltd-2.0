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
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`sticky top-0 z-40 w-full bg-white transition-all duration-300 ${
        scrolled
          ? "shadow-[0_4px_24px_rgba(0,0,0,0.06)] border-b border-gray-100"
          : "border-b border-gray-100/80"
      }`}
    >
      <div className="max-w-[1700px] mx-auto px-3.5 sm:px-6 lg:px-6 xl:px-10 h-[80px] sm:h-[88px] lg:h-[92px] flex items-center justify-between">
        {/* LEFT — BRAND LOGO */}
        <div className="flex items-center shrink-0">
          <Link href="/" className="relative block group" aria-label="Merchants Agro Valley Home">
            <Image
              src="/logo/merchants-agro-valley-emblem.png"
              alt="Merchants Agro Valley Emblem Logo"
              width={168}
              height={94}
              priority
              className="h-[54px] xs:h-[60px] sm:h-[66px] lg:h-[70px] xl:h-[74px] w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </Link>
          <div
            className="hidden 2xl:block h-8 w-[1px] bg-gray-200/90 ml-5 mr-1"
            aria-hidden="true"
          />
        </div>

        {/* CENTER — NAVIGATION MENU WITH ICONS (Desktop) */}
        <nav
          className="hidden lg:flex items-center space-x-1 xl:space-x-1.5 2xl:space-x-3"
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
                className={`group relative flex items-center gap-1.5 py-1.5 px-2 xl:px-2.5 rounded-lg text-[12px] xl:text-[13px] 2xl:text-[14px] whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? "text-[#063F2B] font-semibold bg-[#08713D]/8"
                    : "text-[#142C23]/80 hover:text-[#063F2B] hover:bg-emerald-50/60 font-medium"
                }`}
              >
                <IconComponent
                  className={`w-3.5 h-3.5 xl:w-4 xl:h-4 shrink-0 transition-colors duration-200 ${
                    isActive
                      ? "text-[#08713D]"
                      : "text-gray-400 group-hover:text-[#08713D]"
                  }`}
                />
                <span>{item.name}</span>
                {isActive ? (
                  <motion.span
                    layoutId="activeNavUnderline"
                    className="absolute bottom-0 left-2 right-2 h-[2px] bg-[#08713D] rounded-full"
                    aria-hidden="true"
                  />
                ) : (
                  <span className="absolute bottom-0 left-2 right-2 w-0 h-[1.5px] bg-[#08713D] transition-all duration-200 group-hover:w-[calc(100%-16px)] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* RIGHT — CONTACT BUTTON & MOBILE HAMBURGER */}
        <div className="flex items-center space-x-2 sm:space-x-3 shrink-0">
          <MagneticButton>
            <Link
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 bg-[#063F2B] hover:bg-[#08713D] text-white font-semibold text-[13px] xl:text-[14px] px-4.5 xl:px-5 py-2 sm:py-2.5 rounded-full transition-all duration-300 shadow-xs hover:shadow-[0_6px_18px_rgba(6,63,43,0.22)] hover:-translate-y-0.5 group"
            >
              <Mail className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-white transition-transform duration-300 group-hover:scale-110" />
              <span>Get in Touch</span>
            </Link>
          </MagneticButton>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-2 text-[#063F2B] hover:bg-gray-100 rounded-lg transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#08713D] min-w-[40px] min-h-[40px] flex items-center justify-center cursor-pointer"
            aria-label="Open mobile navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </motion.header>
  );
}
