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

// The YouTube how-to-play video. Date and length come from the YouTube page.
export const HOW_TO_PLAY_VIDEO = {
  id: "O-Nq7IjRo70",
  title: "How to play Bananarchy (in 60 seconds, sort of)",
  description:
    "Learn the rules of Bananarchy, the party card game where you don't have to wait your turn, in about a minute.",
  uploadDate: "2026-03-30T10:00:31-07:00",
  durationSeconds: 44,
};
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

// The four Monkey Card types, in the colours from the style guide, each with
// one example card from the deck.
export const CARD_TYPES = [
  {
    name: "Action",
    dot: "bg-card-action",
    when: "Played during your turn, one per turn.",
    image: "/card-action-banana-republic.png",
    alt: "Banana Republic card, showing a monkey general in uniform",
    example:
      "Banana Republic: swap all your Bananas with the player who has the most unstashed Banana Cards.",
  },
  {
    name: "Reaction",
    dot: "bg-card-reaction",
    when: "Played in reaction to other Monkey Cards.",
    image: "/card_reaction_denied.jpg",
    alt: "Denied! card, showing a monkey holding up a giant hand",
    example: "Denied!: cancel a Monkey Card that was just played.",
  },
  {
    name: "Anytime",
    dot: "bg-card-anytime",
    when: "Played during anyone's turn.",
    image: "/card_anytime_smash.jpg",
    alt: "Smash card, showing a monkey slamming down on a banana",
    example: "Smash: flip over any one Banana Card to the rotten side.",
  },
  {
    name: "Scoring",
    dot: "bg-card-scoring",
    when: "Adds to your score at the end of the game.",
    image: "/card-scoring-bake-banana-bread.png",
    alt: "Bake Banana Bread card, showing a monkey chef with a fresh loaf",
    example: "Bake Banana Bread: count all your rotten Bananas as 1 point.",
  },
] as const;

// Banana Card values, lowest to highest.
export const BANANA_VALUES = "Rotten −1 · Unripe 0 · Single 1 · Double 2 · Triple 3";
