import { useState, useEffect } from "react";
import "./App.css";
import BackgroundEffects from "./components/BackgroundEffects";
import Sidebar from "./components/Sidebar";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import ProjectsSection from "./sections/ProjectsSection";
import SkillsSection from "./sections/SkillsSection";
import ContactSection from "./sections/ContactSection";
import portfolioData from "./data/portfolioData";
import defaultProfileImage from "./assets/profile.png";
import defaultAboutImage from "./assets/about-photo.png";
import project1 from "./assets/project1.png";
import project2 from "./assets/project2.png";
import project3 from "./assets/project3.png";
import project4 from "./assets/project4.png";
import project5 from "./assets/project5.png";

function App() {
  const defaultProjectImages = [project1, project2, project3, project4, project5];

  const [builderData, setBuilderData] = useState(() => {
  const saved = localStorage.getItem("portfolioData");
  
  if (saved) {
    return JSON.parse(saved);
  }  

  return {
    name: portfolioData.name,
    role: portfolioData.role,
    intro: portfolioData.intro,
    profileImage: defaultProfileImage,
    aboutImage: defaultAboutImage,  
    contacts: portfolioData.contacts,
    about: portfolioData.about,
    education: portfolioData.education,
    projects: portfolioData.projects.map((project, index) => ({
      ...project,
      image: defaultProjectImages[index] || project1,
    })),
    skills: portfolioData.skills,
  };
  });

  useEffect(() => {
  localStorage.setItem("portfolioData", JSON.stringify(builderData));
  }, [builderData]);

  return (
    <div className="app-layout">
      <BackgroundEffects />

      <Sidebar
        builderData={builderData}
        setBuilderData={setBuilderData}
      />

      <main className="main-content">
        <section id="home">
          <HeroSection builderData={builderData} />
        </section>

        <section id="about">
          <AboutSection builderData={builderData} />
        </section>

        <section id="projects">
          <ProjectsSection builderData={builderData} />
        </section>

        <section id="skills">
          <SkillsSection builderData={builderData} />
        </section>

        <section id="contact">
          <ContactSection builderData={builderData} />
        </section>
      </main>
    </div>
  );
}

export default App;