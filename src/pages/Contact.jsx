import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import './Contact.css'; // Custom styles for Contact page

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., API call)
    console.log(formData);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' }); // Reset form
  };

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: "Phone",
      content: ["+94 12 345 6789", "+94 98 765 4321"],
      link: "tel:+94123456789",
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      content: ["info@noahlankaglory.com", "support@noahlankaglory.com"],
      link: "mailto:info@noahlankaglory.com",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      content: ["123 Main Street", "Colombo, Sri Lanka"],
      link: "https://maps.google.com",
    },
    {
      icon: <FaClock />,
      title: "Working Hours",
      content: ["Monday - Friday: 9AM - 6PM", "Saturday: 9AM - 1PM"],
      link: null,
    },
  ];

  const socialLinks = [
    { icon: <FaFacebook />, url: "https://facebook.com", label: "Facebook" },
    { icon: <FaInstagram />, url: "https://instagram.com", label: "Instagram" },
    { icon: <FaTwitter />, url: "https://twitter.com", label: "Twitter" },
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="hero hero--centered">
        <motion.div
          className="hero__content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero__title">Contact Us</h1>
          <p className="hero__subtitle">Get in Touch with Noah Lanka Glory</p>
        </motion.div>
      </section>

      <div className="contact-container">
        {/* Contact Information */}
        <section className="contact-info-section">
          <div className="contact-info-grid">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="card card--elevated contact-info-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02, boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)" }}
              >
                <div className="info-icon">{info.icon}</div>
                <h3>{info.title}</h3>
                <div className="info-content">
                  {info.content.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
                {info.link && (
                  <a
                    href={info.link}
                    target={info.link.startsWith('http') ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="info-link"
                  >
                    Contact Now
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="contact-form-section">
          <motion.div
            className="card card--elevated contact-form-container"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="form-header">
              <h2>Send Us a Message</h2>
              <p>Fill out the form below, and we’ll respond promptly.</p>
            </div>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                ></textarea>
              </div>
              <button type="submit" className="button button--primary button--medium">
                Send Message
              </button>
            </form>
          </motion.div>
        </section>

        {/* Map Section */}
        <section className="map-section">
          <motion.div
            className="card card--elevated map-container"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Placeholder for map; replace with Google Maps iframe or component */}
            <div className="map-placeholder">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.902976920161!2d79.8586933152596!3d6.90220359500944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259631bc3b015%3A0x746caa0c3e3c541d!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1634567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Noah Lanka Glory Location"
              ></iframe>
            </div>
          </motion.div>
        </section>

        {/* Social Links */}
        <section className="social-section">
          <motion.div
            className="card card--elevated social-container"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Follow Us</h3>
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  whileHover={{ scale: 1.2, color: "var(--primary-color)" }}
                  transition={{ duration: 0.3 }}
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default Contact;