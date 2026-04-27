import PageEffects from "@/components/PageEffects";
import FrameOverlay from "@/components/FrameOverlay";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/Sections/HeroSection";
import WorkSection from "@/components/Sections/WorkSection";
import AboutSection from "@/components/Sections/AboutSection";
import ProjectsSection from "@/components/Sections/ProjectsSection";
import ContactSection from "@/components/Sections/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <PageEffects />
      <div className="cursor-glow" id="cursorGlow" />
      <FrameOverlay />
      <Navigation />
      <main id="top">
        <HeroSection />
        <WorkSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
