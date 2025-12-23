import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Contact from "./components/sections/Contact";
import Minigame from "./components/sections/Minigame";
import Footer from "./components/sections/Footer";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center px-6 py-12 md:px-24">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
          <Hero  />
          <Skills />
          <Projects />    
          <div className="w-full py-10 flex justify-center">
              <Minigame />
          </div>      
          <Contact/>
        </div>
      </main>
      <Footer/>
    </>
  );
};