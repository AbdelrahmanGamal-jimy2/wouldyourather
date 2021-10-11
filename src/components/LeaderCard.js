import React from "react";
import { Component } from "react";

import { connect } from "react-redux";

import Card from 'react-bootstrap/Card';


class LeaderCard extends Component
{   
    render()
    {
        return(
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.props.URL} />
                <Card.Body>
                    <Card.Text>
                        name: {this.props.name}
                    </Card.Text>
                    <Card.Text>
                        Number of questaions answered: {this.props.score}
                    </Card.Text>
                    <Card.Text>
                        Number of questions created: {this.props.NOQ}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
        )
    }
}

export default connect()(LeaderCard)