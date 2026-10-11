// Site-wide facts that appear on more than one page.
// Change them here and every page picks them up.

export const SITE_NAME = "Pick Up & Play Games";

export const KICKSTARTER_URL =
  "https://www.kickstarter.com/projects/pickupandplaygames/bananarchy";

// Every "Pre-order" button goes here.
export const PREORDER_URL = `${KICKSTARTER_URL}/rewards`;

export const PRICE_FROM = "From CA$27";
export const DELIVERY_ESTIMATE = "estimated delivery May 2027";

export const GAME_FACTS = "3–8 players · 20–40 min · Ages 8+";
export const FUNDING_PROOF = "520% funded on Kickstarter by 1,030+ backers";

export const HOW_TO_PLAY_VIDEO_ID = "O-Nq7IjRo70";
export const RULEBOOK_URL = "/rulebook.pdf";

export const CONTACT_EMAIL = "hello@pickupandplaygames.com";

export const SOCIAL_LINKS = [
  { name: "Instagram", href: "https://www.instagram.com/bananarchygame" },
  { name: "Facebook", href: "https://www.facebook.com/bananarchygame" },
  { name: "Kickstarter", href: KICKSTARTER_URL },
];

export const NAVIGATION = [
  { name: "Bananarchy", href: "/" },
  { name: "How to Play", href: "/how-to-play" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

// The four Monkey Card types, in the colours from the style guide.
export const CARD_TYPES = [
  { name: "Action", dot: "bg-card-action" },
  { name: "Reaction", dot: "bg-card-reaction" },
  { name: "Anytime", dot: "bg-card-anytime" },
  { name: "Scoring", dot: "bg-card-scoring" },
] as const;
