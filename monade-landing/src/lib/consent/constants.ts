import type { ConsentPreferences } from './types';

export const CONSENT_COOKIE_NAME = 'monade_consent_v1';
export const CONSENT_COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 180; // 180 days

export function createDefaultConsentPreferences(): ConsentPreferences {
  return {
    necessary: true,
    functional: false,
    analytics: false,
    marketing: false,
    updatedAt: new Date().toISOString(),
  };
}
