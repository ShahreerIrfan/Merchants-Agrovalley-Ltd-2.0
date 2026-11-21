"use client";

import React from "react";
import ScrollProgress from "./ScrollProgress";
import CustomCursor from "./CustomCursor";
import BackToTop from "./BackToTop";

interface MotionProviderProps {
  children: React.ReactNode;
}

export default function MotionProvider({ children }: MotionProviderProps) {
  return (
    <>
      {/* 1. Thin top scroll progress bar */}
      <ScrollProgress />

      {/* 2. Interactive custom mouse cursor for desktop */}
      <CustomCursor />

      {/* 3. Main Application Content */}
      {children}

      {/* 4. Floating Back-to-Top Button */}
      <BackToTop />
    </>
  );
}
