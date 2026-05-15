import React from "react";
import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";
import SkillsSection from "../sections/SkillsSection";
import ProjectsSection from "../sections/ProjectsSection";
import PublicationsSection from "../sections/PublicationsSection";
import ExperienceSection from "../sections/ExperienceSection";
import ContactSection from "../sections/ContactSection";
import usePortfolioContent from "../../hooks/usePortfolioContent";

const PortfolioPage = () => {
  const content = usePortfolioContent();

  return (
    <main className="page-sheet relative z-0 min-h-screen w-full">
      <div className="relative z-20 mx-auto w-[calc(100%-16px)] max-w-[1240px] pb-16 pl-4 pr-4 pt-14 md:w-[calc(100%-24px)] md:pb-20 md:pl-6 md:pr-6 md:pt-20">
        <HeroSection identity={content.identity} />
        <AboutSection paragraphs={content.about} />
        <ProjectsSection projects={content.researchProjects} />
        <PublicationsSection publications={content.publications} />
        <ExperienceSection experience={content.experience} />
        <SkillsSection groups={content.skillGroups} />
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
