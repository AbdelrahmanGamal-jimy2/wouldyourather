import React, {Component } from 'react'
import {connect} from 'react-redux'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import {setAuthed} from '../actions/authedUser'

class Login extends Component
{
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
function mapStateToProps({users})
{
    return{
        users
    }
}
export default connect(mapStateToProps)(Login)   