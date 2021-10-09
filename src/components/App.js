import React from "react"
import { Component } from "react"
import Login from "./Login"
import {connect} from 'react-redux'
import NavigationBar from "./NavigationBar"

import {handleIntialUsers} from '../actions/shared'

class App extends Component 
{
  componentDidMount()
  {
    this.props.dispatch(handleIntialUsers())
  }
  render()
  {
    return (
    <div className="App">
      <Login></Login>
      <NavigationBar></NavigationBar>
    </div>
    )
  } 
}

export default connect()(App);
