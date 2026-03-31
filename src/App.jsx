import "./App.css";
import BackgroundEffects from "./components/BackgroundEffects";
import Sidebar from "./components/Sidebar";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import ProjectsSection from "./sections/ProjectsSection";
import SkillsSection from "./sections/SkillsSection";
import ContactSection from "./sections/ContactSection";

function App() {
  return (
    <div className="app-layout">
      <BackgroundEffects />
      <Sidebar />

      <main className="main-content">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;