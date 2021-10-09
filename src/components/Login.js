import React, {Component } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
class Login extends Component
{
    render()
    {
        return (
            <div>
                <h1>Please select a user to login with.....</h1>
                <Form.Select aria-label="Default select example">
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
export default Login   
/*                <Dropdown>
<Dropdown.Toggle variant="success" id="dropdown-basic">
Select a user
</Dropdown.Toggle>

<Dropdown.Menu>
<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>*/