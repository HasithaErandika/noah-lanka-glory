import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Button.css';

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  icon,
  iconPosition = 'right',
  fullWidth = false,
  disabled = false,
  loading = false,
  onClick,
  className = '',
  type = 'button',
  ...props
}) => {
  const [ripple, setRipple] = useState({ x: 0, y: 0, active: false });

  const handleClick = (e) => {
    if (disabled || loading) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setRipple({ x, y, active: true });
    setTimeout(() => setRipple({ x: 0, y: 0, active: false }), 600);

    onClick?.(e);
  };

  const buttonVariants = {
    primary: {
      backgroundColor: 'var(--primary-color)',
      color: 'var(--background)',
      border: 'none',
      '&:hover': {
        backgroundColor: 'var(--primary-dark)',
      },
    },
    secondary: {
      backgroundColor: 'transparent',
      color: 'var(--primary-color)',
      border: '2px solid var(--primary-color)',
      '&:hover': {
        backgroundColor: 'rgba(212, 160, 23, 0.1)',
      },
    },
    text: {
      backgroundColor: 'transparent',
      color: 'var(--primary-color)',
      border: 'none',
      padding: '0.5rem 1rem',
      '&:hover': {
        backgroundColor: 'rgba(212, 160, 23, 0.1)',
      },
    },
  };

  const sizeVariants = {
    small: {
      padding: '0.5rem 1rem',
      fontSize: '0.875rem',
    },
    medium: {
      padding: '0.75rem 1.5rem',
      fontSize: '1rem',
    },
    large: {
      padding: '1rem 2rem',
      fontSize: '1.125rem',
    },
  };

  const buttonStyle = {
    ...buttonVariants[variant],
    ...sizeVariants[size],
    width: fullWidth ? '100%' : 'auto',
    opacity: disabled ? 0.6 : 1,
    cursor: disabled || loading ? 'not-allowed' : 'pointer',
  };

  return (
    <motion.button
      className={`custom-button ${loading ? 'loading' : ''} ${className}`}
      style={buttonStyle}
      onClick={handleClick}
      type={type}
      whileHover={!disabled && !loading ? { scale: 1.02 } : {}}
      whileTap={!disabled && !loading ? { scale: 0.98 } : {}}
      disabled={disabled || loading}
      {...props}
    >
      {ripple.active && (
        <motion.span
          className="ripple"
          initial={{ scale: 0, opacity: 0.5 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            left: ripple.x,
            top: ripple.y,
          }}
        />
      )}
      {icon && iconPosition === 'left' && !loading && (
        <span className="button-icon left">{icon}</span>
      )}
      <span className="button-content">
        {loading ? (
          <motion.div
            className="loading-spinner"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        ) : (
          children
        )}
      </span>
      {icon && iconPosition === 'right' && !loading && (
        <span className="button-icon right">{icon}</span>
      )}
    </motion.button>
  );
};

export default Button; 