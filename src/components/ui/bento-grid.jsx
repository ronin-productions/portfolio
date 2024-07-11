import { cn } from "@/utils/cn";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "@/components/ui/animated-modal.jsx";
import EmblaCarousel from "./Embla-carousel";
import "@/assets/styles/embla.css";

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-4 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  images,
}) => {
  const OPTIONS = {};

  return (
    <div className="py-40 flex items-center justify-center">
      <Modal className="">
        <ModalTrigger
          className={cn(
            "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input shadow-none p-4 border-white/[0.2] bg-secondary border justify-between flex flex-col space-y-4 cursor-pointer h-72",
            className
          )}
        >
          {header}
          <div className="group-hover/bento:translate-x-2 transition duration-200 text-start">
            <div className="font-sans font-bold text-neutral-200 mb-2 mt-2">
              {title}
            </div>
            <div className="font-sans font-normal text-xs text-neutral-300">
              {description}
            </div>
          </div>
        </ModalTrigger>
        <ModalBody>
          <ModalContent className="relative overflow-hidden bg-secondary !border-0">
            <h4 className="text-lg md:text-2xl  font-bold text-center mb-8">
              {title}
            </h4>
            <div className="flex md:flex-row flex-col items-center md:items-start justify-between gap-16 w-fit">
              {/* Product images */}
              <div className="">
                <EmblaCarousel slides={images} options={OPTIONS} />
              </div>
            </div>
          </ModalContent>
        </ModalBody>
      </Modal>
    </div>
  );
};
