import {
  FaHome,
  FaUserPlus,
  FaFolderOpen,
  FaDownload,
  FaCog,
  FaTrash,
} from "react-icons/fa";

function Sidebar({ builderData, setBuilderData }) {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToBuilderForm = () => {
    const form = document.getElementById("builder-form");
    if (form) {
      form.scrollIntoView({ behavior: "smooth", block: "center" });
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


        <button className="menu-btn" onClick={() => scrollToSection("projects")}>
          <FaFolderOpen /> My Portfolios
        </button>

        <button type="button" className="generate-btn" style={{ marginTop: "20px" }} onClick={handleDownloadJSON}
          >
          Download Portfolio JSON
        </button>
        <input type="file" accept=".json" onChange={handleLoadJSON} style={{ marginTop: "10px" }}
         />


        <button type="button" className="delete-btn" style={{ marginTop: "20px" }} onClick={handleReset}
          >
          Reset Portfolio
        </button>

        <button className="menu-btn" onClick={() => scrollToSection("contact")}>
          <FaDownload /> Download CV
        </button>

        <button className="menu-btn" onClick={() => scrollToSection("skills")}>
          <FaCog /> Settings
        </button>
      </nav>

      <button className="menu-btn" onClick={scrollToBuilderForm}>
          <FaUserPlus /> Create Portfolio
        </button>

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
          className="delete-btn"
          onClick={handleRemoveAboutImage}
          >
          Remove About Image
        </button>

        <input
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
          className="generate-btn"
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
              className="delete-btn"
              style={{ width: "100%", marginTop: "8px", justifyContent: "center" ,}}
              onClick={() => handleDeleteProject(index)}
                >
                <FaTrash style={{ marginRight: "6px" }} />
                Delete Project
            </button>
          </div>
        ))}
        
        <h3 style={{ marginTop: "20px" }}>Skills</h3>

<button
  type="button"
  className="generate-btn"
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
      className="delete-btn"
      onClick={() => handleDeleteSkill(index)}
    >
      Delete Skill
    </button>
  </div>
))}

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

        <button className="generate-btn" style={{ marginTop: "10px" }}>
          Download My CV
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;