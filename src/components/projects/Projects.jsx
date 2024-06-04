import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid.jsx";
import { useState } from "react";

const categories = [
  "Tous",
  "audiovisuel",
  "Modélisation 3D",
  "Design Graphique",
  "VFX",
  "ARCHVIZ",
  "filmmaking",
  "Développement Web",
];

export default function Projects({ setRerender }) {
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const filteredItems =
    selectedCategory === "Tous"
      ? items
      : items.filter((item) => item.category === selectedCategory);
  return (
    <div id="projets" className="pt-36">
      <h1 className="text-white text-4xl font-bold text-start my-8">
        NOS PROJETS
      </h1>
      <div className="flex flex-wrap justify-center mb-8 gap-8">
        {categories.map((category, idx) =>
          selectedCategory == category ? (
            <button
              key={idx}
              className="relative inline-flex h-12 overflow-hidden rounded-xl p-[1px] "
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                {category}
              </span>
            </button>
          ) : (
            <button
              key={idx}
              onClick={() => {
                setSelectedCategory(category);
                setRerender((prev) => !prev);
              }}
              className="inline-flex h-12 cursor-pointer items-center justify-center rounded-xl bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl"
            >
              {category}
            </button>
          )
        )}
      </div>
      <BentoGrid className="max-w-5xl mx-auto ">
        {filteredItems.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    title: "The Dawn of audiovisuel",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    category: "audiovisuel",
    header: <Skeleton />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    category: "Modélisation 3D",
    header: <Skeleton />,
  },
  {
    title: "The Art of Design Graphique",
    description: "Discover the beauty of thoughtful and functional design.",
    category: "Design Graphique",
    header: <Skeleton />,
  },
  {
    title: "The Power of VFX",
    description:
      "Understand the impact of effective communication in our lives.",
    category: "VFX",
    header: <Skeleton />,
  },
  {
    title: "The Pursuit of ARCHVIZ",
    description: "Join the quest for understanding and enlightenment.",
    category: "ARCHVIZ",
    header: <Skeleton />,
  },
  {
    title: "The Joy of filmmaking",
    description: "Experience the thrill of bringing ideas to life.",
    category: "filmmaking",
    header: <Skeleton />,
  },
  {
    title: "The Spirit of Développement Web",
    description: "Embark on exciting journeys and thrilling discoveries.",
    category: "Développement Web",
    header: <Skeleton />,
  },
];
