import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy | Monade AI" };

export default function PrivacyPage() {
  return (
    <div className="pt-16">
      <section className="container-x max-w-3xl py-20 md:py-28">
        <h1 className="text-[36px] font-medium tracking-[-0.02em]">Privacy</h1>
        <p className="mt-2 text-[13px] text-muted-2">Last updated: September 2026</p>
        <div className="mt-8 space-y-6 text-[15px] leading-relaxed text-muted">
          <p>Monade Inc. (&quot;Monade&quot;, &quot;we&quot;) operates monade.ai and the Monade voice AI service. This page explains what we collect on this website and what we do with it.</p>
          <h2 className="text-[18px] font-medium text-text">What we collect on this site</h2>
          <p>If you ask our agent to call you, we collect the mobile number you enter, the time of the request, and basic technical details (IP address, browser). We use the number to place one demo call and to stop the same number being called repeatedly. If you book a demo, we collect the email address you enter so we can schedule and follow up.</p>
          <h2 className="text-[18px] font-medium text-text">Demo call recordings</h2>
          <p>Demo calls placed from this site may be recorded and transcribed. The agent says it is an AI at the start of the call. We use these recordings only to improve the agent and to review the demo internally. Write to us at the address below to have a recording deleted.</p>
          <h2 className="text-[18px] font-medium text-text">Sharing</h2>
          <p>We do not sell personal data. We use infrastructure providers (hosting, telephony, storage) who process data on our behalf under contract.</p>
          <h2 className="text-[18px] font-medium text-text">Retention</h2>
          <p>Website lead data is kept for as long as needed to follow up, and no longer than 24 months. Demo call recordings are kept for up to 90 days unless you ask for earlier deletion.</p>
          <h2 className="text-[18px] font-medium text-text">Your rights</h2>
          <p>You can ask us to access, correct or delete your data at any time. Email hello@monade.ai.</p>
        </div>
      </section>
    </div>
  );
}
