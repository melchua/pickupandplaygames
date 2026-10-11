import { Container } from "@/components/site/container";

// Quotes are copied word for word from the Kickstarter campaign page.
const featured = [
  {
    quote: "The rules are so simple you can teach them in about 60 seconds.",
    source: "Sagun + Sokiva, Rollpasa",
  },
  {
    quote:
      "If you enjoy the energy of games like Uno or Exploding Kittens, this will feel right at home and could easily become a family favourite.",
    source: "Jim Gamer, What Board Game",
  },
];

const reviewers = [
  {
    quote: "The clever cards create lots of humorous and unexpected moments.",
    source: "Stephen + Matteo, Board Game Bite",
  },
  {
    quote:
      "It kept my whole family involved from start to finish, with plenty of sudden turnarounds.",
    source: "The Howling Meeple",
  },
  {
    quote:
      "We kept saying the same thing over and over while we played: ‘This game is so much fun!’",
    source: "Nicole, @the.cozygamer",
  },
];

const playtesters = [
  {
    quote:
      "Such a fun crazy game. No waiting for your turn just pure fun and Madness",
    source: "Paige C., playtester",
  },
  {
    quote:
      "I laughed all the way throughout the games I played and I keep telling my friends about it. One of the most entertaining board games yet.",
    source: "Eric S., playtester",
  },
  {
    quote:
      "This game nails it in terms of being both easy to learn and chaotic enough to keep things interesting each time you play!",
    source: "Laine A., playtester",
  },
];

function QuoteTile({
  quote,
  source,
  sourceClassName,
}: {
  quote: string;
  source: string;
  sourceClassName: string;
}) {
  return (
    <figure className="flex flex-col justify-between gap-[18px] rounded-[20px] bg-tile-dark px-7 py-[26px]">
      <blockquote className="text-lg leading-normal">“{quote}”</blockquote>
      <figcaption className={`text-[15px] font-semibold ${sourceClassName}`}>
        {source}
      </figcaption>
    </figure>
  );
}

export function Reviews() {
  return (
    <section
      id="reviews"
      className="bg-ink py-[clamp(56px,7vw,96px)] text-white"
    >
      <Container className="flex flex-col gap-[clamp(28px,4vw,44px)]">
        <div className="flex max-w-[720px] flex-col gap-3">
          <h2 className="font-display text-[clamp(40px,4.6vw,64px)] leading-none font-black text-balance">
            What players say.
          </h2>
          <p className="text-[19px] text-line">
            From reviewers who have played it, and from playtesters&apos;
            reviews on our Facebook page.
          </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(380px,100%),1fr))] gap-5">
          {featured.map((item) => (
            <figure
              key={item.source}
              className="flex flex-col justify-between gap-6 rounded-3xl bg-banana p-[clamp(24px,3vw,36px)] text-ink"
            >
              <blockquote className="font-display text-[clamp(26px,2.6vw,34px)] leading-[1.12] text-balance">
                “{item.quote}”
              </blockquote>
              <figcaption className="text-[15px] font-semibold">
                {item.source}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-5">
          {reviewers.map((item) => (
            <QuoteTile
              key={item.source}
              {...item}
              sourceClassName="text-banana"
            />
          ))}
          {playtesters.map((item) => (
            <QuoteTile
              key={item.source}
              {...item}
              sourceClassName="text-footer-text"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
