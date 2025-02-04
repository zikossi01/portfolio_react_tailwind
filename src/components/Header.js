import React, { useState } from "react";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const headerStyle = {
    backgroundColor: "#333",
    padding: "1rem rem",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "fixed",
    top: "0",
    width: "100%",
    zIndex: "1000",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
  };

  const titleStyle = {
    fontSize: "1.8rem",
    fontWeight: "bold",
    letterSpacing: "1px",
    fontFamily: '"Poppins", sans-serif',
    animation: "fadeIn 1s ease-out forwards",
  };

  const navStyle = {
    display: "flex",
    gap: "2rem",
    marginLeft: "auto",
    listStyleType: "none",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: "1.1rem",
    fontWeight: "500",
    padding: "0.8rem 1.2rem",
    borderRadius: "8px",
    transition: "all 0.3s ease",
  };

  const linkHoverStyle = {
    backgroundColor: "#ff61a6",
    color: "#fff",
  };

  const mobileNavStyle = {
    display: "none", // Hidden by default for large screens
  };

  const mobileMenuButtonStyle = {
    display: "none", // Hidden by default for large screens
    backgroundColor: "transparent",
    border: "none",
    color: "white",
    fontSize: "2rem",
    cursor: "pointer",
  };

  // Media Query: Make the mobile menu button visible on smaller screens
  const mobileNavMediaQuery = {
    "@media screen and (max-width: 768px)": {
      mobileNavStyle: {
        display: isMobileMenuOpen ? "flex" : "none",
        flexDirection: "column",
        gap: "1.5rem",
        position: "absolute",
        top: "60px",
        left: "50%",
        transform: "translateX(-50%)",
        backgroundColor: "#333",
        padding: "1rem",
        borderRadius: "8px",
        boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
      },
      mobileMenuButtonStyle: {
        display: "block",
      },
    },
  };

  return (
    <header style={headerStyle}>
      {/* Title */}
      <h1 style={titleStyle}>Welcome To My Portfolio</h1>

      {/* Navigation Links */}
      <nav style={navStyle}>
        {["Home", "About", "Skills", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            style={linkStyle}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = linkHoverStyle.backgroundColor;
              e.target.style.color = linkHoverStyle.color;
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = "white";
            }}
          >
            {item}
          </a>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        style={mobileMenuButtonStyle}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        &#9776;
      </button>

      {/* Mobile Navigation */}
      <div style={mobileNavStyle}>
        {["Home", "About", "Skills", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            style={{
              ...linkStyle,
              padding: "1rem 2rem",
              fontSize: "1.2rem",
              textAlign: "center",
            }}
            onClick={() => setIsMobileMenuOpen(false)} // Close menu after selecting item
          >
            {item}
          </a>
        ))}
      </div>

      <style>
        {`
          @keyframes fadeIn {
            0% {
              opacity: 0;
              transform: translateY(-20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          /* Mobile Navigation Style */
          @media screen and (max-width: 768px) {
            nav {
              display: none;
            }

            ${mobileNavMediaQuery["@media screen and (max-width: 768px)"].mobileNavStyle}
            ${mobileNavMediaQuery["@media screen and (max-width: 768px)"].mobileMenuButtonStyle}
          }
        `}
      </style>
    </header>
  );
}

export default Header;
