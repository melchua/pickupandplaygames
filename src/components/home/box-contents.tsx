import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/site/container";

const contents = [
  { count: "75", label: "Monkey Cards" },
  { count: "32", label: "Banana Cards" },
  { count: "8", label: "Summary Cards" },
  { count: "1", label: "Active Player Card" },
];

export function BoxContents() {
  return (
    <section id="box" className="bg-paper py-[clamp(56px,7vw,96px)]">
      <Container className="flex flex-wrap items-center gap-[clamp(28px,4vw,64px)]">
        <Image
          src="/photo-flat-lay.jpg"
          alt="A Monkey Card back, the Ripening Agent card and the Bananarchy box front and back, laid out side by side"
          width={1500}
          height={1071}
          sizes="(min-width: 1024px) 660px, 90vw"
          className="h-auto w-full min-w-0 flex-[1_1_480px] rounded-3xl"
        />
        <div className="flex min-w-0 flex-[1_1_340px] flex-col gap-[22px]">
          <h2 className="font-display text-[clamp(40px,4.6vw,64px)] leading-none font-black">
            What&apos;s in the box.
          </h2>
          <dl className="grid grid-cols-[repeat(auto-fit,minmax(min(150px,100%),1fr))] gap-x-6 gap-y-[18px]">
            {contents.map((item) => (
              <div
                key={item.label}
                className="flex flex-col gap-0.5 border-t-2 border-ink pt-2.5"
              >
                <dt className="order-2">{item.label}</dt>
                <dd className="font-display text-[44px] leading-none font-black">
                  {item.count}
                </dd>
              </div>
            ))}
          </dl>
          <p className="text-body">
            Want to skip the rulebook? Watch the one-minute video and play the
            game.{" "}
            <Link
              href="/how-to-play"
              className="font-semibold text-ink underline underline-offset-4"
            >
              See how to play
            </Link>
          </p>
        </div>
      </Container>
    </section>
  );
}
