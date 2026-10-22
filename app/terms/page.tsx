import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service — Floowtix",
  description: "Terms for businesses and customers using Floowtix AI Messenger.",
};

export default function Page() {
  return <LegalPage file="terms.md" />;
}
