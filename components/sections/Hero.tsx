"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import WorkflowDiagram from "@/components/WorkflowDiagram";

const KPICard = ({
  value,
  label,
  delay,
  className,
}: {
  value: string;
  label: string;
  delay: number;
  className?: string;
}) => (
  <motion.div
    className={`absolute bg-[#111118] border border-[#1E1E2E] rounded-xl px-4 py-2.5 shadow-xl ${className}`}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.5, type: "spring" }}
  >
    <p className="text-xs font-bold text-[#10B981] whitespace-nowrap">{value}</p>
    <p className="text-[10px] text-[#64748B] whitespace-nowrap">{label}</p>
  </motion.div>
);

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
      {/* Background gradient blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{ background: "radial-gradient(circle, #6366F1, transparent)" }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-8"
        style={{ background: "radial-gradient(circle, #8B5CF6, transparent)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="text-left"
          >
            <motion.div variants={item}>
              <SectionLabel>AI Growth Systems Agency</SectionLabel>
            </motion.div>

            <motion.h1
              variants={item}
              className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[#F8FAFC] leading-[1.05] tracking-[-0.03em]"
            >
              Stop Losing Leads.{" "}
              <span className="shimmer-text">Automate</span>{" "}
              Your Follow-Up.{" "}
              <span
                className="text-transparent"
                style={{
                  WebkitTextStroke: "1px #6366F1",
                }}
              >
                Grow Faster.
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 text-lg text-[#64748B] leading-relaxed max-w-lg"
            >
              Flowtix helps businesses generate more leads, automate customer
              communication, and improve follow-up through AI-powered websites
              and automation systems.
            </motion.p>

            <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact" size="lg">
                Get Free Audit
                <ArrowRight size={16} />
              </Button>
              <Button href="#demo-projects" variant="ghost" size="lg">
                <Play size={14} />
                View Demo Projects
              </Button>
            </motion.div>

            {/* Social proof */}
            <motion.div
              variants={item}
              className="mt-10 flex items-center gap-4 text-sm text-[#64748B]"
            >
              <div className="flex -space-x-2">
                {["E", "R", "S"].map((l) => (
                  <div
                    key={l}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] flex items-center justify-center text-[10px] font-bold text-white border-2 border-[#0A0A0F]"
                  >
                    {l}
                  </div>
                ))}
              </div>
              <span>Trusted by growing businesses across Bangladesh</span>
            </motion.div>
          </motion.div>

          {/* Right: Workflow Diagram */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            {/* Diagram card */}
            <div className="relative bg-[#111118] border border-[#1E1E2E] rounded-3xl p-8">
              {/* Header bar */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                <div className="ml-3 h-5 bg-[#1E1E2E] rounded flex-1 max-w-40 flex items-center px-2">
                  <span className="text-[9px] text-[#64748B]">flowtix.io/automation</span>
                </div>
              </div>

              <p className="text-xs font-semibold uppercase tracking-widest text-[#64748B] mb-4">
                Live Automation Flow
              </p>

              <WorkflowDiagram />

              {/* Live badge */}
              <div className="mt-4 flex items-center justify-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]" />
                </span>
                <span className="text-[10px] text-[#10B981] font-medium">System running live</span>
              </div>
            </div>

            {/* Floating KPI cards */}
            <KPICard
              value="+340%"
              label="Lead Response Speed"
              delay={1}
              className="animate-float -top-4 -left-6 hidden sm:block"
            />
            <KPICard
              value="0"
              label="Missed Inquiries"
              delay={1.2}
              className="animate-float-delay -bottom-4 -left-4 hidden sm:block"
            />
            <KPICard
              value="3x"
              label="More Conversions"
              delay={1.4}
              className="animate-float-delay-2 top-12 -right-6 hidden sm:block"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
