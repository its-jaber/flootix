"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Send, Clock } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

const industries = [
  "Education & Coaching",
  "Healthcare & Clinics",
  "Fitness & Gyms",
  "Restaurants & F&B",
  "Real Estate",
  "E-commerce",
  "Other",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    business: "",
    industry: "",
    whatsapp: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="pt-32 pb-24 relative min-h-screen">
      <div className="absolute inset-0 opacity-5"
        style={{ background: "radial-gradient(ellipse at 50% 0%, #6366F1, transparent 60%)" }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel className="justify-center">Contact Us</SectionLabel>
          <h1 className="mt-4 text-5xl sm:text-6xl font-extrabold text-[#F8FAFC] tracking-tight">
            Let&apos;s Talk About{" "}
            <span className="shimmer-text">Your Business</span>
          </h1>
          <p className="mt-4 text-xl text-[#64748B] max-w-xl mx-auto">
            Tell us about your business and we&apos;ll show you how to automate your lead flow.
          </p>

          <div className="flex items-center justify-center gap-2 mt-4 text-sm text-[#64748B]">
            <Clock size={14} />
            <span>We typically respond within a few hours.</span>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {submitted ? (
              <div className="bg-[#111118] border border-[#10B981]/30 rounded-2xl p-12 text-center">
                <div className="w-16 h-16 rounded-2xl bg-[#10B981]/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">✅</span>
                </div>
                <h3 className="text-2xl font-bold text-[#F8FAFC] mb-2">We&apos;ve got your message!</h3>
                <p className="text-[#64748B]">We&apos;ll review your details and get back to you within a few hours.</p>
                <div className="mt-6">
                  <a
                    href={SITE.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-[#25D366] hover:underline"
                  >
                    <MessageCircle size={14} />
                    Or reach us instantly on WhatsApp
                  </a>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-[#111118] border border-[#1E1E2E] rounded-2xl p-8 space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest text-[#64748B] mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Jaber Ahmed"
                      className="w-full bg-[#0A0A0F] border border-[#1E1E2E] rounded-xl px-4 py-3 text-sm text-[#F8FAFC] placeholder-[#64748B] focus:outline-none focus:border-[#6366F1] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest text-[#64748B] mb-2">
                      Business Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.business}
                      onChange={(e) => setForm({ ...form, business: e.target.value })}
                      placeholder="Your Business"
                      className="w-full bg-[#0A0A0F] border border-[#1E1E2E] rounded-xl px-4 py-3 text-sm text-[#F8FAFC] placeholder-[#64748B] focus:outline-none focus:border-[#6366F1] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest text-[#64748B] mb-2">
                      Industry *
                    </label>
                    <select
                      required
                      value={form.industry}
                      onChange={(e) => setForm({ ...form, industry: e.target.value })}
                      className="w-full bg-[#0A0A0F] border border-[#1E1E2E] rounded-xl px-4 py-3 text-sm text-[#F8FAFC] focus:outline-none focus:border-[#6366F1] transition-colors"
                    >
                      <option value="" disabled>Select industry</option>
                      {industries.map((ind) => (
                        <option key={ind} value={ind}>{ind}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest text-[#64748B] mb-2">
                      WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={form.whatsapp}
                      onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                      placeholder="+880 1X XXXX XXXX"
                      className="w-full bg-[#0A0A0F] border border-[#1E1E2E] rounded-xl px-4 py-3 text-sm text-[#F8FAFC] placeholder-[#64748B] focus:outline-none focus:border-[#6366F1] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-[#64748B] mb-2">
                    Tell Us About Your Business
                  </label>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="What problems are you facing? How many leads do you get per day? What does your current follow-up process look like?"
                    className="w-full bg-[#0A0A0F] border border-[#1E1E2E] rounded-xl px-4 py-3 text-sm text-[#F8FAFC] placeholder-[#64748B] focus:outline-none focus:border-[#6366F1] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-200 hover:scale-[1.01]"
                >
                  Send Message
                  <Send size={15} />
                </button>
              </form>
            )}
          </motion.div>

          {/* Sidebar */}
          <motion.div
            className="lg:col-span-2 space-y-5"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* WhatsApp direct */}
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#25D366]/10 border border-[#25D366]/20 rounded-2xl p-6 hover:border-[#25D366]/40 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#25D366]/20 flex items-center justify-center mb-4">
                <MessageCircle size={22} className="text-[#25D366]" />
              </div>
              <h3 className="text-base font-bold text-[#F8FAFC] mb-1">WhatsApp Direct</h3>
              <p className="text-sm text-[#64748B] mb-3">
                Skip the form — message us directly and we&apos;ll reply within hours.
              </p>
              <span className="text-sm font-semibold text-[#25D366] group-hover:underline">
                Open WhatsApp →
              </span>
            </a>

            {/* What happens next */}
            <div className="bg-[#111118] border border-[#1E1E2E] rounded-2xl p-6">
              <h3 className="text-base font-bold text-[#F8FAFC] mb-4">What Happens Next</h3>
              <div className="space-y-4">
                {[
                  { step: "1", text: "We review your message and understand your business" },
                  { step: "2", text: "We book a free 30-min discovery call" },
                  { step: "3", text: "You get a custom audit of your lead process" },
                  { step: "4", text: "We propose a system tailored to your needs" },
                ].map((s) => (
                  <div key={s.step} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#6366F1]/10 border border-[#6366F1]/20 flex items-center justify-center text-[10px] font-bold text-[#6366F1] shrink-0">
                      {s.step}
                    </div>
                    <p className="text-sm text-[#64748B]">{s.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* No commitment note */}
            <div className="bg-[#111118] border border-[#1E1E2E] rounded-2xl p-5 flex items-start gap-3">
              <span className="text-xl">🔒</span>
              <div>
                <p className="text-sm font-semibold text-[#F8FAFC]">No Commitment Required</p>
                <p className="text-xs text-[#64748B] mt-1">
                  The audit and discovery call are completely free. No pressure, no obligation.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
