import Link from "next/link";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-2.5 ${className}`}>
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect width="34" height="34" rx="8" fill="#001127" />
        {/* F — vertical bar */}
        <rect x="8.5" y="7.5" width="3.5" height="19" rx="1" fill="white" />
        {/* F — top horizontal */}
        <rect x="8.5" y="7.5" width="13.5" height="3.5" rx="1" fill="white" />
        {/* F — middle horizontal */}
        <rect x="8.5" y="15" width="9.5" height="3.5" rx="1" fill="white" />
        {/* Arrow — diagonal shaft */}
        <line
          x1="19.5"
          y1="24"
          x2="26"
          y2="9"
          stroke="#2170e9"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* Arrow — head */}
        <polyline
          points="22.5,9 26,9 26,12.5"
          fill="none"
          stroke="#2170e9"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <span className="text-base font-bold tracking-tight leading-none">
        <span className="text-white">Flow</span>
        <span className="text-[#2170e9]">Tix</span>
      </span>
    </Link>
  );
}
