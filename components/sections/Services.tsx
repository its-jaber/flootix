"use client";

import { motion } from "framer-motion";
import { Globe, Users, MessageCircle, MessagesSquare, Database, Workflow } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { SERVICES } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Globe, Users, MessageCircle, MessagesSquare, Database, Workflow,
};

const container = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function Services() {
  const featured = SERVICES.find((s) => s.featured);
  const regular = SERVICES.filter((s) => !s.featured);

  return (
    <section id="services" className="py-28 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-[#1F1F1F]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel className="justify-center mb-4">Features</SectionLabel>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Everything you need to
            <br />
            <em className="accent-italic">automate at scale</em>
          </h2>
          <p className="mt-5 text-[#666] text-lg max-w-xl mx-auto">
            Built for teams who move fast and want their tools to keep up.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* Featured WhatsApp card — spans 2 cols */}
          {featured && (() => {
            const Icon = iconMap[featured.icon];
            return (
              <motion.div key={featured.title} variants={item} className="lg:col-span-2">
                <div className="group h-full bg-[#111111] border border-[#1F1F1F] rounded-2xl p-8 hover:border-[#2A2A2A] transition-colors relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-5"
                    style={{ background: "#2170e9", transform: "translate(30%, -30%)" }} />
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-12 h-12 rounded-xl bg-[#2170e9]/10 border border-[#2170e9]/20 flex items-center justify-center">
                        <Icon size={22} className="text-[#2170e9]" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-[#2170e9]/10 text-[#2170e9] border border-[#2170e9]/20">
                        Most Popular
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{featured.title}</h3>
                    <p className="text-sm text-[#666] leading-relaxed mb-6">{featured.description}</p>

                    <div className="grid grid-cols-3 gap-3">
                      {["Instant Reply", "Lead Qualify", "24/7 Active"].map((f) => (
                        <div key={f} className="bg-[#181818] border border-[#2A2A2A] rounded-xl px-3 py-2.5 text-center">
                          <p className="text-xs font-semibold text-[#AAAAAA]">{f}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })()}

          {regular.map((s) => {
            const Icon = iconMap[s.icon];
            return (
              <motion.div key={s.title} variants={item}>
                <div className="group h-full bg-[#111111] border border-[#1F1F1F] rounded-2xl p-6 hover:border-[#2A2A2A] transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-[#181818] border border-[#2A2A2A] flex items-center justify-center mb-4">
                    <Icon size={18} className="text-[#AAAAAA]" />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-sm text-[#666] leading-relaxed">{s.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#2170e9] text-white text-sm font-semibold rounded-full hover:bg-[#3b82f6] transition-colors"
          >
            Book Free Audit
          </a>
        </motion.div>
      </div>
    </section>
  );
}
