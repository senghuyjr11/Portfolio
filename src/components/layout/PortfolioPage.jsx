import React from "react";
import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";
import SkillsSection from "../sections/SkillsSection";
import ProjectsSection from "../sections/ProjectsSection";
import ExperienceSection from "../sections/ExperienceSection";
import ContactSection from "../sections/ContactSection";
import usePortfolioContent from "../../hooks/usePortfolioContent";

const PortfolioPage = () => {
  const content = usePortfolioContent();

  return (
    <main
      className="page-sheet relative z-0 min-h-screen w-full"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/bg.jpg)`,
      }}
    >
      <div className="relative z-20 mx-auto w-[calc(100%-24px)] max-w-page px-6 pb-16 pt-14 md:w-[calc(100%-40px)] md:px-10 md:pb-20 md:pt-20">
        <HeroSection identity={content.identity} />
        <AboutSection paragraphs={content.about} />
        <SkillsSection groups={content.skillGroups} />
        <ProjectsSection projects={content.projects} />
        <ExperienceSection experience={content.experience} />
        <ContactSection
          contact={content.contact}
          year={content.year}
          identityName={content.identity.name}
        />
      </div>
    </main>
  );
};

export default PortfolioPage;
