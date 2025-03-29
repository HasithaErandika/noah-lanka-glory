import React from 'react';
import PropTypes from 'prop-types';
import './Section.css';

const Section = ({
  title,
  subtitle,
  children,
  centered = false,
  background = 'default',
  spacing = 'default',
  className = '',
  ...props
}) => {
  const sectionClasses = [
    'section',
    `section--bg-${background}`,
    `section--spacing-${spacing}`,
    centered ? 'section--centered' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <section className={sectionClasses} {...props}>
      <div className="section__container container">
        {(title || subtitle) && (
          <div className="section__header">
            {title && <h2 className="section__title">{title}</h2>}
            {subtitle && <p className="section__subtitle">{subtitle}</p>}
          </div>
        )}
        <div className="section__content">
          {children}
        </div>
      </div>
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node,
  centered: PropTypes.bool,
  background: PropTypes.oneOf(['default', 'primary', 'secondary', 'light', 'dark']),
  spacing: PropTypes.oneOf(['default', 'compact', 'large']),
  className: PropTypes.string,
};

export default Section; 