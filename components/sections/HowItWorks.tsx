"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import { STEPS } from "@/lib/constants";

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduce = useReducedMotion();

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const dotX = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section id="how-it-works" className="py-28 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-[#1F1F1F]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <SectionLabel className="justify-center mb-4">The Process</SectionLabel>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            From first click to{" "}
            <em className="accent-italic">paying customer</em> — automated
          </h2>
          <p className="mt-4 text-[#888] text-lg max-w-xl mx-auto">
            A proven 4-step system that transforms your business into an automated growth engine.
          </p>
        </motion.div>

        {/* Desktop */}
        <div ref={ref} className="hidden lg:block">
          <div className="relative mb-14">
            <div className="absolute top-2 inset-x-0 h-px bg-[#2A2A2A]" />
            {!shouldReduce && (
              <motion.div
                className="absolute top-[3px] -translate-y-1/2 w-3 h-3 rounded-full bg-[#C8FF00] shadow-lg shadow-[#C8FF00]/30"
                style={{ left: dotX }}
              />
            )}
            <div className="relative flex justify-between">
              {STEPS.map((_, i) => (
                <div
                  key={i}
                  className="w-4 h-4 rounded-full border-2 border-[#C8FF00]/40 bg-[#0A0A0A]"
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-4 gap-8">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                {/* Step number — visible but subtle */}
                <div className="text-6xl font-black text-[#222] mb-3 select-none">
                  {step.number}
                </div>
                <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-[#888] leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile */}
        <div className="lg:hidden space-y-0">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              className="flex gap-5"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              <div className="flex flex-col items-center">
                <div className="w-9 h-9 rounded-full bg-[#C8FF00]/10 border border-[#C8FF00]/25 flex items-center justify-center text-xs font-bold text-[#C8FF00] shrink-0">
                  {i + 1}
                </div>
                {i < STEPS.length - 1 && (
                  <div className="w-px flex-1 bg-[#2A2A2A] my-2 min-h-10" />
                )}
              </div>
              <div className="pb-10">
                <h3 className="text-sm font-bold text-white mb-1">{step.title}</h3>
                <p className="text-sm text-[#888] leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
