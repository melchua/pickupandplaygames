"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-banana/20 via-white to-hot-pink/10 dark:from-gray-900 dark:via-dark dark:to-gray-800 overflow-hidden">
      {/* Light/Dark background with subtle texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-white/60 dark:from-dark/60 dark:via-transparent dark:to-dark/80"></div>

      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.1) 1px, transparent 0)",
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>

      {/* Vibrant accent lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-banana/30 dark:bg-banana/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-hot-pink/30 dark:bg-hot-pink/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 items-center min-h-[90vh]">
          {/* Left side - Bold Typography & Content */}
          <div className="lg:col-span-2 text-center lg:text-left space-y-6 order-2 lg:order-1">
            {/* Brand badge */}
            <div className="inline-block">
              <div className="bg-banana text-black px-6 py-3 rounded-full font-black text-sm uppercase tracking-widest shadow-2xl border-2 border-ink/20 dark:border-white/20 backdrop-blur-sm">
                NEW! BANANARCHY
              </div>
            </div>

            {/* Main heading - Bold stacked text */}
            <div className="space-y-3">
              {/* Top line */}
              <div className="bg-hot-pink text-white px-6 py-4 inline-block transform rotate-[-1deg] shadow-2xl border-4 border-ink/10 dark:border-white/20">
                <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tight">
                  AN ADDICTIVE CARD GAME
                </h1>
              </div>

              {/* Middle line */}
              <div className="bg-banana text-black px-6 py-4 inline-block transform rotate-[1deg] shadow-2xl border-4 border-ink/10 dark:border-white/20">
                <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tight">
                  OF HILARITY, HIGH-FIVES,
                </h2>
              </div>

              {/* Bottom line */}
              <div className="bg-ink dark:bg-white text-white dark:text-black px-6 py-4 inline-block transform rotate-[-0.5deg] shadow-2xl border-4 border-hot-pink">
                <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tight">
                  AND HAVOC.
                </h3>
              </div>
            </div>

            {/* Game specs in theme-aware style */}
            <div className="bg-white/80 dark:bg-black/60 backdrop-blur-md px-6 py-4 rounded-xl border-2 border-ink/20 dark:border-white/20 shadow-2xl">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-banana text-2xl mb-1">👥</div>
                  <div className="text-ink dark:text-white font-bold text-base">
                    3-8
                  </div>
                  <div className="text-ink/60 dark:text-gray-400 text-xs uppercase tracking-wide">
                    Players
                  </div>
                </div>
                <div>
                  <div className="text-hot-pink text-2xl mb-1">⏱️</div>
                  <div className="text-ink dark:text-white font-bold text-base">
                    15-30
                  </div>
                  <div className="text-ink/60 dark:text-gray-400 text-xs uppercase tracking-wide">
                    Minutes
                  </div>
                </div>
                <div>
                  <div className="text-banana text-2xl mb-1">🎯</div>
                  <div className="text-ink dark:text-white font-bold text-base">
                    13+
                  </div>
                  <div className="text-ink/60 dark:text-gray-400 text-xs uppercase tracking-wide">
                    Ages
                  </div>
                </div>
              </div>
            </div>

            {/* Primary CTA - Bold button */}
            <div className="space-y-4">
              <Link
                href="https://bananarchylaunch.pickupandplaygames.com"
                target="_blank"
              >
                <Button
                  size="lg"
                  className="bg-hot-pink hover:bg-hot-pink/90 text-white font-black px-12 py-6 text-xl shadow-2xl border-4 border-ink/20 dark:border-white/30 transform hover:scale-105 transition-all duration-300 rounded-2xl uppercase tracking-wide"
                >
                  🚀 BACK ON KICKSTARTER
                </Button>
              </Link>

              {/* Secondary actions */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Link href="/bananarchy/how-to-play">
                  <Button
                    variant="outline"
                    size="default"
                    className="border-3 border-banana bg-banana/20 hover:bg-banana/40 dark:bg-banana/10 dark:hover:bg-banana/20 text-ink dark:text-banana font-bold px-6 py-3 text-base shadow-xl backdrop-blur-sm rounded-xl uppercase tracking-wide"
                  >
                    📖 How to Play
                  </Button>
                </Link>

                <Link href="/bananarchy">
                  <Button
                    variant="outline"
                    size="default"
                    className="border-3 border-ink/50 dark:border-white/50 bg-ink/10 dark:bg-white/10 hover:bg-ink/20 dark:hover:bg-white/20 text-ink dark:text-white font-bold px-6 py-3 text-base shadow-xl backdrop-blur-sm rounded-xl uppercase tracking-wide"
                  >
                    🍌 Game Details
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Right side - Large Product Image */}
          <div className="lg:col-span-3 flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              {/* Main product image - much larger and clean */}
              <Image
                src="/bananarchy-box-hero.png"
                alt="Bananarchy Card Game Box"
                width={800}
                height={1000}
                className="max-w-full h-auto drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/60 dark:from-dark to-transparent"></div>
    </section>
  );
}
