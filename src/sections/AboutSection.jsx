
import { FaUserGraduate, FaBookOpen, FaSchool, FaUserCheck } from "react-icons/fa";

function AboutSection({ builderData }) {
  return (
    <section className="about-section" id="about">
      <br></br>
      <h2 className="section-title animated-title">
        <FaUserCheck className="title-icon" /> About Me
      </h2>
      <p className="section-subtitle">Who am I 🤔</p>

      <div className="about-card glass-card">
        <div className={`about-top ${!builderData.aboutImage ? "no-about-image" : ""}`}>
          {builderData.aboutImage && (
          <div className="about-image-box">
          <img src={builderData.aboutImage} alt="About" />
          </div>
          )}

          <div className="about-text-box">
            <h3>
              Hello! <span className="wave">👋</span> Get to Know Me
            </h3>
            <p>{builderData.about}</p>
          </div>
        </div>

        <div className="about-bottom">
          <div className="mini-card purple-mini-card">
            <h4><FaUserGraduate className="card-icon" /> Bachelor Degree</h4>
            <ul>
              {builderData.education.degree.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mini-card purple-mini-card">
            <h4><FaBookOpen className="card-icon" /> A/L Results</h4>
            <ul>
              {builderData.education.al.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mini-card purple-mini-card">
            <h4><FaSchool className="card-icon" /> O/L Results</h4>
            <ul>
              {builderData.education.ol.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;