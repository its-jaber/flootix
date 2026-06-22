"use client";

import { motion } from "framer-motion";
import { BellOff, Clock, Repeat, BarChart2, TrendingDown } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { PROBLEMS } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = { BellOff, Clock, Repeat, BarChart2, TrendingDown };

const container = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function Problems() {
  return (
    <section className="py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel className="justify-center mb-4">The Problem</SectionLabel>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Most businesses are losing
            <br />
            customers{" "}
            <em className="accent-italic">without knowing it</em>
          </h2>
          <p className="mt-5 text-[#666] text-lg max-w-xl mx-auto">
            Every minute without automation is a minute your competition gains.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {PROBLEMS.map((p) => {
            const Icon = iconMap[p.icon];
            return (
              <motion.div key={p.title} variants={item}>
                <div className="group h-full bg-[#111111] border border-[#1F1F1F] rounded-2xl p-6 hover:border-[#2A2A2A] transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/10 flex items-center justify-center mb-4">
                    <Icon size={17} className="text-red-400" />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-2">{p.title}</h3>
                  <p className="text-sm text-[#666] leading-relaxed">{p.description}</p>
                </div>
              </motion.div>
            );
          })}

          {/* Bottom warning */}
          <motion.div variants={item} className="sm:col-span-2 lg:col-span-full">
            <div className="bg-[#111111] border border-red-500/10 rounded-2xl p-5 flex items-center gap-4">
              <div className="w-8 h-8 rounded-xl bg-red-500/10 flex items-center justify-center shrink-0 text-base">
                ⚠️
              </div>
              <p className="text-sm text-[#888]">
                <span className="text-red-400 font-semibold">The bottom line: </span>
                Without automation, you&apos;re competing with businesses that respond instantly and never miss a lead. The gap widens every day.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
