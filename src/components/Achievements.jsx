import React from "react";
import "./Achievements.css";
import content from "../data/content.json";

const icons = {
  "Leet Code": "🏆",
  "HackerRank": "🎖️",
  "Codechef": "🥇",
  "ECET": "📘",
};

const Achievements = () => {
  const achievements = content.achievements;

  return (
    <section className="achievements-section" id="achievements">
      <h2 className="about-heading">
        <span className="about-sub">My Accomplishments</span>
        <span className="about-main">Achievements</span>
      </h2>
      <div className="achievement-list">
        {achievements.map((item, index) => (
          <div className="achievement-card" key={index}>
            <div className="achievement-icon">
              <span>{icons[item.title] || "🏅"}</span>
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
