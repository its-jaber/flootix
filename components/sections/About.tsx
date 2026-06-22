"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { SITE, FOUNDER_CREDIBILITY } from "@/lib/constants";

export default function About() {
  return (
    <section id="about" className="py-28 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-[#1F1F1F]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="flex flex-col items-center lg:items-start gap-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Avatar */}
            <div className="relative">
              <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-[#2170e9]/20 to-[#2170e9]/5 border border-[#2170e9]/20 flex items-center justify-center text-3xl font-black text-[#2170e9]">
                JA
              </div>
              <div className="absolute -bottom-2 -right-2 bg-[#111111] border border-[#2A2A2A] rounded-full px-2.5 py-1 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2170e9] animate-pulse" />
                <span className="text-[10px] font-bold text-white">Available</span>
              </div>
            </div>

            <div className="text-center lg:text-left">
              <h3 className="text-xl font-bold text-white">{SITE.founder}</h3>
              <p className="text-sm text-[#555] mt-0.5">{SITE.founderTitle}</p>
            </div>

            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {FOUNDER_CREDIBILITY.map((c) => (
                <div key={c} className="flex items-center gap-1.5 bg-[#111111] border border-[#1F1F1F] rounded-full px-3 py-1.5">
                  <CheckCircle2 size={11} className="text-[#2170e9]" />
                  <span className="text-xs text-[#888]">{c}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-3 w-full">
              {[
                { v: "50+", l: "Automations Built" },
                { v: "24/7", l: "Systems Running" },
                { v: "BD", l: "Based In" },
              ].map((s) => (
                <div key={s.l} className="text-center bg-[#111111] border border-[#1F1F1F] rounded-xl p-3">
                  <p className="text-xl font-black text-white">{s.v}</p>
                  <p className="text-[10px] text-[#555] mt-0.5">{s.l}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionLabel className="mb-4">About the Founder</SectionLabel>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Built by someone who{" "}
              <em className="accent-italic">understands</em> your problem
            </h2>
            <p className="text-[#666] leading-relaxed mb-8">{SITE.founderBio}</p>

            <div className="space-y-4">
              {[
                "Every system I build is designed to work while you focus on what matters — running your business.",
                "I've seen too many businesses lose customers to slow responses. I fix that.",
                "Flowtix isn't a generic agency. We build systems specific to your industry and goals.",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <div className="w-1 h-1 rounded-full bg-[#2170e9] mt-2.5 shrink-0" />
                  <p className="text-sm text-[#666] leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
