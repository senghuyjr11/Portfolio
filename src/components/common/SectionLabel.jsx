import React from "react";

const SectionLabel = ({ children }) => {
  return (
    <h2 className="mb-5 font-display text-[1.5rem] tracking-[0.04em] sm:text-[1.75rem] md:text-[2rem]">
      {children}
    </h2>
  );
};

export default SectionLabel;
