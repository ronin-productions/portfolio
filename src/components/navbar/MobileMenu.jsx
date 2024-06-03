import { useState } from "react";
import NavLinks from "./NavLinks.jsx";

export default function MobileMenu() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <>
      <button
        className="md:hidden mr-4"
        onClick={toggleMobileMenu}
        aria-label="Toggle mobile menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-0 left-0 w-screen h-screen bg-black bg-opacity-90 z-50">
          <div className="p-6">
            <button
              className="text-white"
              onClick={toggleMobileMenu}
              aria-label="Close mobile menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <ul className="text-white text-lg flex flex-col items-center gap-6">
            <NavLinks />
          </ul>
        </div>
      )}
    </>
  );
}
