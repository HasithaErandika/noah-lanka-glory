import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

interface CardProps {
  title: string;
  subtitle?: string;
  description?: string;
  image?: string;
  icon?: string;
  features?: string[];
  className?: string;
  onClick?: () => void;
  cta?: {
    text: string;
    link: string;
  };
  imageAlt?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  description,
  image,
  icon,
  features,
  className = '',
  onClick,
  cta,
  imageAlt
}) => {
  return (
    <div className={`card ${className}`} onClick={onClick}>
      {image && (
        <div className="card-image">
          <img src={image} alt={imageAlt || title} />
        </div>
      )}
      {icon && (
        <div className="card-icon">
          <i className={`fas fa-${icon}`}></i>
        </div>
      )}
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        {subtitle && <p className="card-subtitle">{subtitle}</p>}
        {description && <p className="card-description">{description}</p>}
        {features && features.length > 0 && (
          <ul className="card-features">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        )}
        {cta && (
          <Link to={cta.link} className="btn btn-outline">
            {cta.text}
          </Link>
        )}
      </div>
    </div>
  );
};

export default Card; 