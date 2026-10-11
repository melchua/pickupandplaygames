import { cn } from "@/lib/utils";
import { PREORDER_URL } from "@/lib/site";

const sizes = {
  nav: "rounded-full px-[22px] py-[11px] text-base",
  md: "rounded-[14px] px-[26px] py-[15px] text-[17px]",
  lg: "rounded-2xl px-9 py-5 text-[19px] leading-tight",
};

// The one primary action on the site. Opens the Kickstarter rewards page.
export function PreorderButton({
  size = "lg",
  className,
  children = "Pre-order Bananarchy",
}: {
  size?: keyof typeof sizes;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <a
      href={PREORDER_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-block bg-ink text-center font-semibold text-white transition-colors hover:bg-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink",
        sizes[size],
        className
      )}
    >
      {children}
    </a>
  );
}
