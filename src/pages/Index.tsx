import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PhilosophySection from "@/components/PhilosophySection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import WhatIDoSection from "@/components/WhatIDoSection";
import VideoSection from "@/components/VideoSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <PhilosophySection />
      <SkillsSection />
      <ProjectsSection />
      <WhatIDoSection />
      <VideoSection />
      <ContactSection />
    </div>
  );
};

export default Index;
