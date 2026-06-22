import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  color?: "default" | "green" | "blue" | "amber";
  className?: string;
}

const colors = {
  default: "bg-[#1E1E2E] text-[#94A3B8] border-[#2D2D42]",
  green: "bg-[#10B981]/10 text-[#10B981] border-[#10B981]/20",
  blue: "bg-[#6366F1]/10 text-[#6366F1] border-[#6366F1]/20",
  amber: "bg-amber-500/10 text-amber-400 border-amber-500/20",
};

export default function Badge({ children, color = "default", className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${colors[color]} ${className}`}
    >
      {children}
    </span>
  );
}
