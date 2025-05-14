import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import './Hero.css';

const Hero = ({
  title,
  subtitle,
  backgroundImage,
  overlay = true,
  height = 'full',
  align = 'center',
  className = '',
  children,
  ...props
}) => {
  const heightVariants = {
    small: '50vh',
    medium: '70vh',
    full: '100vh'
  };

  const alignVariants = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end'
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <motion.div
      className={`hero ${className}`}
      style={{
        height: heightVariants[height],
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
        alignItems: alignVariants[align]
      }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      {...props}
    >
      {overlay && <div className="hero-overlay" />}
      <motion.div 
        className="hero-content"
        variants={itemVariants}
      >
        {title && (
          <motion.h1 
            className="hero-title"
            variants={itemVariants}
          >
            {title}
          </motion.h1>
        )}
        {subtitle && (
          <motion.p 
            className="hero-subtitle"
            variants={itemVariants}
          >
            {subtitle}
          </motion.p>
        )}
        {children && (
          <motion.div 
            className="hero-actions"
            variants={itemVariants}
          >
            {children}
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node,
  backgroundImage: PropTypes.string,
  overlay: PropTypes.bool,
  height: PropTypes.oneOf(['small', 'medium', 'full']),
  align: PropTypes.oneOf(['left', 'center', 'right']),
  className: PropTypes.string,
};

export default Hero; 