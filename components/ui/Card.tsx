"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export default function Card({ children, className = "", hover = true, glow = false }: CardProps) {
  return (
    <motion.div
      className={`relative rounded-2xl bg-[#111118] border border-[#1E1E2E] overflow-hidden ${
        hover ? "group cursor-default" : ""
      } ${className}`}
      whileHover={hover ? { y: -2 } : undefined}
      transition={{ duration: 0.2 }}
    >
      {hover && (
        <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[#6366F1]/40 transition-all duration-300 pointer-events-none" />
      )}
      {glow && (
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{ background: "radial-gradient(circle at 50% 0%, rgba(99,102,241,0.08) 0%, transparent 70%)" }}
        />
      )}
      {children}
    </motion.div>
  );
}
