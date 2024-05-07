import React, { Component } from 'react'
import { ThemeContext } from '../context/ThemeContext'

export default class BookList extends Component {
  static contextType = ThemeContext;
  render() {
    const {isLightTheme, light, dark} = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <div className='book-list'
      style={{color:theme.text, background:theme.bg}}>
        <ul>
          <li style={{background:theme.ui}}>atomic habit</li>
          <li style={{background:theme.ui}}>eat the big frog</li>
          <li style={{background:theme.ui}}>how to talk anyone</li>
        </ul>
      </div>
    )
  }
}
