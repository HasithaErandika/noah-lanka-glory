import React from 'react';
import { motion } from 'framer-motion';
import { FaLeaf, FaIndustry, FaUsers, FaAward } from 'react-icons/fa';
import Section from '../components/common/Section/Section';
import Card from '../components/common/Card/Card';
import Button from '../components/common/Button/Button';
import './About.css';

const About = () => {
  const stats = [
    { number: '7+', label: 'Years Experience', icon: <FaIndustry /> },
    { number: '1000+', label: 'Projects Completed', icon: <FaAward /> },
    { number: '50+', label: 'Team Members', icon: <FaUsers /> },
    { number: '100%', label: 'Quality Assured', icon: <FaLeaf /> }
  ];

  const values = [
    {
      title: 'Quality First',
      description: 'We maintain the highest standards in every product we manufacture.',
      icon: <FaAward />
    },
    {
      title: 'Sustainability',
      description: 'Committed to eco-friendly practices and sustainable manufacturing.',
      icon: <FaLeaf />
    },
    {
      title: 'Innovation',
      description: 'Continuously improving our processes and products.',
      icon: <FaIndustry />
    },
    {
      title: 'Customer Focus',
      description: 'Building long-term relationships through exceptional service.',
      icon: <FaUsers />
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <Section
        className="about-hero"
        backgroundImage="/images/about-hero.jpg"
        overlay
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Leading the way in premium plywood manufacturing since 2016
          </p>
        </motion.div>
      </Section>

      {/* About Section */}
      <Section className="about-content bg-[#2a2a2a]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">About Noah Lanka Glory</h2>
            <p className="text-lg max-w-3xl mx-auto mb-6">
              Founded in 2016, Noah Lanka Glory (Pvt) Ltd is a leading plywood manufacturer based in Padukka, Sri Lanka.
              With nearly a decade of expertise, we produce premium plywood for marine, commercial, and custom applications,
              serving clients worldwide with a focus on quality, innovation, and sustainability.
            </p>
            <p className="text-lg max-w-3xl mx-auto mb-6">
              Our state-of-the-art facilities and dedicated team ensure that every product meets stringent industry standards.
              We are committed to environmentally responsible practices, delivering durable and versatile plywood solutions
              that empower your projects.
            </p>
            <Button
              variant="primary"
              size="large"
              onClick={() => window.location.href = '/contact'}
            >
              Contact Us
            </Button>
          </motion.div>
        </div>
      </Section>

      {/* Stats Section */}
      <Section className="stats-section">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="stat-card"
              >
                <div className="stat-icon">{stat.icon}</div>
                <h3 className="stat-number">{stat.number}</h3>
                <p className="stat-label">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Values Section */}
      <Section className="values-section bg-[#2a2a2a]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="value-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="value-icon">{value.icon}</div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Team Section */}
      <Section className="team-section">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Add team member cards here */}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default About; 