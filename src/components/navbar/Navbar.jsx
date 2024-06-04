import NavLinks from "@/components/navbar/NavLinks.jsx";
import MobileMenu from "@/components/navbar/MobileMenu.jsx";
import Logo from "@/components/navbar/Logo.jsx";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let navbarClasses =
    "sticky top-0 z-50 mx-auto  2xl:px-44 xl:px-16 lg:px-10 px-8 py-4 flex items-center 2xl:gap-72 xl:gap-44 lg:gap-36 md:gap-20 xl:text-xl lg:text-lg";
  if (scrolled) {
    navbarClasses += " navbar scrolled";
  }
  return (
    <div className={navbarClasses}>
      <div className="text-white flex items-center">
        {/* Mobile Menu Button */}
        <MobileMenu />
        {/* Logo */}
        <Logo />
      </div>

      {/* Desktop Menu */}
      <nav aria-label="Main navigation" className="hidden md:flex">
        <ul className="text-white flex xl:gap-10 justify-center text-xs md:text-base xl:text-lg">
          <NavLinks />
        </ul>
      </nav>
    </div>
  );
}
