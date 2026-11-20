"use client";

import React from "react";
import { motion } from "framer-motion";

type ScrollRevealProps = {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  className?: string;
};

export default function ScrollReveal({
  children,
  delay = 0,
  y = 24,
  duration = 0.85,
  className = "",
}: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
