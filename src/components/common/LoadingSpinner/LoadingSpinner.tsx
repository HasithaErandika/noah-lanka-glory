import React from 'react';
import './LoadingSpinner.css';

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  text?: string;
  overlay?: boolean;
  fullScreen?: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'medium',
  color = 'var(--primary-color)',
  text,
  overlay = false,
  fullScreen = false
}) => {
  return (
    <div className={`loading-spinner-container ${fullScreen ? 'fullscreen' : ''} ${overlay ? 'overlay' : ''}`}>
      <div className={`loading-spinner ${size}`} style={{ borderColor: color }}>
        <div className="spinner-inner" style={{ borderColor: color }}></div>
        <div className="spinner-inner-2" style={{ borderColor: color }}></div>
      </div>
      {text && <p className="loading-text" style={{ color }}>{text}</p>}
    </div>
  );
};

export default LoadingSpinner; 