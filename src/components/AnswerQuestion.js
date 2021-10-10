import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form'

class AnswerQuestion extends Component
{
    render()
    {
        const {questions} = this.props
        const {users} = this.props
        console.log("question1",questions[this.props.qID].optionOne.text )
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Title>Asked by {users[questions[this.props.qID].author].name}</Card.Title>
                    <Card.Img variant="top" src={users[questions[this.props.qID].author].avatarURL} />
                    <Card.Body>
                    <Card.Subtitle >Would you rather</Card.Subtitle>
                    <Form>
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
                        <Button variant="primary">Submit answer</Button>
                    </Form>
                     </Card.Body>
            </Card>
            </div>
        )
    }
}
function mapStateToProps({questions, users}, {qID})
{
    return{
        questions,
        users,
    }
}
export default connect(mapStateToProps) (AnswerQuestion)