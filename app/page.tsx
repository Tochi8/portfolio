import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import ValueProposition from "@/components/sections/ValueProposition";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Skills from "@/components/sections/Skills";
import EngineeringPhilosophy from "@/components/sections/EngineeringPhilosophy";
import About from "@/components/sections/About";
import TimelineSection from "@/components/sections/Timeline";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <ValueProposition />
        <FeaturedProjects />
        <Skills />
        <EngineeringPhilosophy />
        <About />
        <TimelineSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
