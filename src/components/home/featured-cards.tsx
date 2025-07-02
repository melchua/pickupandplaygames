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
    color: "from-hot-pink/80 to-hot-pink/60",
    borderColor: "border-hot-pink/60",
    glowColor: "shadow-hot-pink/30",
  },
  {
    id: 2,
    name: "Yoink!",
    type: "Reaction",
    image: "/card-reaction-yoink.png",
    description: "Snatch victory from the jaws of defeat!",
    color: "from-banana/90 to-banana/70",
    borderColor: "border-banana/70",
    glowColor: "shadow-banana/40",
  },
  {
    id: 3,
    name: "Bake Banana Bread",
    type: "Scoring",
    image: "/card-scoring-bake-banana-bread.png",
    description: "Turn your stash into sweet victory points!",
    color: "from-orange-400/80 to-orange-500/60",
    borderColor: "border-orange-500/60",
    glowColor: "shadow-orange-400/30",
  },
  {
    id: 4,
    name: "Smash!",
    type: "Anytime",
    image: "/card_anytime_smash.jpg",
    description: "Smash your way to victory!",
    color: "from-hot-pink/70 to-banana/80",
    borderColor: "border-hot-pink/50",
    glowColor: "shadow-hot-pink/25",
  },
];

export function FeaturedCards() {
  return (
    <section className="py-20 bg-gradient-to-br from-banana/40 via-hot-pink/30 to-orange-300/40 dark:from-banana/20 dark:via-hot-pink/15 dark:to-orange-300/20 relative overflow-hidden">
      {/* Bold background pattern */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
              Sneak Peek at the Cards
            </h2>
            <p className="font-body text-xl text-white/95 max-w-3xl mx-auto drop-shadow-md">
              Every card in Bananarchy is designed to create{" "}
              <span className="font-bold text-hot-pink bg-white/80 dark:bg-black/40 px-2 py-1 rounded-lg shadow-sm">
                memorable moments
              </span>{" "}
              and{" "}
              <span className="font-bold text-hot-pink bg-white/80 dark:bg-black/40 px-2 py-1 rounded-lg shadow-sm">
                strategic chaos
              </span>
              . Here&apos;s a taste of what&apos;s coming!
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredCards.map((card, index) => (
              <Card
                key={card.id}
                className={`bg-gradient-to-br ${card.color} ${card.borderColor} border-4 shadow-2xl ${card.glowColor} hover:shadow-3xl transition-all duration-300 hover:scale-110 hover:-rotate-2 group cursor-pointer transform-gpu`}
                style={{
                  animationDelay: `${index * 150}ms`,
                }}
              >
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {/* Card Image */}
                    <div className="relative aspect-[3/4] bg-white dark:bg-gray-100 rounded-xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300 border-2 border-white/50">
                      <Image
                        src={card.image}
                        alt={`${card.name} card`}
                        fill
                        className="object-cover group-hover:scale-115 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                      {/* Subtle overlay for better contrast */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Card Info */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="font-display text-xl font-bold text-white drop-shadow-lg">
                          {card.name}
                        </h3>
                        <span className="px-3 py-1 bg-white/90 text-ink text-sm font-bold rounded-full shadow-lg border-2 border-white/50">
                          {card.type}
                        </span>
                      </div>
                      <p className="font-body text-sm text-white/95 leading-relaxed drop-shadow-md font-medium">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-20">
            <p className="font-body text-xl text-white/95 mb-8 drop-shadow-md">
              This is just the beginning! Bananarchy features over{" "}
              <span className="font-bold text-hot-pink bg-white/80 dark:bg-black/40 px-3 py-1 rounded-lg shadow-sm text-2xl">
                40 unique cards
              </span>
              <br className="md:hidden" />
              designed to keep every game fresh and unpredictable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
