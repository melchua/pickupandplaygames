import { HeroSection } from "@/components/home/hero-section";
import { Reviews } from "@/components/home/reviews";
import { GameTeaser } from "@/components/home/game-teaser";
import { FeaturedCards } from "@/components/home/featured-cards";
import { BoxContents } from "@/components/home/box-contents";
import { CtaBanner } from "@/components/site/cta-banner";
import { KICKSTARTER_URL, SOCIAL_LINKS } from "@/lib/site";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Reviews />
      <GameTeaser />
      <FeaturedCards />
      <BoxContents />
      <CtaBanner heading="Ready for some mischief?" />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Pick Up & Play Games",
            url: "https://pickupandplaygames.com",
            logo: "https://pickupandplaygames.com/fav.png",
            description:
              "Creating fast-paced, mischievous party games that bring people together for unforgettable moments.",
            foundingDate: "2024",
            sameAs: [KICKSTARTER_URL, ...SOCIAL_LINKS.map((link) => link.href)],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Games",
              itemListElement: [
                {
                  "@type": "Game",
                  name: "Bananarchy",
                  description:
                    "Snatch, Stash, Snack & Smash your way to victory in this fast-paced, mischievous party game.",
                  gamePlayMode: "MultiPlayer",
                  numberOfPlayers: "3-8",
                  playTime: "PT20M",
                },
              ],
            },
          }),
        }}
      />
    </>
  );
}
