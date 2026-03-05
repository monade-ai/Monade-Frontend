import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import FooterCTA from '@/components/sections/FooterCTA';
import { CookieSettingsButton } from '@/components/consent/CookieSettingsButton';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Cookie categories used by Monade and how to control them.',
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar variant="light" />
      <main className="mx-auto max-w-4xl px-6 pb-24 pt-56">
        <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">Last updated: March 3, 2026</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">Cookie Policy</h1>

        <div className="mt-10 space-y-8 text-slate-700">
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">1. What Cookies We Use</h2>
            <p>
              We use one required consent cookie and optional cookies for analytics, functional preferences, and future campaign
              attribution.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">2. Cookie Categories</h2>
            <p>
              Necessary cookies are always enabled. Functional, analytics, and marketing cookies are optional and controlled by
              your consent preferences.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">3. Google Analytics</h2>
            <p>
              Google Analytics runs only when analytics consent is granted. We configure anonymized IP and consent mode controls.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">4. Manage Preferences</h2>
            <p>You can update your cookie choices at any time.</p>
            <CookieSettingsButton className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white" />
          </section>
        </div>
      </main>
      <FooterCTA />
    </div>
  );
}
