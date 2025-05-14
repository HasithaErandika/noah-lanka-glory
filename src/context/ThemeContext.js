import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const themes = {
  light: {
    name: 'light',
    colors: {
      primary: '#D4A017',
      primaryDark: '#B38A14',
      background: '#FFFFFF',
      backgroundDark: '#F5F5F5',
      textPrimary: '#333333',
      textSecondary: '#666666',
      textLight: '#FFFFFF',
      border: '#E0E0E0',
      success: '#4CAF50',
      error: '#F44336',
      warning: '#FFC107'
    },
    shadows: {
      small: '0 2px 4px rgba(0, 0, 0, 0.1)',
      medium: '0 4px 8px rgba(0, 0, 0, 0.1)',
      large: '0 8px 16px rgba(0, 0, 0, 0.1)'
    },
    transitions: {
      default: '0.3s ease',
      fast: '0.15s ease',
      slow: '0.5s ease'
    }
  },
  dark: {
    name: 'dark',
    colors: {
      primary: '#D4A017',
      primaryDark: '#B38A14',
      background: '#121212',
      backgroundDark: '#1E1E1E',
      textPrimary: '#FFFFFF',
      textSecondary: '#B0B0B0',
      textLight: '#FFFFFF',
      border: '#333333',
      success: '#66BB6A',
      error: '#EF5350',
      warning: '#FFCA28'
    },
    shadows: {
      small: '0 2px 4px rgba(0, 0, 0, 0.2)',
      medium: '0 4px 8px rgba(0, 0, 0, 0.2)',
      large: '0 8px 16px rgba(0, 0, 0, 0.2)'
    },
    transitions: {
      default: '0.3s ease',
      fast: '0.15s ease',
      slow: '0.5s ease'
    }
  }
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () => {
    setTheme(prevTheme => 
      prevTheme.name === 'light' ? themes.dark : themes.light
    );
  };

  useEffect(() => {
    // Apply theme to document
    document.documentElement.style.setProperty('--primary-color', theme.colors.primary);
    document.documentElement.style.setProperty('--primary-dark', theme.colors.primaryDark);
    document.documentElement.style.setProperty('--background', theme.colors.background);
    document.documentElement.style.setProperty('--background-dark', theme.colors.backgroundDark);
    document.documentElement.style.setProperty('--text-primary', theme.colors.textPrimary);
    document.documentElement.style.setProperty('--text-secondary', theme.colors.textSecondary);
    document.documentElement.style.setProperty('--text-light', theme.colors.textLight);
    document.documentElement.style.setProperty('--border-color', theme.colors.border);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};