"use client";

import { motion } from "framer-motion";
import { Zap, TrendingUp, Target, RefreshCw, Clock } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { RESULTS } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = { Zap, TrendingUp, Target, RefreshCw, Clock };

const container = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } };
const item = { hidden: { opacity: 0, scale: 0.95 }, show: { opacity: 1, scale: 1, transition: { duration: 0.4 } } };

export default function Results() {
  return (
    <section className="py-28 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-[#1F1F1F]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <SectionLabel className="justify-center mb-4">What You Get</SectionLabel>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Built for growth.{" "}
            <em className="accent-italic">Measured by results.</em>
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {RESULTS.map((r) => {
            const Icon = iconMap[r.icon];
            return (
              <motion.div key={r.metric} variants={item}>
                <div className="group h-full bg-[#111111] border border-[#2A2A2A] rounded-2xl p-8 hover:border-[#3A3A3A] transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-[#C8FF00]/10 border border-[#C8FF00]/20 flex items-center justify-center mb-5">
                    <Icon size={18} className="text-[#C8FF00]" />
                  </div>
                  <div className="text-5xl font-black text-white tracking-tight mb-1">
                    {r.metric}
                  </div>
                  <p className="text-sm font-semibold text-[#C8FF00] mb-1">{r.description}</p>
                  <p className="text-xs text-[#888]">{r.label}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
