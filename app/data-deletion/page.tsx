import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Data Deletion Instructions — Floowtix",
  description: "How to request deletion of your data from Floowtix AI Messenger.",
};

export default function Page() {
  return <LegalPage file="data-deletion.md" />;
}
