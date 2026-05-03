import Navbar from "./layout/Navbar";

import { Hero } from "./section/Hero";
import { About } from "./section/About";
import { Contact } from "./section/Contact";
import { Experience } from "./section/Experience";
import { Projects } from "./section/Projects";
import { Footer } from "./layout/Footer";



function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />

      <main>
        <Hero />
        <Projects />
        <Experience />
        <About />
        <Contact />
        <Footer />
      </main>
      
    </div>
  );
}

export default App;
