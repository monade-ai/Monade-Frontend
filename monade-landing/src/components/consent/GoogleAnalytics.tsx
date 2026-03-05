'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useConsent } from './ConsentManager';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const DENIED_CONSENT = {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'denied',
} as const;

const GRANTED_ANALYTICS_CONSENT = {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'granted',
} as const;

export function GoogleAnalytics() {
  const pathname = usePathname();
  const { preferences } = useConsent();
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  useEffect(() => {
    if (!gaId || !window.gtag) {
      return;
    }

    if (preferences.analytics) {
      window.gtag('consent', 'update', GRANTED_ANALYTICS_CONSENT);
      window.gtag('config', gaId, {
        page_path: pathname,
        anonymize_ip: true,
      });
      return;
    }

    window.gtag('consent', 'update', DENIED_CONSENT);
  }, [gaId, pathname, preferences.analytics]);

  if (!gaId) {
    return null;
  }

  return (
    <>
      <Script id="ga-consent-bootstrap" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = window.gtag || gtag;
gtag('consent', 'default', ${JSON.stringify(DENIED_CONSENT)});`}
      </Script>

      {preferences.analytics && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
          <Script id="ga-init" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = window.gtag || gtag;
gtag('js', new Date());
gtag('consent', 'update', ${JSON.stringify(GRANTED_ANALYTICS_CONSENT)});
gtag('config', '${gaId}', { anonymize_ip: true, send_page_view: false });`}
          </Script>
        </>
      )}
    </>
  );
}
