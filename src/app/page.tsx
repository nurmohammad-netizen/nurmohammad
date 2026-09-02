import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BackgroundFX } from "@/components/ui/BackgroundFX";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Certifications } from "@/components/sections/Certifications";
import { Entrepreneurship } from "@/components/sections/Entrepreneurship";
import { Growth } from "@/components/sections/Growth";
import { Leadership } from "@/components/sections/Leadership";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <BackgroundFX />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Entrepreneurship />
        <Growth />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
