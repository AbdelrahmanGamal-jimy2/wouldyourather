import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

class Question extends Component
{
    render()
    {
        const {questions} = this.props
        const {users} = this.props
        const {qID} = this.props

        return(
        <Link to={`/questions/${qID}`}>
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
        </Link>
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