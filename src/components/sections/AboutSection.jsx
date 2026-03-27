import React from "react";
import SectionLabel from "../common/SectionLabel";

const AboutSection = ({ paragraphs }) => {
  return (
    <section
      className="mt-[clamp(44px,8vw,76px)] animate-page-rise"
      id="about"
    >
      <SectionLabel>ABOUT</SectionLabel>
      <div className="border-l-2 border-line py-1 pl-[18px]">
        {paragraphs.map((paragraph) => (
          <p
            key={paragraph}
            className="mb-5 mt-0 text-[clamp(1rem,1.3vw,1.08rem)] last:mb-0"
          >
            &gt; {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
