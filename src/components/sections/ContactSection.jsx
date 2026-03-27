import React from "react";

const ContactSection = ({ contact, year, identityName }) => {
  return (
    <footer
      className="mt-[calc(clamp(44px,8vw,76px)+10px)] animate-page-rise"
      id="contact"
    >
      <div className="paper-rule" />
      <div className="grid gap-2 px-2 pb-0 pt-[22px] text-[clamp(1rem,1.3vw,1.08rem)]">
        <p className="m-0 text-ink-soft">&gt; {contact.prompt}</p>
        <p className="m-0">
          <span className="inline-block w-24 text-ink-soft">email</span>
          <span>{contact.email}</span>
        </p>
        <p className="m-0">
          <span className="inline-block w-24 text-ink-soft">phone</span>
          <span>{contact.phone}</span>
        </p>
        <p className="m-0">
          <span className="inline-block w-24 text-ink-soft">location</span>
          <span>{contact.location}</span>
        </p>
        {contact.note ? <p className="m-0 pt-1 text-ink-soft">{contact.note}</p> : null}
      </div>
      <p className="mt-7 text-center text-ink-soft">
        © {year} {identityName}
      </p>
    </footer>
  );
};

export default ContactSection;
