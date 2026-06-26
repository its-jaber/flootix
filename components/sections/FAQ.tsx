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
    a: "Our packages start from 10,000 BDT. We offer transparent pricing with no hidden fees or monthly subscriptions.",
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

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#1F1F1F]">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
      >
        <span className="text-sm font-semibold text-white">{q}</span>
        <span className="shrink-0 w-6 h-6 rounded-full bg-[#1A1A1A] border border-[#2A2A2A] flex items-center justify-center">
          {open ? <Minus size={12} className="text-[#2170e9]" /> : <Plus size={12} className="text-[#666]" />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-[#888] leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
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
            Common Questions
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
