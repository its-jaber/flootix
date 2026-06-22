"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { SITE, FOUNDER_CREDIBILITY } from "@/lib/constants";

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#6366F1]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Avatar side */}
          <motion.div
            className="flex flex-col items-center lg:items-start gap-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Avatar */}
            <div className="relative">
              <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] flex items-center justify-center text-4xl font-black text-white shadow-xl shadow-[#6366F1]/30">
                JA
              </div>
              {/* Online badge */}
              <div className="absolute -bottom-2 -right-2 bg-[#10B981] rounded-full px-3 py-1 flex items-center gap-1.5 border-2 border-[#0A0A0F]">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <span className="text-[10px] font-bold text-white">Available</span>
              </div>
            </div>

            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-[#F8FAFC]">{SITE.founder}</h3>
              <p className="text-[#6366F1] font-medium mt-1">{SITE.founderTitle}</p>
            </div>

            {/* Credibility pills */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {FOUNDER_CREDIBILITY.map((c) => (
                <div key={c} className="flex items-center gap-1.5 bg-[#111118] border border-[#1E1E2E] rounded-full px-3 py-1.5">
                  <CheckCircle2 size={12} className="text-[#10B981]" />
                  <span className="text-xs font-medium text-[#94A3B8]">{c}</span>
                </div>
              ))}
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 w-full">
              {[
                { v: "50+", l: "Automations Built" },
                { v: "24/7", l: "Systems Running" },
                { v: "BD", l: "Based In" },
              ].map((s) => (
                <div key={s.l} className="text-center bg-[#111118] border border-[#1E1E2E] rounded-xl p-3">
                  <p className="text-xl font-black text-[#F8FAFC]">{s.v}</p>
                  <p className="text-[10px] text-[#64748B] mt-0.5">{s.l}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionLabel>About the Founder</SectionLabel>
            <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold text-[#F8FAFC] tracking-tight leading-tight">
              Built by Someone Who{" "}
              <span className="shimmer-text">Understands</span> Your Problem
            </h2>
            <p className="mt-6 text-lg text-[#64748B] leading-relaxed">
              {SITE.founderBio}
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Every system I build is designed to work while you focus on what matters — running your business.",
                "I've seen too many businesses lose customers to slow responses. I fix that.",
                "Flowtix isn't a generic agency. We build systems specific to your industry and goals.",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6366F1] mt-2.5 shrink-0" />
                  <p className="text-[#94A3B8] text-sm leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
