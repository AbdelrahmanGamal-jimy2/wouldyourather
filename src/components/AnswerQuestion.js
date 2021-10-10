import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form'
import {addAnswerToAPI} from '../actions/questions'
import {handleIntialQuestions} from '../actions/shared'



class AnswerQuestion extends Component
{
    addAnswer = (e)=>
    {   e.preventDefault()
        console.log("at answer")
        console.log("at answer " ,e.target[0])
        if(e.target[0].checked)
        {
            this.props.dispatch((addAnswerToAPI(this.props.authedUser, this.props.qID, "optionOne")))
        }
        else{
            this.props.dispatch((addAnswerToAPI(this.props.authedUser, this.props.qID, "optionTwo")))
        }
        this.props.dispatch(handleIntialQuestions())

    }
    render()
    {
        const {questions} = this.props
        const {users} = this.props
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Title>Asked by {users[questions[this.props.qID].author].name}</Card.Title>
                    <Card.Img variant="top" src={users[questions[this.props.qID].author].avatarURL} />
                    <Card.Body>
                    <Card.Subtitle >Would you rather</Card.Subtitle>
                    <Form onSubmit={this.addAnswer}>
                        <Form.Check
                                defaultChecked
                                name="1"
                                type={"radio"}
                                label={questions[this.props.qID].optionOne.text}
                                id = "default"
                        />
                        <Form.Check
                                name="1"
                                type={"radio"}
                                label={ questions[this.props.qID].optionTwo.text}
                                id={`default` +  this.props.qID}
                        />
                        <Button variant="primary" type= "submit"> Submit answer</Button>
                    </Form>
                     </Card.Body>
            </Card>
            </div>
        )
    }
}
function mapStateToProps({questions, users, authedUser}, {qID})
{
    return{
        questions,
        users,
        authedUser
    }
}
export default connect(mapStateToProps) (AnswerQuestion)