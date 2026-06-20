'use client';

import posthog from 'posthog-js';

const SESSION_STORAGE_KEY = 'monade_posthog_session_id';
const SCROLL_MILESTONES = [25, 50, 75, 100] as const;

let analyticsEnabled = false;
let highestScrollDepthPercent = 0;

type Primitive = string | number | boolean | null | undefined;
type EventProperties = Record<string, Primitive>;

function createSessionId() {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }

  return `ph-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

function getSessionId() {
  if (typeof window === 'undefined') {
    return 'server';
  }

  const existing = window.sessionStorage.getItem(SESSION_STORAGE_KEY);

  if (existing) {
    return existing;
  }

  const next = createSessionId();
  window.sessionStorage.setItem(SESSION_STORAGE_KEY, next);
  return next;
}

function getCurrentUrl() {
  if (typeof window === 'undefined') {
    return '';
  }

  return window.location.href;
}

function getCurrentPath() {
  if (typeof window === 'undefined') {
    return '';
  }

  return `${window.location.pathname}${window.location.search}`;
}

function toTrimmedText(value: string | null | undefined) {
  return value?.replace(/\s+/g, ' ').trim() || '';
}

function getElementName(element: HTMLElement, fallback: string) {
  return (
    toTrimmedText(element.dataset.phName) ||
    toTrimmedText(element.textContent) ||
    toTrimmedText(element.getAttribute('aria-label')) ||
    toTrimmedText(element.getAttribute('title')) ||
    fallback
  );
}

function getComponentContext(element: HTMLElement) {
  return element.closest<HTMLElement>('[data-ph-context]')?.dataset.phContext;
}

function getDefaultButtonType(button: HTMLButtonElement) {
  if (button.hasAttribute('type')) {
    return button.getAttribute('type') || 'button';
  }

  return button.closest('form') ? 'submit' : 'button';
}

function getDocumentScrollProgress() {
  if (typeof window === 'undefined') {
    return 0;
  }

  const root = document.documentElement;
  const scrollableHeight = root.scrollHeight - window.innerHeight;

  if (scrollableHeight <= 0) {
    return 100;
  }

  const progress = (window.scrollY / scrollableHeight) * 100;
  return Math.max(0, Math.min(100, progress));
}

function getReachedMilestone(progress: number) {
  let highestReached = 0;

  for (const milestone of SCROLL_MILESTONES) {
    if (progress >= milestone) {
      highestReached = milestone;
    }
  }

  return highestReached;
}

export function setAnalyticsEnabled(enabled: boolean) {
  analyticsEnabled = enabled;
}

export function resetScrollDepthTracking() {
  highestScrollDepthPercent = getReachedMilestone(getDocumentScrollProgress());
}

export function updateScrollDepthTracking() {
  highestScrollDepthPercent = Math.max(
    highestScrollDepthPercent,
    getReachedMilestone(getDocumentScrollProgress()),
  );
}

export function getTrackedScrollDepthPercent() {
  return highestScrollDepthPercent;
}

export function getSharedEventProperties(componentContext?: string | null): EventProperties {
  return {
    page_path: getCurrentPath(),
    page_url: getCurrentUrl(),
    site_session_id: getSessionId(),
    component_context: componentContext || undefined,
  };
}

export function trackPostHogEvent(eventName: string, properties: EventProperties = {}) {
  if (!analyticsEnabled) {
    return;
  }

  posthog.capture(eventName, properties);
}

export function trackButtonClick(properties: EventProperties) {
  trackPostHogEvent('site_button_clicked', properties);
}

export function trackFormSubmission(eventName: string, properties: EventProperties) {
  trackPostHogEvent(eventName, {
    page_scroll_depth_percent: getTrackedScrollDepthPercent(),
    ...properties,
  });
}

export function trackOutboundLink(properties: EventProperties) {
  trackPostHogEvent('outbound_link_clicked', properties);
}

export function buildButtonClickProperties(button: HTMLButtonElement): EventProperties {
  return {
    ...getSharedEventProperties(getComponentContext(button)),
    button_text: getElementName(button, 'unlabeled_button'),
    button_type: getDefaultButtonType(button),
    button_disabled: button.disabled,
  };
}

export function buildOutboundLinkProperties(link: HTMLAnchorElement): EventProperties | null {
  const rawHref = link.getAttribute('href');

  if (!rawHref) {
    return null;
  }

  try {
    const destination = new URL(rawHref, window.location.href);

    if (!['http:', 'https:'].includes(destination.protocol)) {
      return null;
    }

    if (destination.origin === window.location.origin) {
      return null;
    }

    return {
      ...getSharedEventProperties(getComponentContext(link)),
      link_text: getElementName(link, 'unlabeled_link'),
      destination_url: destination.href,
      destination_domain: destination.hostname,
      opens_new_tab: link.target === '_blank',
    };
  } catch {
    return null;
  }
}
