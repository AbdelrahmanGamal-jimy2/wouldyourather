import React from "react"
import { Component, Fragment  } from "react"
import Login from "./Login"
import {connect} from 'react-redux'
import {handleIntialUsers} from '../actions/shared'
import {handleIntialQuestions} from '../actions/shared'
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
