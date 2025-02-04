import React, { useEffect } from "react";
import $ from "jquery";

function Home() {
    // Skill data with percentage values
    const skills = [
        { name: "JavaScript", percentage: 90 },
        { name: "React", percentage: 85 },
        { name: "Node.js", percentage: 80 },
        { name: "MongoDB", percentage: 75 },
        { name: "CSS3", percentage: 70 },
    ];

    useEffect(() => {
        // Animations for skill and project cards
        $(".skill-card, .project-card")
            .css({ opacity: 0, transform: "translateY(50px)", transition: "transform 0.5s ease, opacity 0.5s ease" })
            .each(function (index) {
                $(this)
                    .delay(index * 300)
                    .animate({ opacity: 1, transform: "translateY(0)" }, 1500);
            });

        // Hover effect for skill cards
        $(".skill-card")
            .on("mouseenter", function () {
                $(this).animate(
                    {
                        transform: "scale(1.2) rotate(15deg)", // Crazy scaling and rotation on hover
                        boxShadow: "0px 20px 50px rgba(255, 97, 166, 0.8)",
                    },
                    500
                );
            })
            .on("mouseleave", function () {
                $(this).animate(
                    {
                        transform: "scale(1) rotate(0)", // Reset scale and rotation
                        boxShadow: "0px 10px 20px rgba(255, 97, 166, 0.3)",
                    },
                    500
                );
            });

        // Hover effect for project cards
        $(".project-card")
            .on("mouseenter", function () {
                $(this).animate(
                    {
                        transform: "scale(1.1) rotate(5deg)", // Slight rotation on hover
                        boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.4)",
                    },
                    500
                );
            })
            .on("mouseleave", function () {
                $(this).animate(
                    {
                        transform: "scale(1) rotate(0)", // Reset scale and rotation
                        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
                    },
                    500
                );
            });
    }, []);

    // Hero background gradient animation (out-of-this-world)
    const heroStyle = {
        background: "linear-gradient(45deg, #FF61A6, #4E73DF, #7F00FF)",
        backgroundSize: "400% 400%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "#fff",
        position: "relative",
        animation: "heroGradient 5s ease infinite", // Infinite gradient movement
        overflow: "hidden",
        boxShadow: "inset 0 0 150px rgba(0, 0, 0, 0.3)",
    };

    const heroContentStyle = {
        zIndex: 1,
        position: "relative",
        padding: "20px",
        transform: "scale(1.1)",
        animation: "pulse 2s infinite", // Pulsing effect
    };

    const heroTitleStyle = {
        fontSize: "6rem",
        marginBottom: "1.5rem",
        letterSpacing: "5px",
        fontFamily: '"Poppins", sans-serif',
        textTransform: "uppercase",
        fontWeight: "900",
        textShadow: "0 0 20px rgba(255, 97, 166, 0.8)",
    };

    const heroTextStyle = {
        fontSize: "2rem",
        marginBottom: "2rem",
        fontWeight: "500",
        letterSpacing: "2px",
    };

    const ctaButtonStyle = {
        backgroundColor: "#FF61A6",
        padding: "1rem 3rem",
        fontSize: "1.8rem",
        color: "#fff",
        textDecoration: "none",
        borderRadius: "50px",
        border: "2px solid #FF61A6",
        fontWeight: "bold",
        transition: "all 0.5s ease",
        boxShadow: "0px 10px 30px rgba(255, 97, 166, 0.3)",
        transform: "scale(1.05)",
    };

    const sectionStyle = {
        padding: "6rem 2rem",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        animation: "sectionFadeIn 1s ease-in-out",
    };

    const sectionTitleStyle = {
        fontSize: "3.5rem",
        marginBottom: "2rem",
        color: "#222",
        textTransform: "uppercase",
        fontFamily: '"Roboto", sans-serif',
        letterSpacing: "4px",
    };

    const inputStyle = {
        width: "100%",
        padding: "1rem",
        fontSize: "1.2rem",
        borderRadius: "10px",
        border: "2px solid #FF61A6",
        marginBottom: "1rem",
        backgroundColor: "#f1f1f1",
    };

    return (
        <div>
            {/* Hero Section */}
            <section style={heroStyle}>
                <div style={heroContentStyle}>
                    <h1 id="hero-title" style={heroTitleStyle}>
                        Hey, I'm Zakariyae!
                    </h1>
                    <p id="hero-text" style={heroTextStyle}>
                        Building the future of web experiences with code!
                    </p>
                    <a href="#about" id="cta-button" style={ctaButtonStyle}>
                        Let's Go
                    </a>
                </div>
            </section>

            {/* About Section */}
            <section id="about" style={{ ...sectionStyle, backgroundColor: "#F1F1F1" }} className="fade-in section">
                <h2 style={sectionTitleStyle}>About Me</h2>
                <p style={{ color: "#333", fontSize: "1.2rem", fontWeight: "300" }}>
                    Full-Stack JavaScript Developer with experience in React, Node.js, Express, and MongoDB. Passionate about building user-friendly and scalable web applications. Looking for new opportunities to collaborate!
                </p>
            </section>

            {/* Skills Section */}
            <section id="skills" style={{ ...sectionStyle, backgroundColor: "#282C34", color: "white" }} className="fade-in section">
                <h2 style={sectionTitleStyle}>Skills</h2>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                        gap: "2rem",
                        marginTop: "3rem",
                    }}
                >
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="skill-card fade-in"
                            style={{
                                backgroundColor: "#FF61A6",
                                width: "200px",
                                height: "200px",
                                borderRadius: "50%", // Circular shape
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                flexDirection: "column",
                                textAlign: "center",
                                fontSize: "1.4rem",
                                fontWeight: "600",
                                color: "white",
                                boxShadow: "0px 10px 20px rgba(255, 97, 166, 0.3)",
                                opacity: 0,
                                transform: "translateY(50px) scale(0.8)", // Initial state for animation
                                transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                            }}
                        >
                            <svg
                                width="120"
                                height="120"
                                viewBox="0 0 120 120"
                                style={{ transform: "rotate(-90deg)", transition: "stroke-dashoffset 1s ease" }}
                            >
                                <circle
                                    cx="60"
                                    cy="60"
                                    r="50"
                                    stroke="#fff"
                                    strokeWidth="10"
                                    fill="transparent"
                                    strokeDasharray="314"
                                    strokeDashoffset={(314 * (100 - skill.percentage)) / 100} // Percentage-based offset
                                />
                                <circle
                                    cx="60"
                                    cy="60"
                                    r="50"
                                    stroke="#FF61A6"
                                    strokeWidth="10"
                                    fill="transparent"
                                    strokeDasharray="314"
                                    strokeDashoffset="0"
                                />
                                <text
                                    x="50%"
                                    y="50%"
                                    textAnchor="middle"
                                    dy="0.3em"
                                    fontSize="18"
                                    fill="#fff"
                                >
                                    {skill.percentage}%
                                </text>
                            </svg>
                            <div>{skill.name}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" style={{ ...sectionStyle, backgroundColor: "#F1F1F1" }} className="fade-in section">
                <h2 style={sectionTitleStyle}>My Projects</h2>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "2rem",
                        marginTop: "2rem",
                    }}
                >
                    {["Project 1", "Project 2", "Project 3", "Project 4"].map((project, index) => (
                        <div
                            key={index}
                            className="project-card fade-in"
                            style={{
                                backgroundColor: "#222",
                                color: "white",
                                padding: "2rem",
                                borderRadius: "15px",
                                width: "300px",
                                textAlign: "center",
                                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.3)",
                            }}
                        >
                            <h3 style={{ fontSize: "1.8rem" }}>{project}</h3>
                            <p style={{ fontSize: "1.2rem", color: "#bbb" }}>A dynamic web application.</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" style={{ ...sectionStyle, backgroundColor: "#222", color: "white" }} className="fade-in section">
                <h2 style={sectionTitleStyle}>Get in Touch</h2>
                <form style={{ maxWidth: "600px", margin: "0 auto" }}>
                    <input type="text" placeholder="Your Name" style={inputStyle} />
                    <input type="email" placeholder="Your Email" style={inputStyle} />
                    <textarea placeholder="Your Message" style={{ ...inputStyle, minHeight: "150px" }}></textarea>
                    <button type="submit" style={ctaButtonStyle}>Send Message</button>
                </form>
            </section>
        </div>
    );
}

export default Home;
