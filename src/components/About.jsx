import React from 'react';
import './About.css';
import profileImg from '../assets/image.png'; // Replace with your image path

const About = ({ content }) => {
  return (
    <section className="about-section" id="about">
      <h2 className="about-heading">
        <span className="about-sub">ABOUT ME</span>
        <span className="about-main">My Introduction</span>
      </h2>

      <div className="about-body">
        <div className="about-image-wrapper">
          <div className="about-image-border">
            <img src={profileImg} alt="Profile" className="about-image" />
          </div>
        </div>

        <div className="about-content">
          <p className="about-description">
            A highly motivated Computer Science Engineering graduate seeking to leverage strong coding and web development skills to contribute to innovative projects, enhance user experiences, and drive measurable improvements in web application performance.
          </p>
          <p className="about-description">
            My focus areas include full-stack development with the MERN stack, implementing responsive designs, and solving complex programming challenges with efficient algorithms.
          </p>

          <div className="about-stats">
            <div className="stat-box">
              <h3 className="stat-number">{content.leetcodeProblems}+</h3>
              <p className="stat-label">leetcode PROBLEMS</p>
            </div>
            <div className="stat-box">
              <h3 className="stat-number">{content.projects?.length || 0}+</h3>
              <p className="stat-label">PROJECTS</p>
            </div>
            <div className="stat-box">
              <h3 className="stat-number">{content.cgpa}</h3>
              <p className="stat-label">CGPA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
