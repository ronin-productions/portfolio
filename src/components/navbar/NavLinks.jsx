
const NavLinks = () => {
  const handleClick = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition -20;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <li>
        <a href="#acceuil" onClick={(e) => handleClick(e, "acceuil")} className="nav-link hover:text-gray-300">
          Acceuil
        </a>
      </li>
      <li>
        <a href="#quisommesnous" onClick={(e) => handleClick(e, "quisommesnous")} className="nav-link hover:text-gray-300">
          Qui sommes-nous ?
        </a>
      </li>
      <li>
        <a href="#services" onClick={(e) => handleClick(e, "services")} className="nav-link hover:text-gray-300">
          Services
        </a>
      </li>
      <li>
        <a href="#projets" onClick={(e) => handleClick(e, "projets")} className="nav-link hover:text-gray-300">
          Projets
        </a>
      </li>
      <li>
        <a href="#contact" onClick={(e) => handleClick(e, "contact")} className="nav-link hover:text-gray-300">
          Contact
        </a>
      </li>
    </>
  );
};

export default NavLinks;
