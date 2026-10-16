"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const ease = [0.16, 1, 0.3, 1] as const;
const soft = { stiffness: 70, damping: 22, mass: 0.6 };

const lines = [
  { words: ["Your", "Business."], accent: false },
  { words: ["One", "Connected", "AI", "System."], accent: true },
];

function useFinePointer() {
  const [fine, setFine] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine) and (min-width: 768px)");
    const set = () => setFine(mq.matches);
    set();
    mq.addEventListener("change", set);
    return () => mq.removeEventListener("change", set);
  }, []);
  return fine;
}

function MagneticLink({
  href,
  className,
  children,
  enabled,
  ariaLabel,
}: {
  href: string;
  className: string;
  children: React.ReactNode;
  enabled: boolean;
  ariaLabel?: string;
}) {
  const x = useSpring(0, { stiffness: 220, damping: 18 });
  const y = useSpring(0, { stiffness: 220, damping: 18 });
  return (
    <motion.div
      className="w-full sm:w-auto"
      style={{ x, y }}
      onPointerMove={(e) => {
        if (!enabled) return;
        const r = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - (r.left + r.width / 2)) * 0.12);
        y.set((e.clientY - (r.top + r.height / 2)) * 0.2);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      <Link href={href} aria-label={ariaLabel} className={className}>
        {children}
      </Link>
    </motion.div>
  );
}

function Ripple({ id }: { id: number }) {
  return (
    <motion.span
      key={id}
      className="pointer-events-none absolute inset-[6%] rounded-full"
      style={{ border: "1px solid rgba(140,185,255,0.45)" }}
      initial={{ scale: 0.92, opacity: 0.55 }}
      animate={{ scale: 1.35, opacity: 0 }}
      transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
    />
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduce = useReducedMotion() ?? false;
  const fine = useFinePointer();
  const interactive = fine && !reduce;
  const [videoReady, setVideoReady] = useState(false);
  const [ripples, setRipples] = useState<number[]>([]);
  const lastRipple = useRef(0);
  const wasNear = useRef(false);

  // Pointer, normalised to -1..1 across the section.
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, soft);
  const sy = useSpring(py, soft);

  // Cursor position relative to the orb (0..100%) and proximity (0..1).
  const lx = useMotionValue(50);
  const ly = useMotionValue(35);
  const near = useMotionValue(0);
  const slx = useSpring(lx, { stiffness: 120, damping: 24 });
  const sly = useSpring(ly, { stiffness: 120, damping: 24 });
  const sNear = useSpring(near, { stiffness: 90, damping: 20 });

  const orbX = useTransform(sx, [-1, 1], [-16, 16]);
  const orbYp = useTransform(sy, [-1, 1], [-12, 12]);
  const rotY = useTransform(sx, [-1, 1], [-6, 6]);
  const rotX = useTransform(sy, [-1, 1], [5, -5]);
  const haloX = useTransform(sx, [-1, 1], [28, -28]);
  const haloY = useTransform(sy, [-1, 1], [20, -20]);
  const beamX = useTransform(sx, [-1, 1], [-40, 40]);
  const orbBoost = useTransform(sNear, [0, 1], [1, 1.035]);
  const lightOpacity = useTransform(sNear, [0, 1], [0, 0.85]);
  const light = useMotionTemplate`radial-gradient(circle at ${slx}% ${sly}%, rgba(170,205,255,0.55) 0%, rgba(60,137,255,0.22) 22%, transparent 48%)`;

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const sp = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });
  const copyY = useTransform(sp, [0, 1], [0, -90]);
  const copyOpacity = useTransform(sp, [0, 0.45], [1, 0]);
  const copyBlur = useTransform(sp, [0, 0.45], [0, 6]);
  const copyFilter = useMotionTemplate`blur(${copyBlur}px)`;
  const orbScrollY = useTransform(sp, [0, 1], [0, 140]);
  const orbScrollScale = useTransform(sp, [0, 1], [1, 0.72]);
  const orbScrollOpacity = useTransform(sp, [0.15, 0.8], [1, 0]);
  const ctaOpacity = useTransform(sp, [0, 0.3], [1, 0]);
  const curtain = useTransform(sp, [0.35, 1], [0, 1]);
  const horizonY = useTransform(sp, [0, 1], [0, -80]);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const io = new IntersectionObserver(([e]) => (e.isIntersecting ? v.play().catch(() => {}) : v.pause()), {
      threshold: 0.05,
    });
    io.observe(v);
    return () => io.disconnect();
  }, [reduce]);

  const spawnRipple = () => {
    const now = performance.now();
    if (now - lastRipple.current < 1400) return;
    lastRipple.current = now;
    setRipples((r) => [...r.slice(-2), now]);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLElement>) => {
    if (!interactive) return;
    const r = e.currentTarget.getBoundingClientRect();
    px.set(((e.clientX - r.left) / r.width) * 2 - 1);
    py.set(((e.clientY - r.top) / r.height) * 2 - 1);

    const o = orbRef.current?.getBoundingClientRect();
    if (!o) return;
    const cx = o.left + o.width / 2;
    const cy = o.top + o.height / 2;
    const d = Math.hypot(e.clientX - cx, e.clientY - cy) / (o.width / 2);
    const n = Math.max(0, Math.min(1, 1.9 - d));
    near.set(n);
    lx.set(((e.clientX - o.left) / o.width) * 100);
    ly.set(((e.clientY - o.top) / o.height) * 100);
    const isNear = d < 1.05;
    if (isNear && !wasNear.current) spawnRipple();
    wasNear.current = isNear;
  };

  const onPointerLeave = () => {
    px.set(0);
    py.set(0);
    near.set(0);
    wasNear.current = false;
  };

  const st = <T,>(v: T) => (reduce ? undefined : v);
  const m = (v: MotionValue<number> | number) => (interactive ? v : 0);

  return (
    <section
      ref={ref}
      aria-labelledby="hero-heading"
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      className="relative isolate min-h-[100svh] overflow-hidden bg-[#02040A] text-center"
    >
      {/* Atmosphere */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background: [
              "radial-gradient(90% 55% at 50% -8%, rgba(37,72,160,0.30) 0%, transparent 62%)",
              "radial-gradient(45% 40% at 12% 70%, rgba(24,52,128,0.16) 0%, transparent 70%)",
              "radial-gradient(45% 40% at 88% 62%, rgba(24,52,128,0.14) 0%, transparent 70%)",
              "linear-gradient(180deg, #02040A 0%, #040A1C 52%, #02040A 100%)",
            ].join(","),
          }}
        />
        {/* Soft light beams, drift with cursor */}
        <div className="absolute left-1/2 top-[-10%] h-[85%] w-[70vw] max-w-[1100px] -translate-x-1/2">
        <motion.div
          className="absolute inset-0"
          style={{
            x: m(beamX),
            background:
              "conic-gradient(from 180deg at 50% 0%, transparent 42%, rgba(90,150,255,0.07) 47%, transparent 50%, rgba(90,150,255,0.07) 53%, transparent 58%)",
            maskImage: "linear-gradient(180deg, #000 0%, transparent 85%)",
            WebkitMaskImage: "linear-gradient(180deg, #000 0%, transparent 85%)",
          }}
        />
        </div>
        <div className="absolute left-1/2 bottom-0 w-[150vw] max-w-[2100px] aspect-square -translate-x-1/2 translate-y-[74%] opacity-45">
        <motion.div
          className="absolute inset-0"
          style={{
            y: st(horizonY),
            backgroundImage: "url(/hero/horizon.webp)",
            backgroundSize: "cover",
            backgroundPosition: "center 30%",
            maskImage: "radial-gradient(closest-side, #000 55%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(closest-side, #000 55%, transparent 100%)",
            mixBlendMode: "screen",
          }}
        />
        </div>
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            maskImage: "radial-gradient(ellipse 55% 45% at 50% 38%, #000 0%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse 55% 45% at 50% 38%, #000 0%, transparent 75%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(120% 90% at 50% 45%, transparent 55%, rgba(0,0,0,0.55) 100%)" }}
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col items-center px-5 pt-28 pb-12 sm:px-6 sm:pt-32 lg:pt-[7.25rem]">
        <motion.div
          style={reduce ? undefined : { y: copyY, opacity: copyOpacity, filter: copyFilter }}
          className="flex flex-col items-center"
        >
          <motion.p
            className="mb-6 inline-flex items-center gap-3 text-[10.5px] font-medium uppercase tracking-[0.18em] text-[#9DB0CF] sm:text-[11.5px] sm:tracking-[0.26em]"
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease }}
          >
            <motion.span
              className="hidden h-px w-8 origin-right bg-gradient-to-l from-[#3C89FF] to-transparent sm:block"
              aria-hidden="true"
              initial={reduce ? false : { scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, delay: 0.3, ease }}
            />
            AI Growth Systems for Service Businesses
            <motion.span
              className="hidden h-px w-8 origin-left bg-gradient-to-r from-[#3C89FF] to-transparent sm:block"
              aria-hidden="true"
              initial={reduce ? false : { scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, delay: 0.3, ease }}
            />
          </motion.p>

          <h1
            id="hero-heading"
            className="max-w-[20ch] font-semibold leading-[1.04] tracking-[-0.04em] text-white"
            style={{ fontSize: "clamp(2.35rem, 5vw, 4.4rem)" }}
          >
            {lines.map(({ words, accent }, li) => (
              <span key={li} className="block">
                {words.map((w, wi) => (
                  <span key={w} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
                    <motion.span
                      className="inline-block"
                      style={
                        accent
                          ? {
                              background: "linear-gradient(180deg, #FFFFFF 10%, #D3E3FF 50%, #6FA8FF 115%)",
                              WebkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent",
                              backgroundClip: "text",
                            }
                          : undefined
                      }
                      initial={reduce ? false : { y: "110%", opacity: 0, filter: "blur(8px)" }}
                      animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
                      transition={{ duration: 1, delay: 0.2 + li * 0.16 + wi * 0.06, ease }}
                    >
                      {w}
                    </motion.span>
                    {wi < words.length - 1 && " "}
                  </span>
                ))}
              </span>
            ))}
          </h1>

          <motion.p
            className="mt-6 max-w-[33rem] text-[15px] leading-[1.7] text-[#A3B2CA] sm:text-[17px]"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7, ease }}
          >
            FloowTix builds practical AI systems that help service businesses handle inquiries, capture leads, and
            simplify operations.
          </motion.p>
        </motion.div>

        {/* Orb centerpiece */}
        <motion.div
          className="relative -my-1"
          style={reduce ? undefined : { y: orbScrollY, scale: orbScrollScale, opacity: orbScrollOpacity }}
        >
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-[-25%] rounded-full blur-3xl"
            style={{
              x: m(haloX),
              y: m(haloY),
              background: "radial-gradient(closest-side, rgba(60,137,255,0.28), rgba(60,137,255,0.07) 60%, transparent)",
            }}
          />
          <motion.div
            ref={orbRef}
            aria-hidden="true"
            className="relative aspect-square w-[min(76vw,340px)] sm:w-[380px] lg:w-[min(41vh,400px)]"
            style={{
              x: m(orbX),
              y: m(orbYp),
              rotateX: m(rotX),
              rotateY: m(rotY),
              scale: interactive ? orbBoost : 1,
              transformPerspective: 900,
            }}
            initial={reduce ? false : { opacity: 0, filter: "blur(16px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.6, delay: 0.45, ease }}
          >
            <div
              className="absolute inset-0"
              style={{
                maskImage: "radial-gradient(closest-side, #000 70%, transparent 100%)",
                WebkitMaskImage: "radial-gradient(closest-side, #000 70%, transparent 100%)",
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
              {/* Cursor-following light overlay (does not affect the video's particles) */}
              {interactive && (
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{ background: light, opacity: lightOpacity, mixBlendMode: "screen" }}
                />
              )}
            </div>
            {interactive && ripples.map((id) => <Ripple key={id} id={id} />)}
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-2 flex w-full flex-col items-center gap-3 sm:mt-3 sm:w-auto sm:flex-row"
          style={reduce ? undefined : { opacity: ctaOpacity }}
        >
          <motion.div
            className="w-full sm:w-auto"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.95, ease }}
          >
            <MagneticLink
              href="/contact"
              enabled={interactive}
              ariaLabel="Book a 15-minute discovery call — opens the call request form"
              className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-[#3C89FF] px-7 py-3.5 text-[14px] font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_0_0_1px_rgba(60,137,255,0.6),0_12px_32px_-10px_rgba(60,137,255,0.75)] transition-[box-shadow,background-color] duration-500 hover:bg-[#4A92FF] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_0_0_1px_rgba(120,175,255,0.8),0_18px_44px_-10px_rgba(60,137,255,0.9)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3C89FF] sm:w-auto"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 transition-[transform,opacity] duration-700 group-hover:translate-x-[300%] group-hover:opacity-100"
              />
              <span className="relative">Book a 15-Minute Discovery Call</span>
              <ArrowRight
                size={16}
                aria-hidden="true"
                className="relative transition-transform duration-300 group-hover:translate-x-1"
              />
            </MagneticLink>
          </motion.div>
          <motion.div
            className="w-full sm:w-auto"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.05, ease }}
          >
            <MagneticLink
              href="#services"
              enabled={interactive}
              className="group inline-flex w-full items-center justify-center gap-1.5 rounded-full border border-white/[0.14] bg-white/[0.03] px-7 py-3.5 text-[14px] font-medium text-[#D2DCEC] backdrop-blur-md transition-[border-color,background-color,color] duration-300 hover:border-white/30 hover:bg-white/[0.07] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/60 sm:w-auto"
            >
              Explore Our Services
              <ArrowUpRight
                size={15}
                aria-hidden="true"
                className="opacity-60 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
              />
            </MagneticLink>
          </motion.div>
        </motion.div>
        <motion.p
          className="mt-4 text-[12px] text-[#6B7C98]"
          style={reduce ? undefined : { opacity: ctaOpacity }}
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          Submit a short call request — we&apos;ll confirm a time by email.
        </motion.p>
      </div>

      {/* Scroll curtain into the next section */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-20 bg-[#0A0A0A]"
        style={{ opacity: reduce ? 0 : curtain }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-28"
        style={{ background: "linear-gradient(to top, #0A0A0A 10%, transparent)" }}
      />
    </section>
  );
}
