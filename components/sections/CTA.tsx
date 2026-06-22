"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import { SITE } from "@/lib/constants";

export default function CTA() {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-[#1F1F1F]" />
      <div className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 100%, #C8FF00, transparent 60%)" }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <SectionLabel className="justify-center mb-6">Free Audit — No Commitment</SectionLabel>

          <h2 className="text-5xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Automate the work{" "}
            <em className="accent-italic">
              that slows your team down
            </em>
          </h2>

          <p className="mt-6 text-lg text-[#666] leading-relaxed max-w-2xl mx-auto">
            Turn repetitive operations into reliable systems with a clean, no-code automation
            platform designed for modern businesses.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg">
              Create your workflow
            </Button>
            <Button href="/services" variant="ghost" size="lg">
              Explore features
            </Button>
          </div>

          <div className="mt-8">
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[#555] hover:text-[#888] transition-colors"
            >
              <MessageCircle size={14} className="text-[#25D366]" />
              Or message us on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
