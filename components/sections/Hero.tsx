"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Calendar } from "lucide-react";
import Image from "next/image";

const ease = [0.16, 1, 0.3, 1] as const;

const kpis = [
  { v: "+340%", l: "Lead Response" },
  { v: "0",     l: "Missed Leads"  },
  { v: "3×",    l: "Conversions"   },
  { v: "24/7",  l: "Always On"     },
  { v: "14d",   l: "Guaranteed"    },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY      = useTransform(scrollYProgress, [0, 1], ["0%",   "22%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%",   "10%"]);
  const fade     = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden text-center"
    >
      {/* ── Background image + parallax ── */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <Image
          src="/hero-bg.webp"
          alt=""
          fill
          priority
          quality={90}
          className="object-cover object-center"
          aria-hidden="true"
        />
        {/* Wave depth gradients */}
        <div className="absolute inset-0" style={{
          background: [
            "radial-gradient(ellipse 100% 55% at 5% 10%,  rgba(18,50,140,0.60) 0%, transparent 60%)",
            "radial-gradient(ellipse 80%  45% at 95% 25%, rgba(35,90,200,0.35) 0%, transparent 55%)",
            "radial-gradient(ellipse 150% 50% at 50% 100%,rgba(8,22,70,0.90)  0%, transparent 55%)",
          ].join(","),
        }} />
        {/* Cinematic overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-[#050810]" />
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse 75% 55% at 50% 42%, transparent 20%, rgba(3,5,14,0.55) 80%)",
        }} />
      </motion.div>

      {/* ── Ambient glow orb ── */}
      <motion.div
        className="absolute top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none z-[1]"
        style={{ width: "min(760px,110vw)", height: "min(480px,65vw)" }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-full h-full rounded-full" style={{
          background: "radial-gradient(ellipse at center, rgba(60,137,255,0.09) 0%, rgba(60,137,255,0.04) 40%, transparent 70%)",
        }} />
      </motion.div>

      {/* ── Horizontal light streak ── */}
      <motion.div
        className="absolute left-0 right-0 h-px pointer-events-none z-[1]"
        style={{ top: "44%" }}
        animate={{ scaleX: [0.85, 1, 0.85], opacity: [0.4, 0.9, 0.4] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-full h-full" style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(60,137,255,0.18) 25%, rgba(120,180,255,0.30) 50%, rgba(60,137,255,0.18) 75%, transparent 100%)",
        }} />
      </motion.div>

      {/* ── Content ── */}
      <motion.div
        className="relative z-10 flex flex-col items-center w-full max-w-[880px] mx-auto px-4 sm:px-6 py-28 sm:py-36"
        style={{ y: contentY, opacity: fade }}
      >
        {/* Logo */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease }}
        >
          <Image src="/logo.svg" alt="FloowTix" width={152} height={42} priority unoptimized />
        </motion.div>

        {/* Eyebrow */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-[7px] rounded-full mb-8 text-[10.5px] font-semibold tracking-[0.14em] uppercase"
          style={{ border: "1px solid rgba(60,137,255,0.35)", background: "rgba(60,137,255,0.07)", color: "#3C89FF" }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.18, ease }}
        >
          <motion.span
            className="w-[5px] h-[5px] rounded-full flex-shrink-0"
            style={{ background: "#3C89FF", boxShadow: "0 0 6px #3C89FF" }}
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2.4, repeat: Infinity }}
          />
          AI Growth Systems Agency
        </motion.div>

        {/* Headline — line-by-line reveal */}
        <h1 className="font-extrabold leading-[1.03] tracking-[-0.025em] text-white mb-7"
          style={{ fontSize: "clamp(2.8rem, 6.5vw, 5.5rem)" }}>
          {[
            { text: "Your Business.",  gradient: false, delay: 0.36 },
            { text: "One Connected",   gradient: true,  delay: 0.50 },
            { text: "AI System.",      gradient: false, delay: 0.64 },
          ].map(({ text, gradient, delay }) => (
            <span key={text} className="block overflow-hidden">
              <motion.span
                className={`block ${gradient ? "" : ""}`}
                style={gradient ? {
                  background: "linear-gradient(130deg, #e8f0ff 0%, #3C89FF 45%, #60a5fa 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                } : {}}
                initial={{ y: "108%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.75, delay, ease }}
              >
                {text}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Subline */}
        <motion.p
          className="text-[#7a8ba6] mb-7 leading-[1.75]"
          style={{ fontSize: "clamp(1rem, 1.8vw, 1.175rem)", maxWidth: 560 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.68, ease }}
        >
          Serving dental clinics, gyms, immigration agencies,
          and coaching centers —{" "}
          <span className="text-[#c8d4e8] font-medium">worldwide.</span>
          <br className="hidden sm:block" />
          Never miss a lead. Never chase a follow-up. Live in{" "}
          <span className="text-[#3C89FF] font-semibold">14 days</span>.
        </motion.p>

        {/* Swiss divider */}
        <motion.div
          className="w-12 h-px mb-7"
          style={{ background: "linear-gradient(90deg, transparent, #3C89FF, transparent)" }}
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.82, ease }}
        />

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-3 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.88, ease }}
        >
          <a
            href="/contact"
            className="group inline-flex items-center gap-2.5 px-7 py-[15px] rounded-full text-[13.5px] font-bold text-white transition-all duration-200 whitespace-nowrap"
            style={{
              background: "linear-gradient(135deg, #1d5fd8 0%, #3C89FF 55%, #60a5fa 100%)",
              boxShadow: "0 0 0 1px rgba(60,137,255,0.4), 0 4px 24px rgba(60,137,255,0.28), 0 1px 4px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.18)",
            }}
            onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 0 0 1px rgba(60,137,255,0.55), 0 8px 36px rgba(60,137,255,0.40), 0 2px 8px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.18)")}
            onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 0 0 1px rgba(60,137,255,0.4), 0 4px 24px rgba(60,137,255,0.28), 0 1px 4px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.18)")}
          >
            <Calendar size={15} aria-hidden="true" />
            Book a 15-Minute Discovery Call
            <ArrowRight
              size={14}
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </a>

          <a
            href="#demo-projects"
            className="inline-flex items-center gap-2 px-6 py-[14px] rounded-full text-[13.5px] font-medium text-[#7a8ba6] transition-all duration-200 hover:text-[#c8d4e8] whitespace-nowrap"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}
          >
            View Demo Projects
          </a>
        </motion.div>

        {/* Guarantee badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-semibold text-[#22c55e] mb-12"
          style={{ border: "1px solid rgba(34,197,94,0.28)", background: "rgba(34,197,94,0.07)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.02 }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] flex-shrink-0" />
          Live in 14 days — or full refund
        </motion.div>

        {/* KPI strip */}
        <motion.div
          className="flex items-stretch rounded-[18px] overflow-hidden"
          style={{ border: "1px solid rgba(255,255,255,0.09)", background: "rgba(255,255,255,0.025)" }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.12, ease }}
        >
          {kpis.map((k, i) => (
            <div
              key={k.v}
              className="flex flex-col items-center gap-0.5 px-5 py-3.5 transition-colors duration-200 hover:bg-[rgba(60,137,255,0.07)] cursor-default"
              style={{ borderRight: i < kpis.length - 1 ? "1px solid rgba(255,255,255,0.09)" : "none" }}
            >
              <span className="text-[1.05rem] font-extrabold text-[#3C89FF] leading-none tracking-tight">{k.v}</span>
              <span className="text-[10px] text-[#3a4d67] font-medium whitespace-nowrap tracking-wide">{k.l}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* ── Bottom fade ── */}
      <div className="absolute bottom-0 inset-x-0 h-32 pointer-events-none z-[2]"
        style={{ background: "linear-gradient(to top, #050810, transparent)" }} />

      {/* ── Scroll cue ── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        style={{ opacity: fade }}
      >
        <span className="text-[9px] font-semibold tracking-[0.18em] uppercase text-[#3a4d67]">Scroll</span>
        <div className="w-[22px] h-9 rounded-full border border-white/10 flex justify-center pt-1.5 relative">
          <motion.span
            className="w-1 h-1 rounded-full bg-[#3C89FF] absolute"
            animate={{ y: [0, 14, 0], opacity: [1, 0.2, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
