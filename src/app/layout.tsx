import type { Metadata } from "next";
import { Fredoka, Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CookieConsent } from "@/components/layout/cookie-consent";

// Fonts
const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Pickup & Play Games - Fun Card Games for Everyone",
    template: "%s | Pickup & Play Games",
  },
  description:
    "Discover Bananarchy and other exciting card games from Pickup & Play Games. Quick to learn, impossible to put down!",
  keywords: [
    "card games",
    "board games",
    "family games",
    "party games",
    "Bananarchy",
    "Pickup & Play Games",
    "tabletop games",
    "game night",
  ],
  authors: [{ name: "Pickup & Play Games" }],
  creator: "Pickup & Play Games",
  publisher: "Pickup & Play Games",
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
    siteName: "Pickup & Play Games",
    title: "Pickup & Play Games - Fun Card Games for Everyone",
    description:
      "Discover Bananarchy and other exciting card games from Pickup & Play Games. Quick to learn, impossible to put down!",
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
    title: "Pickup & Play Games - Fun Card Games for Everyone",
    description:
      "Discover Bananarchy and other exciting card games from Pickup & Play Games. Quick to learn, impossible to put down!",
    images: ["/bananarchy-box-hero.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fredoka.variable} ${poppins.variable}`}>
      <body className="bg-white dark:bg-dark text-ink dark:text-white font-body antialiased transition-colors duration-300">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <CookieConsent />
        </div>
      </body>
    </html>
  );
}
