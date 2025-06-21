import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  backgroundImages?: string[];
  ctaPrimary?: {
    text: string;
    link: string;
  };
  ctaSecondary?: {
    text: string;
    link: string;
  };
}

const Hero: React.FC<HeroProps> = ({ 
  title, 
  subtitle, 
  backgroundImage, 
  backgroundImages, 
  ctaPrimary, 
  ctaSecondary 
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Use backgroundImages array if provided, otherwise fall back to single backgroundImage
  const images = backgroundImages || (backgroundImage ? [backgroundImage] : []);
  
  useEffect(() => {
    if (images.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000); // 10 seconds
    
    return () => clearInterval(interval);
  }, [images.length]);
  
  const currentImage = images[currentImageIndex] || '';
  
  return (
    <section 
      className="hero-section"
      style={{ backgroundImage: `url(${currentImage})` }}
    >
      <div className="hero-overlay"></div>
      
      {/* Slideshow indicators */}
      {images.length > 1 && (
        <div className="hero-slideshow-indicators">
          {images.map((_, index) => (
            <button
              key={index}
              className={`hero-indicator ${index === currentImageIndex ? 'active' : ''}`}
              onClick={() => setCurrentImageIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
      
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