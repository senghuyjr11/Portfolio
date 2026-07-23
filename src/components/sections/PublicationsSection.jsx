import React from "react";
import SectionLabel from "../common/SectionLabel";

const PublicationsSection = ({ publications }) => {
  return (
    <section
      className="mt-[clamp(44px,8vw,76px)] animate-page-rise"
      id="publications"
    >
      <SectionLabel>PUBLICATIONS</SectionLabel>
      <div className="grid gap-4">
        {publications.map((publication) => (
          <article
            key={`${publication.title}-${publication.venue}-${publication.year}`}
            className="border-l-2 border-line py-1 pl-[18px]"
          >
            <div className="flex flex-col items-start justify-between gap-1 md:flex-row md:items-baseline md:gap-4">
              <h3 className="m-0 font-display font-bold tracking-[0.04em]">
                {publication.title}
              </h3>
              <span className="whitespace-nowrap text-ink-soft">
                {publication.venue} {publication.year}
              </span>
            </div>
            <p className="mt-3 text-[clamp(1rem,1.3vw,1.08rem)]">
              &gt; {publication.status}
            </p>
            {publication.note ? (
              <p className="mt-2 text-[0.98rem] leading-7 text-ink-soft">
                {publication.note}
              </p>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
};

export default PublicationsSection;
