import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3>About Us</h3>
            <p>Noah Lanka Glory is a leading manufacturer and exporter of high-quality plywood products in Sri Lanka. We are committed to delivering excellence in every product we create.</p>
            <div className="footer-social">
              <a href="https://linkedin.com/company/noah-lanka-glory" className="social-link" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://facebook.com/noahlankaglory" className="social-link" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://wa.me/your-number" className="social-link" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Our Products</h3>
            <ul className="footer-links">
              <li><Link to="/products/marine">Marine Plywood</Link></li>
              <li><Link to="/products/commercial">Commercial Plywood</Link></li>
              <li><Link to="/products/decorative">Decorative Plywood</Link></li>
              <li><Link to="/products/film-faced">Film Faced Plywood</Link></li>
              <li><Link to="/products/bintangor">Bintangor Veneer</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact Info</h3>
            <div className="footer-contact">
              <p>
                <i className="fas fa-map-marker-alt"></i>
                123 Industrial Zone, Colombo, Sri Lanka
              </p>
              <p>
                <i className="fas fa-phone"></i>
                +94 11 234 5678
              </p>
              <p>
                <i className="fas fa-envelope"></i>
                info@noahlankaglory.com
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Noah Lanka Glory. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 