"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/site/container";
import { PreorderButton } from "@/components/site/preorder-button";
import { NAVIGATION, SITE_NAME } from "@/lib/site";
import { cn } from "@/lib/utils";

// Two rows on phones (logo + Pre-order, then a scrollable nav), one row from md up.
export function Header() {
  const pathname = usePathname();

  return (
    <header className="border-b border-line bg-white">
      <Container className="flex flex-wrap items-center justify-between gap-x-4 py-2 sm:gap-x-7 md:py-3.5">
        <Link
          href="/"
          className="flex min-h-11 items-center gap-2.5 sm:gap-3"
          aria-label={`${SITE_NAME} home`}
        >
          <Image src="/fav.png" alt="" width={40} height={40} priority />
          <span className="font-display text-xl leading-none sm:text-2xl">
            {SITE_NAME}
          </span>
        </Link>

        <PreorderButton size="nav" className="md:order-last">
          Pre-order
        </PreorderButton>

        <nav
          aria-label="Main"
          className="order-last flex basis-full items-center gap-x-6 overflow-x-auto text-base font-medium whitespace-nowrap [scrollbar-width:none] md:order-none md:ml-auto md:basis-auto md:overflow-visible [&::-webkit-scrollbar]:hidden"
        >
          {NAVIGATION.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "inline-flex min-h-11 items-center border-b-2 transition-colors",
                  active
                    ? "border-ink"
                    : "border-transparent hover:border-line-strong"
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      </Container>
    </header>
  );
}
