import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  ctaPrimary?: {
    text: string;
    link: string;
  };
  ctaSecondary?: {
    text: string;
    link: string;
  };
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, backgroundImage, ctaPrimary, ctaSecondary }) => {
  return (
    <section 
      className="hero-section"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <div className="hero-buttons">
          {ctaPrimary && (
            <Link to={ctaPrimary.link} className="btn btn-primary">
              {ctaPrimary.text}
            </Link>
          )}
          {ctaSecondary && (
            <Link to={ctaSecondary.link} className="btn btn-secondary">
              {ctaSecondary.text}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero; 