import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope as faSolidEnvelope } from "@fortawesome/free-solid-svg-icons";

const socialLinks = [
  {
    name: "Email",
    icon: faSolidEnvelope,
    url: "mailto:you@example.com",
  },
  {
    name: "LinkedIn",
    icon: faLinkedin,
    url: "https://linkedin.com",
  },
  {
    name: "GitHub",
    icon: faGithub,
    url: "https://github.com",
  },
  {
    name: "Instagram",
    icon: faInstagram,
    url: "https://instagram.com",
  },
];

const Header = () => {
  return (
    <header className="bg-gray-800 text-white w-full fixed top-0 left-0 z-50 shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Left Side - Social Icons */}
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
              <FontAwesomeIcon icon={icon} />
            </a>
          ))}
        </div>

        {/* Right Side - Internal Navigation Links */}
        <nav className="flex space-x-6 text-sm font-medium">
          <a href="#projects-section" className="hover:text-blue-400">
            Projects
          </a>
          <a href="#contactme-section" className="hover:text-blue-400">
            Contact Me
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
