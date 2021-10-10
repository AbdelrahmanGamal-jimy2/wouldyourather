import React from "react";
import { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {addQuestionToAPI} from '../actions/questions'
import {connect} from 'react-redux'
import {handleIntialQuestions} from '../actions/shared'
import { Redirect } from "react-router";


class NewQuestion extends Component
{
    addQuestion = (e)=>
    {
        e.preventDefault()
        this.props.dispatch(addQuestionToAPI(e.target[0].value,e.target[1].value))
        this.props.dispatch(handleIntialQuestions())
    }
    render()
    {

        const {users} = this.props
        if(this.props.authedUser === null)
        {
            return <Redirect to="/" ></Redirect>
        }
        return(
            <div>
                <Form onSubmit= {this.addQuestion}>
                    <h1>Would You Rather!</h1>
                    <Form.Group className="mb-3" controlId="formOption1">
                        <Form.Label>Option1</Form.Label>
                        <Form.Control type="text" placeholder="Enter option1" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formOption2">
                        <Form.Label>option2</Form.Label>
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
function mapStateToProps({ authedUser})
{
    return{
        authedUser
    }
}
export default connect(mapStateToProps) (NewQuestion)