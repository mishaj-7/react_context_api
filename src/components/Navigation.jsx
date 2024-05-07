import React, { useContext } from "react";
import  {ThemeContext}  from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";

const Navigation = () => {
  const { isLightTheme, data } = useContext(ThemeContext);
  console.log(data)
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);
  const theme = isLightTheme ? data.light : data.dark;

  return (
    <nav style={{ background: theme.ui, color: theme.text }}>
      <h1>Context</h1>
      <div onClick={toggleAuth}>
        {isAuthenticated ? "Logged In" : "Logged Out"}
      </div>
      <button
        onClick={toggleAuth}
        style={{ background: theme.ui, color: theme.text }}
      >
        {isAuthenticated ? "Sign Out" : "Sign In"}
      </button>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navigation;
