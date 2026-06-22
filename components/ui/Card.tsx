"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  accentHover?: boolean;
}

export default function Card({ children, className = "", hover = true, accentHover = false }: CardProps) {
  return (
    <motion.div
      className={`relative rounded-2xl bg-[#111111] border border-[#1F1F1F] overflow-hidden ${
        hover ? "group cursor-default" : ""
      } ${className}`}
      whileHover={hover ? { y: -2 } : undefined}
      transition={{ duration: 0.2 }}
    >
      {hover && (
        <div className={`absolute inset-0 rounded-2xl border border-transparent transition-all duration-300 pointer-events-none ${
          accentHover ? "group-hover:border-[#2170e9]/20" : "group-hover:border-[#2A2A2A]"
        }`} />
      )}
      {children}
    </motion.div>
  );
}
