"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function HowToPlayPage() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <div className="min-h-screen bg-white dark:bg-dark">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-8xl font-display font-black text-ink dark:text-white mb-6 transform hover:rotate-1 transition-transform duration-300">
            How to Play
          </h1>
          <p className="text-xl md:text-2xl text-ink/80 dark:text-white/80 font-body max-w-3xl mx-auto">
            Learn the rules of Bananarchy and join the Bananarchy!
          </p>
        </div>

        {/* Video Section */}
        <div className="mb-16">
          <Card className="border-8 border-ink shadow-[12px_12px_0px_0px_rgba(244,91,105,1)] bg-banana transform hover:shadow-[8px_8px_0px_0px_rgba(244,91,105,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-300">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl md:text-4xl font-display font-black text-ink mb-4">
                Watch & Learn
              </CardTitle>
              <p className="text-lg text-ink/80 font-body">
                Watch our tutorial video to see Bananarchy in action
              </p>
            </CardHeader>
            <CardContent className="p-8">
              <div className="relative w-full max-w-4xl mx-auto">
                <div className="relative pb-[56.25%] h-0 overflow-hidden border-8 border-ink shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white">
                  {!videoLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-hot-pink">
                      <Button
                        onClick={() => setVideoLoaded(true)}
                        className="bg-banana border-4 border-ink text-ink font-bold text-xl px-8 py-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-200 transform hover:rotate-1"
                      >
                        ▶ Play Tutorial Video
                      </Button>
                    </div>
                  )}
                  {videoLoaded && (
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                      title="How to Play Bananarchy"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Rules Download Section */}
        <div className="mb-16">
          <Card className="border-8 border-ink shadow-[12px_12px_0px_0px_rgba(255,232,93,1)] bg-hot-pink transform hover:shadow-[8px_8px_0px_0px_rgba(255,232,93,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-300">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl md:text-4xl font-display font-black text-white mb-4">
                Official Rules
              </CardTitle>
              <p className="text-lg text-white/90 font-body">
                Download the complete rulebook for offline reference
              </p>
            </CardHeader>
            <CardContent className="p-8 text-center">
              <div className="max-w-2xl mx-auto">
                <div className="bg-white border-8 border-ink p-8 mb-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <div className="flex items-center justify-center mb-6">
                    <div className="bg-banana border-4 border-ink p-6 shadow-[4px_4px_0px_0px_rgba(244,91,105,1)]">
                      <svg
                        className="w-16 h-16 text-ink"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-ink mb-4">
                    Bananarchy Rules v1.0
                  </h3>
                  <p className="text-ink/80 font-body mb-6">
                    Complete rulebook with setup instructions, gameplay
                    mechanics, and card descriptions.
                  </p>
                  <div className="space-y-4">
                    <a
                      href="/rulebook.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button className="w-full bg-banana border-4 border-ink text-ink font-bold text-xl px-8 py-4 shadow-[4px_4px_0px_0px_rgba(244,91,105,1)] hover:shadow-[2px_2px_0px_0px_rgba(244,91,105,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-200 transform hover:-rotate-1">
                        📄 Download Rules PDF
                      </Button>
                    </a>
                    <p className="text-sm text-ink/60">
                      PDF • Last updated: July 2025
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Start Guide */}
        {/* <div className="mb-16">
          <Card className="border-8 border-ink shadow-[12px_12px_0px_0px_rgba(244,91,105,1)] bg-white dark:bg-dark transform hover:shadow-[8px_8px_0px_0px_rgba(244,91,105,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-300">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl md:text-4xl font-display font-black text-ink dark:text-white mb-4">
                Quick Start
              </CardTitle>
              <p className="text-lg text-ink/80 dark:text-white/80 font-body">
                Jump right in with these essential steps
              </p>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-banana border-4 border-ink p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform hover:rotate-1 transition-transform duration-300">
                    <div className="flex items-center mb-4">
                      <div className="bg-hot-pink border-4 border-ink text-white font-black text-2xl w-12 h-12 flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        1
                      </div>
                      <h3 className="text-xl font-display font-bold text-ink ml-4">
                        Setup
                      </h3>
                    </div>
                    <p className="text-ink/80 font-body">
                      Each player starts with 5 cards. Place the remaining deck
                      in the center.
                    </p>
                  </div>

                  <div className="bg-hot-pink border-4 border-ink p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform hover:-rotate-1 transition-transform duration-300">
                    <div className="flex items-center mb-4">
                      <div className="bg-banana border-4 border-ink text-ink font-black text-2xl w-12 h-12 flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        2
                      </div>
                      <h3 className="text-xl font-display font-bold text-white ml-4">
                        Play
                      </h3>
                    </div>
                    <p className="text-white/90 font-body">
                      Take turns playing action cards and reacting with monkey
                      business!
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-banana border-4 border-ink p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform hover:rotate-1 transition-transform duration-300">
                    <div className="flex items-center mb-4">
                      <div className="bg-hot-pink border-4 border-ink text-white font-black text-2xl w-12 h-12 flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        3
                      </div>
                      <h3 className="text-xl font-display font-bold text-ink ml-4">
                        Score
                      </h3>
                    </div>
                    <p className="text-ink/80 font-body">
                      Collect banana points by completing objectives and causing
                      chaos!
                    </p>
                  </div>

                  <div className="bg-hot-pink border-4 border-ink p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform hover:-rotate-1 transition-transform duration-300">
                    <div className="flex items-center mb-4">
                      <div className="bg-banana border-4 border-ink text-ink font-black text-2xl w-12 h-12 flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        4
                      </div>
                      <h3 className="text-xl font-display font-bold text-white ml-4">
                        Win
                      </h3>
                    </div>
                    <p className="text-white/90 font-body">
                      First to reach the target score wins the banana throne!
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div> */}

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-banana border-8 border-ink p-8 shadow-[12px_12px_0px_0px_rgba(244,91,105,1)] transform hover:shadow-[8px_8px_0px_0px_rgba(244,91,105,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-300 hover:rotate-1">
            <h2 className="text-3xl md:text-4xl font-display font-black text-ink mb-4">
              Ready to Go Bananas?
            </h2>
            <p className="text-lg text-ink/80 font-body mb-6">
              Reserve your copy of Bananarchy for bonus cards and early access!
            </p>
            <Link
              href="https://bananarchylaunch.pickupandplaygames.com"
              target="_blank"
            >
              <Button
                size="lg"
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-black px-4 py-3 md:px-8 lg:px-16 md:py-4 lg:py-8 text-sm md:text-xl lg:text-2xl shadow-2xl border-4 border-ink/20 dark:border-white/30 transform hover:scale-105 transition-all duration-300 rounded-2xl uppercase tracking-wide animate-pulse hover:animate-none"
              >
                🚀 JOIN FOR EARLY ACCESS
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
