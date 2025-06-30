import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HeroSectionNeo } from "@/components/home/hero-section-neo";
import { GameTeaser } from "@/components/home/game-teaser";
import { FeaturedCards } from "@/components/home/featured-cards";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSectionNeo />

      {/* Game Teaser Section */}
      <GameTeaser />

      {/* Featured Cards Section */}
      <FeaturedCards />

      {/* Call to Action Section - Neobrutalism Style */}
      <section className="py-16 bg-banana relative overflow-hidden">
        {/* Background geometric elements */}
        <div className="absolute inset-0">
          <div className="absolute top-8 left-8 w-32 h-32 bg-hot-pink border-6 border-ink transform rotate-12 opacity-20"></div>
          <div className="absolute bottom-8 right-8 w-24 h-24 bg-ink border-6 border-white transform -rotate-12 opacity-20"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-block transform rotate-1 mb-8">
            <div className="bg-ink text-white px-8 py-6 border-6 border-hot-pink shadow-[12px_12px_0px_0px_rgba(244,91,105,1)]">
              <h2 className="font-black text-3xl md:text-4xl uppercase tracking-tight">
                Ready for Some Mischief?
              </h2>
            </div>
          </div>

          <div className="bg-white border-6 border-ink p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform -rotate-1 mb-8 max-w-2xl mx-auto">
            <p className="font-bold text-lg text-ink">
              Join thousands of players who are already causing chaos at game
              night. Bananarchy is coming to Kickstarter soon!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-white hover:bg-white/80 text-ink font-black px-8 py-4 text-lg border-6 border-ink shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform hover:translate-y-1 transition-all duration-200 uppercase tracking-wide"
            >
              <Link href="/games/bananarchy">🍌 Explore Bananarchy</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-hot-pink hover:bg-hot-pink/90 text-white font-black px-8 py-4 text-lg border-6 border-ink shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform hover:translate-y-1 transition-all duration-200 uppercase tracking-wide"
            >
              <a
                href="https://bananarchylaunch.pickupandplaygames.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                🚀 Back on Kickstarter
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Pickup & Play Games",
            url: "https://pickupandplaygames.com",
            logo: "https://pickupandplaygames.com/logo.png",
            description:
              "Creating fast-paced, mischievous party games that bring people together for unforgettable moments.",
            foundingDate: "2024",
            sameAs: ["https://bananarchylaunch.pickupandplaygames.com"],
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
                  playTime: "PT15M",
                },
              ],
            },
          }),
        }}
      />
    </div>
  );
}
