import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms | Monade AI" };

export default function TermsPage() {
  return (
    <div className="pt-16">
      <section className="container-x max-w-3xl py-20 md:py-28">
        <h1 className="text-[36px] font-medium tracking-[-0.02em]">Terms of use</h1>
        <p className="mt-2 text-[13px] text-muted-2">Last updated: September 2026</p>
        <div className="mt-8 space-y-6 text-[15px] leading-relaxed text-muted">
          <p>These terms cover your use of monade.ai and the demo call and demo booking features on it. Use of the Monade service itself is governed by the agreement between Monade and your organisation.</p>
          <h2 className="text-[18px] font-medium text-text">Demo calls</h2>
          <p>By entering a mobile number you confirm that it is yours or that you have the owner&apos;s permission, and you agree to receive one automated call from Monade&apos;s AI agent at that number. The call is a demonstration and is not an offer or a contract.</p>
          <h2 className="text-[18px] font-medium text-text">Acceptable use</h2>
          <p>Do not enter numbers or email addresses that are not yours to give, and do not use the site to send unsolicited calls to others.</p>
          <h2 className="text-[18px] font-medium text-text">Content</h2>
          <p>Figures on this site describing pilots and returns are illustrative unless stated otherwise. Screens shown are illustrative and use fictional data.</p>
          <h2 className="text-[18px] font-medium text-text">Contact</h2>
          <p>Questions about these terms: hello@monade.ai.</p>
        </div>
      </section>
    </div>
  );
}
