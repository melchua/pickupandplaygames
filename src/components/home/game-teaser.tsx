"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function GameTeaser() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background geometric elements */}
      <div className="absolute inset-0">
        <div className="absolute top-16 right-16 w-40 h-40 bg-banana border-6 border-ink transform rotate-12 opacity-15"></div>
        <div className="absolute bottom-16 left-16 w-32 h-32 bg-hot-pink border-6 border-ink transform -rotate-12 opacity-15"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header - Neobrutalism Style */}
          <div className="text-center mb-16">
            <div className="inline-block transform rotate-1 mb-6">
              <div className="bg-ink text-white px-8 py-6 border-6 border-banana shadow-[12px_12px_0px_0px_rgba(255,232,93,1)]">
                <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight">
                  Meet <span className="text-banana">Bananarchy</span>
                </h2>
              </div>
            </div>

            <div className="bg-white border-6 border-ink p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform -rotate-1 max-w-3xl mx-auto">
              <p className="text-xl text-ink font-bold">
                The hilariously chaotic card game where bananas rule and chaos
                reigns supreme!
              </p>
            </div>
          </div>

          {/* Two-column layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Game description */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-block transform rotate-1">
                  <div className="bg-banana text-ink px-6 py-4 border-6 border-ink shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                    <h3 className="font-black text-3xl uppercase tracking-tight">
                      🍌 What&apos;s Bananarchy?
                    </h3>
                  </div>
                </div>

                <div className="bg-white border-6 border-ink p-6 shadow-[6px_6px_0px_0px_rgba(244,91,105,1)] transform -rotate-1">
                  <p className="text-lg text-ink font-bold leading-relaxed">
                    A fast-paced, laugh-out-loud card game where players collect
                    bananas, sabotage opponents, and create absolute mayhem.
                    It&apos;s easy to learn but impossible to master!
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="inline-block transform -rotate-1">
                  <div className="bg-hot-pink text-white px-6 py-3 border-6 border-ink shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                    <h4 className="font-black text-xl uppercase">
                      🎯 Key Features:
                    </h4>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Quick 15-30 minute games",
                    "Perfect for 3-8 players",
                    "Easy to learn, hard to put down",
                    "Hilarious chaos in every round",
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className={`bg-white border-4 border-ink p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform ${
                        index % 2 === 0 ? "rotate-1" : "-rotate-1"
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-banana border-2 border-ink"></div>
                        <span className="text-ink font-bold text-sm">
                          {feature}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/bananarchy">
                  <Button
                    size="lg"
                    className="bg-hot-pink hover:bg-hot-pink/90 text-white font-black px-8 py-4 text-lg border-6 border-ink shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform hover:translate-y-1 transition-all duration-200 uppercase tracking-wide"
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
                    className="bg-banana hover:bg-banana/80 text-ink font-black px-8 py-4 text-lg border-6 border-ink shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform hover:translate-y-1 transition-all duration-200 uppercase tracking-wide"
                  >
                    🚀 Get Notified
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right side - Coming to Kickstarter with neobrutalism design */}
            <div className="relative">
              <div className="bg-gradient-to-br from-banana to-hot-pink border-8 border-ink p-8 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transform rotate-2 relative overflow-hidden">
                {/* Grid pattern overlay */}
                <div className="absolute inset-0 opacity-10">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(0deg, #000 0px, #000 2px, transparent 2px, transparent 20px), repeating-linear-gradient(90deg, #000 0px, #000 2px, transparent 2px, transparent 20px)",
                      backgroundSize: "20px 20px",
                    }}
                  ></div>
                </div>

                <div className="relative z-10 text-center space-y-6">
                  {/* Bold announcement */}
                  <div className="bg-ink text-white px-6 py-4 border-6 border-white shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] transform -rotate-3">
                    <h3 className="font-black text-2xl md:text-3xl uppercase tracking-tight">
                      Coming Soon!
                    </h3>
                  </div>

                  {/* Main image */}
                  <div className="flex justify-center">
                    <div className="bg-white border-6 border-ink p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
                      <Image
                        src="/coming-soon.png"
                        alt="Bananarchy Coming Soon"
                        width={280}
                        height={350}
                        className="max-w-full h-auto border-4 border-ink"
                      />
                    </div>
                  </div>

                  {/* Call to action */}
                  <div className="space-y-4">
                    <div className="bg-white text-ink px-6 py-4 border-6 border-ink shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform rotate-2">
                      <p className="font-black text-xl md:text-2xl uppercase tracking-wide">
                        Launch on Kickstarter
                      </p>
                      <p className="text-sm font-bold opacity-80 mt-1">
                        Be the first to know!
                      </p>
                    </div>

                    <Link
                      href="https://bananarchylaunch.pickupandplaygames.com"
                      target="_blank"
                    >
                      <Button
                        size="lg"
                        className="bg-hot-pink hover:bg-hot-pink/90 text-white font-black px-8 py-4 text-xl border-6 border-white shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] transform hover:translate-y-1 transition-all duration-200 uppercase tracking-wide"
                      >
                        🔔 Notify Me
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Floating accent elements */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-banana border-4 border-ink transform rotate-45"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-ink border-4 border-banana transform -rotate-12"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
