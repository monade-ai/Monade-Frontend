'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import posthog from 'posthog-js';
import {
  buildButtonClickProperties,
  buildOutboundLinkProperties,
  resetScrollDepthTracking,
  setAnalyticsEnabled,
  trackButtonClick,
  trackOutboundLink,
  updateScrollDepthTracking,
} from '@/lib/posthog';
import { useConsent } from './ConsentManager';

const DEFAULT_POSTHOG_HOST = 'https://us.i.posthog.com';

export function PostHogAnalytics() {
  const pathname = usePathname();
  const { preferences } = useConsent();
  const hasInitializedRef = useRef(false);
  const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  const posthogHost = process.env.NEXT_PUBLIC_POSTHOG_HOST || DEFAULT_POSTHOG_HOST;

  useEffect(() => {
    if (!posthogKey) {
      return;
    }

    if (!preferences.analytics) {
      if (hasInitializedRef.current) {
        posthog.reset();
        hasInitializedRef.current = false;
      }
      setAnalyticsEnabled(false);
      return;
    }

    if (hasInitializedRef.current) {
      return;
    }

    posthog.init(posthogKey, {
      api_host: posthogHost,
      capture_pageview: false,
      capture_pageleave: true,
      persistence: 'localStorage+cookie',
    });

    setAnalyticsEnabled(true);
    hasInitializedRef.current = true;
  }, [posthogHost, posthogKey, preferences.analytics]);

  useEffect(() => {
    if (!posthogKey || !preferences.analytics || !hasInitializedRef.current) {
      return;
    }

    const query = window.location.search.replace(/^\?/, '');
    const currentUrl = query ? `${pathname}?${query}` : pathname;

    posthog.capture('$pageview', {
      $current_url: window.location.href,
      pathname,
      search: query,
      route: currentUrl,
    });
  }, [pathname, posthogKey, preferences.analytics]);

  useEffect(() => {
    if (!preferences.analytics || !hasInitializedRef.current) {
      return;
    }

    resetScrollDepthTracking();

    const handleScroll = () => {
      updateScrollDepthTracking();
    };

    const handleDocumentClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;

      if (!target) {
        return;
      }

      const button = target.closest<HTMLButtonElement>('button');

      if (button && !button.closest('[data-ph-skip="true"]')) {
        trackButtonClick(buildButtonClickProperties(button));
      }

      const link = target.closest<HTMLAnchorElement>('a[href]');

      if (!link || link.closest('[data-ph-skip="true"]')) {
        return;
      }

      const linkProperties = buildOutboundLinkProperties(link);

      if (linkProperties) {
        trackOutboundLink(linkProperties);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('click', handleDocumentClick);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [pathname, preferences.analytics]);

  return null;
}
