import { createContext } from "react";

export const AuthContext = createContext();

import React, { Component } from 'react'

export default class AuthContextProvider extends Component {
    state = {
      isAuthenticated:false,
    }
    toggleAuth = () => {
        this.setState({isAuthenticated:!this.state.isAuthenticated})
    }
    render() {
    return (
        <AuthContext.Provider value={{...this.state, toggleAuth:this.toggleAuth}}>
            {this.props.children}
      </AuthContext.Provider>
    )
  }
}

