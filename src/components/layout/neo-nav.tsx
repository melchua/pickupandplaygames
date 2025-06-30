"use client";

import Link from "next/link";
import { useState } from "react";

export function NeoNav() {
  const [activeItem, setActiveItem] = useState("HOME");

  const navItems = [
    { label: "HOME", href: "/" },
    { label: "PRODUCTION", href: "/production" },
    { label: "SHOP", href: "/shop" },
    { label: "CART", href: "/cart" },
  ];

  return (
    <nav className="bg-white border-b-8 border-ink py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo - Neobrutalism style */}
          <div className="transform -rotate-1">
            <div className="bg-banana text-ink px-6 py-3 border-4 border-ink shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <span className="font-black text-xl uppercase tracking-wider">
                🍺 LazyLab BrewCo
              </span>
            </div>
          </div>

          {/* Navigation items */}
          <div className="flex gap-4">
            {navItems.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setActiveItem(item.label)}
                className={`px-6 py-3 border-4 border-ink font-bold text-sm uppercase tracking-wider cursor-pointer transform hover:translate-y-1 transition-all duration-200 ${
                  activeItem === item.label
                    ? "bg-hot-pink text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                    : "bg-white text-ink shadow-[4px_4px_0px_0px_rgba(244,91,105,1)] hover:bg-banana hover:shadow-[2px_2px_0px_0px_rgba(244,91,105,1)]"
                }`}
                style={{
                  transform: `rotate(${
                    (index % 2 === 0 ? 1 : -1) * (index + 1)
                  }deg)`,
                  borderRadius: "25px",
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="transform rotate-1">
            <div className="bg-ink text-white px-6 py-3 border-4 border-hot-pink shadow-[4px_4px_0px_0px_rgba(255,232,93,1)] cursor-pointer transform hover:translate-y-1 transition-all duration-200 hover:shadow-[2px_2px_0px_0px_rgba(255,232,93,1)]">
              <span className="font-black text-sm uppercase tracking-wider">
                🛒 Order Now
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
