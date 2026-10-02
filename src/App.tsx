import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Pipeline from "./components/Pipeline";
import Journey from "./components/Journey";
import GitHub from "./components/GitHub";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#060914] text-slate-200">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Pipeline />
        <Journey />
        <GitHub />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
