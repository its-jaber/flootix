import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Problems from "@/components/sections/Problems";
import Services from "@/components/sections/Services";
import HowItWorks from "@/components/sections/HowItWorks";
import DemoProjects from "@/components/sections/DemoProjects";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import Results from "@/components/sections/Results";
import About from "@/components/sections/About";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Flowtix — AI Growth Systems Agency | Automate. Capture. Grow.",
  description:
    "Flowtix helps businesses in Bangladesh generate more leads, automate customer communication, and convert inquiries into paying customers through AI-powered websites and automation systems.",
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
      <Results />
      <About />
      <CTA />
    </>
  );
}
