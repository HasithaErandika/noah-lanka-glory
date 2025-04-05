import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const socialLinks = [
    { icon: 'fab fa-facebook', url: 'https://facebook.com/noahlankaglory', label: 'Facebook' },
    { icon: 'fab fa-whatsapp', url: 'https://wa.me/your-whatsapp-number', label: 'WhatsApp' },
    { icon: 'fab fa-instagram', url: 'https://instagram.com/noahlankaglory', label: 'Instagram' }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} dark`}>
      <div className="nav-brand">
        <Link to="/">Noah Lanka Glory</Link>
      </div>
      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
        <Link to="/products" onClick={() => setIsOpen(false)}>Products</Link>
        <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
        <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
      </div>
      <div className="nav-actions">
        <div className="social-links">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="social-link"
            >
              <i className={link.icon}></i>
            </a>
          ))}
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;