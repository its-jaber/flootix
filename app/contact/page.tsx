"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Send, Clock, Mail, MapPin } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
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
    const subject = encodeURIComponent(`New Inquiry from ${form.name} — ${form.business}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nBusiness: ${form.business}\nIndustry: ${form.industry}\nWhatsApp: ${form.whatsapp}\n\nMessage:\n${form.message}`
    );
    window.open(`mailto:${SITE.email}?subject=${subject}&body=${body}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section className="pt-32 pb-24 relative min-h-screen">
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, #C8FF00, transparent 60%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel className="justify-center mb-4">Contact Us</SectionLabel>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Let&apos;s talk about{" "}
            <em className="accent-italic">your business</em>
          </h1>
          <p className="mt-4 text-lg text-[#666] max-w-xl mx-auto">
            Tell us about your business and we&apos;ll show you how to automate your lead flow.
          </p>
          <div className="flex items-center justify-center gap-2 mt-3 text-sm text-[#888]">
            <Clock size={13} />
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
              <div className="bg-[#111111] border border-[#C8FF00]/20 rounded-2xl p-12 text-center">
                <div className="w-16 h-16 rounded-2xl bg-[#C8FF00]/10 flex items-center justify-center mx-auto mb-4 text-3xl">
                  ✅
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Message sent!
                </h3>
                <p className="text-[#666]">
                  Your email client should have opened. We&apos;ll get back to
                  you at <span className="text-white">{SITE.email}</span> within
                  a few hours.
                </p>
                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-6 text-sm text-[#25D366] hover:underline"
                >
                  <MessageCircle size={14} />
                  Or reach us instantly on WhatsApp
                </a>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-[#111111] border border-[#1F1F1F] rounded-2xl p-8 space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] font-semibold uppercase tracking-widest text-[#888] mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Jaber Ahmed"
                      className="w-full bg-[#0A0A0A] border border-[#2A2A2A] rounded-xl px-4 py-3 text-sm text-white placeholder-[#555] focus:outline-none focus:border-[#C8FF00]/40 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-semibold uppercase tracking-widest text-[#888] mb-2">
                      Business Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.business}
                      onChange={(e) => setForm({ ...form, business: e.target.value })}
                      placeholder="Your Business"
                      className="w-full bg-[#0A0A0A] border border-[#2A2A2A] rounded-xl px-4 py-3 text-sm text-white placeholder-[#555] focus:outline-none focus:border-[#C8FF00]/40 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] font-semibold uppercase tracking-widest text-[#888] mb-2">
                      Industry *
                    </label>
                    <select
                      required
                      value={form.industry}
                      onChange={(e) => setForm({ ...form, industry: e.target.value })}
                      className="w-full bg-[#0A0A0A] border border-[#2A2A2A] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C8FF00]/40 transition-colors"
                    >
                      <option value="" disabled>
                        Select industry
                      </option>
                      {industries.map((ind) => (
                        <option key={ind} value={ind}>
                          {ind}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-semibold uppercase tracking-widest text-[#888] mb-2">
                      WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={form.whatsapp}
                      onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                      placeholder="+880 1X XXXX XXXX"
                      className="w-full bg-[#0A0A0A] border border-[#2A2A2A] rounded-xl px-4 py-3 text-sm text-white placeholder-[#555] focus:outline-none focus:border-[#C8FF00]/40 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-semibold uppercase tracking-widest text-[#888] mb-2">
                    Tell Us About Your Business
                  </label>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="What problems are you facing? How many leads do you get per day? What does your current follow-up process look like?"
                    className="w-full bg-[#0A0A0A] border border-[#2A2A2A] rounded-xl px-4 py-3 text-sm text-white placeholder-[#555] focus:outline-none focus:border-[#C8FF00]/40 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#C8FF00] text-black font-bold rounded-full hover:bg-[#d4ff33] transition-colors text-sm"
                >
                  Send Message
                  <Send size={14} />
                </button>
              </form>
            )}
          </motion.div>

          {/* Sidebar */}
          <motion.div
            className="lg:col-span-2 space-y-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* WhatsApp */}
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#111111] border border-[#1F1F1F] rounded-2xl p-6 hover:border-[#25D366]/30 transition-colors group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 flex items-center justify-center mb-3">
                <MessageCircle size={18} className="text-[#25D366]" />
              </div>
              <h3 className="text-sm font-bold text-white mb-1">WhatsApp</h3>
              <p className="text-sm text-[#888] mb-2">
                Message us directly — fastest response.
              </p>
              <p className="text-sm font-semibold text-[#25D366]">
                {SITE.whatsappDisplay}
              </p>
            </a>

            {/* Email */}
            <a
              href={`mailto:${SITE.email}`}
              className="block bg-[#111111] border border-[#1F1F1F] rounded-2xl p-6 hover:border-[#C8FF00]/20 transition-colors group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#C8FF00]/10 flex items-center justify-center mb-3">
                <Mail size={18} className="text-[#C8FF00]" />
              </div>
              <h3 className="text-sm font-bold text-white mb-1">Email</h3>
              <p className="text-sm text-[#888] mb-2">
                Send us a detailed message anytime.
              </p>
              <p className="text-sm font-semibold text-[#C8FF00]">
                {SITE.email}
              </p>
            </a>

            {/* Location */}
            <div className="bg-[#111111] border border-[#1F1F1F] rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-[#1F1F1F] flex items-center justify-center mb-3">
                <MapPin size={18} className="text-[#555]" />
              </div>
              <h3 className="text-sm font-bold text-white mb-1">Location</h3>
              <p className="text-sm text-[#888]">Bangladesh</p>
              <p className="text-xs text-[#666] mt-1">Serving clients worldwide</p>
            </div>

            {/* What happens next */}
            <div className="bg-[#111111] border border-[#1F1F1F] rounded-2xl p-6">
              <h3 className="text-sm font-bold text-white mb-4">
                What happens next
              </h3>
              <div className="space-y-3">
                {[
                  "We review your message",
                  "Book a free 30-min call",
                  "You get a custom audit",
                  "We propose a solution",
                ].map((s, i) => (
                  <div key={s} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#C8FF00]/10 border border-[#C8FF00]/20 flex items-center justify-center text-[9px] font-bold text-[#C8FF00] shrink-0">
                      {i + 1}
                    </div>
                    <p className="text-xs text-[#888]">{s}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
