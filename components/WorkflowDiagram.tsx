"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FileText, Table2, MessageCircle, CheckCircle2 } from "lucide-react";

const nodes = [
  {
    id: "form",
    label: "Lead Form",
    sublabel: "Website",
    Icon: FileText,
    color: "#6366F1",
  },
  {
    id: "sheets",
    label: "Google Sheets",
    sublabel: "Data Capture",
    Icon: Table2,
    color: "#8B5CF6",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    sublabel: "Auto-Reply",
    Icon: MessageCircle,
    color: "#10B981",
  },
  {
    id: "converted",
    label: "Converted",
    sublabel: "Customer",
    Icon: CheckCircle2,
    color: "#10B981",
  },
];

function TravelingDot({ delay = 0, color = "#10B981" }: { delay?: number; color?: string }) {
  const shouldReduce = useReducedMotion();
  if (shouldReduce) return null;
  return (
    <motion.div
      className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
      style={{ backgroundColor: color, boxShadow: `0 0 6px ${color}` }}
      initial={{ left: "0%", opacity: 0 }}
      animate={{ left: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
      transition={{
        duration: 2,
        delay,
        repeat: Infinity,
        repeatDelay: 1.5,
        ease: "easeInOut",
      }}
    />
  );
}

export default function WorkflowDiagram() {
  const shouldReduce = useReducedMotion();

  return (
    <div className="relative w-full max-w-2xl mx-auto select-none">
      {/* Background glow */}
      <div
        className="absolute inset-0 rounded-3xl opacity-30 blur-3xl"
        style={{ background: "radial-gradient(ellipse at center, #6366F1 0%, transparent 70%)" }}
      />

      <div className="relative flex items-center justify-between gap-0 py-8">
        {nodes.map((node, i) => (
          <div key={node.id} className="flex items-center flex-1">
            {/* Node */}
            <motion.div
              className="flex flex-col items-center gap-2 z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              <motion.div
                className="relative w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{
                  background: `${node.color}15`,
                  border: `1px solid ${node.color}40`,
                }}
                whileHover={{ scale: 1.08 }}
                animate={
                  !shouldReduce
                    ? {
                        boxShadow: [
                          `0 0 0px ${node.color}00`,
                          `0 0 20px ${node.color}40`,
                          `0 0 0px ${node.color}00`,
                        ],
                      }
                    : {}
                }
                transition={
                  !shouldReduce
                    ? { duration: 2.5, repeat: Infinity, delay: i * 0.6 }
                    : {}
                }
              >
                <node.Icon size={22} color={node.color} />
                {/* Pulse ring */}
                {!shouldReduce && (
                  <motion.div
                    className="absolute inset-0 rounded-2xl"
                    style={{ border: `1px solid ${node.color}` }}
                    animate={{ scale: [1, 1.3], opacity: [0.6, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                  />
                )}
              </motion.div>
              <div className="text-center">
                <p className="text-xs font-semibold text-[#F8FAFC] whitespace-nowrap">{node.label}</p>
                <p className="text-[10px] text-[#64748B] whitespace-nowrap">{node.sublabel}</p>
              </div>
            </motion.div>

            {/* Connector line */}
            {i < nodes.length - 1 && (
              <div className="flex-1 relative h-px mx-2">
                <div className="absolute inset-0 bg-gradient-to-r from-[#6366F1]/30 to-[#8B5CF6]/30" />
                <div className="absolute inset-0 overflow-hidden">
                  <TravelingDot delay={i * 0.7} color={i < 2 ? "#6366F1" : "#10B981"} />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Arrow labels */}
      <div className="flex justify-between px-8 -mt-2">
        <span className="text-[9px] text-[#64748B] flex-1 text-center">capture</span>
        <span className="text-[9px] text-[#64748B] flex-1 text-center">log</span>
        <span className="text-[9px] text-[#64748B] flex-1 text-center">notify</span>
      </div>
    </div>
  );
}
