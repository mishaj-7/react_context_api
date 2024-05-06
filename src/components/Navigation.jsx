import React, { Component } from 'react'
import { ThemeContext } from '../context/ThemeContext'


export class Navigation extends Component {
    static contextType = ThemeContext;
    render() {
        // console.log(this.context);
    const {isLightTheme,light,dark} = this.context
        const theme = isLightTheme ? light : dark;
    return (
      <div>
            <nav style={{background:theme.ui,color:theme.text}}>
                <ul>
                    <li>home</li>
                    <li>about</li>
                    <li>contact</li>
                </ul>
        </nav>
      </div>
    )
  }
}

