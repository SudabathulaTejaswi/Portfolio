import React, { useRef } from "react";
import "./Certifications.css";
import content from "../data/content.json";

const Certifications = () => {
  const certifications = content.certifications;
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -280 : 280,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="certifications-carousel">
      <h2 className="about-heading">
        <span className="about-sub">validated learning</span>
        <span className="about-main">My Certifications</span>
      </h2>
      <div className="carousel-wrapper">
        <button className="scroll-btn left" onClick={() => scroll("left")}>
          ◀
        </button>
        <div className="cert-scroll-container" ref={scrollRef}>
          {certifications.map((cert, index) => (
            <div className="cert-card" key={index}>
              <h3>{cert.title}</h3>
              <p>{cert.company}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-link"
              >
                View Certificate
              </a>
            </div>
          ))}
        </div>
        <button className="scroll-btn right" onClick={() => scroll("right")}>
          ▶
        </button>
      </div>
    </section>
  );
};

export default Certifications;
