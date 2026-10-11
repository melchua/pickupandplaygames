import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/site/container";

const cards = [
  {
    type: "Action",
    dot: "bg-card-action",
    image: "/card-action-banana-republic.png",
    alt: "Banana Republic card, showing a monkey general in uniform",
    when: "Played during your turn, one per turn.",
    example:
      "Banana Republic: swap all your Bananas with the player who has the most unstashed Banana Cards.",
  },
  {
    type: "Reaction",
    dot: "bg-card-reaction",
    image: "/card_reaction_denied.jpg",
    alt: "Denied! card, showing a monkey holding up a giant hand",
    when: "Played in reaction to other Monkey Cards.",
    example: "Denied!: cancel a Monkey Card that was just played.",
  },
  {
    type: "Anytime",
    dot: "bg-card-anytime",
    image: "/card_anytime_smash.jpg",
    alt: "Smash card, showing a monkey slamming down on a banana",
    when: "Played during anyone's turn.",
    example: "Smash: flip over any one Banana Card to the rotten side.",
  },
  {
    type: "Scoring",
    dot: "bg-card-scoring",
    image: "/card-scoring-bake-banana-bread.png",
    alt: "Bake Banana Bread card, showing a monkey chef with a fresh loaf",
    when: "Adds to your score at the end of the game.",
    example: "Bake Banana Bread: count all your rotten Bananas as 1 point.",
  },
];

// "Four kinds of Monkey Card": one example card per type.
export function FeaturedCards() {
  return (
    <section id="cards" className="py-[clamp(56px,7vw,96px)]">
      <Container className="flex flex-col gap-[clamp(28px,4vw,48px)]">
        <div className="flex max-w-[720px] flex-col gap-3">
          <h2 className="font-display text-[clamp(40px,4.6vw,64px)] leading-none font-black text-balance">
            Four kinds of Monkey Card.
          </h2>
          <p className="text-[19px] text-body">
            Every card is designed to create memorable moments and strategic
            chaos. The colour of the border tells you when you can play it.
          </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(230px,100%),1fr))] gap-x-7 gap-y-9">
          {cards.map((card) => (
            <div key={card.type} className="flex flex-col items-start gap-3.5">
              <Image
                src={card.image}
                alt={card.alt}
                width={229}
                height={320}
                className="h-auto w-[229px] max-w-full rounded-[14px] shadow-[0_10px_28px_rgba(17,17,17,0.16)]"
              />
              <p className="mt-1.5 flex items-center gap-2 text-sm font-semibold">
                <span
                  aria-hidden="true"
                  className={`size-2.5 rounded-full ${card.dot}`}
                />
                {card.type}
              </p>
              <p className="font-semibold">{card.when}</p>
              <p className="text-base text-muted">{card.example}</p>
            </div>
          ))}
        </div>

        <div>
          <Link
            href="/how-to-play"
            className="inline-block rounded-[14px] border-2 border-ink px-6 py-[13px] font-semibold transition-colors hover:bg-ink hover:text-white"
          >
            Learn how to play
          </Link>
        </div>
      </Container>
    </section>
  );
}
