import React from "react";
import landingImage from "../assets/profile_1.png";

const Landing = () => {
  return (
    <section
      id="landing-section"
      className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 flex items-center justify-center px-6 md:px-12 transition-colors duration-300"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 items-center max-w-[1200px] w-full gap-y-12 md:gap-x-32">
        <div className="flex justify-center">
          <img
            src={landingImage}
            alt="Ellis Pae"
            className="w-[340px] rounded-lg shadow-lg border border-gray-300 dark:border-gray-600 transition-colors duration-300"
          />
        </div>

        <div className="text-center md:text-left">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Ellis Pae
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            Software Engineer
          </p>
        </div>
      </div>
    </section>
  );
};

export default Landing;
