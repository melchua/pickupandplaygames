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
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center min-h-[90vh]">
          {/* Left side - Bold Typography & Content */}
          <div className="lg:col-span-2 text-center lg:text-left space-y-6 lg:space-y-8 order-2 lg:order-1 flex flex-col items-center lg:items-start">
            {/* Brand badge */}
            <div className="inline-block">
              <div className="bg-banana text-black px-4 sm:px-6 py-2 sm:py-3 rounded-full font-black text-xs sm:text-sm uppercase tracking-widest shadow-2xl border-2 border-ink/20 dark:border-white/20 backdrop-blur-sm">
                NEW! BANANARCHY
              </div>
            </div>

            {/* Main heading - Bold stacked text */}
            <div className="space-y-2 sm:space-y-3 w-full max-w-lg">
              {/* Top line */}
              <div className="bg-hot-pink text-white px-3 sm:px-6 py-2 sm:py-4 inline-block transform rotate-[-1deg] shadow-2xl border-2 sm:border-4 border-ink/10 dark:border-white/20 w-full text-center">
                <h1 className="font-display text-lg sm:text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tight">
                  AN ADDICTIVE CARD GAME
                </h1>
              </div>

              {/* Middle line */}
              <div className="bg-banana text-black px-3 sm:px-6 py-2 sm:py-4 inline-block transform rotate-[1deg] shadow-2xl border-2 sm:border-4 border-ink/10 dark:border-white/20 w-full text-center">
                <h2 className="font-display text-lg sm:text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tight">
                  OF HILARITY, HIGH-FIVES,
                </h2>
              </div>

              {/* Bottom line */}
              <div className="bg-ink dark:bg-white text-white dark:text-black px-3 sm:px-6 py-2 sm:py-4 inline-block transform rotate-[-0.5deg] shadow-2xl border-2 sm:border-4 border-hot-pink w-full text-center">
                <h3 className="font-display text-lg sm:text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tight">
                  AND HAVOC.
                </h3>
              </div>
            </div>

            {/* Primary CTA - Prominent positioning and styling */}
            <div className="flex justify-center lg:justify-start py-2 lg:py-4 w-full">
              <Link
                href="https://bananarchylaunch.pickupandplaygames.com"
                target="_blank"
              >
                <Button
                  size="lg"
                  className="bg-emerald-500 cursor-pointer hover:bg-emerald-600 text-white font-black px-8 sm:px-12 lg:px-16 py-4 sm:py-6 lg:py-8 text-lg sm:text-xl lg:text-2xl shadow-2xl border-2 sm:border-4 border-ink/20 dark:border-white/30 transform hover:scale-105 transition-all duration-300 rounded-xl lg:rounded-2xl uppercase tracking-wide animate-pulse hover:animate-none"
                >
                  🚀 JOIN FOR EARLY ACCESS
                </Button>
              </Link>
            </div>

            {/* Game specs in theme-aware style */}
            <div className="bg-white/80 dark:bg-black/60 backdrop-blur-md px-4 sm:px-6 py-3 sm:py-4 rounded-xl border-2 border-ink/20 dark:border-white/20 shadow-2xl w-full max-w-sm">
              <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center">
                <div>
                  <div className="text-banana text-xl sm:text-2xl mb-1">👥</div>
                  <div className="text-ink dark:text-white font-bold text-sm sm:text-base">
                    3-8
                  </div>
                  <div className="text-ink/60 dark:text-gray-400 text-xs uppercase tracking-wide">
                    Players
                  </div>
                </div>
                <div>
                  <div className="text-hot-pink text-xl sm:text-2xl mb-1">
                    ⏱️
                  </div>
                  <div className="text-ink dark:text-white font-bold text-sm sm:text-base">
                    15-30
                  </div>
                  <div className="text-ink/60 dark:text-gray-400 text-xs uppercase tracking-wide">
                    Minutes
                  </div>
                </div>
                <div>
                  <div className="text-banana text-xl sm:text-2xl mb-1">🎯</div>
                  <div className="text-ink dark:text-white font-bold text-sm sm:text-base">
                    13+
                  </div>
                  <div className="text-ink/60 dark:text-gray-400 text-xs uppercase tracking-wide">
                    Ages
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Large Product Image */}
          <div className="lg:col-span-3 flex justify-center lg:justify-end order-1 lg:order-2 px-4 lg:px-0">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none flex justify-center">
              {/* Main product image - responsive sizing */}
              <Image
                src="/boxmock3.png"
                alt="Bananarchy Card Game Box"
                width={800}
                height={1000}
                className="w-full h-auto drop-shadow-2xl min-w-[500px] md:min-w-[800px] lg:max-w-[1000px]"
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
