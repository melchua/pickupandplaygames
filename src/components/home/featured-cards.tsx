"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const featuredCards = [
  {
    id: 1,
    name: "Banana Republic",
    type: "Action",
    image: "/card-action-banana-republic.png",
    description: "Seize control and establish your banana empire!",
    bgColor: "bg-hot-pink",
    borderColor: "border-ink",
    shadowColor: "shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]",
  },
  {
    id: 2,
    name: "Yoink!",
    type: "Reaction",
    image: "/card-reaction-yoink.png",
    description: "Snatch victory from the jaws of defeat!",
    bgColor: "bg-banana",
    borderColor: "border-ink",
    shadowColor: "shadow-[8px_8px_0px_0px_rgba(244,91,105,1)]",
  },
  {
    id: 3,
    name: "Bake Banana Bread",
    type: "Scoring",
    image: "/card-scoring-bake-banana-bread.png",
    description: "Turn your stash into sweet victory points!",
    bgColor: "bg-ink",
    borderColor: "border-banana",
    shadowColor: "shadow-[8px_8px_0px_0px_rgba(255,232,93,1)]",
  },
  {
    id: 4,
    name: "Banana Manifesto",
    type: "Scoring",
    image: "/card-scoring-banana-manifesto.png",
    description: "Declare your banana philosophy to the world!",
    bgColor: "bg-white",
    borderColor: "border-ink",
    shadowColor: "shadow-[8px_8px_0px_0px_rgba(244,91,105,1)]",
  },
];

export function FeaturedCards() {
  return (
    <section className="py-20 bg-banana relative overflow-hidden">
      {/* Background geometric elements */}
      <div className="absolute inset-0">
        <div className="absolute top-12 left-12 w-36 h-36 bg-hot-pink border-6 border-ink transform rotate-12 opacity-15"></div>
        <div className="absolute bottom-12 right-12 w-32 h-32 bg-ink border-6 border-white transform -rotate-12 opacity-15"></div>
        <div className="absolute top-1/2 left-1/4 w-28 h-28 bg-white border-6 border-ink transform rotate-45 opacity-10"></div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, #000 0px, #000 2px, transparent 2px, transparent 30px), repeating-linear-gradient(90deg, #000 0px, #000 2px, transparent 2px, transparent 30px)",
              backgroundSize: "30px 30px",
            }}
          ></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header - Neobrutalism Style */}
          <div className="text-center mb-16">
            <div className="inline-block transform rotate-1 mb-6">
              <div className="bg-ink text-white px-8 py-6 border-6 border-hot-pink shadow-[12px_12px_0px_0px_rgba(244,91,105,1)]">
                <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight">
                  Sneak Peek at the Cards
                </h2>
              </div>
            </div>

            <div className="bg-white border-6 border-ink p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform -rotate-1 max-w-3xl mx-auto">
              <p className="text-xl text-ink font-bold">
                Every card in Bananarchy is designed to create{" "}
                <span className="bg-hot-pink text-white px-2 py-1 border-2 border-ink">
                  memorable moments
                </span>{" "}
                and{" "}
                <span className="bg-banana text-ink px-2 py-1 border-2 border-ink">
                  strategic chaos
                </span>
                . Here&apos;s a taste of what&apos;s coming!
              </p>
            </div>
          </div>

          {/* Cards Grid - Neobrutalism Style */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredCards.map((card, index) => (
              <Card
                key={card.id}
                className={`${card.bgColor} ${card.borderColor} border-6 ${
                  card.shadowColor
                } hover:translate-y-1 transition-all duration-200 group cursor-pointer transform ${
                  index % 2 === 0 ? "rotate-1" : "-rotate-1"
                }`}
              >
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {/* Card Image - Neobrutalism Frame */}
                    <div className="relative aspect-[3/4] bg-white border-4 border-ink overflow-hidden group-hover:scale-105 transition-transform duration-200">
                      <Image
                        src={card.image}
                        alt={`${card.name} card`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                    </div>

                    {/* Card Info - Neobrutalism Treatment */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h3
                          className={`font-black text-xl uppercase tracking-tight ${
                            card.bgColor === "bg-white" ||
                            card.bgColor === "bg-banana"
                              ? "text-ink"
                              : "text-white"
                          }`}
                        >
                          {card.name}
                        </h3>
                        <div className="bg-white text-ink px-3 py-1 border-2 border-ink text-sm font-black uppercase">
                          {card.type}
                        </div>
                      </div>
                      <div className="bg-white border-4 border-ink p-3 transform rotate-1">
                        <p className="text-sm text-ink font-bold leading-relaxed">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom CTA - Neobrutalism Style */}
          <div className="text-center mt-20">
            <div className="bg-white border-6 border-ink p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform rotate-1 mb-8 max-w-3xl mx-auto">
              <p className="text-xl text-ink font-bold">
                This is just the beginning! Bananarchy features over{" "}
                <span className="bg-hot-pink text-white px-3 py-1 border-2 border-ink font-black text-2xl">
                  100 unique cards
                </span>
                <br />
                designed to keep every game fresh and unpredictable.
              </p>
            </div>

            <div className="inline-block transform -rotate-1">
              <div className="bg-ink text-white px-8 py-6 border-6 border-banana shadow-[12px_12px_0px_0px_rgba(255,232,93,1)]">
                <div className="flex items-center space-x-3">
                  <span className="text-3xl">🃏</span>
                  <span className="font-black text-lg uppercase tracking-wide">
                    More cards revealed on Kickstarter!
                  </span>
                  <span className="text-3xl">🎉</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
