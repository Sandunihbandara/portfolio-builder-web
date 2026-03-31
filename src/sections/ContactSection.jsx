import portfolioData from "../data/portfolioData";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaVideo,
} from "react-icons/fa";

function ContactSection() {
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
      <h2 className="section-title animated-title">📞 Contact</h2>
      <br></br>
      <div className="contact-grid">
        {portfolioData.contacts.map((contact, index) => (
          <a
            href={contact.link}
            target="_blank"
            rel="noreferrer"
            className="contact-card glass-card"
            key={index}
          >
            <div>{getContactIcon(contact.title)}</div>
            <h3>{contact.title}</h3>
            <p>{contact.value}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

export default ContactSection;