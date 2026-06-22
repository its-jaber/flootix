"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FileText, Table2, MessageCircle, CheckCircle2 } from "lucide-react";

const nodes = [
  { id: "form", label: "Lead Form", sublabel: "Website", Icon: FileText, color: "#C8FF00" },
  { id: "sheets", label: "Google Sheets", sublabel: "Data Capture", Icon: Table2, color: "#AAAAAA" },
  { id: "whatsapp", label: "WhatsApp", sublabel: "Auto-Reply", Icon: MessageCircle, color: "#25D366" },
  { id: "converted", label: "Converted", sublabel: "Customer ✓", Icon: CheckCircle2, color: "#C8FF00" },
];

function TravelingDot({ delay = 0, color = "#C8FF00" }: { delay?: number; color?: string }) {
  const shouldReduce = useReducedMotion();
  if (shouldReduce) return null;
  return (
    <motion.div
      className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full"
      style={{ backgroundColor: color, boxShadow: `0 0 6px ${color}` }}
      initial={{ left: "0%", opacity: 0 }}
      animate={{ left: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
      transition={{ duration: 1.8, delay, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
    />
  );
}

export default function WorkflowDiagram() {
  const shouldReduce = useReducedMotion();

  return (
    <div className="relative w-full max-w-xl mx-auto select-none">
      <div className="flex items-center justify-between">
        {nodes.map((node, i) => (
          <div key={node.id} className="flex items-center flex-1">
            <motion.div
              className="flex flex-col items-center gap-2 z-10"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12, duration: 0.4 }}
            >
              <motion.div
                className="relative w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: `${node.color}15`, border: `1px solid ${node.color}35` }}
                whileHover={{ scale: 1.08 }}
                animate={
                  !shouldReduce
                    ? {
                        boxShadow: [
                          `0 0 0px ${node.color}00`,
                          `0 0 16px ${node.color}35`,
                          `0 0 0px ${node.color}00`,
                        ],
                      }
                    : {}
                }
                transition={
                  !shouldReduce ? { duration: 3, repeat: Infinity, delay: i * 0.7 } : {}
                }
              >
                <node.Icon size={18} color={node.color} />
                {!shouldReduce && (
                  <motion.div
                    className="absolute inset-0 rounded-xl"
                    style={{ border: `1px solid ${node.color}` }}
                    animate={{ scale: [1, 1.35], opacity: [0.5, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.6 }}
                  />
                )}
              </motion.div>
              <div className="text-center">
                <p className="text-[11px] font-semibold text-white whitespace-nowrap">
                  {node.label}
                </p>
                <p className="text-[9px] text-[#888] whitespace-nowrap">{node.sublabel}</p>
              </div>
            </motion.div>

            {i < nodes.length - 1 && (
              <div className="flex-1 relative h-px mx-2">
                <div className="absolute inset-0 bg-[#2A2A2A]" />
                <div className="absolute inset-0 overflow-hidden">
                  <TravelingDot delay={i * 0.6} color="#C8FF00" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
