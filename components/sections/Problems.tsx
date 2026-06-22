"use client";

import { motion } from "framer-motion";
import {
  BellOff,
  Clock,
  Repeat,
  BarChart2,
  TrendingDown,
} from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import Card from "@/components/ui/Card";
import { PROBLEMS } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  BellOff,
  Clock,
  Repeat,
  BarChart2,
  TrendingDown,
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Problems() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel className="justify-center">The Problem</SectionLabel>
          <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold text-[#F8FAFC] tracking-tight leading-tight">
            Most Businesses Are Losing{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
              Customers
            </span>{" "}
            Without Knowing It
          </h2>
          <p className="mt-4 text-lg text-[#64748B] max-w-2xl mx-auto">
            Every minute without an automated system is a minute your competition is winning.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {PROBLEMS.map((p) => {
            const Icon = iconMap[p.icon];
            return (
              <motion.div key={p.title} variants={item}>
                <Card glow className="p-6 h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-red-400" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-[#F8FAFC] mb-1">
                        {p.title}
                      </h3>
                      <p className="text-sm text-[#64748B] leading-relaxed">
                        {p.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}

          {/* Last row: wider card */}
          <motion.div variants={item} className="sm:col-span-2 lg:col-span-full">
            <Card className="p-6 border-red-500/10 bg-red-500/5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center shrink-0">
                  <span className="text-lg">⚠️</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-red-400">The Bottom Line</p>
                  <p className="text-sm text-[#64748B]">
                    Without automation, you&apos;re competing with businesses that respond instantly, follow up automatically, and never miss a lead. The gap is widening every day.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
