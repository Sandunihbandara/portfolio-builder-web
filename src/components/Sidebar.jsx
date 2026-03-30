import { FaHome, FaUserPlus, FaFolderOpen, FaDownload, FaCog } from "react-icons/fa";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        <h2>Portfolio Builder</h2>
        <p>Create your own portfolio</p>
      </div>

      <nav className="sidebar-menu">
        <button className="menu-btn active"><FaHome /> Dashboard</button>
        <button className="menu-btn"><FaUserPlus /> Create Portfolio</button>
        <button className="menu-btn"><FaFolderOpen /> My Portfolios</button>
        <button className="menu-btn"><FaDownload /> Download CV</button>
        <button className="menu-btn"><FaCog /> Settings</button>
      </nav>

      <div className="sidebar-form-preview">
        <h3>Your Details</h3>
        <input type="text" placeholder="Full Name" />
        <input type="text" placeholder="Role / Profession" />
        <textarea placeholder="Short Intro"></textarea>
        <button className="generate-btn" style={{ marginTop: "10px" }}>Download My CV</button>
      </div>
    </aside>
  );
}

export default Sidebar;