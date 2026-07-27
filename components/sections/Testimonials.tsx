"use client";

import { motion } from "framer-motion";
import { CalendarCheck, Clock, Globe } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";

const stats = [
  {
    icon: CalendarCheck,
    value: "14 Days",
    label: "Delivery Guarantee",
    detail: "System live in 14 days or full refund",
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Systems Running",
    detail: "Every system works around the clock",
  },
  {
    icon: Globe,
    value: "Global",
    label: "Remote Delivery",
    detail: "Serving clients worldwide",
  },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function WhyFlowtix() {
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
          <SectionLabel className="justify-center mb-4">Why Flowtix</SectionLabel>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Built for Businesses That{" "}
            <em className="accent-italic">Can&apos;t Afford to Miss a Lead</em>
          </h2>
          <p className="mt-4 text-[#888] text-lg max-w-xl mx-auto">
            Every system we build is fast, reliable, and working for your business around the clock.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div key={s.label} variants={item}>
                <div
                  className={`h-full flex flex-col items-center text-center rounded-2xl p-8 border transition-colors ${
                    i === 1
                      ? "bg-[#141414] border-[#2170e9]/30 shadow-xl shadow-[#2170e9]/5"
                      : "bg-[#0D0D0D] border-[#2A2A2A] hover:border-[#3A3A3A]"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                      i === 1
                        ? "bg-[#2170e9]/10 border border-[#2170e9]/20"
                        : "bg-[#1A1A1A] border border-[#2A2A2A]"
                    }`}
                  >
                    <Icon size={20} className={i === 1 ? "text-[#2170e9]" : "text-[#888]"} />
                  </div>
                  <p className="text-4xl font-black text-white tracking-tight mb-1">{s.value}</p>
                  <p className={`text-sm font-semibold mb-2 ${i === 1 ? "text-[#2170e9]" : "text-[#AAAAAA]"}`}>
                    {s.label}
                  </p>
                  <p className="text-xs text-[#666] leading-relaxed">{s.detail}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
