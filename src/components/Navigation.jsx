import React, { Component } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { AuthContext } from '../context/AuthContext';


export class Navigation extends Component {
    
  render() {
    return (
      // console.log(this.context);
      <AuthContext.Consumer>
        {(authContext) => (
          <ThemeContext.Consumer>
            {(context) => {
              const { isAuthenticated, toggleAuth } = authContext;
              //console.log(isAuthenticated)
              //console.log((isAuthenticated?'true':'false'));
              const { isLightTheme, light, dark } = context;
              const theme = isLightTheme ? light : dark;
              return (
                <nav style={{ background: theme.ui, color: theme.text }}>
                  <h1>context</h1>
                  <div onClick={toggleAuth}>{isAuthenticated ? 'loggedin' : 'logged out'}</div>
                  <button onClick={toggleAuth}>{isAuthenticated ? 'out' :'in'}</button>
                  <ul>
                    <li>home</li>
                    <li>about</li>
                    <li>contact</li>
                  </ul>
                </nav>
              );
            }}
          </ThemeContext.Consumer>
        )}
      </AuthContext.Consumer>
    );
  }

}