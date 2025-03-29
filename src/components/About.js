import React from 'react';

function About() {
  return (
    <div className="about-page">
      <div className="page-header">
        <h1>About Us</h1>
        <p>Learn more about Noah Lanka Glory (Pvt) Ltd</p>
      </div>

      <div className="about-content">
        <div className="about-section">
          <h2>Our Story</h2>
          <p>Noah Lanka Glory (Pvt) Ltd has been at the forefront of professional woodworking in Sri Lanka for many years. Our journey began with a simple mission: to create exceptional wooden products that combine traditional craftsmanship with modern design principles.</p>
        </div>

        <div className="about-section">
          <h2>Our Mission</h2>
          <p>We strive to deliver the highest quality woodworking services while maintaining sustainable practices and supporting local craftsmanship. Our commitment to excellence and attention to detail has made us a trusted name in the industry.</p>
        </div>

        <div className="about-section">
          <h2>Our Values</h2>
          <ul className="values-list">
            <li>Quality Craftsmanship</li>
            <li>Sustainable Practices</li>
            <li>Customer Satisfaction</li>
            <li>Innovation in Design</li>
            <li>Preservation of Traditional Techniques</li>
          </ul>
        </div>

        <div className="about-section">
          <h2>Our Team</h2>
          <p>Our team consists of skilled artisans, experienced craftsmen, and dedicated professionals who bring years of expertise to every project. We work together to ensure that each piece meets our high standards of quality and craftsmanship.</p>
        </div>
      </div>
    </div>
  );
}

export default About; 