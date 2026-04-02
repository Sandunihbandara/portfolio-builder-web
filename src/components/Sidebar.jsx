import {
  FaHome,
  FaUserPlus,
  FaFolderOpen,
  FaDownload,
  FaCog,
  FaTrash,
  FaChevronDown,
} from "react-icons/fa";
import jsPDF from "jspdf";
import { useState, useEffect } from "react";


function Sidebar({ builderData, setBuilderData }) {

  const [savedList, setSavedList] = useState([]);
  const [showSavedList, setShowSavedList] = useState(false);

    useEffect(() => {
    const saved =
    JSON.parse(localStorage.getItem("savedPortfolios")) || [];
      setSavedList(saved);
  }, []);


  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToBuilderForm = () => {
    const form = document.getElementById("builder-form");
    if (form) {
      form.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBuilderData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const imageUrl = URL.createObjectURL(file);

    setBuilderData((prev) => ({
      ...prev,
      profileImage: imageUrl,
    }));
  };
  const handleAboutImageChange = (e) => {
  const file = e.target.files?.[0];
  if (!file) return;

  const imageUrl = URL.createObjectURL(file);

  setBuilderData((prev) => ({
    ...prev,
    aboutImage: imageUrl,
  }));
  };

  const handleRemoveAboutImage = () => {
  setBuilderData((prev) => ({
    ...prev,
    aboutImage: "",
  }));
  };



  const handleContactChange = (index, field, value) => {
    const updatedContacts = [...builderData.contacts];
    updatedContacts[index] = {
      ...updatedContacts[index],
      [field]: value,
    };

    setBuilderData((prev) => ({
      ...prev,
      contacts: updatedContacts,
    }));
  };

  const handleEducationChange = (section, index, value) => {
    const updatedEducation = {
      ...builderData.education,
      [section]: [...builderData.education[section]],
    };

    updatedEducation[section][index] = value;

    setBuilderData((prev) => ({
      ...prev,
      education: updatedEducation,
    }));
  };

  const handleProjectChange = (index, field, value) => {
    const updatedProjects = [...builderData.projects];
    updatedProjects[index] = {
      ...updatedProjects[index],
      [field]: value,
    };

    setBuilderData((prev) => ({
      ...prev,
      projects: updatedProjects,
    }));
  };

  const handleProjectImageChange = (index, file) => {
    if (!file) return;

    const imageUrl = URL.createObjectURL(file);

    const updatedProjects = [...builderData.projects];
    updatedProjects[index] = {
      ...updatedProjects[index],
      image: imageUrl,
    };

    setBuilderData((prev) => ({
      ...prev,
      projects: updatedProjects,
    }));
  };


  const handleAddProject = () => {
  const newProject = {
    title: "New Project",
    description: "Add project description",
    github: "https://github.com/",
    image: "",
  };

  setBuilderData((prev) => ({
    ...prev,
    projects: [...prev.projects, newProject],
  }));
  };

  const handleDeleteProject = (indexToDelete) => {
  const updatedProjects = builderData.projects.filter(
    (_, index) => index !== indexToDelete
  );

  setBuilderData((prev) => ({
    ...prev,
    projects: updatedProjects,
  }));
};

const handleSkillChange = (index, field, value) => {
  const updatedSkills = [...builderData.skills];
  updatedSkills[index] = {
    ...updatedSkills[index],
    [field]: value,
  };

  setBuilderData((prev) => ({
    ...prev,
    skills: updatedSkills,
  }));
};

const handleAddSkill = () => {
  const newSkill = {
    name: "New Skill",
    level: "50%",
  };

  setBuilderData((prev) => ({
    ...prev,
    skills: [...prev.skills, newSkill],
  }));
};

const handleDeleteSkill = (indexToDelete) => {
  const updatedSkills = builderData.skills.filter(
    (_, index) => index !== indexToDelete
  );

  setBuilderData((prev) => ({
    ...prev,
    skills: updatedSkills,
  }));
};

const handleReset = () => {
  localStorage.removeItem("portfolioData");
  window.location.reload();
};

const handleDownloadJSON = () => {
  const dataStr = JSON.stringify(builderData, null, 2);
  const blob = new Blob([dataStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "portfolio-data.json";
  link.click();

  URL.revokeObjectURL(url);
};

const handleLoadJSON = (e) => {
  const file = e.target.files?.[0];
  if (!file) return;

  const reader = new FileReader();

  reader.onload = (event) => {
    try {
      const parsedData = JSON.parse(event.target.result);
      setBuilderData(parsedData);
      localStorage.setItem("portfolioData", JSON.stringify(parsedData));
    } catch (error) {
      alert("Invalid JSON file");
    }
  };

  reader.readAsText(file);
};

const handleDownloadCV = () => {
  const doc = new jsPDF();

  const pageHeight = doc.internal.pageSize.height;
  const left = 20;
  const maxWidth = 170;
  let y = 20;

  const checkPageBreak = (neededSpace = 10) => {
    if (y + neededSpace > pageHeight - 20) {
      doc.addPage();
      y = 20;
    }
  };

  const addSectionTitle = (title) => {
    checkPageBreak(12);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text(title, left, y);
    y += 8;
  };

  const addNormalText = (text, indent = left, spacing = 6) => {
    const lines = doc.splitTextToSize(text || "", maxWidth - (indent - left));
    checkPageBreak(lines.length * spacing + 2);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    doc.text(lines, indent, y);
    y += lines.length * spacing;
  };

  const addBulletList = (items, indent = 25) => {
    items.forEach((item) => {
      addNormalText(`- ${item}`, indent, 6);
    });
    y += 2;
  };

  // Header
  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.text(builderData.name || "Your Name", left, y);

  y += 10;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(14);
  doc.text(builderData.role || "Your Role", left, y);

  y += 12;
  addNormalText(builderData.intro || "", left, 6);

  y += 6;
  addSectionTitle("About Me");
  addNormalText(builderData.about || "", left, 6);

  y += 4;
  addSectionTitle("Education");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  checkPageBreak(8);
  doc.text("Bachelor Degree", left, y);
  y += 7;
  addBulletList(builderData.education.degree || []);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  checkPageBreak(8);
  doc.text("A/L Results", left, y);
  y += 7;
  addBulletList(builderData.education.al || []);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  checkPageBreak(8);
  doc.text("O/L Results", left, y);
  y += 7;
  addBulletList(builderData.education.ol || []);

  addSectionTitle("Skills");
  (builderData.skills || []).forEach((skill) => {
    addNormalText(`- ${skill.name} (${skill.level})`, 25, 6);
  });

  y += 2;
  addSectionTitle("Projects");

  (builderData.projects || []).forEach((project) => {
    checkPageBreak(24);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.text(project.title || "Project", 25, y);
    y += 7;

    addNormalText(project.description || "", 25, 6);
    addNormalText(`GitHub: ${project.github || ""}`, 25, 6);

    y += 4;
  });

  addSectionTitle("Contact");

  (builderData.contacts || []).forEach((contact) => {
    addNormalText(`- ${contact.title}: ${contact.value}`, 25, 6);
  });

  doc.save("portfolio-cv.pdf");
};

const handleSavePortfolio = () => {
  const savedPortfolios =
    JSON.parse(localStorage.getItem("savedPortfolios")) || [];

  const newPortfolio = {
    id: Date.now(),
    name: builderData.name || "Untitled Portfolio",
    data: builderData,
  };

  const updated = [...savedPortfolios, newPortfolio];
  setSavedList(updated);

  localStorage.setItem("savedPortfolios", JSON.stringify(updated));

  alert("Portfolio Saved!");
};



const handleDeleteSaved = (id) => {
  const updated = savedList.filter((item) => item.id !== id);

  localStorage.setItem("savedPortfolios", JSON.stringify(updated));
  setSavedList(updated);
};



  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        <h2>Portfolio Builder</h2>
        <p>Create your own portfolio</p>
      </div>

      <nav className="sidebar-menu">
        <button className="menu-btn active" onClick={() => scrollToSection("home")}>
          <FaHome /> Dashboard
        </button>

        <button className="menu-btn"  style={{ marginTop: "20px" }} onClick={scrollToBuilderForm}>
          <FaUserPlus /> Create Portfolio
        </button>


        <button
  className="menu-btn portfolio-toggle-btn" style={{ marginTop: "-10px" }}
  onClick={() => setShowSavedList((prev) => !prev)}
>
  <span className="portfolio-toggle-left">
    <FaFolderOpen /> My Portfolios
  </span>

  <FaChevronDown
    className={`dropdown-arrow ${showSavedList ? "open" : ""}`}
  />
</button>


        {showSavedList && (
  <div id="saved-portfolios" className="saved-dropdown">
    {savedList.length === 0 ? (
      <p className="saved-empty">No saved portfolios yet</p>
    ) : (
      savedList.map((item) => (
        <div key={item.id} className="saved-item">
          <p>{item.name}</p>

          <div className="saved-actions">
            <button
              className="menu-btn small-btn"
              onClick={() => {
                setBuilderData(item.data);
                setShowSavedList(false);
              }}
            >
              Load
            </button>

            <button
              className="delete-btn small-delete-btn"
              onClick={() => handleDeleteSaved(item.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))
    )}
  </div>
)}
              <button type="button" className="generate-btn" style={{ marginTop: "20px" }} onClick={handleSavePortfolio}
          >
          Save Portfolio
        </button>


        <button type="button" className="delete-btn" style={{ marginTop: "-10px" }} onClick={handleReset}
          >
          Reset Portfolio
        </button>
          


        <button type="button" className="generate-btn" style={{ marginTop: "20px" }} onClick={handleDownloadJSON}
          >
          Download Portfolio JSON
        </button>
        <input type="file" accept=".json" onChange={handleLoadJSON} style={{ marginTop: "-25px" }}
         />
        
        


        

        <button type="button" className="generate-btn" style={{ marginTop: "-5px" }} onClick={handleDownloadCV}
          >
          Download My CV
        </button>

        <button className="menu-btn" onClick={() => scrollToSection("skills")}>
          <FaCog /> Settings
        </button>
      </nav>

      

      <div className="sidebar-form-preview" id="builder-form">
        <br></br>
        <h3>Fill Your Details to Create</h3>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={builderData.name}
          onChange={handleChange}
        />

        <input
          type="text"
          name="role"
          placeholder="Role / Profession"
          value={builderData.role}
          onChange={handleChange}
        />

        <textarea
          name="intro"
          placeholder="Short Intro"
          value={builderData.intro}
          onChange={handleChange}
        ></textarea>

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />

        <h3 style={{ marginTop: "20px" }}>About Section</h3>

        <textarea
          name="about"
          placeholder="About paragraph"
          value={builderData.about}
          onChange={handleChange}
        ></textarea>

        <input
          type="file"
          accept="image/*"
          onChange={handleAboutImageChange}
        />
        <button
          type="button"
          
          className="delete-btn-about"
          onClick={handleRemoveAboutImage}
          >
          Remove About Image
        </button>

        <input
          style={{ marginTop: "25px" }}
          type="text"
          value={builderData.education.degree[0]}
          onChange={(e) => handleEducationChange("degree", 0, e.target.value)}
          placeholder="Degree line 1"
        />
        <input
          type="text"
          value={builderData.education.degree[1]}
          onChange={(e) => handleEducationChange("degree", 1, e.target.value)}
          placeholder="Degree line 2"
        />
        <input
          type="text"
          value={builderData.education.degree[2]}
          onChange={(e) => handleEducationChange("degree", 2, e.target.value)}
          placeholder="Degree line 3"
        />

        <input
          type="text"
          value={builderData.education.al[0]}
          onChange={(e) => handleEducationChange("al", 0, e.target.value)}
          placeholder="A/L line 1"
        />
        <input
          type="text"
          value={builderData.education.al[1]}
          onChange={(e) => handleEducationChange("al", 1, e.target.value)}
          placeholder="A/L line 2"
        />
        <input
          type="text"
          value={builderData.education.al[2]}
          onChange={(e) => handleEducationChange("al", 2, e.target.value)}
          placeholder="A/L line 3"
        />

        <input
          type="text"
          value={builderData.education.ol[0]}
          onChange={(e) => handleEducationChange("ol", 0, e.target.value)}
          placeholder="O/L line 1"
        />
        <input
          type="text"
          value={builderData.education.ol[1]}
          onChange={(e) => handleEducationChange("ol", 1, e.target.value)}
          placeholder="O/L line 2"
        />
        <input
          type="text"
          value={builderData.education.ol[2] || ""}
          onChange={(e) => handleEducationChange("ol", 2, e.target.value)}
          placeholder="O/L line 3"
        />



        <h3 style={{ marginTop: "20px" }}>Projects</h3>

        <button
          type="button"
          className="generate-btn-add-project"
          style={{ marginBottom: "14px" }}
          onClick={handleAddProject}
        >
          + Add New Project
        </button>

        {builderData.projects.map((project, index) => (
          <div key={index} style={{ marginBottom: "14px" }}>
            <input
              type="text"
              placeholder="Project Title"
              value={project.title}
              onChange={(e) =>
                handleProjectChange(index, "title", e.target.value)
              }
            />

            <input
              type="text"
              placeholder="Project Description"
              value={project.description}
              onChange={(e) =>
                handleProjectChange(index, "description", e.target.value)
              }
            />

            <input
              type="text"
              placeholder="GitHub Link"
              value={project.github}
              onChange={(e) =>
                handleProjectChange(index, "github", e.target.value)
              }
            />

            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                handleProjectImageChange(index, e.target.files?.[0])
              }
            />
            <button
              type="button"
              className="delete-btn-project"
              style={{ width: "100%", marginTop: "8px", justifyContent: "center" ,}}
              onClick={() => handleDeleteProject(index)}
                >
                <FaTrash style={{ marginRight: "6px" }} />
                Delete Project
            </button>
          </div>
        ))}
        <br></br>
        
        <h3 style={{ marginTop: "20px" }}>Skills</h3>

<button
  type="button"
  className="generate-btn-skill"
  style={{ marginBottom: "14px" }}
  onClick={handleAddSkill}
>
  + Add Skill
</button>

{builderData.skills.map((skill, index) => (
  <div key={index} style={{ marginBottom: "12px" }}>
    <input
      type="text"
      placeholder="Skill Name"
      value={skill.name}
      onChange={(e) =>
        handleSkillChange(index, "name", e.target.value)
      }
    />

    <input
      type="text"
      placeholder="Skill Level (e.g. 80%)"
      value={skill.level}
      onChange={(e) =>
        handleSkillChange(index, "level", e.target.value)
      }
    />

    <button
      type="button"
      className="delete-btn-skill"
      onClick={() => handleDeleteSkill(index)}
    >
      Delete Skill
    </button>
  </div>
))}
<br></br>

        <h3 style={{ marginTop: "20px" }}>Contact Details</h3>

        {builderData.contacts.map((contact, index) => (
          <div key={index} style={{ marginBottom: "12px" }}>
            <input type="text" value={contact.title} readOnly />

            <input
              type="text"
              placeholder={`${contact.title} value`}
              value={contact.value}
              onChange={(e) =>
                handleContactChange(index, "value", e.target.value)
              }
            />

            <input
              type="text"
              placeholder={`${contact.title} link`}
              value={contact.link}
              onChange={(e) =>
                handleContactChange(index, "link", e.target.value)
              }
            />
          </div>
        ))}

        
      </div>
    </aside>
  );
}

export default Sidebar;