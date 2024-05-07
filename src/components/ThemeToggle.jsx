import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

  
  const ThemeToggle = () => {
    const { toggleTheme } = useContext(ThemeContext);
    return (
      <button
        style={{ background: "#358752", height: "120px", width: "120px" }}
        onClick={toggleTheme}
      >
        dark || white
      </button>
    );
  }
  
  export default ThemeToggle
  

