"use client";

import { motion } from "framer-motion";
import { Clock, CalendarCheck, Globe } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";

const stats = [
  {
    icon: CalendarCheck,
    value: "14 Days",
    label: "Delivery Guarantee",
    description: "System live in 14 days or full refund",
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Systems Running",
    description: "Every system works around the clock",
  },
  {
    icon: Globe,
    value: "Global",
    label: "Remote Delivery",
    description: "Serving clients worldwide",
  },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function Testimonials() {
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
            Built for Businesses That Can&apos;t Afford{" "}
            <em className="accent-italic">to Miss a Lead</em>
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <motion.div key={s.label} variants={item}>
                <div className="h-full bg-[#111111] border border-[#2A2A2A] rounded-2xl p-8 text-center hover:border-[#3A3A3A] transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-[#2170e9]/10 border border-[#2170e9]/20 flex items-center justify-center mx-auto mb-5">
                    <Icon size={20} className="text-[#2170e9]" />
                  </div>
                  <div className="text-5xl font-black text-white tracking-tight mb-1">{s.value}</div>
                  <p className="text-sm font-semibold text-[#2170e9] mb-1">{s.label}</p>
                  <p className="text-xs text-[#888]">{s.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
