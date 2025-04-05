import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Home.css'; // Assuming CSS files are imported here or globally

function Home() {
  useEffect(() => {
    // Add scroll animation class to elements when they come into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    });

    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const blogPosts = [
    {
      title: "A New Website Was Launched",
      description: "“A new website has been launched, providing a fresh digital gateway to explore our extensive range of services and offerings.”",
      link: "/blog/web2",
    },
    {
      title: "Products From Noah Lanka Glory",
      description: "“Discover an array of cutting-edge products meticulously crafted by Noah Lanka Glory to meet the diverse needs of modern industries.”",
      link: "/blog/products",
    },
    {
      title: "Our Latest Projects",
      description: "“Our latest projects showcase our commitment to innovation and excellence, setting new standards in the industry.”",
      link: "/blog/work2",
    },
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero__title">Noah Lanka Glory (Pvt) Ltd</h1>
          <p className="hero__subtitle">Excellence in Professional Woodworking</p>
          <div className="hero-buttons">
            <Link to="/services" className="cta-button primary">
              Explore Our Services
            </Link>
            <Link to="/contact" className="cta-button secondary">
              Get in Touch
            </Link>
          </div>
        </motion.div>
        <div className="scroll-indicator">
          <span>Scroll Down</span>
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* A Bit About Us Section */}
      <section className="section section--spacing-default">
        <div className="section-header animate-on-scroll">
          <h2 className="section__title">A Bit About Us</h2>
          <p className="section__subtitle">
            At Noah Lanka Glory, we combine craftsmanship with innovation to deliver exceptional woodworking solutions.
          </p>
        </div>
        <motion.div
          className="section__content animate-on-scroll"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3>Our Key Services</h3>
          <p>
            From bespoke furniture to stunning wooden interiors, we offer a spectrum of services tailored to elevate your space.
          </p>
        </motion.div>
      </section>

      {/* What We Do (Why Choose Us) Section */}
      <section className="why-choose-us">
        <div className="section-header animate-on-scroll">
          <h2 className="section__title">What We Do</h2>
          <p className="section__subtitle">Experience the Difference with Noah Lanka Glory</p>
        </div>
        <div className="features-grid">
          <motion.div
            className="feature-item animate-on-scroll"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <i className="fas fa-medal"></i>
            <h3>Quality Craftsmanship</h3>
            <p>Every piece is crafted with attention to detail and precision.</p>
          </motion.div>
          <motion.div
            className="feature-item animate-on-scroll"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <i className="fas fa-leaf"></i>
            <h3>Sustainable Materials</h3>
            <p>We use eco-friendly materials and sustainable practices.</p>
          </motion.div>
          <motion.div
            className="feature-item animate-on-scroll"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <i className="fas fa-clock"></i>
            <h3>Timely Delivery</h3>
            <p>We respect deadlines and deliver on our promises.</p>
          </motion.div>
        </div>
      </section>

      {/* Featured Services Preview */}
      <section className="services-preview">
        <div className="section-header animate-on-scroll">
          <h2 className="section__title">Our Key Services</h2>
          <p className="section__subtitle">Discover Our Comprehensive Range of Woodworking Solutions</p>
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
            <Link to="/services" className="service-link">
              Learn More →
            </Link>
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
            <Link to="/services" className="service-link">
              Learn More →
            </Link>
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
            <Link to="/services" className="service-link">
              Learn More →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CEO Message Section */}
      <section className="section section--spacing-compact section--centered">
        <motion.div
          className="section__content animate-on-scroll"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="ceo-quote">
            "Exciting times ahead as we expand our horizons, offering a spectrum of services designed to elevate your experience and exceed expectations."
          </p>
          <p className="ceo-name">Suraj Costa</p>
          <p className="ceo-title">CEO</p>
        </motion.div>
      </section>

      {/* Latest from the Blog Section */}
      <section className="section section--spacing-large">
        <div className="section-header animate-on-scroll">
          <h2 className="section__title">Latest from the Blog</h2>
          <p className="section__subtitle">Stay Updated with Noah Lanka Glory</p>
        </div>
        <div className="services-grid">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              className="service-card animate-on-scroll"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <Link to={post.link} className="service-link">
                Read More →
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* What Our Clients Say Section */}
      <section className="section section--spacing-default section--centered">
        <div className="section-header animate-on-scroll">
          <h2 className="section__title">What Our Clients Say</h2>
          <p className="section__subtitle">Voices of Satisfaction</p>
        </div>
        <motion.div
          className="section__content animate-on-scroll"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="feature-item">
            <p>
              "Noah Lanka Glory transformed our space with unparalleled craftsmanship and attention to detail."
            </p>
            <p className="client-name"><strong>- Happy Client</strong></p>
          </div>
        </motion.div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products">
        <div className="section-header animate-on-scroll">
          <h2 className="section__title">Featured Products</h2>
          <p className="section__subtitle">Explore Our Latest Woodworking Creations</p>
        </div>
        <div className="products-slider">
          {/* Add product slider here */}
        </div>
      </section>
    </div>
  );
}

export default Home;