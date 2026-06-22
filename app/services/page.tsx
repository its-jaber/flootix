"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Users,
  MessageCircle,
  MessagesSquare,
  Database,
  Workflow,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import CTA from "@/components/sections/CTA";

const services = [
  {
    icon: Globe,
    title: "AI Website Design",
    color: "#6366F1",
    description:
      "Conversion-focused websites that capture leads 24/7. We design and build sites that look premium, load fast, and turn visitors into inquiries.",
    included: [
      "Custom design — no templates",
      "Lead capture forms integrated",
      "Mobile-first responsive layout",
      "SEO foundation built-in",
      "WhatsApp CTA integration",
      "Analytics setup",
    ],
    whoFor: "Businesses without a website, or with a site that isn't generating leads.",
    outcomes: "More inquiries, higher trust, lower bounce rate.",
  },
  {
    icon: Users,
    title: "Lead Generation Systems",
    color: "#8B5CF6",
    description:
      "End-to-end lead capture infrastructure. Every inquiry tracked, logged, and routed to the right person automatically.",
    included: [
      "Custom lead forms",
      "Google Sheets / CRM integration",
      "Email notifications on every lead",
      "Lead tagging and categorization",
      "Duplicate detection",
      "Monthly lead report",
    ],
    whoFor: "Businesses losing track of inquiries or managing leads in WhatsApp chats.",
    outcomes: "Zero missed leads, full visibility, easy team handoff.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Automation",
    color: "#10B981",
    description:
      "Instant replies, lead qualification, and follow-up sequences running on WhatsApp 24/7 — without hiring extra staff.",
    included: [
      "WhatsApp Business API setup",
      "Instant auto-reply on inquiry",
      "Qualification question flows",
      "Follow-up message sequences",
      "Lead scoring and routing",
      "Opt-in broadcast campaigns",
    ],
    whoFor: "Any business that gets inquiries on WhatsApp and struggles to respond fast enough.",
    outcomes: "0-second response time, qualified leads in your inbox, no missed messages.",
  },
  {
    icon: MessagesSquare,
    title: "Messenger Automation",
    color: "#3B82F6",
    description:
      "Facebook Messenger automation for your business page. Turn page visitors into captured leads — automatically.",
    included: [
      "Facebook Page bot setup",
      "Comment-to-DM automations",
      "Lead qualification flows",
      "Broadcast messaging",
      "CRM integration",
      "Handover to human agent",
    ],
    whoFor: "Businesses with an active Facebook presence getting inquiries through comments or messages.",
    outcomes: "Faster response to Facebook leads, higher conversion from page traffic.",
  },
  {
    icon: Database,
    title: "CRM & Lead Management",
    color: "#F59E0B",
    description:
      "A complete pipeline view of every lead from first inquiry to closed sale. Never lose track of where a customer is in your process.",
    included: [
      "CRM setup (Notion / Airtable / custom)",
      "Lead pipeline stages",
      "Team assignment and handoff",
      "Follow-up reminders",
      "Deal tracking",
      "Revenue reporting",
    ],
    whoFor: "Teams with multiple leads and no system to track them beyond WhatsApp and spreadsheets.",
    outcomes: "Full visibility, consistent follow-up, more deals closed.",
  },
  {
    icon: Workflow,
    title: "Business Process Automation",
    color: "#EC4899",
    description:
      "Custom n8n workflows that connect your tools and eliminate manual, repetitive work across your entire business operation.",
    included: [
      "n8n workflow design and build",
      "App integrations (Google, WhatsApp, email)",
      "Invoice / document automation",
      "Reporting automation",
      "Appointment and booking workflows",
      "Ongoing monitoring",
    ],
    whoFor: "Any business spending hours on repetitive tasks that could be automated.",
    outcomes: "10+ hours saved per week, fewer errors, faster operations.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ServicesPage() {
  return (
    <>
      <section className="pt-32 pb-20 relative">
        <div className="absolute top-0 inset-0 opacity-10"
          style={{ background: "radial-gradient(ellipse at 50% 0%, #6366F1, transparent 60%)" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SectionLabel className="justify-center">What We Build</SectionLabel>
            <h1 className="mt-4 text-5xl sm:text-6xl font-extrabold text-white tracking-tight">
              Our <span className="shimmer-text">Services</span>
            </h1>
            <p className="mt-4 text-xl text-[#888] max-w-2xl mx-auto leading-relaxed">
              Six core systems that transform your business into an automated, lead-capturing machine.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="space-y-8"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                variants={item}
                className="bg-[#111111] border border-[#2A2A2A] rounded-2xl p-8 hover:border-[#2D2D42] transition-colors group"
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Left */}
                  <div className="lg:col-span-1">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                      style={{ background: `${s.color}15`, border: `1px solid ${s.color}30` }}
                    >
                      <s.icon size={24} style={{ color: s.color }} />
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-mono text-[#888]">0{i + 1}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-3">{s.title}</h2>
                    <p className="text-[#888] leading-relaxed text-sm">{s.description}</p>

                    <div className="mt-5 p-4 bg-[#0A0A0A] rounded-xl border border-[#2A2A2A]">
                      <p className="text-[10px] font-semibold uppercase tracking-widest text-[#888] mb-2">Best For</p>
                      <p className="text-sm text-[#AAAAAA]">{s.whoFor}</p>
                    </div>
                  </div>

                  {/* Middle: included */}
                  <div className="lg:col-span-1">
                    <p className="text-xs font-semibold uppercase tracking-widest text-[#888] mb-4">
                      What&apos;s Included
                    </p>
                    <ul className="space-y-2.5">
                      {s.included.map((inc) => (
                        <li key={inc} className="flex items-center gap-2.5">
                          <CheckCircle2 size={14} style={{ color: s.color }} className="shrink-0" />
                          <span className="text-sm text-[#AAAAAA]">{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right: outcomes + CTA */}
                  <div className="lg:col-span-1 flex flex-col justify-between gap-6">
                    <div
                      className="p-5 rounded-xl"
                      style={{ background: `${s.color}08`, border: `1px solid ${s.color}20` }}
                    >
                      <p className="text-[10px] font-semibold uppercase tracking-widest mb-2" style={{ color: s.color }}>
                        Outcomes
                      </p>
                      <p className="text-sm text-[#AAAAAA] leading-relaxed">{s.outcomes}</p>
                    </div>

                    <Button href="/contact" variant="ghost" className="justify-between group-hover:border-[#6366F1]/40">
                      Get This System
                      <ArrowRight size={14} />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTA />
    </>
  );
}
