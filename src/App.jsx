import React from "react";
import Header from "./components/Header";
import Landing from "./components/Landing";
import AboutMe from "./components/AboutMe";
import ProjectsCarousel from "./components/ProjectsCarousel";

function App() {
  return (
    <>
      <Header />
      <main className="bg-[#f4f1eb]">
        <Landing />
        <AboutMe />
        <ProjectsCarousel />

        {/* Contact Section */}
        <section
          id="contactme-section"
          className="min-h-screen bg-gray-200 flex items-center justify-center text-4xl"
        >
          Contact Section Placeholder
        </section>
      </main>
    </>
  );
}

export default App;
