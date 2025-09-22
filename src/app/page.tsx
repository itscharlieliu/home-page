import Navigation from "@/components/Navigation";
import HeroSection from "@/components/Sections/HeroSection";
import AboutSection from "@/components/Sections/AboutSection";
import PhotographySection from "@/components/Sections/PhotographySection";
import ProjectsSection from "@/components/Sections/ProjectsSection";
import UpcomingProjectsSection from "@/components/Sections/UpcomingProjectsSection";
import ContactSection from "@/components/Sections/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <PhotographySection />
      <ProjectsSection />
      <UpcomingProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
