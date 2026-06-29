import type { Metadata } from "next";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatbotWidget from "@/components/ChatbotWidget";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Flowtix — AI Growth Systems Agency | Automate. Capture. Grow.",
  description:
    "Flowtix builds AI Growth Systems for service businesses worldwide — so they never miss a lead, never lose a booking, and never chase a follow-up manually again. Live in 14 days.",
  keywords: "AI automation, lead generation, WhatsApp automation, business automation, n8n, AI growth systems, appointment automation, service business automation",
  openGraph: {
    title: "Flowtix — AI Growth Systems Agency",
    description: "Automate. Capture. Grow. AI-powered websites and automation systems for businesses.",
    siteName: "Flowtix",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
        <WhatsAppButton />
        <ChatbotWidget />
      </body>
    </html>
  );
}
