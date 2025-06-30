"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useCookieConsent } from "@/store/cookie-consent";

export function CookieConsent() {
  const [mounted, setMounted] = useState(false);
  const { hasConsented, showBanner, acceptCookies, declineCookies } =
    useCookieConsent();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render on server or if user has already made a decision
  if (!mounted || hasConsented !== null || !showBanner) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-ink text-white border-t-4 border-banana shadow-2xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm font-body leading-relaxed">
              <span className="font-semibold text-banana">🍌 Hey there!</span>{" "}
              We use cookies to improve your experience and understand how our
              site is used. By continuing, you agree to our use of cookies for
              analytics and site optimization.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 shrink-0">
            <Button
              variant="outline"
              size="sm"
              onClick={declineCookies}
              className="border-white text-white hover:bg-white hover:text-ink transition-colors duration-200"
            >
              Decline
            </Button>
            <Button
              variant="default"
              size="sm"
              onClick={acceptCookies}
              className="bg-banana text-ink hover:bg-banana/90 border-banana"
            >
              Accept Cookies
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
