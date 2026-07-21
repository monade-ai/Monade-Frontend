import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import FooterCTA from "@/components/sections/FooterCTA";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Products",
  description:
    "Explore Monade's voice, email, and WhatsApp products for sales, support, and business operations.",
  path: "/products",
});

const CALENDLY_URL = "https://calendly.com/adhiraj-n1labs/30min";

const channels = [
  {
    name: "Voice",
    description:
      "Answer, qualify, book, and hand off calls in Hindi, English, Hinglish, and regional languages.",
    specs: ["First word in 0.4s", "Inbound and outbound", "Available 24/7"],
  },
  {
    name: "WhatsApp",
    description:
      "Send confirmations, locations, brochures, reminders, and payment links with the call context attached.",
    specs: ["Shared customer memory", "Rich media", "Template workflows"],
  },
  {
    name: "Email",
    description:
      "Draft and send the follow-up while the conversation is still fresh, without manual copying or handover notes.",
    specs: ["Call-aware drafts", "Scheduled follow-up", "CRM-connected"],
  },
];

const recordings = [
  {
    title: "Site visit qualified and booked",
    context: "Real estate · Hinglish",
    src: "/audio/gramophone/realestate.mp3",
  },
  {
    title: "Candidate briefed and scheduled",
    context: "Hiring · Hindi and English",
    src: "/audio/gramophone/ecommerce.mp3",
  },
  {
    title: "Reservation handled end to end",
    context: "Hospitality · English",
    src: "/audio/gramophone/restaurant.mp3",
  },
];

const platformSpecs = [
  { value: "99.9%", label: "Target uptime" },
  { value: "0.4s", label: "Time to first word" },
  { value: "10,000+", label: "Concurrent calls" },
  { value: "India", label: "Data residency" },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background text-ink">
      <Navbar />

      <main>
        <section className="mx-auto max-w-7xl px-6 pb-24 pt-44 md:pb-32 md:pt-52">
          <h1 className="max-w-5xl font-display text-5xl leading-[1.02] md:text-7xl">
            One conversation across every channel.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink/65 md:text-xl">
            Voice, WhatsApp, and email share the same customer context, so the next interaction starts where the last one ended.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center bg-ink px-7 font-semibold text-background transition-colors hover:bg-primary"
            >
              Book a walkthrough
            </Link>
            <Link
              href="/pricing"
              className="inline-flex min-h-12 items-center justify-center border border-ink/20 px-7 font-semibold transition-colors hover:border-ink"
            >
              See pricing
            </Link>
          </div>
        </section>

        <section className="border-t border-ink/10 py-24 md:py-32" aria-labelledby="channels-title">
          <div className="mx-auto max-w-7xl px-6">
            <h2 id="channels-title" className="max-w-3xl font-display text-4xl leading-[1.04] md:text-6xl">
              One memory. Three ways to respond.
            </h2>
            <div className="mt-16 border-b border-ink/10">
              {channels.map((channel) => (
                <article
                  key={channel.name}
                  className="grid gap-5 border-t border-ink/10 py-9 md:grid-cols-[0.55fr_1fr_0.75fr] md:gap-10"
                >
                  <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">{channel.name}</h3>
                  <p className="max-w-xl leading-relaxed text-ink/65">{channel.description}</p>
                  <ul className="space-y-2 text-sm text-ink/60">
                    {channel.specs.map((spec) => <li key={spec}>{spec}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-midnight py-24 text-manila md:py-32" aria-labelledby="recordings-title">
          <div className="mx-auto max-w-7xl px-6">
            <h2 id="recordings-title" className="max-w-3xl font-display text-4xl leading-[1.04] md:text-6xl">
              Hear real calls.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-manila/70">
              Three production-style conversations, with the pacing and interruptions left intact.
            </p>
            <div className="mt-14 border-b border-manila/15">
              {recordings.map((recording) => (
                <article
                  key={recording.title}
                  className="grid gap-5 border-t border-manila/15 py-7 md:grid-cols-[1fr_0.7fr] md:items-center md:gap-10"
                >
                  <div>
                    <h3 className="text-xl font-semibold">{recording.title}</h3>
                    <p className="mt-2 text-sm text-manila/60">{recording.context}</p>
                  </div>
                  <audio className="w-full" controls preload="metadata" src={recording.src}>
                    Your browser does not support audio playback.
                  </audio>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32" aria-labelledby="platform-title">
          <div className="mx-auto max-w-7xl px-6">
            <h2 id="platform-title" className="max-w-3xl font-display text-4xl leading-[1.04] md:text-6xl">
              Built for production traffic.
            </h2>
            <dl className="mt-14 grid border-y border-ink/10 sm:grid-cols-2 lg:grid-cols-4">
              {platformSpecs.map((spec) => (
                <div key={spec.label} className="border-b border-ink/10 py-8 sm:px-6 lg:border-b-0 lg:border-r first:pl-0 last:border-r-0">
                  <dd className="text-3xl font-semibold tracking-tight">{spec.value}</dd>
                  <dt className="mt-2 text-sm text-ink/60">{spec.label}</dt>
                </div>
              ))}
            </dl>
          </div>
        </section>
      </main>

      <FooterCTA />
    </div>
  );
}
