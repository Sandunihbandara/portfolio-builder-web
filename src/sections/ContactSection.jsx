import portfolioData from "../data/portfolioData";

function ContactSection() {
  return (
    <section className="contact-section">
      <h2 className="section-title">Contact</h2>

      <div className="contact-grid">
        {portfolioData.contacts.map((contact, index) => (
          <div className="contact-card glass-card" key={index}>
            <h3>{contact.title}</h3>
            <p>{contact.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ContactSection;