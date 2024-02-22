import Navbar from "./components/Navbar";
import Hero from "./components/Hero.jsx";
import Parallax from "./components/Parallax";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";

import "./App.scss"


function App() {
  return (
    <div>
      <section id="home" className="h-screen snap-center">
        <Navbar />
        <Hero />
      </section>
      <section id="skills" className="h-screen snap-center">
        <Parallax type="Skills" />
      </section>
      <section className="snap-center md:h-screen">
        <Skills />
      </section>
      <section id="projects" className="h-screen snap-center">
        <Parallax type="Projects" />
      </section>
      <Projects />
      <section id="contact" className="h-screen snap-center">
        <Contact />
      </section>
    </div>
  );
}

export default App;
