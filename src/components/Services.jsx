import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import '../styles/Services.css';
import { FaTools, FaHome, FaChair, FaDoorOpen, FaArrowRight, FaCheck } from 'react-icons/fa';

const Services = () => {
  const { theme } = useTheme();

  const services = [
    {
      title: "Custom Furniture Design",
      description: "Transform your space with bespoke furniture pieces crafted to your exact specifications. Our expert craftsmen combine traditional woodworking techniques with modern design principles.",
      icon: <FaChair />,
      features: [
        "Personalized design consultation",
        "High-quality materials",
        "Custom sizing and finishes",
        "Professional installation"
      ],
      image: "/images/custom-furniture.jpg"
    },
    {
      title: "Interior Woodwork",
      description: "Enhance your interior spaces with our premium woodworking services. From crown molding to built-in cabinets, we bring elegance and functionality to your home.",
      icon: <FaHome />,
      features: [
        "Built-in cabinetry",
        "Wall paneling",
        "Crown molding",
        "Custom shelving"
      ],
      image: "/images/interior-woodwork.jpg"
    },
    {
      title: "Door & Window Crafting",
      description: "Make a lasting impression with custom-crafted doors and windows. Our expert team ensures perfect fit, superior functionality, and stunning aesthetics.",
      icon: <FaDoorOpen />,
      features: [
        "Custom door designs",
        "Window frames and sills",
        "Weather-resistant materials",
        "Professional fitting"
      ],
      image: "/images/doors-windows.jpg"
    },
    {
      title: "Restoration Services",
      description: "Breathe new life into your cherished wooden pieces. Our restoration services preserve the character while ensuring structural integrity and beauty.",
      icon: <FaTools />,
      features: [
        "Antique restoration",
        "Structural repairs",
        "Surface refinishing",
        "Color matching"
      ],
      image: "/images/restoration.jpg"
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
      <section className="services-hero">
        <motion.div 
          className="services-hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Our Woodworking Services</h1>
          <p>Crafting excellence through precision, passion, and expertise in every wooden masterpiece.</p>
        </motion.div>
      </section>

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
                {service.icon}
              </div>
              <h2>{service.title}</h2>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>
                    <FaCheck /> {feature}
                  </li>
                ))}
              </ul>
              <button className="service-cta">
                Request Quote <FaArrowRight />
              </button>
            </div>
            <div 
              className="service-image"
              style={{ backgroundImage: `url(${service.image})` }}
            />
          </motion.div>
        ))}
      </motion.div>

      <section className="process-section">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Process
        </motion.h2>
        <div className="process-steps">
          {[
            { number: 1, title: "Consultation", description: "We discuss your vision and requirements" },
            { number: 2, title: "Design", description: "We create detailed designs and plans" },
            { number: 3, title: "Crafting", description: "Expert craftsmen bring designs to life" },
            { number: 4, title: "Installation", description: "Professional installation and finishing" }
          ].map((step, index) => (
            <motion.div
              key={index}
              className="process-step"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="step-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="services-cta-section">
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Start Your Project Today</h2>
          <p>Let's bring your vision to life with our expert woodworking services.</p>
          <button className="cta-button">
            Get in Touch <FaArrowRight />
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default Services; 