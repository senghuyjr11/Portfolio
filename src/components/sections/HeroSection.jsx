import React from "react";

const HeroSection = ({ identity }) => {
  const introPrefix = "Research focus:";
  const hasIntroPrefix = identity.intro.startsWith(introPrefix);

  return (
    <header className="grid animate-page-rise gap-[18px]">
      <p className="m-0 font-display text-[2rem] tracking-[0.04em] sm:text-[2.35rem] md:text-[3.25rem]">
        ▶ {identity.name}
      </p>
      <p className="m-0 text-[clamp(1rem,1.3vw,1.08rem)]">
        &gt; {identity.strapline}
      </p>
      <div className="paper-rule" />
      <div className="grid max-w-[52rem] gap-2 text-[clamp(1rem,1.3vw,1.08rem)]">
        <p className="m-0">
          {hasIntroPrefix ? (
            <>
              <strong>{introPrefix}</strong>
              {identity.intro.slice(introPrefix.length)}
            </>
          ) : (
            identity.intro
          )}
        </p>
        <p className="m-0">{identity.status}</p>
      </div>
      <div className="flex flex-wrap gap-3 pt-1 text-sm">
        {identity.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="border border-line px-3 py-1 transition hover:-translate-y-px hover:bg-ink hover:text-paper"
          >
            {link.label}
          </a>
        ))}
      </div>
    </header>
  );
};

export default HeroSection;
