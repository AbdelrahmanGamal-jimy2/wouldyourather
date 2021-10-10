import React from "react";
import { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class NewQuestion extends Component
{
    render()
    {
        return(
            <div>
                <Form>
                    <h1>Would You Rather!</h1>
                    <Form.Group className="mb-3" controlId="formOption1">
                        <Form.Label>Option1</Form.Label>
                        <Form.Control type="text" placeholder="Enter option1" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="option 2">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="text" placeholder="Enter Option2" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}
export default NewQuestion