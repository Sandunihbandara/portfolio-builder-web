import { useEffect, useRef, useState } from "react";
import { FaReact, FaLaravel, FaPalette, FaGithub } from "react-icons/fa";
import { SiFlutter } from "react-icons/si";
import { FiCpu } from "react-icons/fi";

function SkillsSection({ builderData }) {
  const sectionRef = useRef(null);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setStartAnimation(entry.isIntersecting);
      },
      { threshold: 0.35 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

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
        return <FiCpu className="skill-icon" />;
    }
  };

  return (
    <section className="skills-section" id="skills" ref={sectionRef}>
      <br></br>
      <h2 className="section-title animated-title">
        <FiCpu className="title-icon" /> My Skills
      </h2>

      <p className="section-subtitle">What have I Learned 🖥💡</p>

      <div className="skills-list glass-card">
        {builderData.skills.map((skill, index) => (
          <div className="skill-item" key={index}>
            <div className="skill-top">
              <span className="skill-name-with-icon">
                {getSkillIcon(skill.name)} {skill.name}
              </span>
              <span>{skill.level}</span>
            </div>

            <div className="skill-bar">
              <div
                key={`${skill.name}-${startAnimation}`}
                className={`skill-fill ${
                  startAnimation ? "animate-skill" : ""
                }`}
                style={{
                  width: skill.level,
                  animationDelay: `${index * 0.25}s`,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;