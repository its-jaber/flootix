"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#6366F1]/20 to-transparent" />

      {/* Background gradient */}
      <div className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at center, rgba(99,102,241,0.08) 0%, transparent 65%)" }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Glowing tag */}
          <div className="inline-flex items-center gap-2 bg-[#6366F1]/10 border border-[#6366F1]/20 rounded-full px-4 py-1.5 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6366F1] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#6366F1]" />
            </span>
            <span className="text-xs font-semibold text-[#6366F1]">Free Audit — No Commitment</span>
          </div>

          <h2 className="text-5xl sm:text-6xl font-extrabold text-[#F8FAFC] tracking-tight leading-tight">
            Ready to Stop{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
              Losing Leads?
            </span>
          </h2>

          <p className="mt-6 text-xl text-[#64748B] leading-relaxed max-w-2xl mx-auto">
            Get a free audit of your current lead process. We&apos;ll show you exactly where you&apos;re losing customers and how to fix it — no strings attached.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg">
              Get Your Free Audit
              <ArrowRight size={16} />
            </Button>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-[#F8FAFC] bg-[#25D366]/10 border border-[#25D366]/30 rounded-xl hover:bg-[#25D366]/20 transition-colors"
            >
              <MessageCircle size={18} className="text-[#25D366]" />
              Or Message on WhatsApp
            </a>
          </div>

          <p className="mt-6 text-sm text-[#64748B]">
            We typically respond within a few hours.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
