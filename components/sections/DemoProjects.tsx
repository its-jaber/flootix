"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { DEMO_PROJECTS } from "@/lib/constants";

function MiniFlow({ steps, color }: { steps: string[]; color: string }) {
  return (
    <div className="flex items-center gap-1 flex-wrap mt-4">
      {steps.map((step, i) => (
        <div key={step} className="flex items-center gap-1">
          <div
            className="px-2 py-1 rounded-md text-[10px] font-semibold whitespace-nowrap"
            style={{
              background: `${color}10`,
              border: `1px solid ${color}25`,
              color: color,
            }}
          >
            {step}
          </div>
          {i < steps.length - 1 && (
            <ArrowRight size={10} className="text-[#64748B] shrink-0" />
          )}
        </div>
      ))}
    </div>
  );
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function DemoProjects() {
  return (
    <section id="demo-projects" className="py-24 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#6366F1]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel className="justify-center">Real Systems We&apos;ve Built</SectionLabel>
          <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold text-[#F8FAFC] tracking-tight">
            See How It Works for{" "}
            <span className="shimmer-text">Different Industries</span>
          </h2>
          <p className="mt-4 text-lg text-[#64748B] max-w-xl mx-auto">
            Real automation flows built for real businesses — ready to adapt for yours.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {DEMO_PROJECTS.map((project) => (
            <motion.div key={project.title} variants={item}>
              <Card glow className="p-6 h-full flex flex-col">
                {/* Top */}
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-[#64748B]">
                      {project.industry}
                    </span>
                    <h3 className="text-lg font-bold text-[#F8FAFC] mt-1">{project.title}</h3>
                  </div>
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0"
                    style={{ background: `${project.color}15`, border: `1px solid ${project.color}25` }}
                  >
                    {project.industry === "Education" ? "🎓" :
                      project.industry === "Fitness" ? "💪" :
                      project.industry === "Healthcare" ? "🏥" : "🍽️"}
                  </div>
                </div>

                {/* Mini flow */}
                <MiniFlow steps={project.flow} color={project.color} />

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-5 pt-4 border-t border-[#1E1E2E]">
                  <Button href="/contact" variant="ghost" size="sm" className="w-full">
                    View Demo
                    <ArrowRight size={13} />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
