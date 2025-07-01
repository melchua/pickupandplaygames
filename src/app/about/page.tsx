import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const teamMembers = [
  {
    name: "Nathan Lundgaard",
    title: "CoFounder & Lead Game Designer",
    bio: `Nathan is an avid supporter of all things nerdy. Board & Card Games, D&D, Warhammer, BattleTech, Anime and much more. He's been playing games of all sorts since he was a little kid including everything from Crib, Trouble, Risk, and Chess. As he grew Nathan found love in Strategy games such as Age of Empires II and Company of Heroes, as well as board versions such as Axis and Allies, and Diplomacy. Nowadays Nathan still plays board games regularly and is ready to share all his learnings in his latest game Bananarchy!

Outdside of the games world Nathan enjoys reading, writing, long walks, and dancing. He is a Dance instructor with over 10 years of experience teaching various styles including Salsa, Bachata, and Kizomba.`,
    imageUrl: "/papermonkey1.jpeg",
  },
  {
    name: "Robert Henry",
    title: "Game Designer",
    bio: `Robert Henry is a child of the 80s, and remembers all those great classic games like Monopoly, Stratego, Risk, and Sorry! (And has great respect for anyone who can extract the rubber band in Operation.) Nowadays, games truly are something special, with some really innovative stuff continuing to show up on a regular basis. Participating in game design represents a chance not only to create something new and fun, but to contribute something to this increasingly divided world that can bring people together with joy and laughter in a meaningful way.`,
    imageUrl: "/papermonkey2.jpeg",
  },
  {
    name: "Mel Chua",
    title: "Director of Business Development & Technology",
    bio: `Mel is a versatile technologist and business strategist with over 15 years of experience across the digital landscape. A true jack-of-all-trades, he's worn many hats—from product development and UX design to art direction and community growth.

He's led initiatives in social media marketing, email funnel automation, and KOL-driven community building. Mel has a keen eye for launching and scaling digital products, including integrating launch pages, website payments, and conducting iterative playtesting. Whether it's hiring a team, running a campaign, or shipping a product, Mel connects creative vision with technical execution.`,
    imageUrl: "/papermonkey3.jpeg",
  },
];

export default function AboutUsPage() {
  return (
    <main className="flex-grow">
      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
          Our Team
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.name} className="flex flex-col">
              <CardContent className="p-6 flex-grow flex flex-col">
                <div className="flex justify-center mb-6">
                  <Image
                    src={member.imageUrl}
                    alt={`Profile picture of ${member.name}`}
                    width={150}
                    height={150}
                    className="rounded-full object-cover border-4 border-primary"
                  />
                </div>
                <CardHeader className="text-center p-0 mb-4">
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription>{member.title}</CardDescription>
                </CardHeader>
                <div className="flex-grow">
                  {member.bio.split("\n\n").map((paragraph, i) => (
                    <p
                      key={i}
                      className="text-sm text-muted-foreground mb-4 last:mb-0"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
