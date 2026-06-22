"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Users,
  MessageCircle,
  MessagesSquare,
  Database,
  Workflow,
} from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import Card from "@/components/ui/Card";
import { SERVICES } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Globe,
  Users,
  MessageCircle,
  MessagesSquare,
  Database,
  Workflow,
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Services() {
  const featured = SERVICES.find((s) => s.featured);
  const regular = SERVICES.filter((s) => !s.featured);

  return (
    <section id="services" className="py-24 relative">
      {/* Subtle divider gradient */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#6366F1]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel className="justify-center">What We Build</SectionLabel>
          <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold text-[#F8FAFC] tracking-tight">
            AI-Powered Systems That Work{" "}
            <span className="shimmer-text">While You Sleep</span>
          </h2>
          <p className="mt-4 text-lg text-[#64748B] max-w-xl mx-auto">
            Six core services that turn your business into a lead-capturing, customer-converting machine.
          </p>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* Featured: WhatsApp — spans 2 cols on lg */}
          {featured && (() => {
            const Icon = iconMap[featured.icon];
            return (
              <motion.div key={featured.title} variants={item} className="lg:col-span-2">
                <Card glow className="p-8 h-full relative overflow-hidden">
                  {/* Glow bg */}
                  <div className="absolute inset-0 opacity-20"
                    style={{ background: "radial-gradient(ellipse at top right, #10B981, transparent 60%)" }} />

                  <div className="relative flex items-start gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-[#10B981]/15 border border-[#10B981]/30 flex items-center justify-center shrink-0">
                      <Icon size={26} className="text-[#10B981]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-bold text-[#F8FAFC]">{featured.title}</h3>
                        <span className="text-[10px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/20">
                          Popular
                        </span>
                      </div>
                      <p className="text-[#64748B] leading-relaxed">{featured.description}</p>

                      <div className="mt-6 grid grid-cols-3 gap-3">
                        {["Instant Reply", "Lead Qualify", "24/7 Active"].map((f) => (
                          <div key={f} className="bg-[#10B981]/5 border border-[#10B981]/10 rounded-xl px-3 py-2 text-center">
                            <p className="text-xs font-semibold text-[#10B981]">{f}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })()}

          {/* Regular services */}
          {regular.map((s) => {
            const Icon = iconMap[s.icon];
            return (
              <motion.div key={s.title} variants={item}>
                <Card glow className="p-6 h-full">
                  <div className="w-11 h-11 rounded-xl bg-[#6366F1]/10 border border-[#6366F1]/20 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-[#6366F1]" />
                  </div>
                  <h3 className="text-base font-bold text-[#F8FAFC] mb-2">{s.title}</h3>
                  <p className="text-sm text-[#64748B] leading-relaxed">{s.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
