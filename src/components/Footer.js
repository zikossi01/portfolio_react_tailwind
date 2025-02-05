import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

function App() {
  const mainContentStyle = {
    minHeight: "100vh",  // Ensures the content area takes at least the full height of the viewport
    display: "flex",
    flexDirection: "column",  // Makes sure the footer stays at the bottom
    margin: "0", // Ensures no extra margin is applied
    padding: "0", // Ensures no extra padding is applied
  };

  return (
    <div style={mainContentStyle}>
      <div style={{ flex: 1 }}>
        {/* Your other content goes here */}
      </div>
      <Footer />
    </div>
  );
}

function Footer() {
  const footerStyle = {
    backgroundColor: "#282c34",
    color: "white",
    textAlign: "center",
    padding: "1rem 0",  // Increased padding for better visibility
    width: "100%",
    position: "relative",  // Keep the footer in the document flow
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 -2px 5px rgba(0, 0, 0, 0.1)",
    marginTop: "auto",  // Push footer to the bottom
  };

  const paragraphStyle = {
    margin: "0",  // Remove margin between the contact text and the footer
    fontSize: "1rem",
  };

  const socialIconsStyle = {
    display: "flex",
    gap: "1rem",
    justifyContent: "center",
    marginTop: "0.5rem",  // Slight margin to space out icons from text
  };

  const iconButtonStyle = {
    backgroundColor: "#333",
    border: "none",
    borderRadius: "50%",
    color: "white",
    fontSize: "1.2rem",
    padding: "0.8rem",
    cursor: "pointer",
    transition: "transform 0.3s ease, background-color 0.3s ease",
  };

  const iconButtonHoverStyle = {
    backgroundColor: "#ff61a6",
    transform: "scale(1.1)",
  };

  const handleMouseEnter = (e) => {
    e.target.style.backgroundColor = iconButtonHoverStyle.backgroundColor;
    e.target.style.transform = iconButtonHoverStyle.transform;
  };

  const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = "#333";
    e.target.style.transform = "scale(1)";
  };

  return (
    <footer style={footerStyle}>
      <p style={paragraphStyle}>
        &copy; {new Date().getFullYear()} - Contact me:
      </p>

      <div style={socialIconsStyle}>
        <button
          style={iconButtonStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }}>
            <FaLinkedin />
          </a>
        </button>

        <button
          style={iconButtonStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }}>
            <FaGithub />
          </a>
        </button>

        <button
          style={iconButtonStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }}>
            <FaInstagram />
          </a>
        </button>
      </div>
    </footer>
  );
}

export default App;
