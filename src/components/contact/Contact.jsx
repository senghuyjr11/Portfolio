import React from "react";
import "./contact.css";
import { MdOutlineMail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";
import { useRef } from "react";
import emailjs from "emailjs-com";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    let fullName = document.getElementById("fullName").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (fullName && email && message != "") {
      emailjs.sendForm(
        "service_wmz3224",
        "template_87og8u7",
        form.current,
        "x4QdDZLepGg2fLe2W"
      );
      toast("Email has sent successfully.");
      return;
    }
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineMail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>senghuy001@gmail.com</h5>
            <a href="mailto:senghuy001@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <RiMessengerLine className="contact_option-icon" />
            <h4>Messenger</h4>
            <h5>Senghuy</h5>
            <a href="https://m.me/senghuy.chea" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <AiOutlineInstagram className="contact_option-icon" />
            <h4>Instagram</h4>
            <h5>Senghuy</h5>
            <a
              href="https://www.instagram.com/senghuyjr11/"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTION */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full name"
            id="fullName"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            id="email"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            id="message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
