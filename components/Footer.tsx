import Link from "next/link";
import { Zap, MapPin } from "lucide-react";
import { NAV_LINKS, FOOTER_INDUSTRIES, SITE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="relative border-t border-[#1E1E2E] bg-[#0A0A0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] flex items-center justify-center">
                <Zap size={14} className="text-white" fill="white" />
              </div>
              <span className="text-lg font-bold text-[#F8FAFC]">Flowtix</span>
            </Link>
            <p className="text-[#64748B] text-sm leading-relaxed max-w-xs">
              {SITE.tagline} — AI-powered websites and automation systems that
              work 24/7 so your business never misses a lead.
            </p>
            <div className="flex items-center gap-2 mt-4 text-sm text-[#64748B]">
              <MapPin size={13} />
              <span>{SITE.location}</span>
            </div>
          </div>

          {/* Nav */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#64748B] mb-4">
              Navigation
            </p>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#64748B] hover:text-[#F8FAFC] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#64748B] mb-4">
              Industries We Serve
            </p>
            <ul className="space-y-2">
              {FOOTER_INDUSTRIES.map((ind) => (
                <li key={ind} className="text-sm text-[#64748B]">
                  {ind}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#1E1E2E] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#64748B]">
            © 2025 Flowtix. All rights reserved.
          </p>
          <p className="text-xs text-[#64748B]">
            Built for businesses that want to grow faster.
          </p>
        </div>
      </div>
    </footer>
  );
}
