import React from 'react'
import { motion } from 'framer-motion'
import { FaPhone, FaMapMarkerAlt, FaClock, FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import './Footer.css'

interface FooterVariants {
  hidden: {
    opacity: number
    y: number
  }
  visible: {
    opacity: number
    y: number
    transition: {
      duration: number
      staggerChildren: number
    }
  }
}

interface ItemVariants {
  hidden: {
    opacity: number
    y: number
  }
  visible: {
    opacity: number
    y: number
  }
}

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const footerVariants: FooterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants: ItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <motion.footer 
      className="footer"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
    >
      <div className="footer-container">
        <div className="footer-grid">
          {/* Company Info */}
          <motion.div className="footer-section" variants={itemVariants}>
            <h3>Noah Lanka Glory</h3>
            <p className="company-description">
              Leading manufacturer of premium plywood solutions in Sri Lanka, 
              committed to quality and sustainability.
            </p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://wa.me/94112188919" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div className="footer-section" variants={itemVariants}>
            <h3>Contact Us</h3>
            <div className="contact-info">
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <div>
                  <h4>Address</h4>
                  <p>No.169/A/2 Bope Watta Rd,<br />Padukka, Sri Lanka</p>
                </div>
              </div>
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <div>
                  <h4>Phone</h4>
                  <p>+94 11 218 8919</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Business Hours */}
          <motion.div className="footer-section" variants={itemVariants}>
            <h3>Business Hours</h3>
            <div className="business-hours">
              <div className="hours-item">
                <span className="day">Monday–Friday</span>
                <span className="time">7:30 AM–6:00 PM</span>
              </div>
              <div className="hours-item">
                <span className="day">Saturday</span>
                <span className="time">8:00 AM–3:00 PM</span>
              </div>
              <div className="hours-item">
                <span className="day">Sunday</span>
                <span className="time">9:00 AM–1:00 PM</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div className="footer-section" variants={itemVariants}>
            <h3>Quick Links</h3>
            <ul className="quick-links">
              <li><a href="/about">About Us</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms & Conditions</a></li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="footer-bottom"
          variants={itemVariants}
        >
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Noah Lanka Glory. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="/privacy">Privacy Policy</a>
              <span className="separator">|</span>
              <a href="/terms">Terms & Conditions</a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer 