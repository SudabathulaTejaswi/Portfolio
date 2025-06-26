import React from "react";
import "./Contact.css";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaCode,
  FaLaptopCode,
} from "react-icons/fa";


const Contact = ({content}) => {
  const whatsappNumber = "917013853417";

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    const text = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    const url = `https://wa.me/${whatsappNumber}?text=${text}`;

    window.open(url, "_blank");
  };

  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-heading">📬 Contact Me</h2>
      <p className="contact-subtitle">
        Let's build something amazing together.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
        ></textarea>
        <button type="submit">Send via WhatsApp 📲</button>
      </form>

      <div className="contact-icons">
        <a href={`mailto:${content.contact.email}`}>
          <FaEnvelope />
        </a>
        <a
          href={content.contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href={content.contact.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href={content.contact.leetcode}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaCode />
        </a>
        <a
          href={content.projects?.[0]?.link || "#"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLaptopCode />
        </a>
      </div>
    </section>
  );
};

export default Contact;
