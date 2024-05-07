import React, { Component } from 'react'
import ThemeContextProvider from './context/ThemeContext'
import { Navigation } from './components/Navigation'
import BookList from './components/BookList'
import ThemeToggle from './components/ThemeToggle';
import AuthContextProvider from './context/AuthContext';

export class App extends Component {
  render() {
    return (
      <>
        <div className="App">
          <ThemeContextProvider>
            <AuthContextProvider>
              <Navigation />
              <BookList />
              <ThemeToggle />
            </AuthContextProvider>
          </ThemeContextProvider>
        </div>
      </>
    );
  }
}

