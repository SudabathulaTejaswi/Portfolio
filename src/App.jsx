import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import content from "./data/content.json";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import Certifications from "./components/Certifications";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import PortfolioEditor from "./components/PortfolioEditor";

const FullPortfolio = () => (
  <>
    <Header />
    <Home content={content} />
    <About content={content} />
    <Skills content={content} />
    <Education content={content.education} />
    <Experience />
    <Projects content={content.projects} />
    <Achievements content={content} />
    <Certifications />
    <Contact content={content} />
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FullPortfolio />} />
        <Route path="/portfolio-editor" element={<PortfolioEditor />} />
      </Routes>
    </Router>
  );
}

export default App;
