import { ArrowRight, MessageCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";

export default function AIM() {
  return (
    <section aria-labelledby="aim-intro" className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 rounded-2xl border border-[#1F1F1F] bg-[#111111] p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <SectionLabel className="mb-3">A Floowtix product</SectionLabel>
            <h2 id="aim-intro" className="flex items-center gap-3 text-2xl font-bold text-white">
              <MessageCircle size={24} className="shrink-0 text-[#2170e9]" aria-hidden="true" />
              Meet AIM
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#AAAAAA]">
              AI Messenger support and sales automation for Facebook shops in Bangladesh. Answer customers in Bangla, Banglish and English, quote your own prices and capture orders.
            </p>
          </div>
          <div className="shrink-0">
            <Button href="/aim" variant="ghost">Discover AIM <ArrowRight size={16} aria-hidden="true" /></Button>
          </div>
        </div>
      </div>
    </section>
  );
}
