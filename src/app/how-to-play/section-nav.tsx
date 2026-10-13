import { Container } from "@/components/site/container";
import { RULEBOOK_URL } from "@/lib/site";

// Section ids used by the jump links and by the page sections themselves.
export const SECTIONS = {
  setup: "Set up",
  turn: "Your turn",
  scoring: "Scoring",
  cards: "Cards",
  faq: "FAQ",
} as const;

// Sticky "jump to" row. Sections carry scroll-mt so anchors clear this bar.
export function SectionNav() {
  return (
    <nav
      aria-label="On this page"
      className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur"
    >
      <Container className="flex items-center gap-2 overflow-x-auto py-1.5 whitespace-nowrap [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <span className="mr-1 hidden text-sm font-semibold text-muted sm:inline">
          Jump to
        </span>
        {Object.entries(SECTIONS).map(([id, label]) => (
          <a
            key={id}
            href={`#${id}`}
            className="inline-flex min-h-10 items-center rounded-full border-[1.5px] border-line-strong px-4 text-sm font-semibold transition-colors hover:border-ink"
          >
            {label}
          </a>
        ))}
        <a
          href={RULEBOOK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto inline-flex min-h-10 items-center pl-2 text-sm font-semibold underline underline-offset-4"
        >
          Rulebook (PDF)
        </a>
      </Container>
    </nav>
  );
}
