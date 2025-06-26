import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const fixedUsername = "admin";
  const fixedPassword = "password123";

  const handleToggleClick = () => {
    if (!isLoggedIn) {
      setShowLogin(true);
    } else {
      // Optionally, handle logout or theme toggle here
      alert("Already logged in!");
    }
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    if (username === fixedUsername && password === fixedPassword) {
      setIsLoggedIn(true);
      setShowLogin(false);
      // Redirect to portfolio editor page after login
      window.location.href = "/portfolio-editor"; // change this URL to your editor
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <>
      <header className="portfolio-header">
        <div className="logo">
          TS<span className="dot">.</span>
        </div>

        <nav className="nav-links">
          <a href="#home">HOME</a>
          <a href="#about">ABOUT</a>
          <a href="#education">EDUCATION</a>
          <a href="#experience">EXPERIENCE</a>
          <a href="#projects">PROJECTS</a>
          <a href="#achievements">ACHIEVEMENTS</a>
          <a href="#contact">CONTACT</a>
        </nav>

        <div className="theme-toggle" onClick={handleToggleClick} style={{cursor: 'pointer'}}>
          <span role="img" aria-label="dark-mode">
            ⚙️
          </span>
        </div>
      </header>

      {showLogin && (
        <div className="login-modal">
          <div className="login-content">
            <h3>Login to Edit Portfolio</h3>
            <form onSubmit={handleLoginSubmit}>
              <input
                type="text"
                name="username"
                placeholder="Username"
                required
                autoFocus
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
              />
              <button type="submit">Login</button>
              <button
                type="button"
                onClick={() => setShowLogin(false)}
                style={{ marginLeft: "10px" }}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
