import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button";
import AnswerQuestion from "./AnswerQuestion";
import NewQuestion from './NewQuestion'
import LeaderBoard from "./LeaderBoard";

class Question extends Component
{
    render()
    {
        const {questions} = this.props
        const {users} = this.props
        return(
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={users[questions[this.props.qID].author].avatarURL} />
                <Card.Body>
                    <Card.Title>Would you rather</Card.Title>
                    <Card.Text>
                    {
                        this.props.qID
                    }
                    </Card.Text>
                    <Button variant="primary">View Pull</Button>
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
export default connect(mapStateToProps) (Question)