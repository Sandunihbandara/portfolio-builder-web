import { useState, useEffect } from "react";
import portfolioData from "../data/portfolioData";
import waveVideo from "../assets/wave.mp4";
import { FaPhone } from "react-icons/fa";

function HeroSection({ builderData }) {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlipped((prev) => !prev);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleScrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero-section glass-card">
      <div className="hero-text">
        <h1>{builderData.name}</h1>
        <h2>{builderData.role}</h2>
        <p>{builderData.intro}</p>

        <div className="contact-box">
          <h3>
            <FaPhone className="btn-icon" />
            Contact Me
          </h3>
          <p>{portfolioData.contactText}</p>

          <div className="hero-actions">
            <button className="primary-btn" onClick={handleScrollToContact}>
              Contact Me
            </button>
          </div>
        </div>
      </div>

      <div className="hero-image">
        <div
          className={`hero-flip-card ${flipped ? "flipped" : ""}`}
          onClick={() => setFlipped(!flipped)}
        >
          <div className="hero-flip-inner">
            <div className="hero-face hero-front">
              <img src={builderData.profileImage} alt="Profile" />
            </div>

            <div className="hero-face hero-back">
              <video
                src={waveVideo}
                autoPlay
                loop
                muted
                playsInline
                className="hero-wave-video"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;