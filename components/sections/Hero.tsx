"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import WorkflowDiagram from "@/components/WorkflowDiagram";

const TRUSTED = ["Vercel", "Linear", "Framer", "Raycast", "Slack"];

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
    className={`absolute bg-[#111111] border border-[#1F1F1F] rounded-2xl px-4 py-3 shadow-2xl backdrop-blur-sm ${className}`}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.5, type: "spring" }}
  >
    <p className="text-sm font-bold text-[#C8FF00] whitespace-nowrap">{value}</p>
    <p className="text-[11px] text-[#666] whitespace-nowrap mt-0.5">{label}</p>
  </motion.div>
);

export default function Hero() {
  return (
    <>
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-8 overflow-hidden text-center">
        {/* Hero orb */}
        <div className="animate-orb absolute top-[-10%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at center, #1a1a1a 0%, #0f0f0f 40%, transparent 70%)",
            boxShadow: "0 0 200px 60px rgba(200,255,0,0.04), inset 0 0 100px rgba(255,255,255,0.03)",
          }}
        />
        {/* Subtle top glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-40 bg-gradient-to-b from-[#C8FF00]/20 to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <SectionLabel className="justify-center">Now with AI-powered automation</SectionLabel>
          </motion.div>

          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-[-0.03em]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Stop Losing Leads.
            <br />
            <em className="accent-italic not-italic">Automate</em> Your
            <br />
            Follow-Up.
          </motion.h1>

          <motion.p
            className="mt-6 text-lg text-[#AAAAAA] max-w-2xl mx-auto leading-relaxed"
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
              Start for free
            </Button>
            <Button href="#demo-projects" variant="ghost" size="lg">
              <Play size={14} />
              Watch demo
            </Button>
          </motion.div>

          {/* Workflow diagram card */}
          <motion.div
            className="relative mt-16 mx-auto max-w-2xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative bg-[#111111] border border-[#1F1F1F] rounded-3xl p-8 shadow-2xl">
              {/* Window dots */}
              <div className="flex items-center gap-1.5 mb-6">
                <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                <div className="ml-4 h-5 flex-1 max-w-48 bg-[#181818] border border-[#2A2A2A] rounded-full flex items-center px-3">
                  <span className="text-[9px] text-[#444]">flowtix.io/automation</span>
                </div>
              </div>

              <SectionLabel className="mb-4">Live Automation Flow</SectionLabel>
              <WorkflowDiagram />

              <div className="mt-4 flex items-center justify-center gap-2">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C8FF00] opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#C8FF00]" />
                </span>
                <span className="text-[10px] text-[#666]">System running live</span>
              </div>
            </div>

            {/* Floating KPI cards */}
            <KPICard value="+340%" label="Lead Response Speed" delay={1} className="animate-float -top-5 -left-8 hidden lg:block" />
            <KPICard value="0 missed" label="Inquiries" delay={1.2} className="animate-float-2 -bottom-5 -left-6 hidden lg:block" />
            <KPICard value="3x" label="More Conversions" delay={1.4} className="animate-float-3 top-8 -right-8 hidden lg:block" />
          </motion.div>
        </div>
      </section>

      {/* Trusted by bar */}
      <motion.div
        className="relative z-10 border-y border-[#1F1F1F] py-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
            <span className="text-xs font-medium text-[#444] uppercase tracking-widest whitespace-nowrap">
              Trusted by teams at
            </span>
            <div className="flex items-center gap-8 sm:gap-12">
              {TRUSTED.map((name) => (
                <span key={name} className="text-sm font-semibold text-[#444] hover:text-[#888] transition-colors cursor-default">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
