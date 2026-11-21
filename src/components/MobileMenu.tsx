"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, ChevronDown, Mail } from "lucide-react";
import { NAV_ITEMS } from "@/data/navigation";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null);

  // Close on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 lg:hidden flex"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-out Drawer */}
      <div className="relative ml-auto w-full max-w-sm bg-white h-full shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-300">
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <Link href="/" onClick={onClose} className="block">
            <Image
              src="/logo/merchants-agro-valley-logo.svg"
              alt="Merchants Agro Valley"
              width={200}
              height={58}
              className="w-[180px] h-auto object-contain"
              priority
            />
          </Link>
          <button
            onClick={onClose}
            className="p-2 -mr-2 text-gray-500 hover:text-[#063F2B] hover:bg-gray-100 rounded-full transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#08713D]"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Items */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-2">
          {NAV_ITEMS.map((item) => (
            <div key={item.name} className="border-b border-gray-50 pb-2">
              {item.hasDropdown ? (
                <div>
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="flex items-center justify-between w-full py-2.5 text-[16px] font-medium text-[#142C23] hover:text-[#08713D] transition-colors"
                    aria-expanded={openDropdown === item.name}
                  >
                    <span>{item.name}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                        openDropdown === item.name ? "rotate-180 text-[#08713D]" : ""
                      }`}
                    />
                  </button>
                  {openDropdown === item.name && item.dropdownItems && (
                    <div className="pl-4 mt-1 space-y-2 border-l-2 border-[#A6E51B] py-1 bg-gray-50/50 rounded-r-lg">
                      {item.dropdownItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          onClick={onClose}
                          className="block py-1.5 px-3 text-sm text-gray-700 hover:text-[#063F2B] hover:bg-gray-100/70 rounded transition-colors"
                        >
                          <div className="font-medium">{subItem.name}</div>
                          {subItem.description && (
                            <div className="text-xs text-gray-400 line-clamp-1 mt-0.5">
                              {subItem.description}
                            </div>
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href}
                  onClick={onClose}
                  className={`flex items-center justify-between py-2.5 text-[16px] font-medium transition-colors ${
                    item.isActive
                      ? "text-[#063F2B] font-semibold"
                      : "text-[#142C23] hover:text-[#08713D]"
                  }`}
                >
                  <span>{item.name}</span>
                  {item.isActive && (
                    <span className="w-2 h-2 rounded-full bg-[#08713D]" />
                  )}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Drawer Footer CTA */}
        <div className="p-6 border-t border-gray-100 bg-gray-50">
          <Link
            href="#contact"
            onClick={onClose}
            className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-full bg-[#063F2B] hover:bg-[#08713D] text-white font-medium text-[15px] transition-all duration-200 shadow-md"
          >
            <Mail className="w-4 h-4" />
            <span>Get in Touch</span>
          </Link>
          <p className="text-center text-xs text-gray-400 mt-3">
            Integrated Agro-Industrial Enterprise
          </p>
        </div>
      </div>
    </div>
  );
}
