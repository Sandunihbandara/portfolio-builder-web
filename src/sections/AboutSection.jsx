import portfolioData from "../data/portfolioData";
import aboutPhoto from "../assets/about-photo.png";
import { FaUserGraduate, FaBookOpen, FaSchool, FaSmile } from "react-icons/fa";


function AboutSection() {
  return (
    <section className="about-section" id="about">
      <br></br>
      <h2 className="section-title"><FaSmile className="card-icon" /> About Me </h2>
      <br></br>
      <div className="about-card glass-card">
      
        <div className="about-top">
          <div className="about-image-box">
            <img src={aboutPhoto} alt="About Sanduni" />
          </div>

          <div className="about-text-box">
            <h3>Hello! 👋</h3>
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