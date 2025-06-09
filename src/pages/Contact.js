import { useState } from "react";
import "../Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully! We'll get back to you soon. 😊");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-page container">
      <h1>Contact Us</h1>
      <p className="contact-intro">
        We’d love to hear from you! Fill out the form below to get in touch.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <textarea
          rows="5"
          placeholder="Your Message"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          required
        />
        <button type="submit">Send Message</button>
      </form>

      <div className="contact-info">
        <h2>Our Contact Info</h2>
        <p>📧 Email: contact@freshbite.com</p>
        <p>📞 Phone: +1 (806) 123-4567</p>
        <p>📍 Address: 123 Fresh Street, Dallas City, USA</p>
      </div>
    </div>
  );
};

export default Contact;

