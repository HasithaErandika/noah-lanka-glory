import React, { ReactNode } from 'react';
import './Section.css';

interface SectionProps {
  title?: string;
  subtitle?: string;
  className?: string;
  backgroundImage?: string;
  children: ReactNode;
}

const Section: React.FC<SectionProps> = ({
  title,
  subtitle,
  className = '',
  backgroundImage,
  children
}) => {
  return (
    <section 
      className={`section ${className}`}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined}
    >
      <div className="section-overlay"></div>
      <div className="container">
        {(title || subtitle) && (
          <div className="section-header">
            {title && <h2 className="section-title">{title}</h2>}
            {subtitle && <p className="section-subtitle">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section; 