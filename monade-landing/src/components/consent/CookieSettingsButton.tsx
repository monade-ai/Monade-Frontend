'use client';

import { openCookieSettings } from './ConsentManager';

export function CookieSettingsButton({ className }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={openCookieSettings}
      className={className}
    >
      Open cookie settings
    </button>
  );
}
