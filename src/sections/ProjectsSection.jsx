import { useState } from "react";
import portfolioData from "../data/portfolioData";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";
import project7 from "../assets/project7.png";
import { FaGithub, FaFolderOpen } from "react-icons/fa";

function ProjectsSection() {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const projectImages = [project1, project2, project3, project4, project5, project6, project7];

  return (
    <section className="projects-section" id="projects">
      <br></br>
      <h2 className="section-title animated-title">
        <FaFolderOpen className="title-icon" /> My Creative Works
      </h2>
      <p className="section-subtitle">Latest Projects ✨</p>

      <div className="projects-grid">
        {portfolioData.projects.map((project, index) => (
          <div
            className={`project-flip-card ${flippedIndex === index ? "flipped" : ""}`}
            key={index}
            onClick={() =>
              setFlippedIndex(flippedIndex === index ? null : index)
            }
          >
            <div className="project-flip-inner">
              <div className="project-card project-front glass-card">
                <img src={projectImages[index]} alt={project.title} />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>

              <div className="project-card project-back glass-card">
                <h3>{project.title}</h3>
                <p>Click below to view the GitHub repository.</p>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="github-btn"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaGithub /> View on GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;