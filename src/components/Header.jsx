import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope as faSolidEnvelope,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const socialLinks = [
  {
    name: "Email",
    icon: faSolidEnvelope,
    url: "mailto:ellis.h.pae@example.com",
  },
  {
    name: "LinkedIn",
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/ellispae/",
  },
  {
    name: "GitHub",
    icon: faGithub,
    url: "https://github.com/ellisPae",
  },
  {
    name: "Instagram",
    icon: faInstagram,
    url: "https://instagram.com",
  },
  {
    name: "Stack Overflow",
    icon: faStackOverflow,
    url: "https://stackoverflow.com", // replace with your actual profile link
  },
];

const sectionLinks = [
  { name: "Landing", id: "#landing-section" },
  { name: "About Me", id: "#aboutme-section" },
  { name: "Projects", id: "#projects-section" },
  { name: "Contact Me", id: "#contactme-section" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-gray-800 text-white w-full fixed top-0 left-0 z-50 shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex space-x-4">
          {socialLinks.map(({ name, icon, url }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
              aria-label={name}
            >
              <FontAwesomeIcon icon={icon} className="text-xl" />
            </a>
          ))}
        </div>

        <div>
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            <FontAwesomeIcon
              icon={isMenuOpen ? faTimes : faBars}
              className="text-2xl"
            />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute right-60 top-full mt-2 w-48 bg-gray-700 rounded-md shadow-lg py-2 z-50">
          {sectionLinks.map(({ name, id }) => (
            <button
              key={name}
              onClick={() => scrollToSection(id)}
              className="block w-full text-left text-white hover:text-blue-400 px-4 py-2"
            >
              {name}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
