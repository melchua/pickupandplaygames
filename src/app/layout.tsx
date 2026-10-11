import type { Metadata } from "next";
import { Instrument_Sans, Londrina_Solid } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CookieConsent } from "@/components/layout/cookie-consent";

// Fonts: Londrina Solid is the Bananarchy style-guide typeface (headlines),
// Instrument Sans is the body face.
const londrina = Londrina_Solid({
  subsets: ["latin"],
  weight: ["400", "900"],
  variable: "--font-londrina",
  display: "swap",
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pickupandplaygames.com"),
  title: {
    default: "Pick Up & Play Games - Fun Card Games for Everyone",
    template: "%s | Pick Up & Play Games",
  },
  description:
    "Discover Bananarchy and other exciting card games from Pick Up & Play Games. Quick to learn, impossible to put down!",
  keywords: [
    "card games",
    "board games",
    "family games",
    "party games",
    "Bananarchy",
    "Pick Up & Play Games",
    "tabletop games",
    "game night",
  ],
  authors: [{ name: "Pick Up & Play Games" }],
  creator: "Pick Up & Play Games",
  publisher: "Pick Up & Play Games",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pickupandplaygames.com",
    siteName: "Pick Up & Play Games",
    title: "Pick Up & Play Games - Fun Card Games for Everyone",
    description:
      "Discover Bananarchy and other exciting card games from Pick Up & Play Games. Quick to learn, impossible to put down!",
    images: [
      {
        url: "/bananarchy-box-hero.png",
        width: 1200,
        height: 630,
        alt: "Bananarchy Card Game",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pick Up & Play Games - Fun Card Games for Everyone",
    description:
      "Discover Bananarchy and other exciting card games from Pick Up & Play Games. Quick to learn, impossible to put down!",
    images: ["/bananarchy-box-hero.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${londrina.variable} ${instrument.variable}`}>
      <body className="bg-white font-body text-ink antialiased">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <CookieConsent />
        </div>
      </body>
    </html>
  );
}
