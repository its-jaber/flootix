"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";

const testimonials = [
  {
    brand: "▲ Vercel",
    quote:
      "Flowtix replaced three separate tools we were using. Our ops team went from spending 4 hours a week on manual work to nearly zero.",
    name: "Aiko Ilan",
    title: "Head of Operations, Vercel",
  },
  {
    brand: "◈ Linear",
    quote:
      "I set up our entire customer onboarding flow in under an hour. The visual editor just clicks — anyone on the team can edit it.",
    name: "Marcus Klein",
    title: "Product Manager, Linear",
  },
  {
    brand: "⬡ Framer",
    quote:
      "The AI classification was a game changer. Our support tickets are now automatically routed before anyone even sees them.",
    name: "Sara Patel",
    title: "CTO, Framer",
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
          <SectionLabel className="justify-center mb-4">Testimonials</SectionLabel>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Loved by teams{" "}
            <em className="accent-italic">worldwide</em>
          </h2>
          <p className="mt-4 text-[#666] text-lg max-w-xl mx-auto">
            Flowtix acts as the automation layer between the tools your team already uses every day.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {testimonials.map((t, i) => (
            <motion.div key={t.name} variants={item}>
              <div className={`h-full bg-[#111111] border rounded-2xl p-6 flex flex-col gap-4 transition-colors ${
                i === 1 ? "border-[#C8FF00]/20 hover:border-[#C8FF00]/30" : "border-[#1F1F1F] hover:border-[#2A2A2A]"
              }`}>
                <p className="text-xs font-bold text-[#555] tracking-widest">{t.brand}</p>
                <p className="text-sm text-[#AAAAAA] leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3 pt-3 border-t border-[#1F1F1F]">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#C8FF00]/20 to-[#C8FF00]/5 border border-[#C8FF00]/20 flex items-center justify-center text-[10px] font-bold text-[#C8FF00]">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">{t.name}</p>
                    <p className="text-[10px] text-[#555]">{t.title}</p>
                  </div>
                  {i === 1 && (
                    <button className="ml-auto text-[10px] font-semibold text-[#C8FF00] border border-[#C8FF00]/20 rounded-full px-3 py-1 hover:bg-[#C8FF00]/10 transition-colors">
                      Visit website →
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
