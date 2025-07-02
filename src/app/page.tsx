import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/home/hero-section";
import { GameTeaser } from "@/components/home/game-teaser";
import { FeaturedCards } from "@/components/home/featured-cards";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Game Teaser Section */}
      <GameTeaser />

      {/* Featured Cards Section */}
      <FeaturedCards />

      {/* Call to Action Section */}
      <section className="py-16 bg-banana">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ink mb-6">
            Ready for Some Mischief?
          </h2>
          <p className="font-body text-lg text-ink/80 mb-8 max-w-2xl mx-auto">
            Join thousands of players who are already causing chaos at game
            night. Bananarchy is coming to Kickstarter soon!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* <Button
              asChild
              size="lg"
              variant="outline"
              className="border-ink text-ink hover:bg-ink hover:text-banana font-semibold"
            >
              <Link href="/games/bananarchy">Explore Bananarchy</Link>
            </Button> */}
            <Button
              asChild
              size="lg"
              className="bg-hot-pink text-white hover:bg-hot-pink/90 font-semibold"
            >
              <a
                href="https://bananarchylaunch.pickupandplaygames.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join for Early Access →
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
