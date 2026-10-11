import { cn } from "@/lib/utils";

// Page-width wrapper shared by every section: 1240px max with fluid gutters.
export function Container({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1240px] px-[clamp(20px,4vw,48px)]",
        className
      )}
      {...props}
    />
  );
}
