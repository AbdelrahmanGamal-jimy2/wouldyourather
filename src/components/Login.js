import React, {Component } from 'react'
import {connect} from 'react-redux'
import Form from 'react-bootstrap/Form'

import {setAuthed} from '../actions/authedUser'
import {Redirect} from 'react-router-dom'

class Login extends Component
{
    state = {
        loggedIn: false
    }
    handleLogin = (e)=>
    {
        e.preventDefault()
        console.log(e.target.value)
        const {dispatch} = this.props
        dispatch(setAuthed(e.target.value))
    }
    render()
    {
        const {users} = this.props
        const {authedUser} = this.props
        console.log(authedUser !== undefined)
        if(authedUser !== undefined)
        {
            return (<Redirect to='/home' />)
        }   
        return (
            <div>
                <h1>Please select a user to login with.....</h1>
                <Form.Select onChange={this.handleLogin.bind(this)}>
                    <option>Select a user</option>
                    {Object.keys(users).map((id)=><option key={id} value={id} >{users[id].name}</option>)}
                </Form.Select>
            </div>
        )
    }
}
function mapStateToProps({users, authedUser})
{
    return{
        users,
        authedUser
    }
}
export default connect(mapStateToProps)(Login)   