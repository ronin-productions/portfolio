import { BackgroundGradient } from "@/components/ui/background-gradient";

export default function Services() {
  return (
    <>
      <div id="services" className="mt-36">
        <h1 className="text-white text-4xl font-bold text-start my-8">
          NOS SERVICES
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {ServicesContent.map((service) => (
            <BackgroundGradient
              key={service.id}
              className="bg-secondary p-5 text-center flex flex-col justify-start gap-4 w-full h-full rounded-2xl"
            >
              <img
                src={service.icon}
                alt="marketing"
                width={50}
                height={50}
                className="mx-auto"
              />
              <h2 className="text-xl font-bold text-white">{service.title}</h2>
              <p className=" text-gray-500 text-sm">{service.description}</p>
            </BackgroundGradient>
          ))}
        </div>
      </div>
    </>
  );
}

import marketing from "@/assets/marketing.png";
import webdev from "@/assets/webdev.png";
import design from "@/assets/design.png";
import modeling from "@/assets/modeling.png";
import visuals from "@/assets/visuals.png";
import vfx from "@/assets/vfx.png";
import archviz from "@/assets/archviz.png";
import gamedev from "@/assets/gamedev.png";

const ServicesContent = [
  {
    id: 1,
    icon: marketing,
    title: "Marketing Digital",
    description:
      "Nous vous aidons à développer votre présence en ligne et à atteindre vos objectifs commerciaux grâce à des stratégies de marketing numérique sur mesure.",
  },
  {
    id: 2,
    icon: webdev,
    title: "Développement Web & application",
    description:
      "Nous créons des sites Web et des application qui sont à la fois beaux et fonctionnels. Nous nous assurons que votre site Web ou application est optimisé pour la conversion et qu'il reflète fidèlement votre marque.",
  },
  {
    id: 3,
    icon: design,
    title: "Design Graphique",
    description:
      "Nous créons des designs qui attirent l'attention et qui sont mémorables. Que ce soit pour votre site Web, vos réseaux sociaux ou vos campagnes publicitaires, nous avons ce qu'il vous faut.",
  },
  {
    id: 4,
    icon: modeling,
    title: "Modélisation 3D",
    description:
      "Nous créons des modèles 3D réalistes pour vous aider à visualiser vos projets et à donner vie à vos idées.",
  },
  {
    id: 5,
    icon: visuals,
    title: "audiovisuel",
    description:
      "Nous produisons des vidéos et des animations qui captivent votre public et renforcent votre marque. Que ce soit pour une publicité, une vidéo promotionnelle ou une animation, nous avons ce qu'il vous faut.",
  },
  {
    id: 6,
    icon: vfx,
    title: "VFX et filmmaking",
    description:
      "Nous créons des effets visuels époustouflants pour vos films, publicités et vidéos. Nous vous aidons à donner vie à vos idées et à raconter des histoires qui captivent votre public.",
  },
  {
    id: 7,
    icon: archviz,
    title: "CAD & ARCHVIZ",
    description:
      "Nous créons des modèles 3D réalistes pour vous aider à visualiser vos projets et à donner vie à vos idées.",
  },
  {
    id: 8,
    icon: gamedev,
    title: "game developpment",
    description:
      "Nous créons des jeux vidéo qui sont à la fois amusants et engageants. Que ce soit pour le mobile, le web ou les consoles, nous avons ce qu'il vous faut.",
  },
];
