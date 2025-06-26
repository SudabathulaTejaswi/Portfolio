import React from 'react';
import './Skills.css';
import { FaCode, FaJava, FaPython, FaNodeJs, FaReact, FaDatabase, FaTools } from 'react-icons/fa';
import { SiJavascript, SiHtml5, SiCss3, SiMongodb, SiMysql, SiPostman,  SiExpress } from 'react-icons/si';

import { DiGit } from 'react-icons/di';

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-heading">
        <span className="skills-sub">MY SKILLS</span>
        <span className="skills-main">My Expertise</span>
      </h2>

      <div className="skills-grid">
        <div className="skill-card">
          <h3 className="skill-title">Programming Languages</h3>
          <ul>
            <li><FaCode className="icon" /> C</li>
            <li><FaCode className="icon" /> C++</li>
            <li><FaJava className="icon" /> Java</li>
            <li><FaPython className="icon" /> Python</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3 className="skill-title">Web Development</h3>
          <ul>
            <li><SiHtml5 className="icon" /> HTML & CSS</li>
            <li><SiJavascript className="icon" /> JavaScript</li>
            <li><FaReact className="icon" /> React.js</li>
            <li><FaNodeJs className="icon" /> Node.js</li>
            <li><SiExpress className="icon" /> Express.js</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3 className="skill-title">Databases</h3>
          <ul>
            <li><SiMongodb className="icon" /> MongoDB</li>
            <li><SiMysql className="icon" /> MySQL</li>
            <li><FaDatabase className="icon" /> SQL</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3 className="skill-title">Tools & Platforms</h3>
          <ul>
            <li><DiGit className="icon" /> Git & GitHub</li>
            <li><SiPostman className="icon" /> Postman</li>
            <li><FaCode className="icon" /> VS Code</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
