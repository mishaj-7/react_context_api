import React, { Component } from 'react'
import { ThemeContext } from '../context/ThemeContext'

export default class ThemeToggle extends Component {
    static contextType = ThemeContext;

    render() {
        const {toggleTheme} = this.context;
    return (
      <button
        style={{ background: "#358752", height: "120px", width: "120px" }}
        onClick={toggleTheme}
      >
        dark|| white
      </button>
    );
  }
}
