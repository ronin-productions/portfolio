import Navbar from "@/components/navbar/Navbar.jsx";
import Hero from "@/components/hero/Hero.jsx";
import About from "@/components/about/About.jsx";
import Services from "@/components/services/Services.jsx";
import { TracingBeam } from "@/components/ui/tracing-beam.jsx";
import Projects from "@/components/projects/Projects";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton";

function App() {
  return (
    <div className=" bg-bleuish w-full h-full">
      <Navbar />
      <Hero />
      <TracingBeam className="px-6">
        <div className="antialiased pt-4 relative h-full">
          <About />
          <Services />
          <Projects />
          <Contact />
        </div>
      </TracingBeam>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
