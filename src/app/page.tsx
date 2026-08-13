import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Philosophy from "@/components/sections/Philosophy";
import MtrxTech from "@/components/sections/MtrxTech";
import Projects from "@/components/sections/Projects";
import SkillsRoadmap from "@/components/sections/SkillsRoadmap";
import Timeline from "@/components/sections/Timeline";
import LongTermVision from "@/components/sections/LongTermVision";
import Contact from "@/components/sections/Contact";
import CustomCursor from "@/components/ui/CustomCursor";

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden selection:bg-[var(--color-brand-red)] selection:text-white">
      <CustomCursor />
      <Navigation />
      
      <div className="flex flex-col">
        <Hero />
        <About />
        <Philosophy />
        <MtrxTech />
        <Projects />
        <SkillsRoadmap />
        <Timeline />
        <LongTermVision />
        <Contact />
      </div>

      <Footer />
    </main>
  );
}
