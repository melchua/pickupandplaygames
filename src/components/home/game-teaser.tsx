"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function GameTeaser() {
  return (
    <section className="py-20 bg-white dark:bg-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-ink dark:text-white mb-4">
              Meet{" "}
              <span className="text-banana bg-ink dark:bg-white px-4 py-2 rounded-lg">
                Bananarchy
              </span>
            </h2>
            <p className="text-xl text-ink/70 dark:text-gray-300 max-w-3xl mx-auto">
              The hilariously chaotic card game where bananas rule and chaos
              reigns supreme!
            </p>
          </div>

          {/* Two-column layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Game description */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="font-display text-3xl font-bold text-ink dark:text-white">
                  🍌 What&apos;s Bananarchy?
                </h3>
                <p className="text-lg text-ink/80 dark:text-gray-300 leading-relaxed">
                  A fast-paced, laugh-out-loud card game where players collect
                  bananas, sabotage opponents, and create absolute mayhem.
                  It&apos;s easy to learn but impossible to master!
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-display text-xl font-bold text-ink dark:text-white">
                  🎯 Key Features:
                </h4>
                <ul className="space-y-3">
                  {[
                    "Quick 15-30 minute games",
                    "Perfect for 3-8 players",
                    "Easy to learn, hard to put down",
                    "Hilarious chaos in every round",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-banana rounded-full"></div>
                      <span className="text-ink/80 dark:text-gray-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/bananarchy">
                  <Button
                    size="lg"
                    className="bg-hot-pink hover:bg-hot-pink/90 text-white font-bold px-8 py-4 text-lg shadow-xl rounded-xl uppercase tracking-wide transform hover:scale-105 transition-all duration-300"
                  >
                    🍌 Learn More
                  </Button>
                </Link>
                <Link
                  href="https://bananarchylaunch.pickupandplaygames.com"
                  target="_blank"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-banana bg-banana/20 dark:bg-banana/10 hover:bg-banana/40 dark:hover:bg-banana/20 text-ink dark:text-banana font-bold px-8 py-4 text-lg shadow-xl rounded-xl uppercase tracking-wide backdrop-blur-sm"
                  >
                    🚀 Get Notified
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right side - Coming to Kickstarter with bold design */}
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-400 via-banana to-orange-300 dark:from-orange-600 dark:via-banana dark:to-orange-400 p-8 rounded-3xl shadow-2xl relative overflow-hidden">
                {/* Subtle background pattern */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 2px 2px, rgba(0,0,0,0.2) 1px, transparent 0)",
                    backgroundSize: "24px 24px",
                  }}
                ></div>

                <div className="relative z-10 text-center space-y-6">
                  {/* Bold announcement */}
                  <div className="bg-black/80 dark:bg-white/90 text-white dark:text-black px-6 py-3 rounded-2xl transform rotate-[-2deg] shadow-xl">
                    <h3 className="font-display text-2xl md:text-3xl font-black uppercase tracking-tight">
                      Coming Soon!
                    </h3>
                  </div>

                  {/* Main image */}
                  <div className="flex justify-center">
                    <Image
                      src="/coming-soon.png"
                      alt="Bananarchy Coming Soon"
                      width={300}
                      height={400}
                      className="max-w-full h-auto drop-shadow-2xl rounded-xl"
                    />
                  </div>

                  {/* Call to action */}
                  <div className="space-y-4">
                    <div className="bg-white/90 dark:bg-black/80 text-black dark:text-white px-6 py-4 rounded-2xl transform rotate-[1deg] shadow-xl">
                      <p className="font-display text-xl md:text-2xl font-bold uppercase tracking-wide">
                        Launch on Kickstarter
                      </p>
                      <p className="text-sm opacity-80 mt-1">
                        Be the first to know!
                      </p>
                    </div>

                    <Link
                      href="https://bananarchylaunch.pickupandplaygames.com"
                      target="_blank"
                    >
                      <Button
                        size="lg"
                        className="bg-hot-pink hover:bg-hot-pink/90 text-white font-black px-8 py-4 text-xl shadow-2xl rounded-2xl uppercase tracking-wide transform hover:scale-105 transition-all duration-300 border-4 border-white/30"
                      >
                        🔔 Notify Me
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
