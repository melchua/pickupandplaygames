import { HeroSectionNeo } from "@/components/home/hero-section-neo";
import { NeoNav } from "@/components/layout/neo-nav";
import { Footer } from "@/components/layout/footer";

export default function NeoDemoPage() {
  return (
    <div className="min-h-screen">
      <NeoNav />
      <HeroSectionNeo />

      {/* Additional neobrutalism section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block transform rotate-1">
              <div className="bg-ink text-white px-8 py-4 border-6 border-hot-pink shadow-[8px_8px_0px_0px_rgba(255,232,93,1)]">
                <h2 className="font-black text-3xl uppercase tracking-wide">
                  discover true ipa joy
                </h2>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Product cards with neobrutalism styling */}
            {[
              { name: "Notorious HOP IPA", price: "$29.99", emoji: "🍺" },
              { name: "Ched out IPA", price: "$24.99", emoji: "🌿" },
              { name: "Lori EA", price: "$22.99", emoji: "🏆" },
            ].map((product, index) => (
              <div
                key={product.name}
                className={`bg-white border-6 border-ink p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform ${
                  index % 2 === 0 ? "rotate-1" : "-rotate-1"
                }`}
              >
                <div className="text-center">
                  <div className="text-6xl mb-4">{product.emoji}</div>
                  <div className="font-black text-xl uppercase text-ink mb-2">
                    {product.name}
                  </div>
                  <div className="text-lg text-ink/70 mb-4">
                    {product.price}
                  </div>
                  <div
                    className={`px-6 py-3 border-4 border-ink font-bold text-sm uppercase tracking-wider cursor-pointer transform hover:translate-y-1 transition-transform ${
                      index === 0
                        ? "bg-hot-pink text-white"
                        : index === 1
                        ? "bg-banana text-ink"
                        : "bg-ink text-white"
                    } shadow-[4px_4px_0px_0px_rgba(244,91,105,1)]`}
                  >
                    Add to Cart
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
