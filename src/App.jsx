import Navbar from "@/components/navbar/Navbar.jsx";
import Hero from "@/components/hero/Hero.jsx";
import About from "@/components/about/About.jsx";
import Services from "@/components/services/Services.jsx";
import { TracingBeam } from "@/components/ui/tracing-beam.jsx";
import Projects from "@/components/projects/Projects";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton";
import { useState } from "react";

function App() {
  const [rerender, setRerender] = useState(false);
  return (
    <div className=" bg-bleuish w-full h-full">
      <Navbar />
      <Hero />
      <TracingBeam className="px-6" rerender={rerender}>
        <div className="antialiased pt-4 relative h-full">
          <Projects setRerender={setRerender} />
          <Services />
          <About />
          <Contact />
        </div>
      </TracingBeam>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
