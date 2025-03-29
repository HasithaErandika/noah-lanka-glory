import React from 'react';
import PropTypes from 'prop-types';
import './Hero.css';

const Hero = ({
  title,
  subtitle,
  children,
  backgroundImage,
  overlay = true,
  centered = true,
  fullHeight = false,
  className = '',
  ...props
}) => {
  const heroClasses = [
    'hero',
    centered ? 'hero--centered' : '',
    fullHeight ? 'hero--full-height' : '',
    overlay ? 'hero--overlay' : '',
    className
  ].filter(Boolean).join(' ');

  const style = backgroundImage ? {
    backgroundImage: `url(${backgroundImage})`,
  } : {};

  return (
    <section className={heroClasses} style={style} {...props}>
      <div className="hero__content container">
        {title && <h1 className="hero__title">{title}</h1>}
        {subtitle && <p className="hero__subtitle">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
};

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node,
  backgroundImage: PropTypes.string,
  overlay: PropTypes.bool,
  centered: PropTypes.bool,
  fullHeight: PropTypes.bool,
  className: PropTypes.string,
};

export default Hero; 