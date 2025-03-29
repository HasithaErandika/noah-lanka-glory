import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/products', label: 'Products' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];

  const services = [
    'Custom Furniture',
    'Interior Woodwork',
    'Door & Window Crafting',
    'Restoration Services'
  ];

  const socialLinks = [
    { icon: <FaFacebook />, url: 'https://facebook.com', label: 'Facebook' },
    { icon: <FaInstagram />, url: 'https://instagram.com', label: 'Instagram' },
    { icon: <FaTwitter />, url: 'https://twitter.com', label: 'Twitter' }
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>Noah Lanka Glory (Pvt) Ltd is a premier woodworking service company dedicated to crafting excellence through precision, passion, and expertise in every wooden masterpiece.</p>
          <div className="footer-social">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            {quickLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-section">
          <h3>Our Services</h3>
          <ul>
            {services.map((service, index) => (
              <li key={index}>
                <Link to="/services">{service}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Info</h3>
          <ul className="contact-info">
            <li>
              <FaPhone /> <a href="tel:+94123456789">+94 12 345 6789</a>
            </li>
            <li>
              <FaEnvelope /> <a href="mailto:info@noahlankaglory.com">info@noahlankaglory.com</a>
            </li>
            <li>
              <FaMapMarkerAlt /> 123 Main Street, Colombo, Sri Lanka
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Noah Lanka Glory (Pvt) Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 