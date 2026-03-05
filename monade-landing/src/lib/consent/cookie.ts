import {
  CONSENT_COOKIE_MAX_AGE_SECONDS,
  CONSENT_COOKIE_NAME,
  createDefaultConsentPreferences,
} from './constants';
import type { ConsentPreferences } from './types';

function isBoolean(value: unknown): value is boolean {
  return typeof value === 'boolean';
}

function toPreferences(value: unknown): ConsentPreferences | null {
  if (!value || typeof value !== 'object') {
    return null;
  }

  const candidate = value as Partial<ConsentPreferences>;

  if (!isBoolean(candidate.analytics) || !isBoolean(candidate.functional) || !isBoolean(candidate.marketing)) {
    return null;
  }

  const updatedAt = typeof candidate.updatedAt === 'string' ? candidate.updatedAt : new Date().toISOString();

  return {
    necessary: true,
    analytics: candidate.analytics,
    functional: candidate.functional,
    marketing: candidate.marketing,
    updatedAt,
  };
}

export function parseConsentCookie(rawCookieValue: string | null | undefined): ConsentPreferences | null {
  if (!rawCookieValue) {
    return null;
  }

  try {
    const decoded = decodeURIComponent(rawCookieValue);
    const parsed = JSON.parse(decoded) as unknown;
    return toPreferences(parsed);
  } catch {
    return null;
  }
}

export function readConsentCookieFromDocument(): ConsentPreferences | null {
  if (typeof document === 'undefined') {
    return null;
  }

  const prefix = `${CONSENT_COOKIE_NAME}=`;
  const cookiePart = document.cookie
    .split('; ')
    .find((entry) => entry.startsWith(prefix));

  if (!cookiePart) {
    return null;
  }

  return parseConsentCookie(cookiePart.slice(prefix.length));
}

export function writeConsentCookie(preferences: Omit<ConsentPreferences, 'necessary' | 'updatedAt'>): ConsentPreferences {
  const next: ConsentPreferences = {
    necessary: true,
    functional: preferences.functional,
    analytics: preferences.analytics,
    marketing: preferences.marketing,
    updatedAt: new Date().toISOString(),
  };

  if (typeof document !== 'undefined') {
    const encoded = encodeURIComponent(JSON.stringify(next));
    const secure = window.location.protocol === 'https:' ? '; Secure' : '';

    document.cookie = `${CONSENT_COOKIE_NAME}=${encoded}; Path=/; Max-Age=${CONSENT_COOKIE_MAX_AGE_SECONDS}; SameSite=Lax${secure}`;
  }

  return next;
}

export function getInitialConsentPreferences(): ConsentPreferences {
  return readConsentCookieFromDocument() ?? createDefaultConsentPreferences();
}
