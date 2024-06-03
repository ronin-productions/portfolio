import { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    isVisible && (
      <button
        onClick={handleClick}
        className="fixed bottom-8 right-8 bg-secondary text-white px-3 py-2  rounded-lg shadow-lg hover:bg-cyan-900 focus:outline-none"
      >
        ↑
      </button>
    )
  );
};

export default ScrollToTopButton;
