import React, { useState, useEffect } from "react";

const PortfolioEditor = () => {
  const [portfolioData, setPortfolioData] = useState({
    name: "",
    about: "",
    projects: [],
    // add your editable fields here
  });

  // Load saved data from localStorage (if any)
  useEffect(() => {
    const saved = localStorage.getItem("portfolioData");
    if (saved) {
      setPortfolioData(JSON.parse(saved));
    }
  }, []);

  const handleChange = (e) => {
    setPortfolioData({
      ...portfolioData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    localStorage.setItem("portfolioData", JSON.stringify(portfolioData));
    alert("Portfolio saved locally!");
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Edit Your Portfolio</h1>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={portfolioData.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        About:
        <textarea
          name="about"
          value={portfolioData.about}
          onChange={handleChange}
        />
      </label>
      <br />
      {/* Add more editable fields here */}
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default PortfolioEditor;
