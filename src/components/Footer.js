import React from "react";

// You can use FontAwesome icons for social media links or import any icons library you prefer.
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

function Footer() {
  const footerStyle = {
    backgroundColor: "#282c34",
    color: "white",
    textAlign: "center",
    padding: "0.5rem 0",  // Reduced padding to make the footer smaller
    width: "100%",
    position: "fixed",
    bottom: "0",
    left: "0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  };

  const paragraphStyle = {
    margin: "0.5rem 0",
    fontSize: "1rem",  // Smaller font size
  };

  const socialIconsStyle = {
    display: "flex",
    gap: "1rem",
    justifyContent: "center",
    marginTop: "0.5rem",  // Reduced space between text and icons
  };

  const iconButtonStyle = {
    backgroundColor: "#333",
    border: "none",
    borderRadius: "50%",
    color: "white",
    fontSize: "1.2rem",  // Smaller icon size
    padding: "0.8rem",  // Reduced padding for smaller buttons
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
        {/* LinkedIn Icon */}
        <button
          style={iconButtonStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit" }}
          >
            <FaLinkedin />
          </a>
        </button>

        {/* GitHub Icon */}
        <button
          style={iconButtonStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <a
            href="https://www.github.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit" }}
          >
            <FaGithub />
          </a>
        </button>

        {/* Instagram Icon */}
        <button
          style={iconButtonStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit" }}
          >
            <FaInstagram />
          </a>
        </button>
      </div>
    </footer>
  );
}

export default Footer;
