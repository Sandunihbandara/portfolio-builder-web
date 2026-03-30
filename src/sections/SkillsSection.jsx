import portfolioData from "../data/portfolioData";

function SkillsSection() {
  return (
    <section className="skills-section">
      <h2 className="section-title">My Skills</h2>

      <div className="skills-list glass-card">
        {portfolioData.skills.map((skill, index) => (
          <div className="skill-item" key={index}>
            <div className="skill-top">
              <span>{skill.name}</span>
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