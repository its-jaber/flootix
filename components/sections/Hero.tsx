"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Calendar } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ── Background image with parallax ── */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: bgY }}
      >
        <Image
          src="/hero-bg.webp"
          alt=""
          fill
          priority
          quality={90}
          className="object-cover object-center"
          aria-hidden="true"
        />
        {/* Deep overlay so text stays readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0A0A0A]" />
        {/* Radial vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 40%, transparent 30%, rgba(0,0,0,0.6) 100%)",
          }}
        />
      </motion.div>

      {/* ── Ambient blue glow ── */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none z-[1]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(60,137,255,0.12) 0%, transparent 70%)",
        }}
      />

      {/* ── Content ── */}
      <motion.div
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
        style={{ y: textY, opacity }}
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex justify-center mb-10"
        >
          <Image
            src="/logo.svg"
            alt="FloowTix"
            width={160}
            height={44}
            priority
            unoptimized
          />
        </motion.div>

        {/* Eyebrow pill */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex justify-center mb-7"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border border-[#3C89FF]/30 text-[#3C89FF]"
            style={{ background: "rgba(60,137,255,0.08)" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#3C89FF] inline-block animate-pulse" />
            AI Growth Systems Agency
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white leading-[1.04] tracking-[-0.03em]"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          Your Business.
          <br />
          <span
            className="inline-block"
            style={{
              background: "linear-gradient(135deg, #fff 0%, #3C89FF 50%, #60a5fa 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            One Connected
          </span>
          <br />
          AI System.
        </motion.h1>

        {/* Subline */}
        <motion.p
          className="mt-7 text-lg sm:text-xl text-[#AAAAAA] max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Serving dental clinics, gyms, immigration agencies, and coaching centers —{" "}
          <span className="text-white font-medium">worldwide.</span>
          <br className="hidden sm:block" />
          Never miss a lead. Never chase a follow-up. Live in{" "}
          <span className="text-[#3C89FF] font-semibold">14 days</span>.
        </motion.p>

        {/* CTA */}
        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
        >
          <a
            href="/contact"
            className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-full text-sm font-bold text-white transition-all duration-300 shadow-lg shadow-[#3C89FF]/25 hover:shadow-[#3C89FF]/45 hover:scale-[1.03] active:scale-[0.98]"
            style={{
              background: "linear-gradient(135deg, #2563eb 0%, #3C89FF 60%, #60a5fa 100%)",
            }}
          >
            <Calendar size={16} />
            Book a 15-Minute Discovery Call
            <ArrowRight
              size={15}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </a>

          <a
            href="#demo-projects"
            className="inline-flex items-center gap-2 px-6 py-4 rounded-full text-sm font-semibold text-[#AAAAAA] border border-white/10 hover:border-white/25 hover:text-white bg-white/5 hover:bg-white/8 transition-all duration-200"
          >
            View Demo Projects
          </a>
        </motion.div>

        {/* Guarantee badge */}
        <motion.div
          className="mt-8 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.75 }}
        >
          <span
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold border border-[#22c55e]/30 text-[#22c55e]"
            style={{ background: "rgba(34,197,94,0.07)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] inline-block" />
            Live in 14 days — or full refund
          </span>
        </motion.div>

        {/* Floating KPI pills */}
        <motion.div
          className="mt-14 hidden lg:flex items-center justify-center gap-5"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          {[
            { v: "+340%", l: "Lead Response Speed" },
            { v: "0 missed", l: "Inquiries" },
            { v: "3x", l: "More Conversions" },
            { v: "24/7", l: "Always On" },
          ].map((s) => (
            <div
              key={s.v}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md"
            >
              <span className="text-sm font-black text-[#3C89FF]">{s.v}</span>
              <span className="text-xs text-[#888]">{s.l}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* ── Bottom fade into page ── */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent z-[2] pointer-events-none" />

      {/* ── Scroll indicator ── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.5 }}
        style={{ opacity }}
      >
        <span className="text-[10px] uppercase tracking-widest text-[#555]">Scroll</span>
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-[#555] to-transparent"
          animate={{ scaleY: [1, 0.4, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
