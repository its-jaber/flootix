"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import { STEPS } from "@/lib/constants";

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const dotX = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#8B5CF6]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel className="justify-center">The Process</SectionLabel>
          <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold text-[#F8FAFC] tracking-tight">
            From First Click to{" "}
            <span className="shimmer-text">Paying Customer</span> — Automated
          </h2>
          <p className="mt-4 text-lg text-[#64748B] max-w-xl mx-auto">
            A proven 4-step system that transforms your business into an automated growth engine.
          </p>
        </motion.div>

        {/* Desktop: horizontal steps */}
        <div ref={ref} className="hidden lg:block">
          {/* Progress line */}
          <div className="relative mb-16">
            <div className="absolute top-1/2 inset-x-0 h-px bg-[#1E1E2E]" />
            <div
              className="absolute top-1/2 left-0 h-px bg-gradient-to-r from-[#6366F1] to-[#8B5CF6]"
              style={{ width: "100%" }}
            />
            {!shouldReduce && (
              <motion.div
                className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#6366F1] shadow-lg shadow-[#6366F1]/50"
                style={{ left: dotX }}
              />
            )}
            <div className="relative flex justify-between">
              {STEPS.map((_, i) => (
                <div
                  key={i}
                  className="w-4 h-4 rounded-full border-2 border-[#6366F1] bg-[#0A0A0F]"
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-4 gap-8">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-left"
              >
                <div className="text-5xl font-black text-[#1E1E2E] mb-3 select-none">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-[#F8FAFC] mb-2">{step.title}</h3>
                <p className="text-sm text-[#64748B] leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical steps */}
        <div className="lg:hidden space-y-0">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              className="flex gap-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              {/* Timeline */}
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] flex items-center justify-center text-sm font-bold text-white shrink-0">
                  {i + 1}
                </div>
                {i < STEPS.length - 1 && (
                  <div className="w-px flex-1 bg-[#1E1E2E] my-2 min-h-[40px]" />
                )}
              </div>

              <div className="pb-10">
                <h3 className="text-base font-bold text-[#F8FAFC] mb-1">{step.title}</h3>
                <p className="text-sm text-[#64748B] leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
