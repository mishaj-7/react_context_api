import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { AuthContext } from '../context/AuthContext';



const Navigation = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);
  const theme = isLightTheme ? light : dark;

  return (
    // console.log(this.context);
    //console.log(isAuthenticated)
    //console.log((isAuthenticated?'true':'false'));
    <nav style={{ background: theme.ui, color: theme.text }}>
      <h1>context</h1>
      <div onClick={toggleAuth}>
        {isAuthenticated ? "loggedin" : "logged out"}
      </div>
      <button
        onClick={toggleAuth}
        style={{ background: theme.ui, color: theme.text }}
      >
        {isAuthenticated ? "out" : "in"}
      </button>
      <ul>
        <li>home</li>
        <li>about</li>
        <li>contact</li>
      </ul>
    </nav>
  );
};

export default Navigation

  
    
  

