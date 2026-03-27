import React from "react";
import SectionLabel from "../common/SectionLabel";

const SkillsSection = ({ groups }) => {
  return (
    <section
      className="mt-[clamp(44px,8vw,76px)] animate-page-rise"
      id="skills"
    >
      <SectionLabel>SKILLS</SectionLabel>
      <div className="grid gap-[26px] md:grid-cols-2">
        {groups.map((group) => (
          <div
            key={group.title}
            className="min-h-full border-l-2 border-line py-1 pl-[18px]"
          >
            <p className="mb-[14px] mt-0 text-ink-soft">
              {"// "}
              {group.title}
            </p>
            <ul className="m-0 grid list-none gap-[10px] p-0 text-[clamp(1rem,1.3vw,1.08rem)]">
              {group.items.map((item) => (
                <li key={item}>▪ {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
