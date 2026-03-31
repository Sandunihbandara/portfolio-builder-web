import portfolioData from "../data/portfolioData";
import { FaReact, FaLaravel, FaPalette, FaGithub } from "react-icons/fa";
import { SiFlutter } from "react-icons/si";

function SkillsSection() {
  const getSkillIcon = (name) => {
    switch (name) {
      case "Flutter":
        return <SiFlutter className="skill-icon" />;
      case "Laravel":
        return <FaLaravel className="skill-icon" />;
      case "React":
        return <FaReact className="skill-icon" />;
      case "UI/UX Design":
        return <FaPalette className="skill-icon" />;
      case "Git & GitHub":
        return <FaGithub className="skill-icon" />;
      default:
        return null;
    }
  };

  return (
    <section className="skills-section" id="skills">
      <br></br>
      <h2 className="section-title animated-title">✨ My Skills</h2>
      <br></br>
      <div className="skills-list glass-card">
        {portfolioData.skills.map((skill, index) => (
          <div className="skill-item" key={index}>
            <div className="skill-top">
              <span className="skill-name-with-icon">
                {getSkillIcon(skill.name)} {skill.name}
              </span>
              <span>{skill.level}</span>
            </div>
            <div className="skill-bar">
              <div
                className="skill-fill"
                style={{ width: skill.level }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;