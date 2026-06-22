"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  external?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  external = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 cursor-pointer select-none";

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const variants = {
    primary:
      "bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:scale-[1.02]",
    ghost:
      "bg-transparent text-[#F8FAFC] border border-[#1E1E2E] hover:border-[#6366F1] hover:bg-[#6366F1]/5",
    outline:
      "bg-transparent text-[#6366F1] border border-[#6366F1] hover:bg-[#6366F1]/10",
  };

  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  const content = (
    <motion.span
      className={cls}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return external ? (
      <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex">
        {content}
      </a>
    ) : (
      <Link href={href} className="inline-flex">
        {content}
      </Link>
    );
  }

  return content;
}
