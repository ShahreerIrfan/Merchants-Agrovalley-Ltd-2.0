"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Smartphone,
  Mail,
} from "lucide-react";

// Social Media SVGs
function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className || "w-4 h-4"} aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className || "w-4 h-4"} aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className || "w-4 h-4"} aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className || "w-4 h-4"} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

// X (formerly Twitter) Icon SVG
function XIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className || "w-4 h-4"}
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

// Business Category Outline SVG Icons in Gold (#D6AD3F)
function CowIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="#D6AD3F"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className || "w-5 h-5"}
      aria-hidden="true"
    >
      <path d="M19 5c-1.5 0-2.8.6-3.8 1.5C14 7.6 13 8 12 8s-2-.4-3.2-1.5C7.8 5.6 6.5 5 5 5c-2 0-3 1.5-3 3 0 2.5 2 4.5 4 5v6c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-4h4v4c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-6c2-.5 4-2.5 4-5 0-1.5-1-3-3-3z" />
      <path d="M7 10h.01M17 10h.01" />
    </svg>
  );
}

function FactoryIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="#D6AD3F"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className || "w-5 h-5"}
      aria-hidden="true"
    >
      <path d="M2 20h20" />
      <path d="M4 20V9l6 4V9l6 4V4h4v16" />
      <path d="M6 14h.01M6 17h.01M10 17h.01M14 17h.01" />
    </svg>
  );
}

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="#D6AD3F"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className || "w-5 h-5"}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20M12 2a14.5 14.5 0 0 1 0 20M2 12h20" />
    </svg>
  );
}

function TruckIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="#D6AD3F"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className || "w-5 h-5"}
      aria-hidden="true"
    >
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M15 18H9" />
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62l-2.65-3.32A1 1 0 0 0 18.35 9H14v9z" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="17" cy="18" r="2" />
    </svg>
  );
}

function SproutIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="#D6AD3F"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className || "w-5 h-5"}
      aria-hidden="true"
    >
      <path d="M7 20h10" />
      <path d="M12 20v-8" />
      <path d="M12 12c-3.5 0-6-2.5-6-6 4 0 6 2.5 6 6z" />
      <path d="M12 10c3.5 0 6-2.5 6-6-4 0-6 2.5-6 6z" />
    </svg>
  );
}

export default function Footer() {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/#about" },
    { label: "Our Business", href: "/#portfolio" },
    { label: "Management", href: "/management" },
    { label: "Media & News", href: "/#news" },
    { label: "Contact Us", href: "#contact" },
  ];

  const businessLines = [
    {
      title: "Agro & Livestock",
      href: "/#portfolio",
      icon: <CowIcon className="w-5 h-5 shrink-0" />,
    },
    {
      title: "Processing & Value Addition",
      href: "/#portfolio",
      icon: <FactoryIcon className="w-5 h-5 shrink-0" />,
    },
    {
      title: "Export & Global Trade",
      href: "/#portfolio",
      icon: <GlobeIcon className="w-5 h-5 shrink-0" />,
    },
    {
      title: "Supply Chain & Logistics",
      href: "/#portfolio",
      icon: <TruckIcon className="w-5 h-5 shrink-0" />,
    },
    {
      title: "Sustainable Development",
      href: "/#business-model",
      icon: <SproutIcon className="w-5 h-5 shrink-0" />,
    },
  ];

  return (
    <footer
      id="site-footer"
      aria-label="Merchants Agro Valley Footer"
      className="relative w-full bg-[#013D26] text-[#E6EEE9] overflow-hidden selection:bg-[#D6AD3F] selection:text-[#013D26]"
    >
      {/* 1. TOP-LEFT DYNAMIC GOLD RIBBON SWOOSH */}
      <div
        className="absolute top-0 left-0 w-[300px] sm:w-[480px] lg:w-[620px] pointer-events-none select-none z-10 opacity-90"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 620 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 0 L400 0 C490 5 560 22 620 50 L590 50 C540 26 480 12 0 12 Z"
            fill="url(#footerGoldGrad)"
          />
          <defs>
            <linearGradient id="footerGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C9A13B" />
              <stop offset="60%" stopColor="#F7DF94" />
              <stop offset="100%" stopColor="#D6AD3F" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* 2. TOP-RIGHT TROPICAL FOLIAGE OVERLAY */}
      <div
        className="absolute top-0 right-0 w-[120px] sm:w-[180px] lg:w-[220px] pointer-events-none select-none z-10 opacity-80"
        aria-hidden="true"
      >
        <Image
          src="/assets/management/top-right-foliage.png"
          alt=""
          width={220}
          height={130}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* 3. NANO BANANA BOTTOM AGRICULTURAL LANDSCAPE ARTWORK */}
      <div
        className="absolute bottom-12 sm:bottom-14 left-0 right-0 w-full h-[220px] sm:h-[260px] lg:h-[300px] pointer-events-none select-none z-0"
        aria-hidden="true"
      >
        <Image
          src="/assets/footer-landscape.webp"
          alt=""
          fill
          unoptimized
          className="object-cover object-bottom opacity-75 sm:opacity-85 mix-blend-screen"
        />
        {/* Soft gradient blend so text stays completely readable */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-transparent via-[#013D26]/75 to-[#013D26]"
          aria-hidden="true"
        />
      </div>

      {/* 4. MAIN 4-COLUMN CONTENT AREA */}
      <div className="relative z-20 max-w-[1600px] mx-auto px-4 xs:px-6 sm:px-8 md:px-12 lg:px-14 xl:px-18 pt-16 sm:pt-20 lg:pt-24 pb-16 sm:pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-8 xl:gap-10 items-start">
          
          {/* COLUMN 1: BRAND IDENTITY (Span 4 on LG) */}
          <div className="lg:col-span-4 flex flex-col justify-between pr-0 lg:pr-6">
            <div>
              {/* Logo */}
              <Link href="/" className="inline-block mb-5 group" aria-label="Merchants Agro Valley Home">
                <div className="relative w-[190px] sm:w-[220px] h-[95px] sm:h-[105px] transition-transform duration-300 group-hover:scale-102">
                  <Image
                    src="/logo/merchants-agro-valley-emblem.png"
                    alt="Merchants Agro Valley Emblem"
                    fill
                    className="object-contain object-left"
                    priority
                  />
                </div>
              </Link>

              {/* Company Description */}
              <p className="text-[14px] sm:text-[15px] text-[#D3E2D9] leading-relaxed max-w-sm mb-6 sm:mb-8 font-normal">
                A Bangladesh-based agro-industrial and international trading company, delivering
                sustainable farm-to-market solutions for local and global markets.
              </p>
            </div>

            {/* Social Media Links */}
            <div>
              <div className="flex items-center gap-2.5 sm:gap-3">
                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Merchants Agro Valley on Facebook"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg border border-white/20 bg-white/5 hover:bg-[#D6AD3F] hover:border-[#D6AD3F] text-white hover:text-[#013D26] flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(214,173,63,0.3)] cursor-pointer"
                >
                  <FacebookIcon className="w-4 h-4 fill-current stroke-none" />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Merchants Agro Valley on LinkedIn"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg border border-white/20 bg-white/5 hover:bg-[#D6AD3F] hover:border-[#D6AD3F] text-white hover:text-[#013D26] flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(214,173,63,0.3)] cursor-pointer"
                >
                  <LinkedinIcon className="w-4 h-4 fill-current stroke-none" />
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Merchants Agro Valley on YouTube"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg border border-white/20 bg-white/5 hover:bg-[#D6AD3F] hover:border-[#D6AD3F] text-white hover:text-[#013D26] flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(214,173,63,0.3)] cursor-pointer"
                >
                  <YoutubeIcon className="w-4 h-4 fill-current stroke-none" />
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Merchants Agro Valley on Instagram"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg border border-white/20 bg-white/5 hover:bg-[#D6AD3F] hover:border-[#D6AD3F] text-white hover:text-[#013D26] flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(214,173,63,0.3)] cursor-pointer"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>

                {/* X */}
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Merchants Agro Valley on X"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg border border-white/20 bg-white/5 hover:bg-[#D6AD3F] hover:border-[#D6AD3F] text-white hover:text-[#013D26] flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(214,173,63,0.3)] cursor-pointer"
                >
                  <XIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* COLUMN 2: QUICK LINKS (Span 2 on LG) */}
          <div className="lg:col-span-2 lg:border-l lg:border-white/10 lg:pl-6 xl:pl-8">
            <h3 className="font-sans text-[17px] sm:text-[18px] font-bold text-white tracking-tight">
              Quick Links
            </h3>
            <div className="w-8 h-[2px] bg-[#D6AD3F] mt-2 mb-5 rounded-full" aria-hidden="true" />

            <ul className="space-y-3 sm:space-y-3.5">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[14px] sm:text-[15px] text-[#D3E2D9] hover:text-[#D6AD3F] transition-colors duration-200 inline-block font-medium"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: OUR BUSINESS (Span 3 on LG) */}
          <div className="lg:col-span-3 lg:border-l lg:border-white/10 lg:pl-6 xl:pl-8">
            <h3 className="font-sans text-[17px] sm:text-[18px] font-bold text-white tracking-tight">
              Our Business
            </h3>
            <div className="w-8 h-[2px] bg-[#D6AD3F] mt-2 mb-5 rounded-full" aria-hidden="true" />

            <ul className="space-y-3.5 sm:space-y-4">
              {businessLines.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-3 text-[14px] sm:text-[15px] text-[#D3E2D9] hover:text-[#D6AD3F] transition-colors duration-200 font-medium"
                  >
                    <span className="shrink-0 transition-transform duration-200 group-hover:scale-110">
                      {item.icon}
                    </span>
                    <span>{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: CONTACT INFORMATION (Span 3 on LG) */}
          <div className="lg:col-span-3 lg:border-l lg:border-white/10 lg:pl-6 xl:pl-8">
            <h3 className="font-sans text-[17px] sm:text-[18px] font-bold text-white tracking-tight">
              Contact Information
            </h3>
            <div className="w-8 h-[2px] bg-[#D6AD3F] mt-2 mb-5 rounded-full" aria-hidden="true" />

            <ul className="space-y-4">
              {/* Address */}
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D6AD3F] shrink-0 mt-0.5" aria-hidden="true" />
                <div className="text-[14px] sm:text-[15px] text-[#D3E2D9] leading-snug">
                  <span className="block font-semibold text-white">Corporate Office</span>
                  <span>Dhaka, Bangladesh</span>
                </div>
              </li>

              {/* Phone */}
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#D6AD3F] shrink-0" aria-hidden="true" />
                <a
                  href="tel:+88029835226"
                  className="text-[14px] sm:text-[15px] text-[#D3E2D9] hover:text-[#D6AD3F] transition-colors duration-200 font-medium"
                >
                  +880 29835226
                </a>
              </li>

              {/* Mobile */}
              <li className="flex items-center gap-3">
                <Smartphone className="w-5 h-5 text-[#D6AD3F] shrink-0" aria-hidden="true" />
                <a
                  href="tel:+8801711034971"
                  className="text-[14px] sm:text-[15px] text-[#D3E2D9] hover:text-[#D6AD3F] transition-colors duration-200 font-medium"
                >
                  +880 1711-034971
                </a>
              </li>

              {/* Email */}
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#D6AD3F] shrink-0" aria-hidden="true" />
                <a
                  href="mailto:info@merchantsagrovalley.com"
                  className="text-[14px] sm:text-[15px] text-[#D3E2D9] hover:text-[#D6AD3F] transition-colors duration-200 font-medium break-all"
                >
                  info@merchantsagrovalley.com
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* 5. COPYRIGHT & LEGAL SECTION */}
      <div className="relative z-20 w-full border-t border-[#D6AD3F]/40 bg-[#002619]">
        <div className="max-w-[1600px] mx-auto px-4 xs:px-6 sm:px-8 md:px-12 lg:px-14 xl:px-18 py-4 sm:py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          {/* Copyright notice */}
          <p className="text-[13px] sm:text-[14px] text-[#A5BCB1] font-normal">
            &copy; 2026 Merchants Agro Valley. All Rights Reserved.
          </p>

          {/* Legal Links */}
          <div className="flex items-center gap-3 text-[13px] sm:text-[14px] text-[#A5BCB1]">
            <Link
              href="/privacy-policy"
              className="hover:text-[#D6AD3F] transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <span className="text-[#D6AD3F]/60" aria-hidden="true">|</span>
            <Link
              href="/terms-of-use"
              className="hover:text-[#D6AD3F] transition-colors duration-200"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
