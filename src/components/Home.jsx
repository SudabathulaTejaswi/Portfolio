import React from 'react';
import './Home.css';
import profile from '../assets/profile2.jpg';

const Home = () => {
  return (
    <section className="home-section" id="home">
      <div className="intro">
        <p className="greeting">Hello, I'm</p>
        <h1 className="name">Sudabathula <span>Tejaswi</span></h1>
        <p className="desc">
          A highly motivated Computer Science Engineer specialized in<br />
          web development & programming, building exceptional digital experiences.
        </p>
        <div className="buttons">
          <div className="icon-btns">
            <a href="mailto:tejaswi.s1234@gmail.com">📧</a>
            <a href="https://linkedin.com/in/tejaswi-sudhabattula" target="_blank">🔗</a>
            <a href="https://github.com/SudabathulaTejaswi" target="_blank">💻</a>
            <a href="https://leetcode.com/u/Tejaswi_S/" target="_blank">🧠</a>
          </div>
          <a href="#projects" className="primary-btn">View Projects</a>
          <a href="#contact" className="outline-btn">Contact Me</a>
        </div>
      </div>
      <div className="image-wrapper">
        <img src={profile} alt="Profile" />
      </div>
    </section>
  );
};

export default Home;
