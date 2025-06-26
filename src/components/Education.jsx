// src/components/Education.jsx
import React from "react";
import "./Education.css";

const Education = ({ content }) => {
  return (
    <div className="education-container" id= "education">
      <h2 className="about-heading">
        <span className="about-sub">My Journey</span>
        <span className="about-main">Education</span>
      </h2>
      <div className="timeline">
        {content.map((edu, index) => (
          <div key={index} className={`edu-card ${edu.side}`}>
            <div className="tag">{edu.duration}</div>
            <h3>{edu.title}</h3>
            <p>{edu.institution}</p>
            <p className="score">{edu.score}</p>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Education;
