import React, { Component } from 'react'
import { ThemeContext } from '../context/ThemeContext'


export class Navigation extends Component {
    
  render() {
    return (
      // console.log(this.context);
      <ThemeContext.Consumer>
        {(context) => {
          const { isLightTheme, light,dark} = context;
          const theme = isLightTheme ? light : dark;
          return (
            <nav style={{background:theme.ui,color:theme.text}}>
              <ul>
                <li>home</li>
                <li>about</li>
                <li>contact</li>
              </ul>
            </nav>
          )
        }}

      </ThemeContext.Consumer>
    )
  }

}