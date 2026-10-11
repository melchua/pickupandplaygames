import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/site/container";
import { PreorderButton } from "@/components/site/preorder-button";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the troop behind Bananarchy: the people at Pick Up & Play Games who make fun, accessible games that bring people together.",
};

const teamMembers = [
  {
    name: "Nathan Lundgaard",
    title: "Co-Founder & Lead Game Designer",
    imageUrl: "/team-nathan.jpeg",
    bio: [
      "Nathan is an avid supporter of all things nerdy: board and card games, D&D, Warhammer, BattleTech, anime and much more. He has been playing games of all sorts since he was a little kid, everything from Crib, Trouble and Risk to Chess. As he grew, Nathan found love in strategy games such as Age of Empires II and Company of Heroes, and board versions such as Axis & Allies and Diplomacy. He still plays board games regularly and is ready to share everything he has learned in his latest game, Bananarchy.",
      "Outside the games world Nathan enjoys reading, writing, long walks and dancing. He is a dance instructor with over 10 years of experience teaching styles including Salsa, Bachata and Kizomba.",
    ],
  },
  {
    name: "Robert Henry",
    title: "Game Designer",
    imageUrl: "/team-robert.jpeg",
    bio: [
      "Robert is a child of the 80s and remembers all those great classic games like Monopoly, Stratego, Risk and Sorry! (and has great respect for anyone who can extract the rubber band in Operation).",
      "Nowadays games truly are something special, with really innovative stuff continuing to show up on a regular basis. Game design is a chance not only to create something new and fun, but to contribute something to this increasingly divided world that can bring people together with joy and laughter in a meaningful way.",
    ],
  },
  {
    name: "Mel Chua",
    title: "Director of Business Development & Technology",
    imageUrl: "/team-mel.jpeg",
    bio: [
      "Mel is a versatile technologist and business strategist with over 15 years of experience across the digital landscape. A true jack-of-all-trades, he has worn many hats, from product development and UX design to art direction and community growth.",
      "He has led initiatives in social media marketing, email funnel automation and KOL-driven community building. Whether it's hiring a team, running a campaign or shipping a product, Mel connects creative vision with technical execution.",
    ],
  },
];

// From the rulebook credits.
const moreTroop = [
  { name: "Joe Main", role: "Game Designer" },
  { name: "Rachel Boyes", role: "Artwork" },
  { name: "Rushan Sanjana", role: "Graphic Designer" },
];

const outlineButton =
  "inline-block rounded-[14px] border-2 border-ink font-semibold transition-colors hover:bg-ink hover:text-white";

export default function AboutPage() {
  return (
    <>
      <section className="pt-[clamp(36px,5vw,72px)] pb-[clamp(48px,6vw,88px)]">
        <Container className="flex flex-col gap-[clamp(32px,4vw,56px)]">
          <div className="flex max-w-[760px] flex-col gap-3.5">
            <h1 className="font-display text-[clamp(56px,6.6vw,96px)] leading-[0.92] font-black uppercase">
              Meet the troop
            </h1>
            <p className="font-display text-[clamp(24px,2.2vw,30px)] leading-[1.15] text-balance">
              We make fun, accessible games that bring people together. Easy to
              learn and impossible to put down.
            </p>
          </div>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] gap-5">
            {teamMembers.map((member) => (
              <article
                key={member.name}
                className="flex flex-col gap-4 rounded-3xl bg-paper p-7"
              >
                <Image
                  src={member.imageUrl}
                  alt={`Profile picture of ${member.name}`}
                  width={128}
                  height={128}
                  className="size-32 rounded-3xl object-cover"
                />
                <div className="flex flex-col gap-1">
                  <h2 className="font-display text-[32px] leading-[1.05]">
                    {member.name}
                  </h2>
                  <p className="text-[15px] font-semibold text-muted">
                    {member.title}
                  </p>
                </div>
                {member.bio.map((paragraph) => (
                  <p key={paragraph} className="text-base text-body">
                    {paragraph}
                  </p>
                ))}
              </article>
            ))}
          </div>

          <div className="flex flex-wrap gap-x-[clamp(28px,4vw,64px)] gap-y-4 border-t-2 border-ink pt-[22px]">
            <h2 className="min-w-0 flex-[1_1_200px] font-display text-[28px] leading-[1.1]">
              Also in the troop
            </h2>
            <ul className="grid min-w-0 flex-[3_1_520px] grid-cols-[repeat(auto-fit,minmax(min(200px,100%),1fr))] gap-x-6 gap-y-4">
              {moreTroop.map((person) => (
                <li key={person.name} className="flex flex-col">
                  <span className="font-semibold">{person.name}</span>
                  <span className="text-base text-muted">{person.role}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-paper py-[clamp(48px,6vw,88px)]">
        <Container className="flex flex-wrap items-center gap-[clamp(28px,4vw,64px)]">
          <Image
            src="/photo-box-deck.jpg"
            alt="The open Bananarchy box standing next to a stacked deck of Monkey Cards"
            width={1500}
            height={1071}
            sizes="(min-width: 1024px) 640px, 90vw"
            className="h-auto w-full min-w-0 flex-[1_1_440px] rounded-3xl"
          />
          <div className="flex min-w-0 flex-[1_1_340px] flex-col items-start gap-4">
            <p className="text-sm font-semibold tracking-[0.02em] text-muted">
              Our first game
            </p>
            <h2 className="font-display text-[clamp(40px,4.6vw,64px)] leading-none font-black">
              Bananarchy
            </h2>
            <p className="text-[19px] text-body">
              The turn-based card game where you don&apos;t have to wait your
              turn. Funded 520% on Kickstarter by 1,030+ backers.
            </p>
            <div className="mt-1.5 flex flex-wrap gap-3">
              <PreorderButton size="md" />
              <Link
                href="/how-to-play"
                className={`${outlineButton} px-6 py-[13px]`}
              >
                How to play
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-[clamp(48px,6vw,88px)]">
        <Container className="flex flex-wrap items-center justify-between gap-x-12 gap-y-5">
          <div className="flex min-w-0 flex-[1_1_420px] flex-col gap-2">
            <h2 className="font-display text-[clamp(32px,3.6vw,48px)] leading-none font-black">
              Want to playtest, collaborate or stock our games?
            </h2>
            <p className="text-body">
              We&apos;d love to hear from you. We typically reply within 24 to
              48 hours.
            </p>
          </div>
          <Link href="/contact" className={`${outlineButton} px-7 py-[15px]`}>
            Get in touch
          </Link>
        </Container>
      </section>
    </>
  );
}
