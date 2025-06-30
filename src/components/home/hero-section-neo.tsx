"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSectionNeo() {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Neobrutalism Background Elements */}
      <div className="absolute inset-0">
        {/* Large geometric shapes */}
        <div className="absolute top-20 left-0 w-80 h-80 bg-banana border-8 border-ink transform rotate-12 opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-hot-pink border-8 border-ink transform -rotate-6 opacity-15"></div>
        <div className="absolute top-1/2 left-1/3 w-60 h-60 bg-ink border-8 border-banana transform rotate-45 opacity-10"></div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, #000 0px, #000 2px, transparent 2px, transparent 40px), repeating-linear-gradient(90deg, #000 0px, #000 2px, transparent 2px, transparent 40px)",
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[90vh]">
          {/* Left side - Neobrutalism Text Treatment */}
          <div className="space-y-8 order-2 lg:order-1">
            {/* Brand Badge - Neobrutalism Style */}
            <div className="inline-block transform -rotate-2">
              <div className="bg-banana text-ink px-8 py-4 border-6 border-ink shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform">
                <span className="font-black text-lg uppercase tracking-wider">
                  🍺 LAZYLAB BREWCO
                </span>
              </div>
            </div>

            {/* Main heading - Stacked neobrutalism blocks */}
            <div className="space-y-6">
              {/* Award winning */}
              <div className="inline-block transform rotate-1">
                <div className="bg-hot-pink text-white px-8 py-6 border-6 border-ink shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                  <h1 className="font-black text-4xl md:text-6xl uppercase tracking-tight">
                    award winning
                  </h1>
                </div>
              </div>

              {/* IPA's */}
              <div className="inline-block transform -rotate-1 ml-8">
                <div className="bg-banana text-ink px-8 py-6 border-6 border-ink shadow-[12px_12px_0px_0px_rgba(244,91,105,1)]">
                  <h2 className="font-black text-4xl md:text-6xl uppercase tracking-tight">
                    ipa&apos;s
                  </h2>
                </div>
              </div>

              {/* Embrace the hopvolution */}
              <div className="inline-block transform rotate-2">
                <div className="bg-ink text-white px-6 py-4 border-6 border-hot-pink shadow-[8px_8px_0px_0px_rgba(255,232,93,1)]">
                  <h3 className="font-black text-2xl md:text-3xl uppercase tracking-wide">
                    embrace the hopvolution 🌿
                  </h3>
                </div>
              </div>
            </div>

            {/* Navigation Pills - Neobrutalism Style */}
            <div className="flex flex-wrap gap-4">
              {["HOME", "PRODUCTION", "SHOP", "CART"].map((item, index) => (
                <div
                  key={item}
                  className={`px-6 py-3 border-4 border-ink font-bold text-sm uppercase tracking-wider cursor-pointer transform hover:translate-y-1 transition-transform ${
                    item === "HOME"
                      ? "bg-hot-pink text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                      : "bg-white text-ink shadow-[4px_4px_0px_0px_rgba(244,91,105,1)] hover:bg-banana"
                  }`}
                  style={{
                    transform: `rotate(${
                      (index % 2 === 0 ? 1 : -1) * (index + 1)
                    }deg)`,
                  }}
                >
                  {item}
                </div>
              ))}
            </div>

            {/* Product highlights */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              {/* Best sellers card */}
              <div className="bg-white border-6 border-ink p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
                <div className="text-center">
                  <div className="text-4xl mb-2">🏆</div>
                  <div className="font-black text-lg uppercase text-ink">
                    best sellers
                  </div>
                  <div className="text-sm text-ink/70 mt-2">
                    Notorious HOP IPA
                    <br />
                    Ched out IPA
                    <br />
                    Lori EA
                  </div>
                </div>
              </div>

              {/* IPA perfection card */}
              <div className="bg-banana border-6 border-ink p-6 shadow-[8px_8px_0px_0px_rgba(244,91,105,1)] transform -rotate-1">
                <div className="text-center">
                  <div className="text-4xl mb-2">🍺</div>
                  <div className="font-black text-lg uppercase text-ink">
                    it&apos;s ipa o&apos;clock
                  </div>
                  <div className="text-sm text-ink/70 mt-2">
                    embrace the hopvolution
                    <br />
                    💪 $29.99
                    <br />
                    💥 $24.99
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/shop">
                <Button
                  size="lg"
                  className="bg-hot-pink hover:bg-hot-pink text-white font-black px-12 py-6 text-xl border-6 border-ink shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform hover:translate-y-1 transition-all duration-200 uppercase tracking-wide hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                >
                  SHOP NOW
                </Button>
              </Link>

              <Link href="/about">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white hover:bg-banana text-ink font-black px-8 py-6 text-xl border-6 border-ink shadow-[8px_8px_0px_0px_rgba(244,91,105,1)] transform hover:translate-y-1 transition-all duration-200 uppercase tracking-wide hover:shadow-[4px_4px_0px_0px_rgba(244,91,105,1)]"
                >
                  LEARN MORE
                </Button>
              </Link>
            </div>
          </div>

          {/* Right side - Product showcase with neobrutalism treatment */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              {/* Main product container */}
              <div className="bg-gradient-to-br from-banana to-hot-pink border-8 border-ink p-8 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transform -rotate-2">
                <div className="bg-white border-4 border-ink p-6 transform rotate-3">
                  {/* Featured product image placeholder */}
                  <div className="w-80 h-96 bg-gradient-to-b from-banana/20 to-hot-pink/20 border-4 border-ink flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4">🍺</div>
                      <div className="font-black text-2xl uppercase text-ink">
                        notorious
                        <br />
                        hop ipa
                      </div>
                      <div className="text-lg text-ink/70 mt-2">$29.99</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating accent elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-hot-pink border-4 border-ink transform rotate-45"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-banana border-4 border-ink transform rotate-12"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative elements */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="flex justify-center">
          <div className="bg-ink text-white px-8 py-4 border-6 border-banana transform -rotate-1">
            <span className="font-black text-lg uppercase tracking-wider">
              🌿 feel the flavour of west coast 🌿
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
