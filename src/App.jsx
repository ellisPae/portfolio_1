import React from "react";
import Header from "./components/Header";
import Landing from "./components/Landing";

function App() {
  return (
    <>
      <Header />
      <Landing />
      <main className="pt-20 min-h-screen bg-gray-100">
        <section className="h-[100vh] flex items-center justify-center text-4xl">
          Landing Section Placeholder
        </section>
        <section
          id="projects-section"
          className="h-[100vh] bg-white flex items-center justify-center text-4xl"
        >
          Projects Section Placeholder
        </section>
        <section
          id="contactme-section"
          className="h-[100vh] bg-gray-200 flex items-center justify-center text-4xl"
        >
          Contact Section Placeholder
        </section>
      </main>
    </>
  );
}

export default App;
