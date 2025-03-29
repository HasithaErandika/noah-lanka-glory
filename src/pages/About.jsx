import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaAward, FaUsers, FaHistory, FaHandshake, FaArrowRight } from 'react-icons/fa';

const About = () => {
  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "500+", label: "Projects Completed" },
    { number: "300+", label: "Happy Clients" },
    { number: "50+", label: "Expert Craftsmen" }
  ];

  const values = [
    {
      icon: <FaAward />,
      title: "Excellence",
      description: "We strive for excellence in every piece we craft, ensuring the highest quality standards."
    },
    {
      icon: <FaHandshake />,
      title: "Integrity",
      description: "We conduct our business with honesty, transparency, and respect for our clients."
    },
    {
      icon: <FaUsers />,
      title: "Customer Focus",
      description: "Your satisfaction is our priority. We work closely with you to bring your vision to life."
    },
    {
      icon: <FaHistory />,
      title: "Timely Delivery",
      description: "We value your time and ensure prompt delivery without compromising on quality."
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <motion.div 
          className="about-hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>About Noah Lanka Glory</h1>
          <p>Crafting excellence since 2013</p>
        </motion.div>
      </section>

      {/* Company Overview */}
      <section className="company-overview">
        <div className="container">
          <motion.div 
            className="overview-content"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="overview-text">
              <h2>Our Story</h2>
              <p>Noah Lanka Glory (Pvt) Ltd has been at the forefront of premium woodworking services in Sri Lanka since 2013. What started as a small workshop has grown into a full-service woodworking company, thanks to our unwavering commitment to quality and customer satisfaction.</p>
              <p>Our team of skilled craftsmen combines traditional woodworking techniques with modern technology to create stunning pieces that stand the test of time. We take pride in our attention to detail and our ability to bring our clients' visions to life.</p>
            </div>
            <div className="overview-image">
              <img src="/images/workshop.jpg" alt="Our Workshop" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2>Our Values</h2>
            <p>The principles that guide our work</p>
          </motion.div>
          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="value-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2>Our Team</h2>
            <p>Meet the craftsmen behind our exceptional work</p>
          </motion.div>
          <div className="team-grid">
            {/* Add team members here */}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <motion.div 
          className="cta-content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2>Ready to Start Your Project?</h2>
          <p>Let's create something beautiful together</p>
          <Link to="/contact" className="cta-button primary">
            Get in Touch <FaArrowRight />
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default About; 