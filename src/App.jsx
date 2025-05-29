import React from "react";
import Header from "./components/Header";
import Landing from "./components/Landing";
import AboutMe from "./components/AboutMe";
import ProjectsCarousel from "./components/ProjectsCarousel";
import ContactMe from "./components/ContactMe";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header />
      <main className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">
        <section id="landing-section" className="snap-start h-screen">
          <Landing />
        </section>
        <section id="aboutme-section" className="snap-start h-screen">
          <AboutMe />
        </section>
        <section id="projects-section" className="snap-start h-screen">
          <ProjectsCarousel />
        </section>
        <section id="contactme-section" className="snap-start h-screen">
          <ContactMe />
        </section>
      </main>
      <ThemeToggle />
    </div>
  );
}

export default App;
