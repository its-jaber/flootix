import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import Logo from "./ui/Logo";
import { NAV_LINKS, FOOTER_INDUSTRIES, SITE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="relative border-t border-[#1F1F1F] bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Logo className="mb-4" />
            <p className="text-sm text-[#888] leading-relaxed max-w-xs mb-6">
              {SITE.tagline} — AI-powered websites and automation systems that
              work 24/7 so your business never misses a lead.
            </p>

            {/* Contact info */}
            <div className="space-y-2.5">
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-2 text-sm text-[#888] hover:text-white transition-colors"
              >
                <Mail size={13} className="text-[#555]" />
                {SITE.email}
              </a>
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#888] hover:text-[#25D366] transition-colors"
              >
                <MessageCircle size={13} className="text-[#555]" />
                {SITE.whatsappDisplay}
              </a>
            </div>

            <p className="text-xs text-[#555] mt-5">{SITE.location}</p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-[#666] mb-4">
              Navigation
            </p>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#888] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-[#666] mb-4">
              Industries
            </p>
            <ul className="space-y-2.5">
              {FOOTER_INDUSTRIES.map((ind) => (
                <li key={ind} className="text-sm text-[#888]">
                  {ind}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#1F1F1F] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#555]">
            © 2025 FlowTix. All rights reserved.
          </p>
          <p className="text-xs text-[#555]">
            Built for businesses that want to grow faster.
          </p>
        </div>
      </div>
    </footer>
  );
}
