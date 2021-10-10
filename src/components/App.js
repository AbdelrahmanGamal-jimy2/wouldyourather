import React from "react"
import { Component, Fragment  } from "react"
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
import LoggedApp from "./LoggedApp"

class App extends Component 
{
  componentDidMount()
  {
    this.props.dispatch(handleIntialUsers())
    this.props.dispatch(handleIntialQuestions())
  }
  
  render()
  {
      return(
        <Fragment>
            {this.props.authedUser === null ? <Login> </Login>:<LoggedApp></LoggedApp>}
      </Fragment>
      )
  } 
}
function mapStateToProps({authedUser})
{
    return{
      authedUser
    }
}

export default connect(mapStateToProps)(App);
