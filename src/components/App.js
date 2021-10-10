import React from "react"
import { Component } from "react"
import Login from "./Login"
import {connect} from 'react-redux'
import NavigationBar from "./NavigationBar"
import Home from './Home'
import {setAuthed} from '../actions/authedUser'

import {handleIntialUsers} from '../actions/shared'
import {handleIntialQuestions} from '../actions/shared'

class App extends Component 
{
  componentDidMount()
  {
    this.props.dispatch(handleIntialUsers())
    this.props.dispatch(handleIntialQuestions())
    this.props.dispatch(setAuthed("sarahedo"))
  }
  render()
  {
    return (
    <div className="App">
      <Login></Login>
      <NavigationBar></NavigationBar>
      <Home></Home>
    </div>
    )
  } 
}

export default connect()(App);
