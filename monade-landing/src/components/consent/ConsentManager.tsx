'use client';

import Link from 'next/link';
import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  createDefaultConsentPreferences,
} from '@/lib/consent/constants';
import {
  parseConsentCookie,
  writeConsentCookie,
} from '@/lib/consent/cookie';
import type { ConsentPreferences } from '@/lib/consent/types';

type ConsentContextValue = {
  preferences: ConsentPreferences;
  hasStoredConsent: boolean;
  openPreferences: () => void;
  acceptAll: () => void;
  rejectOptional: () => void;
  saveCustom: (next: {
    functional: boolean;
    analytics: boolean;
    marketing: boolean;
  }) => void;
};

const OPEN_COOKIE_SETTINGS_EVENT = 'monade:open-cookie-settings';

const ConsentContext = createContext<ConsentContextValue | null>(null);

function ToggleRow({
  label,
  description,
  checked,
  onToggle,
  disabled,
}: {
  label: string;
  description: string;
  checked: boolean;
  onToggle: () => void;
  disabled?: boolean;
}) {
  return (
    <div className="rounded-xl border border-slate-200 p-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-slate-900">{label}</p>
          <p className="mt-1 text-sm text-slate-500">{description}</p>
        </div>
        <button
          type="button"
          onClick={onToggle}
          disabled={disabled}
          className={`relative h-7 w-12 rounded-full transition ${checked ? 'bg-slate-900' : 'bg-slate-300'} ${disabled ? 'opacity-60 cursor-not-allowed' : ''}`}
        >
          <span
            className={`absolute top-1 h-5 w-5 rounded-full bg-white transition ${checked ? 'left-6' : 'left-1'}`}
          />
          <span className="sr-only">Toggle {label}</span>
        </button>
      </div>
    </div>
  );
}

export function ConsentProvider({
  children,
  initialConsentCookie,
}: {
  children: React.ReactNode;
  initialConsentCookie?: string | null;
}) {
  const parsedInitialConsent = parseConsentCookie(initialConsentCookie);
  const initialPreferences = parsedInitialConsent ?? createDefaultConsentPreferences();

  const [preferences, setPreferences] = useState<ConsentPreferences>(initialPreferences);
  const [hasStoredConsent, setHasStoredConsent] = useState(Boolean(parsedInitialConsent));
  const [showBanner, setShowBanner] = useState(!parsedInitialConsent);
  const [showPreferences, setShowPreferences] = useState(false);
  const [draft, setDraft] = useState({
    functional: initialPreferences.functional,
    analytics: initialPreferences.analytics,
    marketing: initialPreferences.marketing,
  });

  useEffect(() => {
    const openHandler = () => {
      setDraft({
        functional: preferences.functional,
        analytics: preferences.analytics,
        marketing: preferences.marketing,
      });
      setShowPreferences(true);
    };

    window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, openHandler);
    return () => window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, openHandler);
  }, [preferences]);

  const applyPreferences = (next: { functional: boolean; analytics: boolean; marketing: boolean }) => {
    const saved = writeConsentCookie(next);
    setPreferences(saved);
    setDraft(next);
    setHasStoredConsent(true);
    setShowBanner(false);
    setShowPreferences(false);
  };

  const value: ConsentContextValue = {
    preferences,
    hasStoredConsent,
    openPreferences: () => {
      setDraft({
        functional: preferences.functional,
        analytics: preferences.analytics,
        marketing: preferences.marketing,
      });
      setShowPreferences(true);
    },
    acceptAll: () => applyPreferences({ functional: true, analytics: true, marketing: true }),
    rejectOptional: () => applyPreferences({ functional: false, analytics: false, marketing: false }),
    saveCustom: (next) => applyPreferences(next),
  };

  return (
    <ConsentContext.Provider value={value}>
      {children}

      {showBanner && (
        <div className="fixed inset-x-0 bottom-0 z-[3000] border-t border-slate-200 bg-white p-4 shadow-2xl">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm text-slate-700">
              We use cookies for core site functionality and optional analytics. You can accept, reject, or customize your
              preferences. Read our <Link href="/privacy" className="underline">Privacy Policy</Link> and{' '}
              <Link href="/cookies" className="underline">Cookie Policy</Link>.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setShowPreferences(true)}
                className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700"
              >
                Customize
              </button>
              <button
                type="button"
                onClick={value.rejectOptional}
                className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700"
              >
                Reject non-essential
              </button>
              <button
                type="button"
                onClick={value.acceptAll}
                className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white"
              >
                Accept all
              </button>
            </div>
          </div>
        </div>
      )}

      {showPreferences && (
        <div className="fixed inset-0 z-[3100] flex items-center justify-center bg-slate-900/50 p-4">
          <div className="w-full max-w-xl rounded-2xl bg-white p-6 shadow-2xl">
            <h2 className="text-xl font-semibold text-slate-900">Cookie Preferences</h2>
            <p className="mt-2 text-sm text-slate-500">
              You can change these anytime from the footer "Cookie settings" link.
            </p>

            <div className="mt-5 space-y-3">
              <ToggleRow
                label="Necessary"
                description="Required for site security and core functionality. Always active."
                checked
                onToggle={() => undefined}
                disabled
              />
              <ToggleRow
                label="Functional"
                description="Remembers experience preferences."
                checked={draft.functional}
                onToggle={() => setDraft((current) => ({ ...current, functional: !current.functional }))}
              />
              <ToggleRow
                label="Analytics"
                description="Measures traffic and product usage (Google Analytics)."
                checked={draft.analytics}
                onToggle={() => setDraft((current) => ({ ...current, analytics: !current.analytics }))}
              />
              <ToggleRow
                label="Marketing"
                description="Supports campaign attribution and advertising optimization."
                checked={draft.marketing}
                onToggle={() => setDraft((current) => ({ ...current, marketing: !current.marketing }))}
              />
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setShowPreferences(false)}
                className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={value.rejectOptional}
                className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700"
              >
                Reject non-essential
              </button>
              <button
                type="button"
                onClick={() => value.saveCustom(draft)}
                className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white"
              >
                Save preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </ConsentContext.Provider>
  );
}

export function useConsent() {
  const value = useContext(ConsentContext);

  if (!value) {
    throw new Error('useConsent must be used within ConsentProvider.');
  }

  return value;
}

export function openCookieSettings() {
  if (typeof window === 'undefined') {
    return;
  }

  window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS_EVENT));
}
