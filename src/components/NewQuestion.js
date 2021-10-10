import React from "react";
import { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {addQuestionToAPI} from '../actions/questions'
import {connect} from 'react-redux'
import {handleIntialQuestions} from '../actions/shared'


class NewQuestion extends Component
{
    addQuestion = (e)=>
    {
        e.preventDefault()
        console.log(e.target[0].value,e.target[1].value)
        this.props.dispatch(addQuestionToAPI(e.target[0].value,e.target[1].value))
        this.props.dispatch(handleIntialQuestions())
    }
    render()
    {
        return(
            <div>
                <Form onSubmit= {this.addQuestion}>
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
export default connect() (NewQuestion)