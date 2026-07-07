"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { X, Send, MessageSquare, ChevronDown } from "lucide-react";

const WEBHOOK_URL = "https://17525.run.itnut.net/webhook-test/flowtix-chat";

const SUGGESTED = [
  "How does it work?",
  "What's the price?",
  "I run a dental clinic",
  "I'm an immigration agency",
  "What's the 14-day guarantee?",
  "Book a free demo",
];

type Message = {
  role: "user" | "assistant";
  content: string;
  booking_confirmed?: boolean;
  booking_id?: string;
  slot_conflict?: boolean;
};

function TypingIndicator() {
  return (
    <div className="flex items-end gap-2 mb-3">
      <div className="w-7 h-7 rounded-full bg-[#7c3aed]/20 border border-[#7c3aed]/30 flex items-center justify-center shrink-0 text-[10px]">
        🤖
      </div>
      <div className="bg-[#1a1a2e] border border-[#2a2a4a] rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1.5 items-center">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-[#7c3aed] inline-block"
            style={{
              animation: `chatBounce 1s ease-in-out infinite`,
              animationDelay: `${i * 0.18}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [typing, setTyping] = useState(false);
  const [error, setError] = useState(false);
  const [showSuggested, setShowSuggested] = useState(true);
  const sessionId = useRef<string>(
    typeof crypto !== "undefined" && typeof crypto.randomUUID === "function"
      ? crypto.randomUUID()
      : Math.random().toString(36).slice(2) + Date.now().toString(36)
  );
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const send = useCallback(async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || typing) return;

    // Capture history BEFORE adding current user message
    const history = messages.map((m) => ({ role: m.role, content: m.content }));

    const userMsg: Message = { role: "user", content: trimmed };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setShowSuggested(false);
    setTyping(true);
    setError(false);

    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "chat",
          message: trimmed,
          sessionId: sessionId.current,
          history,
        }),
      });

      if (!res.ok) throw new Error("Bad response");

      const data = await res.json();
      const reply: string = data.reply ?? "Sorry, I couldn't understand that.";
      const delay: number = data.typingDelay ?? 1500;
      const booking_confirmed: boolean = data.booking_confirmed === true;
      const booking_id: string = data.booking_id ?? "";
      const slot_conflict: boolean = data.slot_conflict === true;

      await new Promise((r) => setTimeout(r, delay));
      setTyping(false);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: reply, booking_confirmed, booking_id, slot_conflict },
      ]);
    } catch {
      setTyping(false);
      setError(true);
    }
  }, [messages, typing]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    send(input);
  };

  const handlePill = (text: string) => {
    send(text);
  };

  const showWelcome = messages.length === 0;

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close chat" : "Open chat"}
        className="fixed bottom-6 right-6 z-[9999] w-14 h-14 rounded-full bg-[#7c3aed] text-white flex items-center justify-center shadow-lg shadow-[#7c3aed]/40 hover:bg-[#6d28d9] transition-all hover:scale-105 active:scale-95"
        style={{ boxShadow: "0 4px 24px rgba(124,58,237,0.45)" }}
      >
        {open ? <ChevronDown size={22} /> : <MessageSquare size={22} />}
      </button>

      {/* Chat window */}
      {open && (
        <div
          className="chat-widget-open fixed bottom-24 right-4 sm:right-6 z-[9999] w-[calc(100vw-2rem)] sm:w-[380px] flex flex-col rounded-2xl overflow-hidden border border-[#2a2a4a]"
          style={{
            maxHeight: "min(600px, calc(100vh - 120px))",
            background: "#0d0d1a",
            boxShadow: "0 8px 40px rgba(0,0,0,0.6)",
          }}
        >
          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3.5 border-b border-[#1f1f3a]"
            style={{ background: "linear-gradient(135deg,#1a0a2e 0%,#0d0d1a 100%)" }}>
            <div className="w-8 h-8 rounded-full bg-[#7c3aed]/20 border border-[#7c3aed]/40 flex items-center justify-center text-sm shrink-0">
              🤖
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-white leading-none">Flowtix AI</p>
              <p className="text-[10px] text-[#7c3aed] mt-0.5 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] inline-block" />
                Online · Replies instantly
              </p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-[#666] hover:text-white transition-colors p-1"
              aria-label="Close"
            >
              <X size={16} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1" style={{ minHeight: 0 }}>
            {/* Welcome card */}
            {showWelcome && (
              <div className="mb-4 rounded-xl p-4 border border-[#7c3aed]/20"
                style={{ background: "rgba(124,58,237,0.07)" }}>
                <p className="text-sm font-bold text-white mb-1">👋 Hi! I&apos;m the Flowtix AI</p>
                <p className="text-xs text-[#aaa] leading-relaxed mb-3">
                  I help businesses get more leads through WhatsApp automation. Ask me anything.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {["14 Day Setup", "24/7 Auto Reply", "100% Guaranteed"].map((b) => (
                    <span
                      key={b}
                      className="text-[10px] font-semibold px-2.5 py-1 rounded-full border border-[#7c3aed]/30 text-[#7c3aed]"
                      style={{ background: "rgba(124,58,237,0.1)" }}
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Message bubbles */}
            {messages.map((m, i) => (
              <div key={i}>
                <div className={`flex items-end gap-2 mb-1 ${m.role === "user" ? "flex-row-reverse" : ""}`}>
                  {m.role === "assistant" && (
                    <div className="w-7 h-7 rounded-full bg-[#7c3aed]/20 border border-[#7c3aed]/30 flex items-center justify-center shrink-0 text-[10px]">
                      🤖
                    </div>
                  )}
                  <div
                    className={`max-w-[78%] px-3.5 py-2.5 text-sm leading-relaxed rounded-2xl ${
                      m.role === "user"
                        ? "bg-[#7c3aed] text-white rounded-br-sm"
                        : "bg-[#1a1a2e] border border-[#2a2a4a] text-[#ddd] rounded-bl-sm"
                    }`}
                    style={
                      m.role === "assistant" && m.slot_conflict
                        ? { borderLeft: "3px solid #F59E0B" }
                        : undefined
                    }
                  >
                    {m.content}
                  </div>
                </div>

                {/* Booking confirmation card */}
                {m.role === "assistant" && m.booking_confirmed && (
                  <div
                    className="ml-9 mb-3 px-3.5 py-3 rounded-xl text-sm"
                    style={{
                      background: "rgba(34,197,94,0.08)",
                      border: "1px solid rgba(34,197,94,0.2)",
                      animation: "chatSlideUp 0.22s ease forwards",
                    }}
                  >
                    <p className="font-semibold" style={{ color: "#22c55e" }}>✅ Booking Confirmed</p>
                    <p className="mt-1" style={{ color: "#888" }}>Booking ID: {m.booking_id}</p>
                    <p className="mt-0.5" style={{ color: "#888" }}>Jaber will WhatsApp you before the call.</p>
                  </div>
                )}
              </div>
            ))}

            {/* Typing indicator */}
            {typing && <TypingIndicator />}

            {/* Error state */}
            {error && (
              <div className="mb-3 px-3.5 py-2.5 rounded-2xl rounded-bl-sm text-sm border border-red-500/20 text-red-400"
                style={{ background: "rgba(239,68,68,0.07)" }}>
                Connection issue. Please try again or contact Jaber at{" "}
                <a href="mailto:mdjaber.officials@gmail.com" className="underline">
                  mdjaber.officials@gmail.com
                </a>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Suggested pills */}
          {showSuggested && (
            <div className="px-4 pb-3">
              <p className="text-[9px] font-semibold uppercase tracking-widest text-[#555] mb-2">Quick Questions</p>
              <div className="flex flex-wrap gap-1.5">
                {SUGGESTED.map((q) => (
                  <button
                    key={q}
                    onClick={() => handlePill(q)}
                    className="text-[11px] px-2.5 py-1 rounded-full border border-[#7c3aed]/30 text-[#7c3aed] transition-all hover:bg-[#7c3aed] hover:text-white hover:border-[#7c3aed]"
                    style={{ background: "rgba(124,58,237,0.08)" }}
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 px-3 py-3 border-t border-[#1f1f3a]"
            style={{ background: "#0d0d1a" }}
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything…"
              disabled={typing}
              className="flex-1 bg-[#1a1a2e] border border-[#2a2a4a] rounded-full px-4 py-2 text-sm text-white placeholder-[#555] focus:outline-none focus:border-[#7c3aed]/50 transition-colors disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={!input.trim() || typing}
              className="w-9 h-9 rounded-full bg-[#7c3aed] flex items-center justify-center text-white hover:bg-[#6d28d9] transition-all disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
            >
              <Send size={14} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
