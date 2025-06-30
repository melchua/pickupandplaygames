import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Brand-specific utility functions
export const brandColors = {
  banana: "#FFE85D",
  ink: "#000000",
  hotPink: "#F45B69",
} as const;

// Typography utilities based on PRD requirements
export const typography = {
  display: "font-display font-bold",
  heading: "font-body font-semibold",
  body: "font-body font-normal",
} as const;

// Animation utilities for playful interactions
export const animations = {
  wiggle: "animate-wiggle",
  bounceGentle: "animate-bounce-gentle",
  pulseShow: "animate-pulse-slow",
} as const;

// Responsive breakpoints matching PRD
export const breakpoints = {
  xs: "375px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1440px",
} as const;

// Button variants for consistent styling
export const buttonVariants = {
  primary: "bg-banana text-ink hover:bg-banana/90 border-2 border-ink",
  secondary:
    "bg-hot-pink text-white hover:bg-hot-pink/90 border-2 border-hot-pink",
  outline: "border-2 border-ink text-ink hover:bg-ink hover:text-white",
  ghost: "text-ink hover:bg-banana/20",
} as const;

// Card styles for consistent component design
export const cardVariants = {
  default: "bg-white border-2 border-ink rounded-card shadow-lg",
  game: "bg-white border-2 border-ink rounded-card shadow-lg hover:shadow-xl transition-shadow",
  hero: "bg-banana border-2 border-ink rounded-card shadow-xl",
} as const;
