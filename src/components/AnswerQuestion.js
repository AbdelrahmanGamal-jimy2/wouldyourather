import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form'
import {addAnswerToAPI} from '../actions/questions'
import {handleIntialQuestions, handleIntialUsers} from '../actions/shared'
import { Redirect, withRouter } from "react-router";
import { ProgressBar } from "react-bootstrap";
import { Checkmark } from 'react-checkmark'


class AnswerQuestion extends Component
{
    state={
        answered: false,
        optionID: 0
    }
    addAnswer = (e)=>
    {   e.preventDefault()
        console.log("at answer")
        console.log("at answer " ,e.target[0])
        const qID = this.props.match.params.id;
        if(e.target[0].checked)
        {
            this.props.dispatch((addAnswerToAPI(this.props.authedUser, qID, "optionOne")))
            this.setState({answered: true, optionID: 1})

        }
        else{
            this.props.dispatch((addAnswerToAPI(this.props.authedUser, qID, "optionTwo")))
            this.setState({answered: true, optionID: 2})
        }
        this.props.dispatch(handleIntialQuestions())
        this.props.dispatch(handleIntialUsers())
        this.setState({answered: true, })

    }
    render()
    {
        const {questions} = this.props
        const {users} = this.props
        const qID = this.props.match.params.id;
        if(!questions.hasOwnProperty(qID))
        {
            return(
               <Redirect to="/testing"/>
            )
        }
        const name = users[questions[qID].author].name
        const url = users[questions[qID].author].avatarURL
        const option1Number = questions[qID].optionOne.votes.length
        const option2Number = questions[qID].optionTwo.votes.length
        const oneBar = option1Number/ (option1Number+option2Number) *100
        const twoBar = option2Number/ (option1Number+option2Number )*100
        console.log(oneBar,twoBar)
        return (
            users[questions[qID].author].name !== undefined?             
                <div>
                <Card style={{ width: '25rem' }}>
                    <Card.Title>Asked by {name}</Card.Title>
                    <Card.Img variant="top" src={url} />
                    <Card.Body>
                    <Card.Subtitle >Would you rather</Card.Subtitle>
                    {!this.state.answered?
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
                    </Form>:
                    <div>
                        <label>{questions[qID].optionOne.text} Votes: {option1Number} %{Math.trunc(oneBar)}%</label>
                        {
                            this.state.optionID === 1? 
                            <div style={{display: "inline-block"}}><Checkmark size="small" style={{display: "inline-block"}}></Checkmark></div>
                            :
                            null
                        }
                        <ProgressBar now={oneBar} /> 
                        <label>{questions[qID].optionTwo.text} Votes: {option2Number} {Math.trunc(twoBar)}%</label>
                        {
                            this.state.optionID === 2? 
                            <div style={{display: "inline-block"}}><Checkmark size="small" style={{display: "inline-block"}}></Checkmark></div>
                            :
                            null
                        }
                        <ProgressBar now={twoBar} />
                    </div>
                    }
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