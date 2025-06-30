"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Games", href: "/games" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-banana bg-white/95 dark:bg-dark/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 dark:supports-[backdrop-filter]:bg-dark/80 shadow-2xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
              aria-label="Pickup & Play Games home"
            >
              <div className="h-8 w-8 rounded-full bg-banana border-2 border-ink dark:border-white flex items-center justify-center shadow-lg">
                <span className="text-black font-display font-black text-sm">
                  P&P
                </span>
              </div>
              <span className="font-display font-bold text-lg text-ink dark:text-white hidden sm:block">
                Pickup & Play Games
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center space-x-8"
            aria-label="Main navigation"
          >
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-ink dark:text-white hover:text-hot-pink dark:hover:text-hot-pink font-body font-bold transition-colors duration-200 relative group uppercase tracking-wide"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-hot-pink transition-all duration-200 group-hover:w-full shadow-lg" />
              </Link>
            ))}
          </nav>

          {/* Desktop Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-2">
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
                aria-label="Toggle navigation menu"
                className="h-10 w-10 p-0 text-ink dark:text-white hover:text-hot-pink"
              >
                <svg
                  className={cn("h-6 w-6 transition-transform duration-200", {
                    "rotate-90": mobileMenuOpen,
                  })}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
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

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden border-t-2 border-banana bg-white/95 dark:bg-dark/95 backdrop-blur"
          >
            <nav
              className="px-2 pt-2 pb-3 space-y-1"
              aria-label="Mobile navigation"
            >
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-ink dark:text-white hover:text-hot-pink dark:hover:text-hot-pink hover:bg-banana/10 dark:hover:bg-banana/10 block px-3 py-2 rounded-md text-base font-bold transition-colors duration-200 uppercase tracking-wide"
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
