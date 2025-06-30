import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-button text-sm font-semibold transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-banana focus-visible:ring-offset-2 border-2 font-body",
  {
    variants: {
      variant: {
        default:
          "bg-banana text-ink border-ink shadow-lg hover:bg-banana/90 hover:shadow-xl hover:scale-105 active:scale-95",
        destructive:
          "bg-destructive text-white border-destructive shadow-lg hover:bg-destructive/90 hover:shadow-xl hover:scale-105 active:scale-95",
        outline:
          "border-ink text-ink bg-white hover:bg-ink hover:text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95",
        secondary:
          "bg-hot-pink text-white border-hot-pink shadow-lg hover:bg-hot-pink/90 hover:shadow-xl hover:scale-105 active:scale-95",
        ghost:
          "border-transparent text-ink hover:bg-banana/20 hover:border-banana/50",
        link: "border-transparent text-ink underline-offset-4 hover:underline hover:text-hot-pink",
        pill: "bg-banana text-ink border-ink rounded-pill shadow-lg hover:bg-banana/90 hover:shadow-xl hover:scale-105 active:scale-95",
      },
      size: {
        default: "h-10 px-6 py-2 has-[>svg]:px-4",
        sm: "h-8 rounded-button gap-1.5 px-4 text-xs has-[>svg]:px-3",
        lg: "h-12 rounded-button px-8 text-base has-[>svg]:px-6",
        xl: "h-14 rounded-button px-10 text-lg has-[>svg]:px-8",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
