/* eslint-disable react/prop-types */
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
        "grid md:auto-rows-[16rem] grid-cols-1 md:grid-cols-3 gap-3 max-w-7xl mx-auto ",
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
  // description,
  header,
  images,
}) => {
  const OPTIONS = {};

  return (
    <div className="flex items-center justify-center">
      <Modal className="">
        <ModalTrigger
          className={cn(
            "p-0 relative row-span-1 group/bento hover:shadow-xl transition duration-200 cursor-pointer w-full h-full group rounded-none",
            className
          )}
        >
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-200"></div>
          {header}
          <h4 className="text-lg font-bold text-center mb-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            {title}
          </h4>
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
