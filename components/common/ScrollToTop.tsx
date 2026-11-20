"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

export default function ScrollToTop() {
  const { scrollY, scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 300);
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 12 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-white/95 backdrop-blur-md shadow-md hover:shadow-xl flex items-center justify-center transition-all group cursor-pointer border border-[#E9E4DC]"
        >
          {/* Circular SVG Scroll Progress Ring */}
          <svg
            className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-0.5"
            viewBox="0 0 48 48"
          >
            {/* Background Track Ring */}
            <circle
              cx="24"
              cy="24"
              r="21"
              className="stroke-[#E6E0D5]"
              strokeWidth="2.5"
              fill="none"
            />
            {/* Active Progress Ring */}
            <motion.circle
              cx="24"
              cy="24"
              r="21"
              className="stroke-[#414D3C]"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
              style={{ pathLength: scrollYProgress }}
            />
          </svg>

          {/* Inner Center Circle with Up Arrow */}
          <div className="w-8 h-8 rounded-full bg-[#414D3C] text-white flex items-center justify-center group-hover:bg-[#323D2E] transition-colors shadow-2xs">
            <svg
              className="w-4 h-4 transition-transform duration-200 group-hover:-translate-y-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
