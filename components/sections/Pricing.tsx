"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

const plans = [
  {
    name: "Starter",
    price: "10,000 – 15,000",
    bestFor: "Small businesses getting started",
    features: [
      "Professional landing page",
      "Lead capture form",
      "WhatsApp contact button",
      "Mobile responsive design",
      "1 revision round",
    ],
    featured: false,
  },
  {
    name: "Growth",
    price: "20,000 – 30,000",
    bestFor: "Coaching centers, gyms, clinics",
    features: [
      "Full website (up to 5 pages)",
      "Lead generation form + tracking",
      "WhatsApp automation",
      "Messenger automation",
      "Google Sheets lead dashboard",
      "Email notifications",
      "2 revision rounds",
    ],
    featured: true,
  },
  {
    name: "Premium",
    price: "35,000 – 50,000",
    bestFor: "Businesses that want full automation",
    features: [
      "Everything in Growth",
      "CRM & lead management system",
      "Automated follow-up sequences",
      "Lead scoring & routing",
      "n8n workflow automation",
      "Monthly check-in support",
      "3 revision rounds",
    ],
    featured: false,
  },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function Pricing() {
  return (
    <section className="py-28 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-[#1F1F1F]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <SectionLabel className="justify-center mb-4">Investment</SectionLabel>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Transparent Pricing.{" "}
            <em className="accent-italic">No Hidden Fees.</em>
          </h2>
          <p className="mt-4 text-[#888] text-lg">
            Every package is a one-time project fee — not a subscription.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {plans.map((plan) => (
            <motion.div key={plan.name} variants={item}>
              <div
                className={`relative h-full flex flex-col rounded-2xl p-7 border transition-colors ${
                  plan.featured
                    ? "bg-[#141414] border-[#2170e9]/30 shadow-xl shadow-[#2170e9]/5"
                    : "bg-[#0D0D0D] border-[#2A2A2A] hover:border-[#3A3A3A]"
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-[#2170e9] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <p className="text-sm font-semibold text-[#AAAAAA] mb-3">{plan.name}</p>
                  <div className="flex items-end gap-1.5 mb-1">
                    <span className="text-3xl font-black text-white tracking-tight">
                      ৳{plan.price}
                    </span>
                  </div>
                  <p className="text-xs text-[#555] mb-3">One-time project fee</p>
                  <p className="text-sm text-[#888] leading-relaxed">
                    Best for: {plan.bestFor}
                  </p>
                </div>

                <div className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <div key={f} className="flex items-start gap-2.5">
                      <Check
                        size={13}
                        className={`mt-0.5 shrink-0 ${plan.featured ? "text-[#2170e9]" : "text-[#555]"}`}
                      />
                      <span className="text-sm text-[#AAAAAA]">{f}</span>
                    </div>
                  ))}
                </div>

                <Button href="/contact" variant={plan.featured ? "primary" : "dark"} className="w-full justify-center">
                  Book Free Audit
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          className="text-center text-sm text-[#555] mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          Not sure which package fits?{" "}
          <a href="/contact" className="text-[#2170e9] hover:underline">
            Book a free audit
          </a>{" "}
          and we&apos;ll recommend the right one.
        </motion.p>
      </div>
    </section>
  );
}
