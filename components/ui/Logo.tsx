import Link from "next/link";
import Image from "next/image";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <Image
        src="/logo.svg"
        alt="FloowTix"
        width={150}
        height={60}
        priority
        unoptimized
        style={{ objectFit: "contain" }}
      />
    </Link>
  );
}
