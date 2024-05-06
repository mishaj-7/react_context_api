import React, { Component } from 'react'
import ThemeContextProvider from './context/ThemeContext'
import { Navigation } from './components/Navigation'
import BookList from './components/BookList'

export class App extends Component {
  render() {
    return (
      <>
        <ThemeContextProvider>
          <Navigation />
          <BookList />
        </ThemeContextProvider>
        
      </>
    )
  }
}

