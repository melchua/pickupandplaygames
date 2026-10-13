"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { useCookieConsent } from "@/store/cookie-consent";

// False during server rendering and hydration, true once the client takes over.
// The persisted consent lives in localStorage, so the server cannot know it.
const noopSubscribe = () => () => {};
function useIsClient() {
  return useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false
  );
}

const buttonClass =
  "inline-flex min-h-10 items-center rounded-full px-4 text-sm font-semibold transition-colors";

// A small card in the corner on larger screens, a slim bar on phones.
export function CookieConsent() {
  const isClient = useIsClient();
  const { hasConsented, showBanner, acceptCookies, declineCookies } =
    useCookieConsent();

  // Don't render on server or if user has already made a decision
  if (!isClient || hasConsented !== null || !showBanner) {
    return null;
  }

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className="fixed inset-x-3 bottom-3 z-50 sm:inset-x-auto sm:right-5 sm:bottom-5 sm:max-w-[380px]"
    >
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 rounded-2xl bg-ink px-4 py-2.5 text-white shadow-[0_12px_32px_rgba(0,0,0,0.28)] sm:px-5 sm:py-4">
        <p className="text-sm">
          We use cookies for analytics.{" "}
          <Link
            href="/privacy"
            className="underline underline-offset-2 hover:text-banana"
          >
            Privacy policy
          </Link>
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={declineCookies}
            className={`${buttonClass} border border-white/40 hover:bg-white/10`}
          >
            Decline
          </button>
          <button
            type="button"
            onClick={acceptCookies}
            className={`${buttonClass} bg-banana text-ink hover:bg-banana-bright`}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
