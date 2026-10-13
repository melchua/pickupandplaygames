"use client";

import { useSearchParams } from "next/navigation";

// Shown only to visitors who arrived from the printed rulebook's QR code
// (/rules-qr redirects here with utm_source=rulebook).
export function RulebookNotice() {
  const params = useSearchParams();
  if (params.get("utm_source") !== "rulebook") {
    return null;
  }

  return (
    <p className="rounded-2xl bg-banana px-4 py-3 text-sm font-medium">
      <span className="font-semibold">From the rulebook?</span> Watch the
      one-minute video below, or jump to a section.
    </p>
  );
}
