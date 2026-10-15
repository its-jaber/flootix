"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export default function Guarantee() {
  return (
    <section className="py-20 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-[#1F1F1F]" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="bg-[#0D0D0D] border border-[#22c55e]/20 rounded-2xl p-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-2xl bg-[#22c55e]/10 border border-[#22c55e]/20 flex items-center justify-center">
              <ShieldCheck size={28} className="text-[#22c55e]" />
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
            The 14-Day Delivery Guarantee
          </h2>

          <p className="text-[#888] text-lg leading-relaxed mb-6">
            Your system is live and running within 14 days of kickoff — or you pay nothing.
            No other agency offers this. We put it in writing.
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#22c55e]/25 text-sm font-semibold text-[#22c55e]"
            style={{ background: "rgba(34,197,94,0.06)" }}>
            <ShieldCheck size={14} />
            100% Money-Back if we miss the deadline
          </div>
        </motion.div>
      </div>
    </section>
  );
}
