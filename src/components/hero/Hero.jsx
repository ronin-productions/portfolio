import { motion } from "framer-motion";
import { FlipWords } from "@/components/ui/flip-words";
import Vimeo from "@u-wave/react-vimeo";

const words = ["services", "produits", "designs", "marketing", "modélisations"];

export default function Hero() {
  return (
    <div id="acceuil" className="">
      <Vimeo
        video="609741715"
        autoplay
        muted
        loop
        controls={false}
        background
        className="w-screen h-screen object-cover object-center top-0 left-0"
        responsive
      />

      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="text-center font-medium text-transparent text-4xl md:text-8xl absolute top-[22rem] left-1/4 transform -translate-x-1/4 -translate-y-1/2
          bg-clip-text tracking-tight bg-gradient-to-br from-slate-300 to-slate-500"
      >
        RONIN PRODUCTIONS <br />
        <div className="md:text-6xl text-2xl z-50">
          offre les meilleurs{" "}
          <FlipWords words={words} className={"text-white"} duration={1100} />
        </div>
      </motion.h1>
    </div>
  );
}
