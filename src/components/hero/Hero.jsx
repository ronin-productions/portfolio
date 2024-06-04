import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { FlipWords } from "@/components/ui/flip-words";

const words = ["services", "produits", "designs", "marketing", "modélisations"];

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
          className="text-center font-medium text-transparent text-4xl md:text-8xl pt-32
          bg-clip-text tracking-tight bg-gradient-to-br from-slate-300 to-slate-500"
        >
          RONIN PRODUCTIONS <br />
          <div className="text-6xl">
            offre les meilleurs{" "}
            <FlipWords words={words} className={"text-white"} duration={1100} />
          </div>
        </motion.h1>
      </LampContainer>
    </div>
  );
} 
