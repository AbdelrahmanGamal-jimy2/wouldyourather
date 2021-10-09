import React, {Component } from 'react'
import connect from 'react-redux'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import {setAuthed} from '../actions/authedUser'
class Login extends Component
{
    handleLogin = (e)=>
    {
        e.preventDefault()
        const {dispatch} = this.props
    }
    render()
    {
        return (
            <div>
                <h1>Please select a user to login with.....</h1>
                <Form.Select onSubmit={this.handleLogin} aria-label="Default select example">
                    <option>Select a user</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </div>
        )
    }
}
export default (connect)(Login)   