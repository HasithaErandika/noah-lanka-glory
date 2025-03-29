import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: "Phone",
      content: ["+94 12 345 6789", "+94 98 765 4321"],
      link: "tel:+94123456789"
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      content: ["info@noahlankaglory.com", "support@noahlankaglory.com"],
      link: "mailto:info@noahlankaglory.com"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      content: ["123 Main Street", "Colombo, Sri Lanka"],
      link: "https://maps.google.com"
    },
    {
      icon: <FaClock />,
      title: "Working Hours",
      content: ["Monday - Friday: 9AM - 6PM", "Saturday: 9AM - 1PM"],
      link: null
    }
  ];

  const socialLinks = [
    { icon: <FaFacebook />, url: "https://facebook.com", label: "Facebook" },
    { icon: <FaInstagram />, url: "https://instagram.com", label: "Instagram" },
    { icon: <FaTwitter />, url: "https://twitter.com", label: "Twitter" }
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <motion.div 
          className="contact-hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Contact Us</h1>
          <p>Get in touch with us for your woodworking needs</p>
        </motion.div>
      </section>

      <div className="contact-container">
        {/* Contact Information */}
        <section className="contact-info-section">
          <div className="contact-info-grid">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="contact-info-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="info-icon">{info.icon}</div>
                <h3>{info.title}</h3>
                <div className="info-content">
                  {info.content.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
                {info.link && (
                  <a href={info.link} target={info.link.startsWith('http') ? "_blank" : "_self"} rel="noopener noreferrer">
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
            className="contact-form-container"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="form-header">
              <h2>Send Us a Message</h2>
              <p>Fill out the form below and we'll get back to you shortly</p>
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
              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          </motion.div>
        </section>

        {/* Map Section */}
        <section className="map-section">
          <div className="map-container">
            {/* Add your Google Maps or other map component here */}
            <div className="map-placeholder">
              <p>Map will be displayed here</p>
            </div>
          </div>
        </section>

        {/* Social Links */}
        <section className="social-section">
          <div className="social-container">
            <h3>Follow Us</h3>
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  whileHover={{ scale: 1.1 }}
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact; 