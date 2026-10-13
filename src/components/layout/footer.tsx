import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/site/container";
import { SITE_NAME, SOCIAL_LINKS } from "@/lib/site";

const columns = [
  {
    title: "Games",
    links: [
      { name: "Bananarchy", href: "/" },
      { name: "How to Play", href: "/how-to-play" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "Contact", href: "/contact" },
    ],
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ink text-line">
      <Container className="flex flex-col gap-10 pt-[clamp(40px,5vw,64px)] pb-7">
        <div className="flex flex-wrap justify-between gap-x-16 gap-y-9">
          <div className="flex min-w-0 max-w-[420px] flex-[1_1_300px] flex-col gap-3.5">
            <div className="flex items-center gap-3">
              <Image src="/fav.png" alt="" width={44} height={44} />
              <span className="font-display text-2xl leading-none text-white">
                {SITE_NAME}
              </span>
            </div>
            <p className="text-base">
              Fun, accessible games that bring people together. Easy to learn
              and impossible to put down.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-16 gap-y-7 text-base">
            {columns.map((column) => (
              <div key={column.title} className="flex flex-col gap-0.5">
                <h2 className="pb-1.5 font-semibold text-banana">
                  {column.title}
                </h2>
                {column.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="inline-flex min-h-11 items-center self-start hover:text-white"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            ))}
            <div className="flex flex-col gap-0.5">
              <h2 className="pb-1.5 font-semibold text-banana">Follow</h2>
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center self-start hover:text-white"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-x-7 gap-y-2 border-t border-footer-line pt-5 text-sm text-footer-text">
          <span>
            © {currentYear} Pick Up &amp; Play Games Inc. Bananarchy is a
            trademark of Pick Up &amp; Play Games Inc.
          </span>
          <Link
            href="/privacy"
            className="inline-flex min-h-11 items-center underline hover:text-white"
          >
            Privacy Policy
          </Link>
        </div>
      </Container>
    </footer>
  );
}
