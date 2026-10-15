"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";

const faqs = [
  {
    q: "How long does it take to build my system?",
    a: "Most projects are completed within 7–14 days depending on complexity. Simple landing pages take 3–5 days.",
  },
  {
    q: "Do I need any technical knowledge?",
    a: "No. We handle everything from design to automation setup. You just review and approve.",
  },
  {
    q: "What tools do you use?",
    a: "We use n8n for automation, Next.js for websites, Google Sheets for lead tracking, and WhatsApp Business API for messaging.",
  },
  {
    q: "How much does it cost?",
    a: "Our packages start from $249 setup + $349/month. We offer transparent pricing with no hidden fees.",
  },
  {
    q: "Will my leads be tracked automatically?",
    a: "Yes. Every inquiry that comes through your system is automatically logged in Google Sheets with name, contact, date, and source.",
  },
  {
    q: "What happens after the project is delivered?",
    a: "We offer a 2-week support period after delivery. For ongoing support, we offer monthly maintenance packages.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-28 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-[#1F1F1F]" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <SectionLabel className="justify-center mb-4">FAQ</SectionLabel>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Common <em className="accent-italic">Questions</em>
          </h2>
        </motion.div>

        <motion.div
          className="space-y-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-[#111111] border border-[#2A2A2A] rounded-xl overflow-hidden hover:border-[#3A3A3A] transition-colors"
            >
              <button
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-sm font-semibold text-white">{faq.q}</span>
                <span className="shrink-0 text-[#555]">
                  {open === i ? <Minus size={15} /> : <Plus size={15} />}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                  >
                    <p className="px-5 pb-5 text-sm text-[#888] leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
