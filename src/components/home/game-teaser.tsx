import Image from "next/image";
import { Container } from "@/components/site/container";

const points = [
  {
    title: "Jump in any time",
    text: "Anytime cards can be played on anyone's turn. Reaction cards interrupt a card that has just been played.",
  },
  {
    title: "Stash it or lose it",
    text: "Bananas in front of you are fair game. Stash one and it is safe from stealing, smashing and every other kind of mischief.",
  },
  {
    title: "Hoard the most bananas",
    text: "The game ends the moment the last Banana Card is drawn. The most banana points wins, and the winner is crowned Monkey King.",
  },
];

// "Nobody waits their turn": how the game plays, in three points.
export function GameTeaser() {
  return (
    <section className="bg-paper py-[clamp(56px,7vw,96px)]">
      <Container className="flex flex-col gap-[clamp(28px,4vw,48px)]">
        <div className="flex max-w-[720px] flex-col gap-3">
          <h2 className="font-display text-[clamp(40px,4.6vw,64px)] leading-none font-black text-balance">
            Nobody waits their turn.
          </h2>
          <p className="text-[19px] text-body">
            Bananarchy is a state where banana is king and mischief abounds.
            Here is why the table stays loud.
          </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(280px,100%),1fr))] gap-5">
          {points.map((point) => (
            <div
              key={point.title}
              className="flex flex-col gap-2.5 rounded-[20px] bg-white p-7"
            >
              <h3 className="font-display text-[28px] leading-[1.1]">
                {point.title}
              </h3>
              <p className="text-body">{point.text}</p>
            </div>
          ))}
        </div>

        <figure className="flex flex-wrap items-center gap-x-12 gap-y-5 rounded-[20px] bg-white p-[clamp(20px,3vw,36px)]">
          <Image
            src="/rules-banana-values.png"
            alt="The five Banana Cards: Rotten is worth minus 1, Unripe 0, Single 1, Double 2 and Triple 3"
            width={1100}
            height={337}
            sizes="(min-width: 1024px) 680px, 90vw"
            className="h-auto w-full max-w-[680px] min-w-0 flex-[1_1_420px]"
          />
          <figcaption className="min-w-0 flex-[1_1_260px] text-body">
            Banana Cards are worth anything from 3 points down to minus 1. Watch
            out for the rotten ones.
          </figcaption>
        </figure>
      </Container>
    </section>
  );
}
