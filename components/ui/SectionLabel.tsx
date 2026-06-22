interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <div className="h-px w-6 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6]" />
      <span className="text-[11px] font-semibold uppercase tracking-widest text-[#6366F1]">
        {children}
      </span>
      <div className="h-px w-6 bg-gradient-to-r from-[#8B5CF6] to-transparent" />
    </div>
  );
}
