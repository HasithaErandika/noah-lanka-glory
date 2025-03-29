import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

function Services() {
  const { isDarkMode } = useTheme();

  const services = [
    {
      title: "Custom Furniture",
      description: "Handcrafted furniture tailored to your specific needs and preferences. We create unique pieces that perfectly match your style and requirements.",
      icon: "fas fa-couch",
      features: [
        "Custom designs and measurements",
        "Premium quality materials",
        "Expert craftsmanship",
        "Detailed consultation process"
      ],
      image: "/images/furniture.jpg" // You'll need to add these images
    },
    {
      title: "Wooden Interiors",
      description: "Transform your space with our premium wooden interior solutions. From wall paneling to custom cabinets, we bring warmth and elegance to your interiors.",
      icon: "fas fa-home",
      features: [
        "Wall paneling and cladding",
        "Custom kitchen cabinets",
        "Built-in wardrobes",
        "Wooden flooring"
      ],
      image: "/images/interior.jpg"
    },
    {
      title: "Wooden Artifacts",
      description: "Unique wooden artifacts and decorative pieces that add character to any space. Each piece is crafted with attention to detail and artistic excellence.",
      icon: "fas fa-paint-brush",
      features: [
        "Decorative wall art",
        "Wooden sculptures",
        "Custom carvings",
        "Artistic installations"
      ],
      image: "/images/artifacts.jpg"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="services-page">
      {/* Hero Section */}
      <motion.div 
        className="services-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="services-hero-content">
          <h1>Our Services</h1>
          <p>Discover our comprehensive range of professional woodworking services</p>
        </div>
      </motion.div>

      {/* Services Grid */}
      <motion.div 
        className="services-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {services.map((service, index) => (
          <motion.div 
            key={index}
            className="service-card"
            variants={itemVariants}
          >
            <div className="service-card-content">
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h2>{service.title}</h2>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>
                    <i className="fas fa-check"></i>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="service-cta">
                Request Quote
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
            <div className="service-image" style={{ backgroundImage: `url(${service.image})` }}></div>
          </motion.div>
        ))}
      </motion.div>

      {/* Process Section */}
      <motion.section 
        className="process-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h2>Our Process</h2>
        <div className="process-steps">
          <div className="process-step">
            <div className="step-number">1</div>
            <h3>Consultation</h3>
            <p>Initial meeting to discuss your requirements and ideas</p>
          </div>
          <div className="process-step">
            <div className="step-number">2</div>
            <h3>Design</h3>
            <p>Creating detailed designs and proposals</p>
          </div>
          <div className="process-step">
            <div className="step-number">3</div>
            <h3>Crafting</h3>
            <p>Expert craftsmanship and quality materials</p>
          </div>
          <div className="process-step">
            <div className="step-number">4</div>
            <h3>Delivery</h3>
            <p>Professional installation and final touches</p>
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section 
        className="services-cta-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <div className="cta-content">
          <h2>Ready to Start Your Project?</h2>
          <p>Contact us today for a free consultation and quote</p>
          <button className="cta-button">
            Get in Touch
            <i className="fas fa-envelope"></i>
          </button>
        </div>
      </motion.section>
    </div>
  );
}

export default Services; 