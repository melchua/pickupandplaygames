import Image from "next/image";
import { Container } from "@/components/site/container";
import { PreorderButton } from "@/components/site/preorder-button";
import {
  CARD_TYPES,
  DELIVERY_ESTIMATE,
  FUNDING_PROOF,
  GAME_FACTS,
  PRICE_FROM,
} from "@/lib/site";

export function HeroSection() {
  return (
    <section id="buy" className="pt-[clamp(20px,3vw,36px)] pb-[clamp(56px,7vw,96px)]">
      <Container className="flex flex-wrap gap-[clamp(28px,4vw,56px)]">
        {/* Product shot */}
        <div className="bg-rings relative flex min-h-[clamp(340px,44vw,620px)] min-w-0 flex-[1_1_520px] items-center justify-center overflow-hidden rounded-[28px] px-6 pt-16 pb-7 [--rings-y:58%]">
          <Image
            src="/bananarchy-box-duo.webp"
            alt="The Bananarchy tuck box, front and back, with a Monkey Card lying in front"
            width={1600}
            height={1288}
            priority
            sizes="(min-width: 1024px) 640px, 90vw"
            className="h-auto w-full max-w-[640px]"
          />
          <div className="absolute top-6 left-6 rounded-full bg-ink px-[15px] py-[9px] text-sm leading-tight font-semibold text-banana">
            A Kickstarter Project We Love
          </div>
        </div>

        {/* Buy box */}
        <div className="flex max-w-[540px] min-w-0 flex-[1_1_360px] flex-col justify-center gap-[18px]">
          <p className="text-sm font-semibold tracking-[0.02em] text-muted">
            Party card game · {GAME_FACTS}
          </p>
          <h1 className="font-display text-[clamp(60px,6.6vw,96px)] leading-[0.92] font-black uppercase">
            Bananarchy
          </h1>
          <p className="font-display text-[clamp(24px,2.2vw,30px)] leading-[1.15] text-balance">
            The turn-based card game where you don&apos;t have to wait your
            turn.
          </p>
          <p className="text-body">
            You are a cheeky monkey. Snatch, stash, snack and smash bananas, and
            outwit your friends to hoard the most.
          </p>

          <ul className="flex flex-wrap gap-2">
            {CARD_TYPES.map((type) => (
              <li
                key={type.name}
                className="flex items-center gap-2 rounded-full border-[1.5px] border-line-strong px-3.5 py-1.5 text-sm font-semibold"
              >
                <span
                  aria-hidden="true"
                  className={`size-2.5 rounded-full ${type.dot}`}
                />
                {type.name}
              </li>
            ))}
          </ul>

          <div className="mt-1.5 flex flex-wrap items-baseline gap-x-3.5 gap-y-1">
            <span className="font-display text-[44px] leading-none font-black">
              {PRICE_FROM}
            </span>
            <span className="text-[15px] text-muted">
              Late pledge on Kickstarter · {DELIVERY_ESTIMATE}
            </span>
          </div>
          <PreorderButton className="px-7" />
          <p className="flex items-center gap-2.5 text-[15px] font-medium">
            <svg
              aria-hidden="true"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="flex-none"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
            {FUNDING_PROOF}
          </p>
        </div>
      </Container>
    </section>
  );
}
