import Image from "next/image";
import { Container } from "@/components/site/container";
import { PreorderButton } from "@/components/site/preorder-button";
import { DELIVERY_ESTIMATE, PRICE_FROM } from "@/lib/site";
import { cn } from "@/lib/utils";

// Closing call to action on the brand's ring background.
export function CtaBanner({
  heading,
  className,
}: {
  heading: string;
  className?: string;
}) {
  return (
    <section className={cn("py-[clamp(40px,6vw,80px)]", className)}>
      <Container>
        <div className="bg-rings flex flex-col items-center gap-5 rounded-[28px] px-6 py-[clamp(40px,6vw,80px)] text-center">
          <Image
            src="/bananarchy-wordmark.png"
            alt="Bananarchy"
            width={1200}
            height={381}
            sizes="380px"
            className="h-auto w-full max-w-[380px]"
          />
          <h2 className="font-display text-[clamp(36px,4.2vw,56px)] font-black leading-none">
            {heading}
          </h2>
          <PreorderButton />
          <p className="text-[15px] font-medium">
            {PRICE_FROM} · {DELIVERY_ESTIMATE}
          </p>
        </div>
      </Container>
    </section>
  );
}
