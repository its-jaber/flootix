import type { Metadata } from "next";
import { Check, MessageCircle, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "AIM — AI Messenger Support & Sales Automation | Floowtix",
  description:
    "Help your Bangladeshi Facebook shop reply in Bangla, Banglish and English, quote your own prices and capture orders with AIM. Plans from ৳1,999/month with a 7-day free trial.",
};

const features = [
  ["Speak your customers’ language", "Reply in Bangla, Banglish and English, around the clock."],
  ["Use your own prices", "Answer from your shop’s price list without inventing an amount."],
  ["Keep negotiation in your control", "Negotiate only within the limit you set."],
  ["Capture complete orders", "Take orders with the delivery charge and total included."],
  ["Answer order questions", "Answer ‘where is my order?’ using your own order records."],
  ["Understand voice and photos", "Handle voice messages and photos on the Growth plan and above."],
  ["Read payment screenshots", "Read bKash and Nagad screenshots and alert you."],
  ["Connect your deliveries", "Book and track parcels with Steadfast courier."],
  ["Follow up after delivery", "Ask customers for a review after delivery."],
  ["Keep you informed", "Send owner alerts through Telegram and email."],
  ["See your shop in one place", "Manage orders, customers, chats and analytics in your dashboard."],
];

const steps = [
  "A customer messages your Facebook Page.",
  "AIM reads your shop’s own data.",
  "AIM replies or hands the conversation over to a human.",
  "The order is recorded.",
  "You see the order in your dashboard.",
];

function Actions() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button href="https://aim-api.aim-api.workers.dev" external>
        Explore AIM <ArrowRight size={16} aria-hidden="true" />
      </Button>
      <Button href="https://aim-api.aim-api.workers.dev/app" external variant="ghost">
        Log in
      </Button>
    </div>
  );
}

export default function AimPage() {
  return (
    <div className="pb-24 pt-32 sm:pt-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <section aria-labelledby="aim-title" className="max-w-3xl pb-16 sm:pb-24">
          <SectionLabel className="mb-5">A Floowtix product · Built for Bangladesh</SectionLabel>
          <h1 id="aim-title" className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl">
            AIM — AI Messenger Support &amp; Sales Automation
          </h1>
          <p className="mb-8 mt-6 max-w-2xl text-lg leading-relaxed text-[#AAAAAA]">
            Help your Bangladeshi Facebook shop answer customers, quote prices and capture orders — using your shop’s own information.
          </p>
          <Actions />
        </section>

        <section aria-labelledby="aim-problem" className="border-t border-[#1F1F1F] py-16">
          <SectionLabel className="mb-4">The problem</SectionLabel>
          <h2 id="aim-problem" className="text-3xl font-bold tracking-tight sm:text-4xl">Your inbox keeps moving. You need time to run your shop.</h2>
          <p className="mt-5 max-w-3xl leading-relaxed text-[#AAAAAA]">
            Messenger enquiries pile up. Customers wait for replies to the same price and delivery questions. Taking orders manually takes time, and enquiries that arrive at night can turn into missed orders.
          </p>
        </section>

        <section aria-labelledby="aim-features" className="border-t border-[#1F1F1F] py-16">
          <SectionLabel className="mb-4">What AIM does</SectionLabel>
          <h2 id="aim-features" className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl">Support and sales, connected to your shop.</h2>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(([title, description]) => (
              <li key={title} className="rounded-2xl border border-[#1F1F1F] bg-[#111111] p-6">
                <Check size={20} className="mb-4 text-[#2170e9]" aria-hidden="true" />
                <h3 className="mb-2 font-semibold text-white">{title}</h3>
                <p className="text-sm leading-relaxed text-[#AAAAAA]">{description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="aim-how" className="border-t border-[#1F1F1F] py-16">
          <SectionLabel className="mb-4">How it works</SectionLabel>
          <h2 id="aim-how" className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl">From the first message to a recorded order.</h2>
          <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, index) => (
              <li key={step} className="rounded-2xl border border-[#1F1F1F] p-5">
                <span aria-hidden="true" className="mb-4 block text-sm font-semibold text-[#2170e9]">0{index + 1}</span>
                <p className="text-sm leading-relaxed text-[#AAAAAA]">{step}</p>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="aim-who" className="border-t border-[#1F1F1F] py-16">
          <SectionLabel className="mb-4">Who it is for</SectionLabel>
          <h2 id="aim-who" className="text-3xl font-bold tracking-tight sm:text-4xl">Facebook-based shops in Bangladesh.</h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-[#AAAAAA]">Built for shop owners handling many daily enquiries who want customer support, order taking and owner updates connected in one workflow.</p>
        </section>

        <section aria-labelledby="aim-pricing" className="border-t border-[#1F1F1F] py-16">
          <SectionLabel className="mb-4">Pricing</SectionLabel>
          <h2 id="aim-pricing" className="text-3xl font-bold tracking-tight sm:text-4xl">Choose a plan for your shop.</h2>
          <p className="mb-8 mt-5 text-[#AAAAAA]">Start with a 7-day free trial. We handle setup for you.</p>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { name: "Starter", price: "৳1,999", recommended: false },
              { name: "Growth", price: "৳4,499", recommended: true },
              { name: "Business", price: "৳8,999", recommended: false },
            ].map((plan) => (
              <div key={plan.name} className={`rounded-2xl border bg-[#111111] p-7 ${plan.recommended ? "border-[#2170e9]" : "border-[#1F1F1F]"}`}>
                {plan.recommended && <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#3b82f6]">Recommended</p>}
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <p className="mt-4 text-3xl font-bold">{plan.price}<span className="ml-1 text-sm font-normal text-[#AAAAAA]">/ month</span></p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm text-[#AAAAAA]">Voice messages and photos are available on Growth and above.</p>
        </section>

        <section aria-labelledby="aim-start" className="rounded-2xl border border-[#1F1F1F] bg-[#111111] p-6 sm:p-10">
          <MessageCircle className="mb-5 text-[#2170e9]" size={28} aria-hidden="true" />
          <h2 id="aim-start" className="text-3xl font-bold tracking-tight sm:text-4xl">Give your shop’s Messenger inbox a helping hand.</h2>
          <p className="mb-7 mt-4 max-w-2xl leading-relaxed text-[#AAAAAA]">Explore AIM or log in to your existing dashboard. AIM opens in a separate tab.</p>
          <Actions />
          <p className="mt-6 text-sm text-[#AAAAAA]">Questions? <a className="text-[#3b82f6] underline underline-offset-4" href="mailto:jaber@floowtix.co">jaber@floowtix.co</a></p>
        </section>
      </div>
    </div>
  );
}
