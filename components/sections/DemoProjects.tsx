"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { DEMO_PROJECTS } from "@/lib/constants";

function MiniFlow({ steps }: { steps: string[] }) {
  return (
    <div className="flex items-center gap-1 flex-wrap mt-4">
      {steps.map((step, i) => (
        <div key={step} className="flex items-center gap-1">
          <div className="px-2 py-1 rounded-md text-[10px] font-semibold text-[#AAAAAA] bg-[#1A1A1A] border border-[#2A2A2A] whitespace-nowrap">
            {step}
          </div>
          {i < steps.length - 1 && (
            <ArrowRight size={9} className="text-[#555] shrink-0" />
          )}
        </div>
      ))}
    </div>
  );
}

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function DemoProjects() {
  return (
    <section id="demo-projects" className="py-28 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-[#1F1F1F]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <SectionLabel className="justify-center mb-4">
            Real Systems We&apos;ve Built
          </SectionLabel>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            See how it works for{" "}
            <em className="accent-italic">different industries</em>
          </h2>
          <p className="mt-4 text-[#888] text-lg max-w-xl mx-auto">
            Real automation flows built for real businesses — ready to adapt for yours.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {DEMO_PROJECTS.map((project) => (
            <motion.div key={project.title} variants={item}>
              <div className="group h-full bg-[#111111] border border-[#2A2A2A] rounded-2xl p-6 flex flex-col hover:border-[#3A3A3A] transition-colors">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-[#666]">
                      {project.industry}
                    </span>
                    <h3 className="text-base font-bold text-white mt-0.5">
                      {project.title}
                    </h3>
                  </div>
                  <div className="w-9 h-9 rounded-xl bg-[#1A1A1A] border border-[#2A2A2A] flex items-center justify-center text-base shrink-0">
                    {project.industry === "Education"
                      ? "🎓"
                      : project.industry === "Fitness"
                      ? "💪"
                      : project.industry === "Healthcare"
                      ? "🏥"
                      : "🍽️"}
                  </div>
                </div>

                <MiniFlow steps={project.flow} />

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>

                <div className="mt-5 pt-4 border-t border-[#2A2A2A]">
                  <Button href="/contact" variant="ghost" size="sm" className="w-full text-xs">
                    View Demo
                    <ArrowRight size={12} />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
