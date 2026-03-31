import portfolioData from "../data/portfolioData";
import aboutPhoto from "../assets/about-photo.png";
import { FaUserGraduate, FaBookOpen, FaSchool } from "react-icons/fa";
import { FiSmile } from "react-icons/fi";


function AboutSection() {
  return (
    <section className="about-section" id="about">
      <br></br>
      <h2 className="section-title animated-title"><FiSmile className="card-icon" /> About MySelf </h2>
      <p className="section-subtitle">Who am I 🤔</p>
      
      <div className="about-card glass-card">
      
        <div className="about-top">
          <div className="about-image-box">
            <img src={aboutPhoto} alt="About Sanduni" />
          </div>

          <div className="about-text-box">
            <h3> <span className="wave">👋</span> Hello!  </h3>
            <h3>I am Sanduni</h3>
            <p>{portfolioData.about}</p>
          </div>
        </div>

        <div className="about-bottom">
          <div className="mini-card purple-mini-card">
            <h4><FaUserGraduate className="card-icon" /> Bachelor Degree</h4>
            <ul>
              {portfolioData.education.degree.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mini-card purple-mini-card">
            <h4><FaBookOpen className="card-icon" /> A/L Results</h4>
            <ul>
              {portfolioData.education.al.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mini-card purple-mini-card">
            <h4><FaSchool className="card-icon" /> O/L Results</h4>
            <ul>
              {portfolioData.education.ol.map((item, i) => (
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