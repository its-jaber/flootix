import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Problems from "@/components/sections/Problems";
import Services from "@/components/sections/Services";
import HowItWorks from "@/components/sections/HowItWorks";
import DemoProjects from "@/components/sections/DemoProjects";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import Guarantee from "@/components/sections/Guarantee";
import Results from "@/components/sections/Results";
import About from "@/components/sections/About";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Flowtix — AI Growth Systems Agency | Automate. Capture. Grow.",
  description:
    "Flowtix builds AI Growth Systems for service businesses worldwide — so they never miss a lead, never lose a booking, and never chase a follow-up manually again. Live in 14 days.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Problems />
      <Services />
      <HowItWorks />
      <DemoProjects />
      <Testimonials />
      <Pricing />
      <Guarantee />
      <Results />
      <About />
      <FAQ />
      <CTA />
    </>
  );
}
