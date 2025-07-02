"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const navigation = [
  { name: "Home", href: "/", color: "bg-banana", shadow: "rgba(255,232,93,1)" },
  {
    name: "About",
    href: "/about",
    color: "bg-hot-pink",
    shadow: "rgba(244,91,105,1)",
  },
  {
    name: "How to Play",
    href: "/how-to-play",
    color: "bg-banana",
    shadow: "rgba(255,232,93,1)",
  },
  {
    name: "Contact",
    href: "/contact",
    color: "bg-hot-pink",
    shadow: "rgba(255,232,93,1)",
  },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b-8 border-ink bg-white/95 dark:bg-dark/95 backdrop-blur supports-[backdrop-filter]:bg-white/90 dark:supports-[backdrop-filter]:bg-dark/90 shadow-[0_8px_0px_0px_rgba(0,0,0,1)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Enhanced Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center space-x-3 group"
              aria-label="Pickup & Play Games home"
            >
              <div className="relative">
                <div className="h-12 w-12 bg-banana border-4 border-ink shadow-[4px_4px_0px_0px_rgba(244,91,105,1)] group-hover:shadow-[2px_2px_0px_0px_rgba(244,91,105,1)] flex items-center justify-center transform group-hover:translate-y-1 group-hover:translate-x-1 transition-all duration-200 ease-out group-hover:rotate-3 rounded-full">
                  <span className="text-ink font-display font-black text-lg transform group-hover:scale-110 transition-transform duration-200">
                    P&P
                  </span>
                </div>
              </div>
              <div className="hidden sm:block">
                <div className="px-4 py-2 bg-ink text-white border-4 border-banana shadow-[4px_4px_0px_0px_rgba(255,232,93,1)] group-hover:shadow-[2px_2px_0px_0px_rgba(255,232,93,1)] transform group-hover:translate-y-1 group-hover:translate-x-1 transition-all duration-200 ease-out group-hover:-rotate-1 rounded-lg">
                  <span className="font-display font-bold text-sm uppercase tracking-wide">
                    Pickup & Play Games
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* Enhanced Desktop Navigation */}
          <nav
            className="hidden md:flex items-center space-x-4"
            aria-label="Main navigation"
          >
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "px-6 py-3 border-4 border-ink font-body font-bold text-sm uppercase tracking-wider cursor-pointer transition-all duration-300 ease-out transform hover:translate-y-1 hover:translate-x-1 rounded-full",
                  item.color,
                  "text-ink hover:text-white shadow-[6px_6px_0px_0px_" +
                    item.shadow +
                    "] hover:shadow-[2px_2px_0px_0px_" +
                    item.shadow +
                    "]",
                  index % 2 === 0 ? "hover:rotate-2" : "hover:-rotate-2",
                  // Staggered animation delay
                  "animate-in slide-in-from-top-5 fade-in"
                )}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationDuration: "600ms",
                  animationFillMode: "both",
                }}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Enhanced Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Enhanced Theme Toggle */}
            {/* <div className="transform hover:rotate-12 hover:scale-110 transition-all duration-300">
              <ThemeToggle />
            </div> */}

            {/* Enhanced Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
                aria-label="Toggle navigation menu"
                className={cn(
                  "h-12 w-12 p-0 border-4 border-ink bg-hot-pink hover:bg-banana text-white hover:text-ink transition-all duration-300 ease-out transform hover:translate-y-1 hover:translate-x-1 rounded-lg",
                  "shadow-[4px_4px_0px_0px_rgba(255,232,93,1)] hover:shadow-[2px_2px_0px_0px_rgba(255,232,93,1)]",
                  mobileMenuOpen &&
                    "translate-y-1 translate-x-1 shadow-[2px_2px_0px_0px_rgba(255,232,93,1)]"
                )}
              >
                <svg
                  className={cn("h-6 w-6 transition-transform duration-300", {
                    "rotate-90 scale-110": mobileMenuOpen,
                  })}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="3"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  {mobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </Button>
            </div>
          </div>
        </div>

        {/* Enhanced Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden border-t-8 border-banana bg-white/95 dark:bg-dark/95 backdrop-blur animate-in slide-in-from-top-3 fade-in duration-300"
          >
            <nav
              className="px-4 pt-4 pb-6 space-y-3"
              aria-label="Mobile navigation"
            >
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "block px-6 py-4 border-4 border-ink font-body font-bold text-base uppercase tracking-wider transition-all duration-300 ease-out transform hover:translate-y-1 hover:translate-x-1 rounded-lg text-center",
                    item.color,
                    "text-ink hover:text-white shadow-[4px_4px_0px_0px_" +
                      item.shadow +
                      "] hover:shadow-[2px_2px_0px_0px_" +
                      item.shadow +
                      "]",
                    "animate-in slide-in-from-left-5 fade-in"
                  )}
                  style={{
                    animationDelay: `${(index + 1) * 100}ms`,
                    animationDuration: "400ms",
                    animationFillMode: "both",
                  }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
