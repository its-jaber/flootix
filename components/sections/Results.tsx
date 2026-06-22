"use client";

import { motion } from "framer-motion";
import { Zap, TrendingUp, Target, RefreshCw, Clock } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { RESULTS } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Zap,
  TrendingUp,
  Target,
  RefreshCw,
  Clock,
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export default function Results() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#10B981]/20 to-transparent" />
      <div className="absolute inset-0 opacity-5"
        style={{ background: "radial-gradient(ellipse at center, #10B981, transparent 60%)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel className="justify-center">What You Get</SectionLabel>
          <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold text-[#F8FAFC] tracking-tight">
            Built for Growth.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-[#059669]">
              Measured by Results.
            </span>
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {RESULTS.map((r, i) => {
            const Icon = iconMap[r.icon];
            const isLast = i === RESULTS.length - 1;
            return (
              <motion.div
                key={r.metric}
                variants={item}
                className={isLast && RESULTS.length % 3 !== 0 ? "sm:col-span-2 lg:col-span-1" : ""}
              >
                <div className="group h-full bg-[#111118] border border-[#1E1E2E] rounded-2xl p-8 hover:border-[#10B981]/30 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: "radial-gradient(circle at 50% 0%, rgba(16,185,129,0.05) 0%, transparent 70%)" }} />

                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-[#10B981]/10 border border-[#10B981]/20 flex items-center justify-center mb-5">
                      <Icon size={22} className="text-[#10B981]" />
                    </div>
                    <div className="text-5xl font-black text-[#F8FAFC] tracking-tight mb-1">
                      {r.metric}
                    </div>
                    <p className="text-base font-semibold text-[#10B981] mb-1">{r.description}</p>
                    <p className="text-sm text-[#64748B]">{r.label}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
