import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Noah Lanka Glory (Pvt) Ltd</h1>
          <p>Excellence in Professional Woodworking</p>
          <Link to="/services" className="cta-button">Explore Our Services</Link>
        </div>
      </section>

      {/* Featured Services Preview */}
      <section className="services">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Custom Furniture</h3>
            <p>Handcrafted furniture tailored to your specific needs and preferences.</p>
          </div>
          <div className="service-card">
            <h3>Wooden Interiors</h3>
            <p>Beautiful wooden interior solutions for homes and businesses.</p>
          </div>
          <div className="service-card">
            <h3>Wooden Artifacts</h3>
            <p>Unique wooden artifacts and decorative pieces.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home; 