"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Send, Clock, Mail, MapPin } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { SITE } from "@/lib/constants";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [industry, setIndustry] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showBooking, setShowBooking] = useState(false);
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    const isBooking = showBooking && preferredDate !== "" && preferredTime !== "";

    const payload = {
      name,
      whatsapp,
      email,
      business,
      industry,
      message,
      form_type: isBooking ? "booking" : "inquiry",
      preferred_date: isBooking ? preferredDate : "",
      preferred_time: isBooking ? preferredTime : "",
      submitted_at: new Date().toISOString(),
    };

    try {
      const res = await fetch("https://its-jaber.app.n8n.cloud/webhook/flowtix-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        if (data.form_type === "booking") {
          setSuccess("Booking request sent! Check your email for confirmation.");
        } else {
          setSuccess("Message received! We will contact you on WhatsApp within 1 hour.");
        }
        setName(""); setBusiness(""); setIndustry(""); setWhatsapp("");
        setEmail(""); setMessage(""); setShowBooking(false);
        setPreferredDate(""); setPreferredTime("");
        setTimeout(() => setSuccess(""), 5000);
      } else if (res.status === 409) {
        setError("This time slot is already booked. Please choose a different time.");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="pt-32 pb-24 relative min-h-screen">
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, #2170e9, transparent 60%)",
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
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jaber Ahmed"
                    className="w-full bg-[#0A0A0A] border border-[#2A2A2A] rounded-xl px-4 py-3 text-sm text-white placeholder-[#555] focus:outline-none focus:border-[#2170e9]/40 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-semibold uppercase tracking-widest text-[#888] mb-2">
                    Business Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={business}
                    onChange={(e) => setBusiness(e.target.value)}
                    placeholder="Your Business"
                    className="w-full bg-[#0A0A0A] border border-[#2A2A2A] rounded-xl px-4 py-3 text-sm text-white placeholder-[#555] focus:outline-none focus:border-[#2170e9]/40 transition-colors"
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
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    className="w-full bg-[#0A0A0A] border border-[#2A2A2A] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#2170e9]/40 transition-colors"
                  >
                    <option value="">Select industry</option>
                    <option value="Coaching Center">Coaching Center</option>
                    <option value="IELTS Institute">IELTS Institute</option>
                    <option value="Training Institute">Training Institute</option>
                    <option value="Gym / Fitness">Gym / Fitness</option>
                    <option value="Medical / Clinic">Medical / Clinic</option>
                    <option value="Restaurant">Restaurant</option>
                    <option value="E-commerce">E-commerce</option>
                    <option value="Real Estate">Real Estate</option>
                    <option value="Other Local Business">Other Local Business</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-semibold uppercase tracking-widest text-[#888] mb-2">
                    WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    placeholder="+880 1X XXXX XXXX"
                    className="w-full bg-[#0A0A0A] border border-[#2A2A2A] rounded-xl px-4 py-3 text-sm text-white placeholder-[#555] focus:outline-none focus:border-[#2170e9]/40 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-semibold uppercase tracking-widest text-[#888] mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full bg-[#0A0A0A] border border-[#2A2A2A] rounded-xl px-4 py-3 text-sm text-white placeholder-[#555] focus:outline-none focus:border-[#2170e9]/40 transition-colors"
                />
              </div>

              <div>
                <label className="block text-[10px] font-semibold uppercase tracking-widest text-[#888] mb-2">
                  Tell Us About Your Business
                </label>
                <textarea
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="What problems are you facing? How many leads do you get per day? What does your current follow-up process look like?"
                  className="w-full bg-[#0A0A0A] border border-[#2A2A2A] rounded-xl px-4 py-3 text-sm text-white placeholder-[#555] focus:outline-none focus:border-[#2170e9]/40 transition-colors resize-none"
                />
              </div>

              {/* Demo booking checkbox */}
              <div>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={showBooking}
                    onChange={(e) => setShowBooking(e.target.checked)}
                    className="w-4 h-4 rounded border-[#2A2A2A] bg-[#0A0A0A] accent-[#2170e9] cursor-pointer"
                  />
                  <span className="text-sm text-[#AAAAAA]">
                    📅 I want to schedule a free 30-min demo call (optional)
                  </span>
                </label>
              </div>

              {showBooking && (
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] font-semibold uppercase tracking-widest text-[#888] mb-2">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      required={showBooking}
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full bg-[#0A0A0A] border border-[#2A2A2A] rounded-xl px-4 py-3 text-sm text-white placeholder-[#555] focus:outline-none focus:border-[#2170e9]/40 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-semibold uppercase tracking-widest text-[#888] mb-2">
                      Preferred Time
                    </label>
                    <input
                      type="time"
                      required={showBooking}
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className="w-full bg-[#0A0A0A] border border-[#2A2A2A] rounded-xl px-4 py-3 text-sm text-white placeholder-[#555] focus:outline-none focus:border-[#2170e9]/40 transition-colors"
                    />
                  </div>
                </div>
              )}

              {success && (
                <p className="text-sm text-green-400 text-center">{success}</p>
              )}
              {error && (
                <p className="text-sm text-red-400 text-center">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#2170e9] text-white font-bold rounded-full hover:bg-[#3b82f6] transition-colors text-sm disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "Sending…" : "Send Message"}
                {!loading && <Send size={14} />}
              </button>
            </form>
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
              className="block bg-[#111111] border border-[#1F1F1F] rounded-2xl p-6 hover:border-[#2170e9]/20 transition-colors group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#2170e9]/10 flex items-center justify-center mb-3">
                <Mail size={18} className="text-[#2170e9]" />
              </div>
              <h3 className="text-sm font-bold text-white mb-1">Email</h3>
              <p className="text-sm text-[#888] mb-2">
                Send us a detailed message anytime.
              </p>
              <p className="text-sm font-semibold text-[#2170e9]">
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
                    <div className="w-5 h-5 rounded-full bg-[#2170e9]/10 border border-[#2170e9]/20 flex items-center justify-center text-[9px] font-bold text-[#2170e9] shrink-0">
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
