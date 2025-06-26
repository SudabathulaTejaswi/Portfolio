import React from "react";
import content from "../data/content.json";
import "./Experience.css";

const Experience = () => {
  const experiences = content.experience;

  return (
    <section className="experience-section" id ="experience">
     <h2 className="about-heading">
        <span className="about-sub">Experience</span>
        <span className="about-main">My Professional journey</span>
      </h2>

      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div className="experience-card" key={index}>
            <h3 className="experience-type">{exp.type}</h3>
            <h4 className="experience-company">{exp.company}</h4>
            <p className="experience-techstack">
              <strong>Tech Stack:</strong> {exp.techstack}
            </p>
            <ul className="experience-description">
              {exp.description.split("\n").map((line, idx) => (
                <li key={idx}>{line}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
