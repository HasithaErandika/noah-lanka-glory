import React from 'react';
import { motion } from 'framer-motion';
import { FaLeaf, FaTools, FaHandshake, FaAward } from 'react-icons/fa';
import Section from '../components/common/Section/Section';
import Card from '../components/common/Card/Card';
import Button from '../components/common/Button/Button';
import { FEATURES, PRODUCTS } from '../config/constants';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <Section
        className="hero-section"
        backgroundImage="/images/hero-bg.jpg"
        overlay
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <h1 className="hero-title">Premium Plywood Solutions</h1>
          <p className="hero-subtitle">
            Crafting excellence in every sheet, delivering quality that stands the test of time
          </p>
          <div className="hero-buttons">
            <Button
              variant="primary"
              size="large"
              onClick={() => window.location.href = '/products'}
            >
              Explore Products
            </Button>
            <Button
              variant="secondary"
              size="large"
              onClick={() => window.location.href = '/contact'}
            >
              Contact Us
            </Button>
          </div>
        </motion.div>
      </Section>

      {/* Features Section */}
      <Section className="features-section">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-header"
          >
            <h2>Why Choose Us</h2>
            <p>Excellence in every aspect of plywood manufacturing</p>
          </motion.div>
          <div className="features-grid">
            {FEATURES.map((feature, index) => (
              <Card
                key={feature.id}
                className="feature-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="feature-icon">
                  {feature.icon === 'leaf' && <FaLeaf />}
                  {feature.icon === 'tools' && <FaTools />}
                  {feature.icon === 'handshake' && <FaHandshake />}
                  {feature.icon === 'award' && <FaAward />}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Products Section */}
      <Section className="products-section bg-[#2a2a2a]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-header"
          >
            <h2>Our Products</h2>
            <p>Discover our range of premium plywood solutions</p>
          </motion.div>
          <div className="products-grid">
            {PRODUCTS.map((product, index) => (
              <Card
                key={product.id}
                className="product-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="product-image">
                  <img src={product.image} alt={product.title} />
                </div>
                <div className="product-content">
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                  <Button
                    variant="primary"
                    onClick={() => window.location.href = `/products#${product.id}`}
                  >
                    Learn More
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Process Section */}
      <Section className="process-section">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-header"
          >
            <h2>Our Process</h2>
            <p>How we ensure quality in every step</p>
          </motion.div>
          <div className="process-timeline">
            {[
              {
                step: '01',
                title: 'Material Selection',
                description: 'Carefully selecting the finest raw materials'
              },
              {
                step: '02',
                title: 'Precision Manufacturing',
                description: 'State-of-the-art production process'
              },
              {
                step: '03',
                title: 'Quality Control',
                description: 'Rigorous testing and inspection'
              },
              {
                step: '04',
                title: 'Delivery',
                description: 'Safe and timely delivery to your location'
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                className="process-step"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="step-number">{process.step}</div>
                <h3>{process.title}</h3>
                <p>{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="cta-section bg-[#2a2a2a]">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>Ready to Start Your Project?</h2>
            <p>Let's create something exceptional together</p>
            <Button
              variant="primary"
              size="large"
              onClick={() => window.location.href = '/contact'}
            >
              Get in Touch
            </Button>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default Home;