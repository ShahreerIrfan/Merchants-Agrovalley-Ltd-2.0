"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Mail, Menu } from "lucide-react";
import { NAV_ITEMS } from "@/data/navigation";
import MobileMenu from "./MobileMenu";

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
    <header
      className={`sticky top-0 z-40 w-full bg-white transition-all duration-300 ${
        scrolled
          ? "shadow-[0_4px_20px_rgba(0,0,0,0.06)] border-b border-gray-100"
          : "border-b border-gray-100"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 h-[92px] sm:h-[100px] flex items-center justify-between">
        {/* LEFT — BRAND LOGO & DIVIDER */}
        <div className="flex items-center">
          <Link href="/" className="relative block group" aria-label="Merchants Agro Valley Home">
            <Image
              src="/logo/merchants-agro-valley-logo.svg"
              alt="Merchants Agro Valley Logo"
              width={275}
              height={78}
              priority
              className="w-[210px] sm:w-[245px] lg:w-[270px] h-auto object-contain transition-transform duration-200 group-hover:opacity-95"
            />
          </Link>
          {/* Subtle vertical divider after brand area */}
          <div
            className="hidden xl:block h-8 w-[1px] bg-gray-200/90 ml-6 mr-3"
            aria-hidden="true"
          />
        </div>

        {/* CENTER — NAVIGATION MENU */}
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
                  className={`flex items-center gap-1.5 py-2 text-[14px] xl:text-[15px] font-medium transition-colors cursor-pointer ${
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
                    className={`w-3.5 h-3.5 text-gray-500 transition-transform duration-200 ${
                      activeDropdown === item.name ? "rotate-180 text-[#08713D]" : ""
                    }`}
                  />
                </button>
              ) : (
                <Link
                  href={item.href}
                  className={`relative py-2 text-[14px] xl:text-[15px] transition-colors inline-block ${
                    item.isActive
                      ? "text-[#063F2B] font-semibold"
                      : "text-[#142C23]/85 hover:text-[#063F2B] font-medium"
                  }`}
                >
                  <span>{item.name}</span>
                  {item.isActive && (
                    <span
                      className="absolute -bottom-1 left-0 right-0 h-[2.5px] bg-[#08713D] rounded-full"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              )}

              {/* Functional Dropdown Menu */}
              {item.hasDropdown && item.dropdownItems && activeDropdown === item.name && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-72 xl:w-80 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                  role="menu"
                >
                  <div className="bg-white rounded-xl shadow-[0_12px_36px_rgba(6,63,43,0.12)] border border-gray-100 p-2.5 space-y-1">
                    {item.dropdownItems.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-3.5 py-2.5 rounded-lg hover:bg-emerald-50/70 transition-colors group"
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
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* RIGHT — CONTACT BUTTON & MOBILE HAMBURGER */}
        <div className="flex items-center space-x-3">
          <Link
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2.5 bg-[#063F2B] hover:bg-[#08713D] text-white font-semibold text-[14px] xl:text-[15px] px-6 py-3 rounded-full transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 focus:outline-hidden focus:ring-2 focus:ring-[#A6E51B] focus:ring-offset-2"
          >
            <Mail className="w-4 h-4 text-white" />
            <span>Get in Touch</span>
          </Link>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-2.5 text-[#063F2B] hover:bg-gray-100 rounded-lg transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#08713D]"
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
    </header>
  );
}
