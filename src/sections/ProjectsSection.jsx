import portfolioData from "../data/portfolioData";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";

function ProjectsSection() {
  const projectImages = [project1, project2];

  return (
    <section className="projects-section">
      <h2 className="section-title">My Creative Works</h2>
      <p className="section-subtitle">Latest Projects ✨</p>

      <div className="projects-grid">
        {portfolioData.projects.map((project, index) => (
          <div className="project-card glass-card" key={index}>
            <img src={projectImages[index]} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;