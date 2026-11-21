"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Mail, Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_ITEMS } from "@/data/navigation";
import MobileMenu from "./MobileMenu";
import MagneticButton from "./animations/MagneticButton";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (name: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

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
      <div className="max-w-[1600px] mx-auto px-3.5 sm:px-6 lg:px-10 xl:px-12 h-[84px] sm:h-[96px] lg:h-[100px] flex items-center justify-between">
        {/* LEFT — BRAND LOGO & DIVIDER */}
        <div className="flex items-center">
          <Link href="/" className="relative block group" aria-label="Merchants Agro Valley Home">
            <Image
              src="/logo/merchants-agro-valley-logo.svg"
              alt="Merchants Agro Valley Logo"
              width={275}
              height={78}
              priority
              className="w-[170px] xs:w-[195px] sm:w-[240px] lg:w-[270px] h-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </Link>
          {/* Subtle vertical divider after brand area */}
          <div
            className="hidden xl:block h-8 w-[1px] bg-gray-200/90 ml-6 mr-3"
            aria-hidden="true"
          />
        </div>

        {/* CENTER — NAVIGATION MENU (Desktop) */}
        <nav
          className="hidden lg:flex items-center space-x-5 xl:space-x-7"
          aria-label="Main Navigation"
        >
          {NAV_ITEMS.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => item.hasDropdown && handleMouseEnter(item.name)}
              onMouseLeave={() => item.hasDropdown && handleMouseLeave()}
            >
              {item.hasDropdown ? (
                <button
                  type="button"
                  className={`group flex items-center gap-1.5 py-2 text-[14px] xl:text-[15px] font-medium transition-colors cursor-pointer relative ${
                    activeDropdown === item.name
                      ? "text-[#063F2B] font-semibold"
                      : "text-[#142C23]/85 hover:text-[#063F2B]"
                  }`}
                  aria-expanded={activeDropdown === item.name}
                  onClick={() =>
                    setActiveDropdown(activeDropdown === item.name ? null : item.name)
                  }
                >
                  <span>{item.name}</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-gray-500 transition-transform duration-300 ${
                      activeDropdown === item.name ? "rotate-180 text-[#08713D]" : "group-hover:translate-y-0.5"
                    }`}
                  />
                  {/* Underline grow animation on hover */}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#08713D] transition-all duration-300 group-hover:w-full rounded-full" />
                </button>
              ) : (
                <Link
                  href={item.href}
                  className={`group relative py-2 text-[14px] xl:text-[15px] transition-colors inline-block ${
                    item.isActive
                      ? "text-[#063F2B] font-semibold"
                      : "text-[#142C23]/85 hover:text-[#063F2B] font-medium"
                  }`}
                >
                  <span>{item.name}</span>
                  {item.isActive ? (
                    <motion.span
                      layoutId="activeNavUnderline"
                      className="absolute -bottom-1 left-0 right-0 h-[2.5px] bg-[#08713D] rounded-full"
                      aria-hidden="true"
                    />
                  ) : (
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#08713D] transition-all duration-300 group-hover:w-full rounded-full" />
                  )}
                </Link>
              )}

              {/* Functional Dropdown Menu with smooth fade & scale */}
              <AnimatePresence>
                {item.hasDropdown && item.dropdownItems && activeDropdown === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 12, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.97 }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-72 xl:w-80 z-50"
                    role="menu"
                  >
                    <div className="bg-white rounded-xl shadow-[0_12px_36px_rgba(6,63,43,0.12)] border border-gray-100 p-2.5 space-y-1">
                      {item.dropdownItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-3.5 py-2.5 rounded-lg hover:bg-emerald-50/70 transition-all duration-200 group hover:translate-x-1"
                          role="menuitem"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <div className="text-[14px] font-semibold text-[#063F2B] group-hover:text-[#08713D] transition-colors">
                            {subItem.name}
                          </div>
                          {subItem.description && (
                            <div className="text-xs text-gray-500 line-clamp-1 mt-0.5">
                              {subItem.description}
                            </div>
                          )}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        {/* RIGHT — CONTACT BUTTON & MOBILE HAMBURGER */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          <MagneticButton>
            <Link
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 bg-[#063F2B] hover:bg-[#08713D] text-white font-semibold text-[13.5px] xl:text-[15px] px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-300 shadow-sm hover:shadow-[0_8px_20px_rgba(6,63,43,0.25)] hover:-translate-y-0.5 group"
            >
              <Mail className="w-4 h-4 text-white transition-transform duration-300 group-hover:scale-110" />
              <span>Get in Touch</span>
            </Link>
          </MagneticButton>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-2.5 text-[#063F2B] hover:bg-gray-100 rounded-lg transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#08713D] min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer"
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
