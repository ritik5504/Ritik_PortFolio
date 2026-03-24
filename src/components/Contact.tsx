import { useState } from "react";
import { MdArrowOutward, MdCopyright, MdSend } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open mailto with form data
    const mailtoLink = `mailto:rajritik34@gmail.com?subject=${encodeURIComponent(
      formData.subject || "Portfolio Contact"
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    window.open(mailtoLink, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <div className="contact-content">
          {/* Left — Form */}
          <div className="contact-form-side">
            <h3 className="section-heading">Get in Touch</h3>
            <p className="contact-subtitle">
              Have a project idea or want to collaborate? Drop me a message!
            </p>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    data-cursor="disable"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    data-cursor="disable"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Project Collaboration"
                  value={formData.subject}
                  onChange={handleChange}
                  data-cursor="disable"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project or idea..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  data-cursor="disable"
                />
              </div>
              <button
                type="submit"
                className={`contact-submit-btn ${submitted ? "submitted" : ""}`}
                data-cursor="disable"
              >
                {submitted ? (
                  "Message Sent! ✓"
                ) : (
                  <>
                    Send Message <MdSend />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right — Info & Socials */}
          <div className="contact-info-side">
            <div className="contact-info-card">
              <h4>Contact Info</h4>
              <div className="info-item">
                <span className="info-label">Email</span>
                <a
                  href="mailto:rajritik34@gmail.com"
                  data-cursor="disable"
                  className="info-value"
                >
                  rajritik34@gmail.com
                </a>
              </div>
              <div className="info-item">
                <span className="info-label">Phone</span>
                <a
                  href="tel:+919905870990"
                  data-cursor="disable"
                  className="info-value"
                >
                  +91 9905870990
                </a>
              </div>
              <div className="info-item">
                <span className="info-label">Location</span>
                <span className="info-value">India</span>
              </div>
            </div>

            <div className="contact-social-card">
              <h4>Follow Me</h4>
              <div className="social-btn-grid">
                <a
                  href="https://github.com/ritik5504"
                  target="_blank"
                  data-cursor="disable"
                  className="social-link-btn"
                >
                  Github <MdArrowOutward />
                </a>
                <a
                  href="https://www.linkedin.com/in/ritik5504"
                  target="_blank"
                  data-cursor="disable"
                  className="social-link-btn"
                >
                  LinkedIn <MdArrowOutward />
                </a>
                <a
                  href="https://www.instagram.com/_lost__insane_"
                  target="_blank"
                  data-cursor="disable"
                  className="social-link-btn"
                >
                  Instagram <MdArrowOutward />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="contact-footer">
          <h2>
            Designed and Developed <br /> by <span>Ritik Singh</span>
          </h2>
          <h5>
            <MdCopyright /> 2026
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Contact;
