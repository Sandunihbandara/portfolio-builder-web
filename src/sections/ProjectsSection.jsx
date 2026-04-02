import { useState } from "react";
import { FaGithub, FaFolderOpen } from "react-icons/fa";

function ProjectsSection({ builderData }) {
  const [flippedIndex, setFlippedIndex] = useState(null);

  return (
    <section className="projects-section" id="projects">
      <br></br>
      <h2 className="section-title animated-title">
        <FaFolderOpen className="title-icon" /> My Creative Works
      </h2>
      <p className="section-subtitle">Latest Projects ✨</p>

      <div className="projects-grid">
        {builderData.projects.map((project, index) => (
          <div
            className={`project-flip-card ${flippedIndex === index ? "flipped" : ""}`}
            key={index}
            onClick={() =>
              setFlippedIndex(flippedIndex === index ? null : index)
            }
          >
            <div className="project-flip-inner">
              <div className="project-card project-front glass-card">
                <img src={project.image} alt={project.title} />
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