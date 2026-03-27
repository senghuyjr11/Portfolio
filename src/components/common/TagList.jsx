import React from "react";

const TagList = ({ tags }) => {
  return (
    <div className="mt-[18px] flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="border border-line bg-[rgba(255,251,245,0.7)] px-[10px] py-1 text-[0.92rem] transition hover:bg-ink hover:text-paper"
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export default TagList;
