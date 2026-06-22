"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    description: "Perfect for trying basic automations and connecting your first tools.",
    features: ["3 active workflows", "500 tasks per month", "Basic app integrations"],
    cta: "Get Started",
    ctaVariant: "dark" as const,
    featured: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    description: "Unlock advanced routing, AI agents, monitoring, and higher automation volume.",
    features: [
      "Unlimited active workflows",
      "25,000 tasks per month",
      "AI actions and approvals",
      "Live workflow analytics",
    ],
    cta: "Start pro trial",
    ctaVariant: "primary" as const,
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Advanced security, guaranteed uptime, and custom workflows for large teams.",
    features: ["Custom task volume", "SSO and role permissions", "Dedicated support", "Custom API integrations"],
    cta: "Contact us",
    ctaVariant: "dark" as const,
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
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <SectionLabel className="justify-center mb-4">Pricing</SectionLabel>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Start small, automate{" "}
            <em className="accent-italic">more as you grow</em>
          </h2>
          <p className="mt-4 text-[#666] text-lg">No hidden fees. Start free, scale when you&apos;re ready.</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {plans.map((plan) => (
            <motion.div key={plan.name} variants={item}>
              <div className={`relative h-full flex flex-col rounded-2xl p-7 border transition-colors ${
                plan.featured
                  ? "bg-[#111111] border-[#C8FF00]/30 shadow-xl shadow-[#C8FF00]/5"
                  : "bg-[#0D0D0D] border-[#1F1F1F] hover:border-[#2A2A2A]"
              }`}>
                {plan.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-[#C8FF00] text-black text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                      Most popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <p className="text-sm font-semibold text-[#AAAAAA] mb-3">{plan.name}</p>
                  <div className="flex items-end gap-1 mb-3">
                    <span className="text-5xl font-black text-white tracking-tight">{plan.price}</span>
                    {plan.period && <span className="text-[#555] mb-2 text-sm">{plan.period}</span>}
                  </div>
                  <p className="text-sm text-[#555] leading-relaxed">{plan.description}</p>
                </div>

                <div className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <div key={f} className="flex items-center gap-2.5">
                      <Check size={13} className={plan.featured ? "text-[#C8FF00]" : "text-[#444]"} />
                      <span className="text-sm text-[#888]">{f}</span>
                    </div>
                  ))}
                </div>

                <Button href="/contact" variant={plan.ctaVariant} className="w-full justify-center">
                  {plan.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
