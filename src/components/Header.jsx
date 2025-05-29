import React, { useState, useContext } from "react";
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
import { ThemeContext } from "../context/ThemeContext";

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
    url: "https://stackoverflow.com",
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
  const { darkMode } = useContext(ThemeContext);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 w-full fixed top-0 left-0 z-50 shadow-md transition-colors duration-300">
      <div className="max-w-8xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex space-x-6">
          {socialLinks.map(({ name, icon, url }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              className="text-2xl hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              <FontAwesomeIcon icon={icon} />
            </a>
          ))}
        </div>

        <div className="relative">
          <button
            onClick={toggleMenu}
            className="text-2xl hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            aria-label="Toggle Menu"
          >
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
          </button>

          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-44 bg-white dark:bg-gray-900 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 py-2 transition-colors duration-300">
              {sectionLinks.map(({ name, id }) => (
                <button
                  key={name}
                  onClick={() => scrollToSection(id)}
                  className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                >
                  {name}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
