import Link from "next/link";
import { Zap, Mail, MessageCircle } from "lucide-react";
import { NAV_LINKS, FOOTER_INDUSTRIES, SITE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="relative border-t border-[#1F1F1F] bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-[#C8FF00] flex items-center justify-center">
                <Zap size={14} className="text-black" fill="black" />
              </div>
              <span className="text-base font-bold text-white">Flowtix</span>
            </Link>
            <p className="text-sm text-[#444] leading-relaxed max-w-xs mb-6">
              {SITE.tagline} — AI-powered websites and automation systems that
              work 24/7 so your business never misses a lead.
            </p>

            {/* Contact info */}
            <div className="space-y-2">
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-2 text-sm text-[#555] hover:text-white transition-colors"
              >
                <Mail size={13} />
                {SITE.email}
              </a>
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#555] hover:text-[#25D366] transition-colors"
              >
                <MessageCircle size={13} />
                {SITE.whatsappDisplay}
              </a>
            </div>

            <p className="text-xs text-[#333] mt-4">{SITE.location}</p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-[#333] mb-4">
              Navigation
            </p>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#444] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-[#333] mb-4">
              Industries
            </p>
            <ul className="space-y-2.5">
              {FOOTER_INDUSTRIES.map((ind) => (
                <li key={ind} className="text-sm text-[#444]">
                  {ind}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#1F1F1F] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#333]">
            © 2025 Flowtix. All rights reserved.
          </p>
          <p className="text-xs text-[#333]">
            Built for businesses that want to grow faster.
          </p>
        </div>
      </div>
    </footer>
  );
}
