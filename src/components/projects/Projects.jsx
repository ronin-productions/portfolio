/* eslint-disable react/prop-types */
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
      <BentoGrid className="max-w-7xl mx-auto">
        {filteredItems.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            images={item.images}
            icon={item.icon}
            className={i === 2 || i === 7 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

import beetle from "@/assets/images/beetle.jpg";
import beetle1 from "@/assets/images/beetle1.jpg";
import beetle2 from "@/assets/images/beetle2.jpg";
import beetle3 from "@/assets/images/beetle3.jpg";
import beetle4 from "@/assets/images/beetle4.jpg";
import beetle5 from "@/assets/images/beetle5.jpg";
import beetle6 from "@/assets/images/beetle6.jpg";
import beetle7 from "@/assets/images/beetle7.jpg";

import girrafe from "@/assets/images/girrafe.jpg";
import girrafe1 from "@/assets/images/girrafe1.jpg";
import girrafe2 from "@/assets/images/girrafe2.jpg";
import girrafe3 from "@/assets/images/girrafe3.jpg";
import girrafe4 from "@/assets/images/girrafe4.jpg";

import raccoon from "@/assets/images/raccoon.jpg";
import raccoon1 from "@/assets/images/raccoon1.jpg";
import raccoon2 from "@/assets/images/raccoon2.jpg";
import raccoon3 from "@/assets/images/raccoon3.jpg";
import raccoon4 from "@/assets/images/raccoon4.jpg";

import ahmed from "@/assets/images/ahmed.jpg";
import ahmed1 from "@/assets/images/ahmed1.jpg";
import ahmed2 from "@/assets/images/ahmed2.jpg";
import ahmed3 from "@/assets/images/ahmed3.jpg";

import ahmedV from "@/assets/images/ahmedV.jpg";
import ahmedV1 from "@/assets/images/ahmedV1.jpg";
import ahmedV2 from "@/assets/images/ahmedV2.jpg";

const items = [
  {
    title: "Transforming Beetle",
    description:
      " A stylized beetle vehicle concept design with a twist, inspired by the classic Volkswagen Beetle.",
    category: "audiovisuel",
    header: <img src={beetle} className="h-44 object-fit" alt="beetle" />,
    images: [
      beetle,
      beetle1,
      beetle2,
      beetle3,
      beetle4,
      beetle5,
      beetle6,
      beetle7,
    ],
  },
  {
    title: "Facial rig test for a stylized giraffe",
    description:
      "A facial rig test for a stylized giraffe character, exploring the possibilities of facial expressions.",
    category: "Design Graphique",
    header: <img src={girrafe} className="h-44 object-fit w-full" alt="girrafe" />,
    images: [girrafe, girrafe1, girrafe2, girrafe3, girrafe4],
  },
  {
    title: "Stylized raccoon character",
    description:
      "A stylized raccoon character design, exploring the possibilities of character design.",
    category: "Modélisation 3D",
    header: <img src={raccoon} className="h-44 object-fit w-full" alt="raccoon" />,
    images: [raccoon, raccoon1, raccoon2, raccoon3, raccoon4],
  },

  {
    title: "Character creation process",
    description:
      "A character creation process, exploring the possibilities of character design.",
    category: "VFX",
    header: <img src={ahmed} className="h-44 object-fit w-full" alt="ahmed" />,
    images: [ahmed, ahmed1, ahmed2, ahmed3],
  },
  {
    title: "Character creation process2",
    description:
      "A character creation process, exploring the possibilities of character design.",
    category: "ARCHVIZ",
    header: <img src={ahmedV} className="h-44 object-fit w-full" alt="ahmedV" />,
    images: [ahmedV, ahmedV1, ahmedV2],
  },
];
