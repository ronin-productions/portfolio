import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { FlipWords } from "@/components/ui/flip-words";

const words = ["service", "produit", "design", "marketing", "modélisation"];

export default function Hero() {
  return (
    <div id="acceuil">
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-36 bg-gradient-to-br from-slate-300 to-slate-500 pb-16 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          RONIN PRODUCTIONS <br />
          <div className="text-5xl">
            offre le meilleur{" "}
            <FlipWords words={words} className={"text-white"} duration={1100} />
          </div>
        </motion.h1>
      </LampContainer>
    </div>
  );
}
