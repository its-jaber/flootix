"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const ease = [0.16, 1, 0.3, 1] as const;

const headline = [
  { text: "Your Business.", accent: false },
  { text: "One Connected AI System.", accent: true },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduce = useReducedMotion();
  const [videoReady, setVideoReady] = useState(false);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const orbY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const orbScale = useTransform(scrollYProgress, [0, 1], [1, 0.88]);
  const copyY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const fade = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (reduce) {
      v.pause();
      return;
    }
    // Pause offscreen to save battery/CPU.
    const io = new IntersectionObserver(([e]) => (e.isIntersecting ? v.play().catch(() => {}) : v.pause()), {
      threshold: 0.05,
    });
    io.observe(v);
    return () => io.disconnect();
  }, [reduce]);

  return (
    <section
      ref={ref}
      aria-labelledby="hero-heading"
      className="relative isolate min-h-[100svh] overflow-hidden bg-[#03050C] text-center"
    >
      {/* Atmosphere */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 70% at 50% -10%, rgba(30,58,138,0.28) 0%, transparent 60%), linear-gradient(180deg, #03050C 0%, #040817 55%, #03050C 100%)",
          }}
        />
        <div
          className="absolute left-1/2 bottom-0 w-[160vw] max-w-[2200px] aspect-square -translate-x-1/2 translate-y-[72%] opacity-50"
          style={{
            backgroundImage: "url(/hero/horizon.webp)",
            backgroundSize: "cover",
            backgroundPosition: "center 30%",
            maskImage: "radial-gradient(closest-side, #000 55%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(closest-side, #000 55%, transparent 100%)",
            mixBlendMode: "screen",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage: "radial-gradient(ellipse 60% 50% at 50% 35%, #000 0%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse 60% 50% at 50% 35%, #000 0%, transparent 75%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col items-center px-4 pt-28 pb-14 sm:px-6 sm:pt-32 lg:pt-[7.5rem]">
        <motion.div style={reduce ? undefined : { y: copyY, opacity: fade }} className="flex flex-col items-center">
          <motion.p
            className="mb-5 inline-flex items-center gap-2.5 text-[10.5px] font-medium uppercase tracking-[0.16em] sm:tracking-[0.22em] text-[#8FA3C4] sm:text-xs"
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            <span className="hidden h-px w-6 bg-[#3C89FF]/70 sm:block" aria-hidden="true" />
            AI Growth Systems for Service Businesses
            <span className="hidden h-px w-6 bg-[#3C89FF]/70 sm:block" aria-hidden="true" />
          </motion.p>

          <h1
            id="hero-heading"
            className="max-w-[22ch] font-semibold leading-[1.02] tracking-[-0.035em] text-white"
            style={{ fontSize: "clamp(2.4rem, 5.2vw, 4.6rem)" }}
          >
            {headline.map(({ text, accent }, i) => (
              <span key={text} className="block overflow-hidden pb-[0.06em]">
                <motion.span
                  className="block"
                  style={
                    accent
                      ? {
                          background: "linear-gradient(180deg, #FFFFFF 0%, #C9DCFF 45%, #3C89FF 120%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }
                      : undefined
                  }
                  initial={reduce ? false : { y: "105%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.9, delay: 0.15 + i * 0.14, ease }}
                >
                  {text}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            className="mt-5 max-w-[34rem] text-[15px] leading-relaxed text-[#93A3BD] sm:text-[17px]"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease }}
          >
            FloowTix builds practical AI systems that help service businesses handle inquiries, capture leads, and
            simplify operations.
          </motion.p>
        </motion.div>

        {/* Orb centerpiece */}
        <motion.div
          aria-hidden="true"
          className="relative -my-2 w-[min(80vw,400px)] aspect-square lg:w-[min(46vh,420px)]"
          style={reduce ? undefined : { y: orbY, scale: orbScale }}
          initial={reduce ? false : { opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.35, ease }}
        >
          <div
            className="absolute inset-[-30%] rounded-full blur-3xl"
            style={{ background: "radial-gradient(closest-side, rgba(60,137,255,0.35), rgba(60,137,255,0.08) 60%, transparent)" }}
          />
          <div
            className="absolute inset-0"
            style={{
              maskImage: "radial-gradient(closest-side, #000 72%, transparent 100%)",
              WebkitMaskImage: "radial-gradient(closest-side, #000 72%, transparent 100%)",
              mixBlendMode: "screen",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/hero/orb-poster.webp"
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
              style={{ opacity: videoReady && !reduce ? 0 : 1, transition: "opacity 0.6s" }}
            />
            {!reduce && (
              <video
                ref={videoRef}
                className="absolute inset-0 h-full w-full object-cover"
                style={{ opacity: videoReady ? 1 : 0, transition: "opacity 0.6s" }}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="/hero/orb-poster.webp"
                onCanPlay={() => setVideoReady(true)}
              >
                <source src="/hero/orb.webm" type="video/webm" />
                <source src="/hero/orb.mp4" type="video/mp4" />
              </video>
            )}
          </div>
        </motion.div>

        <motion.div
          className="flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row"
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75, ease }}
        >
          <Link
            href="/contact"
            aria-label="Book a 15-minute discovery call — opens the call request form"
            className="group relative inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#3C89FF] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(255,255,255,0.12)_inset,0_10px_30px_-8px_rgba(60,137,255,0.7)] transition-[transform,box-shadow,background-color] duration-300 hover:-translate-y-0.5 hover:bg-[#4B93FF] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.2)_inset,0_16px_44px_-8px_rgba(60,137,255,0.9)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3C89FF] sm:w-auto"
          >
            Book a 15-Minute Discovery Call
            <ArrowRight size={16} aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="#services"
            className="group inline-flex w-full items-center justify-center gap-1.5 rounded-full border border-white/12 bg-white/[0.03] px-6 py-3.5 text-sm font-medium text-[#C9D4E6] backdrop-blur-sm transition-colors duration-300 hover:border-white/25 hover:bg-white/[0.06] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/60 sm:w-auto"
          >
            Explore Our Services
            <ArrowUpRight size={15} aria-hidden="true" className="opacity-60 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
          </Link>
        </motion.div>
        <motion.p
          className="mt-4 text-xs text-[#5E6E88]"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.95 }}
        >
          Submit a short call request — we&apos;ll confirm a time by email.
        </motion.p>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24"
        style={{ background: "linear-gradient(to top, #0A0A0A, transparent)" }}
      />
    </section>
  );
}
