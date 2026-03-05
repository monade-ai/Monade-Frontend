import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import FooterCTA from '@/components/sections/FooterCTA';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Monade collects, uses, and protects personal data.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar variant="light" />
      <main className="mx-auto max-w-4xl px-6 pb-24 pt-56">
        <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">Last updated: March 3, 2026</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">Privacy Policy</h1>

        <div className="mt-10 space-y-8 text-slate-700">
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">1. Scope</h2>
            <p>
              This policy explains how Monade AI Inc. processes personal data on this website and in demo request workflows.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">2. Data We Collect</h2>
            <p>
              We may collect contact details (name, business email, company), communication details (phone number), and technical
              usage data (IP address, browser, cookie preferences, analytics events if consented).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">3. Why We Process Data</h2>
            <p>
              We process data to respond to inquiries, schedule demos, secure the site, measure performance, and improve product
              quality. Analytics is used only when you grant analytics consent.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">4. Legal Bases (EU/EEA/UK)</h2>
            <p>
              Depending on context, we rely on consent, contract preparation, legitimate interests, and legal obligations.
              Non-essential cookies and analytics run only on consent.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">5. Third-Party Processors</h2>
            <p>
              We use service providers such as Calendly (scheduling), cloud infrastructure vendors, telephony providers, and
              Google Analytics (if consented). We sign appropriate data-processing terms with vendors.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">6. Data Retention</h2>
            <p>
              We retain personal data only as long as needed for the stated purposes, contractual obligations, and regulatory
              compliance. Retention windows are reviewed periodically.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">7. Your Rights</h2>
            <p>
              Subject to applicable law, you may request access, correction, deletion, restriction, objection, portability, and
              withdrawal of consent at any time.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">8. Contact</h2>
            <p>
              For privacy requests, contact <a className="underline" href="mailto:privacy@monade.ai">privacy@monade.ai</a>.
              For cookie choices, visit the <Link href="/cookies" className="underline">Cookie Policy</Link> page.
            </p>
          </section>
        </div>
      </main>
      <FooterCTA />
    </div>
  );
}
