import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about-page">
      <section id="about" className="section bg-[#2a2a2a]">
        <div className="max-w-7xl mx-auto text-center">
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
          <Link to="/contact" className="btn-gold mt-8 inline-block">Contact Us</Link>
        </div>
      </section>
    </div>
  );
};

export default About; 