"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white dark:bg-dark flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-8xl md:text-9xl font-display font-black text-ink dark:text-white mb-4 transform hover:rotate-1 transition-transform duration-300">
            404
          </h1>
          <h2 className="text-4xl md:text-6xl font-display font-black text-hot-pink mb-6 transform hover:-rotate-1 transition-transform duration-300">
            DENIED!
          </h2>
        </div>

        {/* Card Image */}
        <div className="mb-12 flex justify-center">
          <div className="relative transform hover:scale-105 hover:rotate-2 transition-all duration-300">
            <div className="border-8 border-ink shadow-[16px_16px_0px_0px_rgba(244,91,105,1)] bg-white p-4 transform hover:shadow-[12px_12px_0px_0px_rgba(244,91,105,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-300">
              <Image
                src="/card_reaction_denied.jpg"
                alt="Denied - Page Not Found"
                width={400}
                height={600}
                className="w-full max-w-sm mx-auto"
                priority
              />
            </div>
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-12">
          <div className="bg-banana border-8 border-ink p-8 shadow-[12px_12px_0px_0px_rgba(244,91,105,1)] transform hover:shadow-[8px_8px_0px_0px_rgba(244,91,105,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-300 hover:rotate-1">
            <h3 className="text-2xl md:text-3xl font-display font-black text-ink mb-4">
              Oops! This Page Got Monkey-Blocked!
            </h3>
            <p className="text-lg text-ink/80 font-body mb-6 max-w-2xl mx-auto">
              Looks like you tried to access a page that doesn&apos;t exist. The
              monkeys have denied your request! Don&apos;t worry though -
              there&apos;s plenty of banana-filled fun waiting for you on our
              main pages.
            </p>
          </div>
        </div>

        {/* Navigation Options */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Link href="/">
            <div className="bg-hot-pink border-8 border-ink p-6 shadow-[8px_8px_0px_0px_rgba(255,232,93,1)] transform hover:shadow-[4px_4px_0px_0px_rgba(255,232,93,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-300 hover:-rotate-1 cursor-pointer">
              <div className="text-4xl mb-3">🏠</div>
              <h4 className="text-xl font-display font-bold text-white mb-2">
                Home
              </h4>
              <p className="text-white/90 font-body text-sm">
                Back to the main chaos
              </p>
            </div>
          </Link>

          <Link href="/how-to-play">
            <div className="bg-banana border-8 border-ink p-6 shadow-[8px_8px_0px_0px_rgba(244,91,105,1)] transform hover:shadow-[4px_4px_0px_0px_rgba(244,91,105,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-300 hover:rotate-1 cursor-pointer">
              <div className="text-4xl mb-3">🎮</div>
              <h4 className="text-xl font-display font-bold text-ink mb-2">
                How to Play
              </h4>
              <p className="text-ink/80 font-body text-sm">Learn the rules</p>
            </div>
          </Link>

          <Link href="/about">
            <div className="bg-hot-pink border-8 border-ink p-6 shadow-[8px_8px_0px_0px_rgba(255,232,93,1)] transform hover:shadow-[4px_4px_0px_0px_rgba(255,232,93,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-300 hover:-rotate-1 cursor-pointer">
              <div className="text-4xl mb-3">🐵</div>
              <h4 className="text-xl font-display font-bold text-white mb-2">
                About Us
              </h4>
              <p className="text-white/90 font-body text-sm">
                Meet the monkey crew
              </p>
            </div>
          </Link>
        </div>

        {/* Back Button */}
        <div className="text-center">
          <Button
            onClick={() => window.history.back()}
            className="bg-banana border-4 border-ink text-ink font-bold text-xl px-8 py-4 shadow-[4px_4px_0px_0px_rgba(244,91,105,1)] hover:shadow-[2px_2px_0px_0px_rgba(244,91,105,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-200 transform hover:rotate-2"
          >
            🍌 Go Back
          </Button>
        </div>

        {/* Fun Message */}
        <div className="mt-12">
          <p className="text-sm text-ink/60 dark:text-white/60 font-body">
            Error Code: BANANA_NOT_FOUND | Status: MONKEY_BUSINESS_DETECTED
          </p>
        </div>
      </div>
    </div>
  );
}
