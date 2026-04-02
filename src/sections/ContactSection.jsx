import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaVideo,
} from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";

function ContactSection({ builderData }) {
  const getContactIcon = (title) => {
    switch (title) {
      case "Call":
        return <FaPhoneAlt className="contact-icon" />;
      case "WhatsApp":
        return <FaWhatsapp className="contact-icon" />;
      case "Email":
        return <FaEnvelope className="contact-icon" />;
      case "LinkedIn":
        return <FaLinkedin className="contact-icon" />;
      case "GitHub":
        return <FaGithub className="contact-icon" />;
      case "Video Meet":
        return <FaVideo className="contact-icon" />;
      default:
        return null;
    }
  };

  return (
    <section className="contact-section" id="contact">
      <br></br>
      <h2 className="section-title animated-title">
        <FiPhoneCall className="title-icon" /> Contact
      </h2>
      <p className="section-subtitle">Feel free to reach out anytime  ☎️</p>

      <div className="contact-grid">
        {builderData.contacts.map((contact, index) => (
          <a
            href={contact.link}
            target="_blank"
            rel="noreferrer"
            className="contact-card glass-card"
            key={index}
          >
            <div className="icon-box">{getContactIcon(contact.title)}</div>
            <h3>{contact.title}</h3>
            <p>{contact.value}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

export default ContactSection;