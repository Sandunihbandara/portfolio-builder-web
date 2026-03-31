import portfolioData from "../data/portfolioData";
import profileImage from "../assets/profile.png";

function HeroSection() {
  const handleScrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero-section glass-card">
      <div className="hero-text">
        <h1>{portfolioData.name}</h1>
        <h2>{portfolioData.role}</h2>
        <p>{portfolioData.intro}</p>

        <div className="contact-box">
          <h3>Contact Me</h3>
          <p>{portfolioData.contactText}</p>

          <div className="hero-actions">
            <button className="primary-btn" onClick={handleScrollToContact}><p>
              Contact Me </p>
            </button>
          </div>
        </div>
      </div>

      <div className="hero-image">
        <img src={profileImage} alt="Sanduni" />
      </div>
    </section>
  );
}

export default HeroSection;