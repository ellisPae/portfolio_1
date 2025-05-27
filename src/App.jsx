import React from "react";
import Header from "./components/Header";
import Landing from "./components/Landing";
import AboutMe from "./components/AboutMe";
import ProjectsCarousel from "./components/ProjectsCarousel";
import ContactMe from "./components/ContactMe";

function App() {
  return (
    <>
      <Header />
      <main className="bg-[#f4f1eb]">
        <Landing />
        <AboutMe />
        <ProjectsCarousel />
        <ContactMe />
      </main>
    </>
  );
}

export default App;
