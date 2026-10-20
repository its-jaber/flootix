import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service — Flowtix",
  description: "Terms for businesses and customers using Flowtix AI Messenger.",
};

export default function Page() {
  return <LegalPage file="terms.md" />;
}
