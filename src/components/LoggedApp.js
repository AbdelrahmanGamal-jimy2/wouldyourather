import React from "react"
import { Component, Fragment } from "react"
import Login from "./Login"
import {connect} from 'react-redux'
import Home from './Home'
import { BrowserRouter as Router, Route } from "react-router-dom"
import NewQuestion from "./NewQuestion"
import NavigationBar from "./NavigationBar"
import AnswerQuestion from "./AnswerQuestion"


import {setAuthed} from '../actions/authedUser'
import {handleIntialUsers} from '../actions/shared'
import {handleIntialQuestions} from '../actions/shared'
import LeaderBoard from "./LeaderBoard"

class LoggedApp extends Component 
{
  componentDidMount()
  {
    this.props.dispatch(handleIntialUsers())
    this.props.dispatch(handleIntialQuestions())
  }
  
  render()
  {
    return (
      <Router>
            <div className="App">
              <NavigationBar/>
              <Route path='/' exact component={Login}/>
              <Route path='/home' component={Home}/>
              <Route path='/pull/:id' component={AnswerQuestion}/>
              <Route path='/new' component={NewQuestion}/>
              <Route path='/Leader' component={LeaderBoard}/>
          </div>
      </Router>
    )
  } 
}

export default connect()(LoggedApp);
