import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form'
import {addAnswerToAPI} from '../actions/questions'
import {handleIntialQuestions} from '../actions/shared'
import {Link} from 'react-router-dom'
import { withRouter } from "react-router";


import { useParams } from 'react-router-dom';




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
        const qID = this.props.match.params.id;
        console.log(users,questions)
        console.log(users[questions[qID].author])
        const name = users[questions[qID].author].name
        const url = users[questions[qID].author].avatarURL
        return (
            users[questions[qID].author].name !== undefined?             
                <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Title>Asked by {name}</Card.Title>
                    <Card.Img variant="top" src={url} />
                    <Card.Body>
                    <Card.Subtitle >Would you rather</Card.Subtitle>
                    <Form onSubmit={this.addAnswer}>
                        <Form.Check
                                defaultChecked
                                name="1"
                                type={"radio"}
                                label={questions[qID].optionOne.text}
                                id = "default"
                        />
                        <Form.Check
                                name="1"
                                type={"radio"}
                                label={ questions[qID].optionTwo.text}
                                id={`default` +  qID}
                        />
                        <Button variant="primary" type= "submit"> Submit answer</Button>
                    </Form>
                     </Card.Body>
                </Card>
                </div>
            :
            <div></div>
        )
    }
}
function mapStateToProps({questions, users, authedUser}, {qID})
{

    return{
        questions,
        users,
        authedUser,
        qID
    }
}
export default withRouter(connect(mapStateToProps) (AnswerQuestion))