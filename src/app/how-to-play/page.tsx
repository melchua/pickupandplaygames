import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/site/container";
import { CtaBanner } from "@/components/site/cta-banner";
import { GAME_FACTS, RULEBOOK_URL } from "@/lib/site";
import { cn } from "@/lib/utils";
import { VideoTile } from "./video-tile";

export const metadata: Metadata = {
  title: "How to Play Bananarchy",
  description:
    "Learn Bananarchy in two minutes: watch the video, or read the setup, turn, scoring and FAQ from the official rules.",
};

// Rules text follows the First Edition rulebook.
const setupSteps = [
  "Sit in a circle. Separate the Banana and Monkey Cards. Set aside the Active Player Card.",
  "Deal each player a one point value “Single Banana” card, face up in front of them.",
  "Shuffle the remaining Banana Cards and place them with the Rotten side facing up. This is the Banana pile. Leave space for a discard pile. When drawing or discarding Banana Cards, flip them face up (rotten side down).",
  "Shuffle the Monkey Cards and deal five to each player, face down.",
  "Place all remaining Monkey Cards face down within easy reach of all players. This is the Monkey pile. Leave space for a discard pile.",
  "The Active Player Card goes to the player who last ate a real banana. They start first. All players pick up and look at their Monkey Cards.",
];

const endTurnSteps = [
  "The Active Player may end their turn at any time by clearly announcing, “I am ending my turn.”",
  "The Active Player refills their hand back up to five cards total and passes the Active Player Card clockwise to the next player. It is now their turn.",
];

const scoringSteps = [
  "Total the points on your Banana Cards.",
  "Add points from Scoring Cards in hand.",
  "Subtract points from “Rotten Banana” cards (unless you have the Bake Banana Bread card).",
];

const specialActions = [
  {
    title: "Stash a Banana",
    intro:
      "Save your hard-earned Banana Cards. Stashed Bananas are safe from other players' mischief: they cannot be stolen, smashed and so on.",
    steps: [
      "Discard your entire hand.",
      "Choose 1 of your Banana Cards to stash (turn it horizontally to indicate a stash).",
      "Refill your hand back up to five Monkey Cards and pass the Active Player Card, thus ending your turn.",
    ],
  },
  {
    title: "Discard & Refill",
    intro: "Your hand is not great, mistakes were made… let's reset!",
    steps: [
      "Select up to five Monkey Cards from your hand and place them in the discard pile.",
      "Refill your hand back to five Monkey Cards total.",
      "Pass the Active Player Card to the next player.",
    ],
  },
];

const cardTypes = [
  { name: "Action Cards", dot: "bg-card-action", text: "Played during your turn." },
  { name: "Anytime Cards", dot: "bg-card-anytime", text: "Played during anyone's turn." },
  { name: "Reaction Cards", dot: "bg-card-reaction", text: "Played in reaction to other Monkey Cards." },
  { name: "Scoring Cards", dot: "bg-card-scoring", text: "Adds to your score at the end of the game." },
];

const faqs = [
  {
    question: "What happens when the Monkey pile runs out?",
    answer:
      "Don't sweat bananas, we got you. Just reshuffle the cards in the discard pile for a brand new Monkey pile.",
  },
  {
    question: "When am I allowed to play Anytime and Reaction Cards?",
    answer:
      "Any time after the Active Player has drawn their first card, except when the Active Player is Discarding & Refilling or Stashing a Banana.",
  },
  {
    question: "Can I shield myself?",
    answer:
      "No, you silly monkey. Sharing is caring, use your shield to defend a friend. What are we? Animals?",
  },
  {
    question: "What if there's a tie after scoring? What then, smarty-pants?",
    answer:
      "In a tie, the player with the most Banana Cards wins. If the game is still tied, the player with the fewest Rotten Banana cards wins. Still tied? Too bad. Be more greedy next time.",
  },
  {
    question: "What happens if multiple cards are played?",
    answer:
      "Action and Anytime Cards are resolved in turn order, starting with the Active Player. Reaction Cards interrupt and cancel the Monkey Card currently being resolved.",
  },
  {
    question: "How much time do I have to react to a played Monkey Card?",
    answer:
      "Monkeys are vocal creatures. All players must read their Monkey Cards aloud at a normal pace before performing the actions. This gives other players time to respond.",
  },
];

const sectionHeading =
  "font-display text-[clamp(36px,4vw,52px)] leading-none font-black";
const sectionRow = "flex flex-wrap gap-x-[clamp(28px,4vw,64px)] gap-y-6";
const sectionPadding = "py-[clamp(48px,6vw,88px)]";

function NumberedSteps({
  steps,
  className,
}: {
  steps: React.ReactNode[];
  className?: string;
}) {
  return (
    <ol className={cn("flex flex-col gap-4", className)}>
      {steps.map((step, index) => (
        <li key={index} className="flex gap-3.5">
          <span
            aria-hidden="true"
            className="flex size-[30px] flex-none items-center justify-center rounded-full bg-ink text-[15px] font-semibold text-white"
          >
            {index + 1}
          </span>
          <span>{step}</span>
        </li>
      ))}
    </ol>
  );
}

export default function HowToPlayPage() {
  const playSteps: React.ReactNode[] = [
    "The Active Player starts their turn by drawing a Monkey Card.",
    "The Active Player can choose to play up to 1 Action Card per turn, and as many Anytime Cards as they want. To play a card, the player reads it out loud and places it face up on the Monkey discard pile.",
    <>
      During the Active Player&apos;s turn, other players may play an Anytime
      Card, which can be played, you got it, anytime. Players may also play a
      Reaction Card to interrupt a Monkey Card that was just played. Multiple
      cards played at once?{" "}
      <a href="#faq" className="font-semibold underline underline-offset-4">
        See the questions below
      </a>
      .
    </>,
  ];

  return (
    <>
      {/* Intro: video and rulebook */}
      <section className="pt-[clamp(36px,5vw,72px)] pb-[clamp(40px,5vw,72px)]">
        <Container className="flex flex-col gap-[clamp(28px,4vw,44px)]">
          <div className="flex max-w-[760px] flex-col gap-3.5">
            <p className="text-sm font-semibold tracking-[0.02em] text-muted">
              {GAME_FACTS}
            </p>
            <h1 className="font-display text-[clamp(56px,6.6vw,96px)] leading-[0.92] font-black uppercase">
              How to play
            </h1>
            <p className="font-display text-[clamp(24px,2.2vw,30px)] leading-[1.15]">
              Bananarchy is simple. The easiest way to learn is by playing.
            </p>
          </div>

          <div className="flex flex-wrap gap-5">
            <VideoTile />
            <div className="flex min-w-0 flex-[1_1_300px] flex-col justify-between gap-6 rounded-[28px] bg-paper p-7">
              <div className="flex flex-col gap-2">
                <h2 className="font-display text-[28px] leading-[1.1]">
                  Official rules
                </h2>
                <p className="text-body">
                  The complete rulebook, with setup, gameplay and card
                  descriptions, for offline reference.
                </p>
              </div>
              <div className="flex flex-col items-start gap-2.5">
                <a
                  href={RULEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-[14px] border-2 border-ink px-6 py-[13px] font-semibold transition-colors hover:bg-ink hover:text-white"
                >
                  Download the rulebook
                </a>
                <span className="text-sm text-muted">PDF · First Edition</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* The goal */}
      <section className={`bg-paper ${sectionPadding}`}>
        <Container className={sectionRow}>
          <div className="min-w-0 flex-[1_1_240px]">
            <h2 className={sectionHeading}>The goal</h2>
          </div>
          <div className="flex max-w-[760px] min-w-0 flex-[3_1_520px] flex-col gap-3.5">
            <p className="text-[21px] leading-[1.45]">
              Hoard the most bananas by stealing, picking, plucking and
              bamboozling. The game ends when the last Banana Card is drawn.
            </p>
            <p className="text-body">
              One round lasts about 30 minutes. Two rounds suggested.
            </p>
          </div>
        </Container>
      </section>

      {/* Set up */}
      <section className={sectionPadding}>
        <Container className={sectionRow}>
          <div className="min-w-0 flex-[1_1_240px]">
            <h2 className={sectionHeading}>Set up</h2>
          </div>
          <div className="flex min-w-0 flex-[3_1_520px] flex-wrap items-start gap-x-[clamp(28px,4vw,48px)] gap-y-8">
            <NumberedSteps
              steps={setupSteps}
              className="min-w-0 flex-[1_1_340px]"
            />
            <div className="flex max-w-[460px] min-w-0 flex-[1_1_320px] flex-col gap-5">
              <figure className="flex flex-col gap-2.5">
                <Image
                  src="/rules-table-setup.png"
                  alt="Table layout: the Monkey pile and Banana pile sit in the centre with a discard space beside each, and every player has five Monkey Cards and one Single Banana card"
                  width={1000}
                  height={1036}
                  sizes="(min-width: 1024px) 460px, 90vw"
                  className="h-auto w-full rounded-[20px]"
                />
                <figcaption className="text-[15px] text-muted">
                  Here&apos;s what the table for a 4 player game might look
                  like.
                </figcaption>
              </figure>
              <div className="flex flex-col gap-1.5 rounded-[20px] bg-paper px-6 py-[22px]">
                <h3 className="font-semibold">Alternate step 6</h3>
                <p className="text-body">
                  Players pick up their hands at the same time. The first to
                  play an Anytime Card becomes the Active Player. Complete the
                  action on the card, then begin the first turn as normal.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* On your turn */}
      <section className={`bg-paper ${sectionPadding}`}>
        <Container className={sectionRow}>
          <div className="min-w-0 flex-[1_1_240px]">
            <h2 className={sectionHeading}>On your turn</h2>
          </div>
          <div className="flex min-w-0 flex-[3_1_520px] flex-col gap-5">
            <div className="grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] gap-5">
              <div className="flex flex-col gap-4 rounded-[20px] bg-white p-7">
                <h3 className="font-display text-[28px] leading-[1.1]">
                  To play
                </h3>
                <NumberedSteps steps={playSteps} className="gap-3.5" />
              </div>
              <div className="flex flex-col gap-4 rounded-[20px] bg-white p-7">
                <h3 className="font-display text-[28px] leading-[1.1]">
                  To end your turn
                </h3>
                <NumberedSteps steps={endTurnSteps} className="gap-3.5" />
              </div>
            </div>

            <div className="flex flex-col gap-[22px] rounded-[20px] bg-ink p-[clamp(24px,3vw,36px)] text-white">
              <div className="flex max-w-[680px] flex-col gap-2">
                <h3 className="font-display text-[28px] leading-[1.1] text-banana">
                  Special actions
                </h3>
                <p className="text-line">
                  The Active Player may choose one of the following special
                  actions before playing their turn. They do not draw or play
                  any Monkey Cards. Other players cannot play cards during a
                  special action.
                </p>
              </div>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-5">
                {specialActions.map((action) => (
                  <div
                    key={action.title}
                    className="flex flex-col gap-3 rounded-2xl bg-white p-6 text-ink"
                  >
                    <h4 className="text-[19px] font-semibold">
                      {action.title}
                    </h4>
                    <p className="text-body">{action.intro}</p>
                    <ol className="flex list-decimal flex-col gap-1.5 pl-[22px]">
                      {action.steps.map((step) => (
                        <li key={step}>{step}</li>
                      ))}
                    </ol>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Winning and scoring */}
      <section className={sectionPadding}>
        <Container className={sectionRow}>
          <div className="min-w-0 flex-[1_1_240px]">
            <h2 className={sectionHeading}>Winning and scoring</h2>
          </div>
          <div className="flex min-w-0 flex-[3_1_520px] flex-col gap-7">
            <p className="max-w-[760px] text-[21px] leading-[1.45]">
              The game ends immediately when the last Banana Card is drawn from
              the Banana pile. Monkeys don&apos;t work for peanuts, you know?
              Count up your banana points. The player with the most banana
              points wins and is crowned Monkey King. All hail the mighty
              leader!
            </p>
            <div className="flex flex-wrap items-center gap-x-[clamp(28px,4vw,48px)] gap-y-7">
              <NumberedSteps
                steps={scoringSteps}
                className="min-w-0 flex-[1_1_300px]"
              />
              <Image
                src="/rules-banana-values.png"
                alt="The five Banana Cards: Rotten is worth minus 1, Unripe 0, Single 1, Double 2 and Triple 3"
                width={1100}
                height={337}
                sizes="(min-width: 1024px) 620px, 90vw"
                className="h-auto w-full max-w-[620px] min-w-0 flex-[1.4_1_380px]"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Card types */}
      <section className={`bg-paper ${sectionPadding}`}>
        <Container className={sectionRow}>
          <div className="min-w-0 flex-[1_1_240px]">
            <h2 className={sectionHeading}>The four Monkey Cards</h2>
          </div>
          <dl className="grid min-w-0 flex-[3_1_520px] grid-cols-[repeat(auto-fit,minmax(min(260px,100%),1fr))] gap-4">
            {cardTypes.map((type) => (
              <div
                key={type.name}
                className="flex flex-col gap-1.5 rounded-2xl bg-white px-6 py-[22px]"
              >
                <dt className="flex items-center gap-2 font-semibold">
                  <span
                    aria-hidden="true"
                    className={`size-3 rounded-full ${type.dot}`}
                  />
                  {type.name}
                </dt>
                <dd className="text-body">{type.text}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* FAQ */}
      <section id="faq" className={sectionPadding}>
        <Container className={sectionRow}>
          <div className="min-w-0 flex-[1_1_240px]">
            <h2 className={sectionHeading}>Questions monkeys ask</h2>
          </div>
          <div className="flex min-w-0 flex-[3_1_520px] flex-col">
            {faqs.map((faq, index) => (
              <div
                key={faq.question}
                className={`flex flex-col gap-2 py-[22px] ${
                  index === 0
                    ? "border-t-2 border-ink"
                    : "border-t border-line-strong"
                }`}
              >
                <h3 className="text-[19px] font-semibold">{faq.question}</h3>
                <p className="max-w-[720px] text-body">{faq.answer}</p>
              </div>
            ))}
            <div className="mt-4 flex flex-col gap-2 rounded-[20px] bg-paper px-7 py-6">
              <h3 className="font-display text-[28px] leading-[1.1]">
                Team Play variant
              </h3>
              <p className="max-w-[720px] text-body">
                Divide players into teams and work cooperatively to collect the
                most points. Players should not sit directly beside teammates.
                Setup, play and score the same as regular play. Scoring Cards
                are scored for the individual and may not be shared with a
                teammate. The team with the most points wins.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <CtaBanner heading="Ready to go bananas?" className="pt-0" />
    </>
  );
}
