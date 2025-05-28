import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import foosiccampImg from "../assets/projects/foosiccamp.png";
import EPVisualsImg from "../assets/projects/ep_visuals.png";
import generationTimeImg from "../assets/projects/generation_time.png";
import calculatorImg from "../assets/projects/calculator.png";

const projects = [
  {
    title: "foosiccamp",
    description:
      "A full-stack Bandcamp clone that empowers music artists to share, stream, and sell their work directly to listeners. Features a dynamic audio player with custom playback logic, multi-model database queries via jbuilder, and full-text search across songs, albums, and artists using genre-based filters.",
    github: "https://github.com/ellisPae/foosicCamp",
    image: foosiccampImg,
  },
  {
    title: "Generation Time",
    description:
      "A browser-based clone of agar.io, built with p5.js and vanilla JavaScript. Implements player-controlled vector physics, geometric collision handling, and camera-based frame translation to simulate an immersive, real-time multiplayer environment with dynamic growth mechanics.",
    github: "https://github.com/ellisPae/Generation-Time",
    image: generationTimeImg,
  },
  {
    title: "React Scientific Calculator",
    description:
      "A responsive, React + TypeScript implementation of Apple’s iOS scientific calculator. Offers full scientific functionality with clean UI, accurate operation chaining, and component-driven state logic.",
    github: "https://github.com/ellisPae/react-sci-calculator",
    image: calculatorImg,
  },
  {
    title: "EP Visuals",
    description:
      "An interactive audio visualizer powered by three.js and the Web Audio API. Users can upload a track to generate vibrant, real-time visuals that pulse and react in sync with the music’s frequency spectrum and rhythm.",
    github: "https://github.com/ellisPae/ep_visuals",
    image: EPVisualsImg,
  },
];

const ProjectsCarousel = () => {
  return (
    <section
      id="projects-section"
      className="bg-white min-h-screen text-gray-800 flex items-center justify-center px-6 pt-32 pb-20 dark:bg-gray-900 text-gray-800 dark:text-gray-200"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-left">Projects</h2>
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          autoPlay
          interval={5000}
          useKeyboardArrows
          swipeable
          emulateTouch
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center gap-10 bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-200"
            >
              <div className="w-[200px] h-[200px] flex-shrink-0 overflow-hidden rounded-md shadow">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center md:text-left max-w-lg">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a
                  href={project.github}
                  className="text-blue-600 hover:underline font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub →
                </a>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default ProjectsCarousel;
