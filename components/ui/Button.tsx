"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "ghost" | "outline" | "dark";
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
    "inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-200 cursor-pointer select-none whitespace-nowrap";

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-7 py-3.5 text-base",
  };

  const variants = {
    primary:
      "bg-[#C8FF00] text-black hover:bg-[#d4ff33] shadow-lg shadow-[#C8FF00]/10 hover:shadow-[#C8FF00]/20 hover:scale-[1.02]",
    ghost:
      "bg-transparent text-white border border-[#2A2A2A] hover:border-[#444] hover:bg-white/5",
    outline:
      "bg-transparent text-[#C8FF00] border border-[#C8FF00]/40 hover:bg-[#C8FF00]/10",
    dark:
      "bg-[#1A1A1A] text-white border border-[#2A2A2A] hover:border-[#444] hover:bg-[#222]",
  };

  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  const content = (
    <motion.span className={cls} whileTap={{ scale: 0.97 }} onClick={onClick}>
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
