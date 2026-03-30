import portfolioData from "../data/portfolioData";
import aboutPhoto from "../assets/about-photo.png";

function AboutSection() {
  return (
    <section className="about-section">
      <h2 className="section-title">About Me</h2>

      <div className="about-card glass-card">
        <div className="about-image">
          <img src={aboutPhoto} alt="About Sanduni" />
        </div>

        <div className="about-content">
          <h3>Hello! 👋 I am Sanduni</h3>
          <p>{portfolioData.about}</p>

          <div className="education-grid">
            {portfolioData.education.map((item, index) => (
              <div className="mini-card" key={index}>
                <h4>{item.title}</h4>
                <ul>
                  {item.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;