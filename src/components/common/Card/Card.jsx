import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({
  children,
  variant = 'default',
  hover = true,
  className = '',
  onClick,
  ...props
}) => {
  const cardVariants = {
    default: {
      backgroundColor: 'var(--card-bg)',
      border: '1px solid var(--border-color)',
    },
    elevated: {
      backgroundColor: 'var(--card-bg)',
      boxShadow: 'var(--shadow)',
    },
    outlined: {
      backgroundColor: 'transparent',
      border: '2px solid var(--primary-color)',
    },
  };

  const cardStyle = {
    ...cardVariants[variant],
  };

  return (
    <motion.div
      className={`custom-card ${className}`}
      style={cardStyle}
      onClick={onClick}
      whileHover={hover ? { y: -5, boxShadow: 'var(--shadow-hover)' } : {}}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['default', 'outlined', 'elevated']),
  hover: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export const CardHeader = ({ children, className = '', ...props }) => (
  <div className={`card-header ${className}`} {...props}>
    {children}
  </div>
);

export const CardContent = ({ children, className = '', ...props }) => (
  <div className={`card-content ${className}`} {...props}>
    {children}
  </div>
);

export const CardFooter = ({ children, className = '', ...props }) => (
  <div className={`card-footer ${className}`} {...props}>
    {children}
  </div>
);

export const CardImage = ({ src, alt, className = '', ...props }) => (
  <div className={`card-image ${className}`} {...props}>
    <img src={src} alt={alt} />
  </div>
);

export default Card; 