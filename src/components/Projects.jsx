import React from 'react';
import './Projects.css';
import { FaGithub } from 'react-icons/fa';

// Images
import cleanslateImg from '../assets/cleanslate.jpg';
import smartlearningImg from '../assets/smartlearning.jpg';
import fakenewsImg from '../assets/fakenews.jpg';
import smartcityImg from '../assets/smartcity.jpg';

const Projects = ({ content }) => {
  const projectImages = {
    "Clean Slate": cleanslateImg,
    "Smart Learning": smartlearningImg,
    "Fake News Detection": fakenewsImg,
    "Smart City Pulse": smartcityImg,
  };

  return (
    <section id="projects" className="projects-section">
      <div className="projects-header">
        <h2>MY WORK</h2>
        <h1>Recent Projects</h1>
        <div className="underline"></div>
      </div>

      <div className="projects-container">
        {content.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image">
              <img
                src={projectImages[project.title]}
                alt={project.title}
                className="project-thumbnail"
              />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
