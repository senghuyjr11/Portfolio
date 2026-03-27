import React from "react";
import SectionLabel from "../common/SectionLabel";

const ProjectsSection = ({ projects }) => {
  return (
    <section
      className="mt-[clamp(44px,8vw,76px)] animate-page-rise"
      id="projects"
    >
      <SectionLabel>RESEARCH</SectionLabel>
      <div className="grid gap-4">
        {projects.map((project) => (
          <article
            key={project.title}
            className="border-2 border-line px-[18px] pb-4 pt-[18px] transition duration-200 hover:-translate-y-0.5"
          >
            <div className="flex flex-col items-start justify-between gap-1 md:flex-row md:items-baseline md:gap-4">
              <h3 className="m-0 font-display tracking-[0.04em]">
                {project.title}
              </h3>
              <span className="whitespace-nowrap text-ink-soft">
                {project.period}
              </span>
            </div>
            <p className="mt-3 text-[clamp(1rem,1.3vw,1.08rem)]">
              {project.description}
            </p>
            <p className="mt-3 text-[0.98rem] leading-7">
              <strong className="font-semibold text-ink">Keywords:</strong>{" "}
              {project.tags.join(", ")}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
