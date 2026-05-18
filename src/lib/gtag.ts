declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const CONVERSION_ID = 'AW-18107526585/Y7XcCK3rs6wcELnbq7pD';

export function trackConversion() {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('event', 'conversion', { send_to: CONVERSION_ID });
}
