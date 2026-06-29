"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
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
    className={`absolute bg-[#141414] border border-[#2A2A2A] rounded-2xl px-4 py-3 shadow-2xl ${className}`}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.5, type: "spring" }}
  >
    <p className="text-sm font-bold text-[#2170e9] whitespace-nowrap">{value}</p>
    <p className="text-[11px] text-[#888] whitespace-nowrap mt-0.5">{label}</p>
  </motion.div>
);

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-8 overflow-hidden text-center">
      {/* Hero orb */}
      <div
        className="animate-orb absolute top-[-15%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(30,30,30,0.8) 0%, rgba(15,15,15,0.4) 40%, transparent 70%)",
          boxShadow:
            "0 0 250px 80px rgba(33,112,233,0.06), 0 0 100px 30px rgba(33,112,233,0.04)",
        }}
      />
      {/* Top accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-[#2170e9]/30 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <SectionLabel className="justify-center">
            Now with AI-powered automation
          </SectionLabel>
        </motion.div>

        <motion.h1
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-[-0.03em]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Stop Losing Leads.
          <br />
          <em className="accent-italic">Automate</em> Your
          <br />
          Follow-Up.
        </motion.h1>

        <motion.p
          className="mt-4 text-xs font-semibold uppercase tracking-widest text-[#555]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          Serving dental clinics, gyms, immigration agencies, and coaching centers — worldwide
        </motion.p>

        <motion.p
          className="mt-4 text-lg text-[#AAAAAA] max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Flowtix helps businesses generate more leads, automate customer
          communication, and improve follow-up through AI-powered websites
          and automation systems — no code required.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-wrap gap-3 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button href="/contact" size="lg">
            Get Free Audit
          </Button>
          <Button href="#demo-projects" variant="ghost" size="lg">
            <ChevronRight size={14} />
            View Demo Projects
          </Button>
        </motion.div>

        <motion.div
          className="mt-5 flex justify-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
        >
          <span
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold border border-[#22c55e]/30 text-[#22c55e]"
            style={{ background: "rgba(34,197,94,0.08)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] inline-block" />
            Live in 14 days — or full refund
          </span>
        </motion.div>

        {/* Workflow diagram card */}
        <motion.div
          className="relative mt-16 mx-auto max-w-2xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative bg-[#141414] border border-[#2A2A2A] rounded-3xl p-8 shadow-2xl">
            {/* Window dots */}
            <div className="flex items-center gap-1.5 mb-6">
              <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
              <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
              <div className="w-3 h-3 rounded-full bg-[#28C840]" />
              <div className="ml-4 h-5 flex-1 max-w-48 bg-[#1A1A1A] border border-[#2A2A2A] rounded-full flex items-center px-3">
                <span className="text-[9px] text-[#666]">
                  floowtix.com
                </span>
              </div>
            </div>

            <SectionLabel className="mb-5">Live Automation Flow</SectionLabel>
            <WorkflowDiagram />

            <div className="mt-5 flex items-center justify-center gap-2">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2170e9] opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#2170e9]" />
              </span>
              <span className="text-[11px] text-[#888]">
                System running live
              </span>
            </div>
          </div>

          {/* Floating KPI cards */}
          <KPICard
            value="+340%"
            label="Lead Response Speed"
            delay={1}
            className="animate-float -top-5 -left-8 hidden lg:block"
          />
          <KPICard
            value="0 missed"
            label="Inquiries"
            delay={1.2}
            className="animate-float-2 -bottom-5 -left-6 hidden lg:block"
          />
          <KPICard
            value="3x"
            label="More Conversions"
            delay={1.4}
            className="animate-float-3 top-8 -right-8 hidden lg:block"
          />
        </motion.div>
      </div>
    </section>
  );
}
