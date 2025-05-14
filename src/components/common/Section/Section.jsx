import React from 'react';
import { motion } from 'framer-motion';
import './Section.css';

const Section = ({
  children,
  title,
  subtitle,
  className = '',
  variant = 'default',
  background = 'transparent',
  padding = 'large',
  ...props
}) => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const paddingVariants = {
    small: '2rem 0',
    medium: '4rem 0',
    large: '6rem 0'
  };

  return (
    <motion.section
      className={`section section--${variant} ${className}`}
      style={{
        background,
        padding: paddingVariants[padding]
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={sectionVariants}
      {...props}
    >
      <div className="section-container">
        {(title || subtitle) && (
          <motion.div 
            className="section-header"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            {title && <h2 className="section-title">{title}</h2>}
            {subtitle && <p className="section-subtitle">{subtitle}</p>}
          </motion.div>
        )}
        <motion.div 
          className="section-content"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          {children}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Section; 