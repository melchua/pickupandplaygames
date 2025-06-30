import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CookieConsentState {
  hasConsented: boolean | null; // null = not decided yet, true = accepted, false = declined
  showBanner: boolean;
  acceptCookies: () => void;
  declineCookies: () => void;
  hideBanner: () => void;
}

export const useCookieConsent = create<CookieConsentState>()(
  persist(
    (set) => ({
      hasConsented: null,
      showBanner: true,
      acceptCookies: () => {
        set({ hasConsented: true, showBanner: false });
        // Enable analytics/tracking here when implemented
        if (typeof window !== "undefined") {
          console.log("Cookie consent: Analytics enabled");
        }
      },
      declineCookies: () => {
        set({ hasConsented: false, showBanner: false });
        // Disable analytics/tracking here when implemented
        if (typeof window !== "undefined") {
          console.log("Cookie consent: Analytics disabled");
        }
      },
      hideBanner: () => {
        set({ showBanner: false });
      },
    }),
    {
      name: "cookie-consent-storage",
      // Only persist the consent decision, not the banner visibility
      partialize: (state) => ({ hasConsented: state.hasConsented }),
    }
  )
);
