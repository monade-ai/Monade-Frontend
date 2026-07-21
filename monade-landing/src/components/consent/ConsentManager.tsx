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
    <div className="border-t border-ink/10 py-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-slate-900">{label}</p>
          <p className="mt-1 text-sm text-slate-500">{description}</p>
        </div>
        <button
          type="button"
          onClick={onToggle}
          disabled={disabled}
          className={`relative h-7 w-12 rounded-full transition ${checked ? 'bg-ink' : 'bg-ink/20'} ${disabled ? 'cursor-not-allowed opacity-60' : ''}`}
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

  useEffect(() => {
    if (!showPreferences) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setShowPreferences(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [showPreferences]);

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
        <div className="fixed inset-x-0 bottom-0 z-[3000] border-t border-ink/15 bg-background text-ink">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 sm:px-6 md:flex-row md:items-center md:justify-between">
            <p className="max-w-2xl text-sm leading-relaxed text-ink/70">
              Essential cookies keep Monade working. Optional analytics help us improve it.{' '}
              <Link href="/privacy" className="underline underline-offset-2 hover:text-ink">Privacy</Link>
            </p>
            <div className="flex flex-wrap items-center gap-2 md:justify-end">
              <button
                type="button"
                onClick={value.rejectOptional}
                className="min-h-11 border border-ink/20 px-4 text-sm font-medium text-ink transition-colors hover:border-ink"
              >
                Essentials only
              </button>
              <button
                type="button"
                onClick={value.acceptAll}
                className="min-h-11 bg-ink px-4 text-sm font-semibold text-background transition-colors hover:bg-primary"
              >
                Accept all
              </button>
              <button
                type="button"
                onClick={() => setShowPreferences(true)}
                className="px-2 py-1 text-xs text-ink/60 underline underline-offset-2 transition-colors hover:text-ink"
              >
                Customize preferences
              </button>
            </div>
          </div>
        </div>
      )}

      {showPreferences && (
        <div
          className="fixed inset-0 z-[3100] flex items-end justify-center bg-ink/55 p-0 sm:items-center sm:p-4"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setShowPreferences(false);
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-preferences-title"
            className="max-h-[90dvh] w-full overflow-y-auto border border-ink/15 bg-background p-5 sm:max-w-xl sm:p-7"
          >
            <h2 id="cookie-preferences-title" className="text-xl font-semibold text-ink">Cookie preferences</h2>
            <p className="mt-2 text-sm text-ink/60">
              Change these anytime from the footer.
            </p>

            <div className="mt-5 border-b border-ink/10">
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
                className="min-h-11 border border-ink/20 px-4 text-sm font-medium text-ink"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={value.rejectOptional}
                className="min-h-11 border border-ink/20 px-4 text-sm font-medium text-ink"
              >
                Reject non-essential
              </button>
              <button
                type="button"
                onClick={() => value.saveCustom(draft)}
                className="min-h-11 bg-ink px-4 text-sm font-semibold text-background"
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
