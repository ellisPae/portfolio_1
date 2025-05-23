import React from "react";
import profilePic from "../assets/profile.png"; // make sure this path matches your actual image location

const Landing = () => {
  return (
    <section
      id="landing-section"
      className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center px-6 bg-[#f4f1eb]"
    >
      <div className="shadow-lg">
        <img
          src={profilePic}
          alt="Ellis Pae"
          className="max-w-xs md:max-w-sm border"
        />
      </div>

      <div className="mt-8 md:mt-0 md:ml-52 text-center md:text-left">
        <h1 className="text-5xl font-bold text-gray-900">Ellis Pae</h1>
        <p className="mt-4 text-xl text-gray-700">Software Engineer</p>
      </div>
    </section>
  );
};

export default Landing;
