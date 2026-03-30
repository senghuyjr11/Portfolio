import React from "react";

const ContactSection = ({ contact }) => {
  return (
    <footer
      className="mt-[calc(clamp(44px,8vw,76px)+10px)] animate-page-rise"
      id="contact"
    >
      <div className="paper-rule" />
      <div className="grid gap-2 px-2 pb-0 pt-[22px] text-[clamp(1rem,1.3vw,1.08rem)]">
        <p className="m-0"><strong>&gt; {contact.prompt}</strong></p>
        <p className="m-0">
          <span className="inline-block w-32">Email</span>
          <span>{contact.Email}</span>
        </p>
        <p className="m-0">
          <span className="inline-block w-32">Location</span>
          <span>{contact.Location}</span>
        </p>
        {contact.note ? <p className="m-0 pt-1">{contact.note}</p> : null}
      </div>
    </footer>
  );
};

export default ContactSection;
