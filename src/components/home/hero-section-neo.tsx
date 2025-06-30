"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

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
        <div className="grid lg:grid-cols-5 gap-12 items-center min-h-[90vh]">
          {/* Left side - Neobrutalism Text Treatment */}
          <div className="lg:col-span-2 space-y-8 order-2 lg:order-1 text-center lg:text-left">
            {/* Brand Badge - Neobrutalism Style */}
            <div className="inline-block transform -rotate-2">
              <div className="bg-banana text-ink px-8 py-4 border-6 border-ink shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-black text-lg uppercase tracking-wider">
                  NEW! BANANARCHY
                </span>
              </div>
            </div>

            {/* Main heading - Stacked neobrutalism blocks */}
            <div className="space-y-6">
              {/* First block */}
              <div className="inline-block transform rotate-1">
                <div className="bg-hot-pink text-white px-8 py-6 border-6 border-ink shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                  <h1 className="font-black text-3xl md:text-5xl uppercase tracking-tight">
                    AN ADDICTIVE CARD GAME
                  </h1>
                </div>
              </div>

              {/* Second block */}
              <div className="inline-block transform -rotate-1">
                <div className="bg-banana text-ink px-8 py-6 border-6 border-ink shadow-[12px_12px_0px_0px_rgba(244,91,105,1)]">
                  <h2 className="font-black text-3xl md:text-5xl uppercase tracking-tight">
                    OF HILARITY, HIGH-FIVES,
                  </h2>
                </div>
              </div>

              {/* Third block */}
              <div className="inline-block transform rotate-2">
                <div className="bg-ink text-white px-6 py-4 border-6 border-hot-pink shadow-[8px_8px_0px_0px_rgba(255,232,93,1)]">
                  <h3 className="font-black text-3xl md:text-5xl uppercase tracking-tight">
                    AND HAVOC.
                  </h3>
                </div>
              </div>
            </div>

            {/* Game specs in neobrutalism style */}
            <div className="bg-white border-6 border-ink p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-banana text-2xl mb-1">👥</div>
                  <div className="text-ink font-black text-base">3-8</div>
                  <div className="text-ink/60 text-xs uppercase tracking-wide font-bold">
                    Players
                  </div>
                </div>
                <div>
                  <div className="text-hot-pink text-2xl mb-1">⏱️</div>
                  <div className="text-ink font-black text-base">15-30</div>
                  <div className="text-ink/60 text-xs uppercase tracking-wide font-bold">
                    Minutes
                  </div>
                </div>
                <div>
                  <div className="text-banana text-2xl mb-1">🎯</div>
                  <div className="text-ink font-black text-base">13+</div>
                  <div className="text-ink/60 text-xs uppercase tracking-wide font-bold">
                    Ages
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons - Neobrutalism Style */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="https://bananarchylaunch.pickupandplaygames.com"
                target="_blank"
              >
                <Button
                  size="lg"
                  className="bg-hot-pink hover:bg-hot-pink text-white font-black px-12 py-6 text-xl border-6 border-ink shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform hover:translate-y-1 transition-all duration-200 uppercase tracking-wide hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                >
                  🚀 BACK ON KICKSTARTER
                </Button>
              </Link>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/bananarchy/how-to-play">
                  <Button
                    variant="outline"
                    size="default"
                    className="bg-banana hover:bg-banana/80 text-ink font-black px-6 py-3 text-base border-6 border-ink shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform hover:translate-y-1 transition-all duration-200 uppercase tracking-wide"
                  >
                    📖 How to Play
                  </Button>
                </Link>

                <Link href="/bananarchy">
                  <Button
                    variant="outline"
                    size="default"
                    className="bg-white hover:bg-white/80 text-ink font-black px-6 py-3 text-base border-6 border-ink shadow-[6px_6px_0px_0px_rgba(244,91,105,1)] transform hover:translate-y-1 transition-all duration-200 uppercase tracking-wide"
                  >
                    🍌 Game Details
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Right side - Product showcase with neobrutalism treatment */}
          <div className="lg:col-span-3 flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              {/* Main product image with neobrutalism frame */}
              <div className="bg-gradient-to-br from-banana/20 to-hot-pink/20 border-8 border-ink p-4 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
                <Image
                  src="/bananarchy-box-hero.png"
                  alt="Bananarchy Card Game Box"
                  width={600}
                  height={750}
                  className="max-w-full h-auto border-4 border-ink"
                  priority
                />
              </div>

              {/* Floating accent elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-hot-pink border-4 border-ink transform rotate-45"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-banana border-4 border-ink transform rotate-12"></div>

              {/* Fun floating text */}
              <div className="absolute top-8 -left-8 transform -rotate-12">
                <div className="bg-ink text-white px-4 py-2 border-4 border-banana">
                  <span className="font-black text-sm uppercase">CHAOS!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative element */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="flex justify-center">
          <div className="bg-ink text-white px-8 py-4 border-6 border-banana transform -rotate-1">
            <span className="font-black text-lg uppercase tracking-wider">
              🍌 Snatch, Stash, Snack & Smash your way to victory! 🍌
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
