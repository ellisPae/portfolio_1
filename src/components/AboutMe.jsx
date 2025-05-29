import React from "react";
import aboutImage from "../assets/profile_2.png";

const AboutMe = () => {
  return (
    <section
      id="aboutme-section"
      className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-4 md:px-20 py-16 transition-colors duration-300"
    >
      <div className="max-w-screen-xl w-full flex flex-col md:flex-row justify-between items-center md:items-start gap-y-12 md:gap-x-12">
        {/* Text Block */}
        <div className="max-w-xl text-left">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6 transition-colors duration-300">
            About Me
          </h2>
          <p className="text-lg text-gray-800 dark:text-gray-300 mb-4 transition-colors duration-300">
            Hi, I’m Ellis Pae—a software engineer passionate about solving
            complex problems and turning thoughtful ideas into scalable,
            user-friendly products. I specialize in full-stack development using
            React, Node.js, TypeScript, and Ruby on Rails.
          </p>
          <p className="text-lg text-gray-800 dark:text-gray-300 mb-4 transition-colors duration-300">
            I enjoy building clean, maintainable code that balances long-term
            stability with thoughtful design. Whether I’m implementing a new
            feature or helping streamline a system, I bring a collaborative
            mindset and a drive to deliver meaningful solutions.
          </p>
          <p className="text-lg text-gray-800 dark:text-gray-300 mb-4 transition-colors duration-300">
            Outside of engineering, I stay curious through hobbies like hiking,
            travel, golf, and vintage watch collecting—interests that remind me
            to keep learning and see challenges from fresh perspectives.
          </p>
          <p className="text-lg text-gray-800 dark:text-gray-300 transition-colors duration-300">
            My goal? To contribute to digital experiences that don’t just
            function well, but truly resonate with the people who use them.
          </p>
        </div>

        {/* Profile Image */}
        <div className="flex-shrink-0">
          <img
            src={aboutImage}
            alt="Ellis Pae"
            className="w-[340px] rounded-xl border border-gray-300 dark:border-gray-600 shadow-md transition-transform transition-colors duration-300 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
