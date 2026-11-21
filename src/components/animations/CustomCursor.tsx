"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorState, setCursorState] = useState<"default" | "hover" | "image" | "button">("default");
  const [isFinePointer, setIsFinePointer] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for outer trailing circle
  const springX = useSpring(mouseX, { stiffness: 450, damping: 28 });
  const springY = useSpring(mouseY, { stiffness: 450, damping: 28 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Check for fine pointer device on mouse activity
      if (!isFinePointer && window.matchMedia("(pointer: fine)").matches) {
        setIsFinePointer(true);
      }
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handlePointerOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactiveElement = target.closest("a, button, [role='button'], input, textarea, select");
      const imageElement = target.closest("img, [data-cursor='image']");
      const cardElement = target.closest(".group, [data-cursor='card']");

      if (interactiveElement) {
        setCursorState("button");
      } else if (imageElement) {
        setCursorState("image");
      } else if (cardElement) {
        setCursorState("hover");
      } else {
        setCursorState("default");
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseover", handlePointerOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseover", handlePointerOver);
    };
  }, [mouseX, mouseY, isVisible, isFinePointer]);

  if (!isFinePointer || !isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[999] overflow-hidden" aria-hidden="true">
      {/* 1. Inner Precision Green Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#68A617] pointer-events-none"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* 2. Outer Smooth Trailing Circle */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-[#68A617] pointer-events-none"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width:
            cursorState === "button"
              ? 46
              : cursorState === "image"
              ? 54
              : cursorState === "hover"
              ? 42
              : 30,
          height:
            cursorState === "button"
              ? 46
              : cursorState === "image"
              ? 54
              : cursorState === "hover"
              ? 42
              : 30,
          backgroundColor:
            cursorState === "button"
              ? "rgba(104, 166, 23, 0.16)"
              : cursorState === "hover"
              ? "rgba(104, 166, 23, 0.08)"
              : "rgba(104, 166, 23, 0)",
          borderColor:
            cursorState === "button"
              ? "rgba(104, 166, 23, 0.85)"
              : "rgba(104, 166, 23, 0.45)",
          scale: cursorState === "image" ? 1.15 : 1,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      />
    </div>
  );
}
