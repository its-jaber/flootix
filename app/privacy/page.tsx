import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy — Flowtix",
  description: "How Flowtix AI Messenger handles information when you message a Facebook Page that uses our service.",
};

export default function Page() {
  return <LegalPage file="privacy.md" />;
}
