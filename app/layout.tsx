import type { Metadata } from "next";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Flowtix — AI Growth Systems Agency | Automate. Capture. Grow.",
  description:
    "Flowtix helps businesses in Bangladesh generate more leads, automate customer communication, and convert inquiries into paying customers through AI-powered systems.",
  keywords: "AI automation, lead generation, WhatsApp automation, Bangladesh, business automation, n8n",
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
      </body>
    </html>
  );
}
