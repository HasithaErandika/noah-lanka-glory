import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaTools, FaHome, FaChair, FaAward } from 'react-icons/fa';

const Home = () => {
  const features = [
    {
      icon: <FaTools />,
      title: "Expert Craftsmanship",
      description: "Our skilled artisans bring years of experience and dedication to every project."
    },
    {
      icon: <FaHome />,
      title: "Custom Solutions",
      description: "Tailored woodworking solutions to match your unique style and requirements."
    },
    {
      icon: <FaChair />,
      title: "Quality Materials",
      description: "We use only the finest materials to ensure lasting beauty and durability."
    },
    {
      icon: <FaAward />,
      title: "Guaranteed Satisfaction",
      description: "Your satisfaction is our priority, backed by our quality guarantee."
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Crafting Excellence in Wood</h1>
          <p className="hero-subtitle">
            Transform your space with our premium woodworking services
          </p>
          <div className="hero-buttons">
            <Link to="/services" className="cta-button primary">
              Our Services <FaArrowRight />
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

      {/* Features Section */}
      <section className="features-section">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2>Why Choose Us</h2>
          <p>Experience the difference of premium woodworking services</p>
        </motion.div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Preview */}
      <section className="services-preview">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2>Our Services</h2>
          <p>Discover our comprehensive range of woodworking solutions</p>
        </motion.div>
        <div className="services-grid">
          {[
            {
              title: "Custom Furniture",
              description: "Bespoke furniture pieces tailored to your needs",
              icon: <FaChair />,
              link: "/services"
            },
            {
              title: "Interior Woodwork",
              description: "Premium wooden interior solutions",
              icon: <FaHome />,
              link: "/services"
            },
            {
              title: "Restoration",
              description: "Expert restoration of wooden pieces",
              icon: <FaTools />,
              link: "/services"
            }
          ].map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link to={service.link} className="service-link">
                Learn More <FaArrowRight />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="home-cta">
        <motion.div 
          className="cta-content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2>Ready to Start Your Project?</h2>
          <p>Let's bring your vision to life with our expert craftsmanship</p>
          <Link to="/contact" className="cta-button primary">
            Contact Us <FaArrowRight />
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Home; 