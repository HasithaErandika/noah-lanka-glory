import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Home() {
  useEffect(() => {
    // Add scroll animation class to elements when they come into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    });

    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Noah Lanka Glory (Pvt) Ltd</h1>
          <p className="hero-subtitle">Excellence in Professional Woodworking</p>
          <div className="hero-buttons">
            <Link to="/services" className="cta-button primary">Explore Our Services</Link>
            <Link to="/contact" className="cta-button secondary">Get in Touch</Link>
          </div>
        </motion.div>
        <div className="scroll-indicator">
          <span>Scroll Down</span>
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* Featured Services Preview */}
      <section className="services-preview">
        <div className="section-header animate-on-scroll">
          <h2>Our Services</h2>
          <p>Discover our comprehensive range of woodworking solutions</p>
        </div>
        <div className="services-grid">
          <motion.div 
            className="service-card animate-on-scroll"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="service-icon">
              <i className="fas fa-couch"></i>
            </div>
            <h3>Custom Furniture</h3>
            <p>Handcrafted furniture tailored to your specific needs and preferences.</p>
            <Link to="/services" className="service-link">Learn More →</Link>
          </motion.div>
          <motion.div 
            className="service-card animate-on-scroll"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="service-icon">
              <i className="fas fa-home"></i>
            </div>
            <h3>Wooden Interiors</h3>
            <p>Beautiful wooden interior solutions for homes and businesses.</p>
            <Link to="/services" className="service-link">Learn More →</Link>
          </motion.div>
          <motion.div 
            className="service-card animate-on-scroll"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="service-icon">
              <i className="fas fa-paint-brush"></i>
            </div>
            <h3>Wooden Artifacts</h3>
            <p>Unique wooden artifacts and decorative pieces.</p>
            <Link to="/services" className="service-link">Learn More →</Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products">
        <div className="section-header animate-on-scroll">
          <h2>Featured Products</h2>
          <p>Explore our latest woodworking creations</p>
        </div>
        <div className="products-slider">
          {/* Add product slider here */}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <div className="section-header animate-on-scroll">
          <h2>Why Choose Us</h2>
          <p>Experience the difference with Noah Lanka Glory</p>
        </div>
        <div className="features-grid">
          <div className="feature-item animate-on-scroll">
            <i className="fas fa-medal"></i>
            <h3>Quality Craftsmanship</h3>
            <p>Every piece is crafted with attention to detail and precision.</p>
          </div>
          <div className="feature-item animate-on-scroll">
            <i className="fas fa-leaf"></i>
            <h3>Sustainable Materials</h3>
            <p>We use eco-friendly materials and sustainable practices.</p>
          </div>
          <div className="feature-item animate-on-scroll">
            <i className="fas fa-clock"></i>
            <h3>Timely Delivery</h3>
            <p>We respect deadlines and deliver on our promises.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home; 