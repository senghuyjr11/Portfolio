import React from "react";
import SectionLabel from "../common/SectionLabel";

const ExperienceSection = ({ experience }) => {
  return (
    <section
      className="mt-[clamp(44px,8vw,76px)] animate-page-rise"
      id="experience"
    >
      <SectionLabel>EXPERIENCE</SectionLabel>
      <div className="grid gap-8">
        {experience.map((item) => (
          <article
            key={`${item.role}-${item.period}`}
            className="grid grid-cols-[10px_minmax(0,1fr)] gap-[18px]"
          >
            <div className="w-1 bg-line" />
            <div className="pb-1">
              <div className="flex flex-col items-start justify-between gap-[6px] md:flex-row md:items-baseline md:gap-4">
                <h3 className="m-0 font-display tracking-[0.04em]">
                  {item.role}
                </h3>
                <span className="whitespace-nowrap text-ink-soft">
                  {item.period}
                </span>
              </div>
              <p className="mt-3 text-[clamp(1rem,1.3vw,1.08rem)]">
                {item.organization}
              </p>
              {Array.isArray(item.summary) ? (
                item.summary.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mt-3 text-[clamp(1rem,1.3vw,1.08rem)]"
                  >
                    &gt; {paragraph}
                  </p>
                ))
              ) : (
                <p className="mt-3 text-[clamp(1rem,1.3vw,1.08rem)]">
                  &gt; {item.summary}
                </p>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
