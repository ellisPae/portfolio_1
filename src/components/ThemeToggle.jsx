import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="fixed bottom-4 right-4 bg-gray-300 dark:bg-gray-700 text-black dark:text-white p-3 rounded-full shadow-lg transition-colors duration-300 text-2xl"
      aria-label="Toggle Theme"
    >
      {darkMode ? "🌙" : "☀️"}
    </button>
  );
};

export default ThemeToggle;
