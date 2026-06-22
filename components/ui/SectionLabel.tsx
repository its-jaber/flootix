interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <span className="text-[#C8FF00]">◆</span>
      <span className="text-xs font-medium tracking-wide text-[#AAAAAA]">
        {children}
      </span>
    </div>
  );
}
