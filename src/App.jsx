import Navbar from "./layout/Navbar";

import { Hero } from "./section/Hero";
import { About } from "./section/About";
import { Contact } from "./section/Contact";
import { Experience } from "./section/Experience";
import { Projects } from "./section/Projects";
import { Testimonials } from "./section/Testimonials";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />

      <main>
        <Hero />
        <Projects />
        <Experience />
        <Testimonials />
        <About />
        <Contact />
      </main>
      
    </div>
  );
}

export default App;
