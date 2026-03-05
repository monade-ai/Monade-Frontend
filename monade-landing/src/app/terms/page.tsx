import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import FooterCTA from '@/components/sections/FooterCTA';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms governing use of Monade website and services.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar variant="light" />
      <main className="mx-auto max-w-4xl px-6 pb-24 pt-56">
        <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">Last updated: March 3, 2026</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">Terms of Service</h1>

        <div className="mt-10 space-y-8 text-slate-700">
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">1. Agreement</h2>
            <p>
              By accessing this website, you agree to these terms and applicable laws. If you do not agree, do not use the site.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">2. Use of Website</h2>
            <p>
              You may use the site for lawful business purposes only. You may not attempt to disrupt, reverse engineer, or abuse
              any part of the service.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">3. Demo Requests and Communications</h2>
            <p>
              When you submit contact details or request a demo, you confirm that provided information is accurate and that we may
              contact you regarding your request.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">4. Intellectual Property</h2>
            <p>
              All content, trademarks, and software on this site are owned by Monade AI Inc. or its licensors unless otherwise
              stated.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">5. Disclaimer and Liability</h2>
            <p>
              The website is provided "as is" without warranties of any kind. To the extent permitted by law, Monade is not liable
              for indirect or consequential damages arising from use of this site.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">6. Changes</h2>
            <p>
              We may update these terms from time to time. The effective date above indicates the latest revision.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">7. Contact</h2>
            <p>
              Questions about these terms can be sent to <a className="underline" href="mailto:legal@monade.ai">legal@monade.ai</a>.
            </p>
          </section>
        </div>
      </main>
      <FooterCTA />
    </div>
  );
}
