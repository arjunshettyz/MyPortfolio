import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="theme-toggle">
      <input 
        type="checkbox" 
        id="theme-toggle-checkbox" 
        checked={isDarkMode}
        onChange={toggleTheme}
        className="theme-toggle-checkbox"
      />
      <label htmlFor="theme-toggle-checkbox" className="theme-toggle-label">
        <i className="fas fa-sun"></i>
        <i className="fas fa-moon"></i>
        <div className="theme-toggle-ball"></div>
      </label>
    </div>
  );
};

export default ThemeToggle; 