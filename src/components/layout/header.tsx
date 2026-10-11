"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/site/container";
import { PreorderButton } from "@/components/site/preorder-button";
import { NAVIGATION, SITE_NAME } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="border-b border-line bg-white">
      <Container className="flex flex-wrap items-center justify-between gap-x-7 gap-y-1.5 py-3.5">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label={`${SITE_NAME} home`}
        >
          <Image src="/fav.png" alt="" width={44} height={44} priority />
          <span className="font-display text-2xl leading-none">
            {SITE_NAME}
          </span>
        </Link>

        {/* The nav wraps onto a second row on small screens, so there is no menu button. */}
        <nav
          aria-label="Main"
          className="flex flex-wrap items-center gap-x-7 text-base font-medium"
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
                  "border-b-2 py-3 transition-colors",
                  active
                    ? "border-ink"
                    : "border-transparent hover:border-line-strong"
                )}
              >
                {item.name}
              </Link>
            );
          })}
          <PreorderButton size="nav">Pre-order</PreorderButton>
        </nav>
      </Container>
    </header>
  );
}
