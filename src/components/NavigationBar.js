import React from "react";
import { Component } from "react";

import { Container } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from "react-bootstrap/Button";
import Image from 'react-bootstrap/Image'

import {connect} from 'react-redux'

import {removedAuthed} from '../actions/authedUser'


class NavigationBar extends Component
{
    handleLogOut = (e)=>
    {
        console.log("logOut")
        this.props.dispatch(removedAuthed(this.props.user.id))
    }
    render()
    {  
        const {user} = this.props
        console.log(user)
        return(
            <div>
                <Navbar>
                    <Container>
                    <Navbar.Brand href="#home">Would You Rather?</Navbar.Brand>
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Toggle />
                            <Nav className="me-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#link">New Question</Nav.Link>
                                <Nav.Link href="#link">Leaderboard</Nav.Link>
                            </Nav>
                            <Navbar.Text>
                                Signed in as: {user === undefined? "": user.name}
                            </Navbar.Text>
                            <Button onClick={this.handleLogOut}>Logout</Button>
                            {user === undefined? null:<Image src={user.avatarURL} className="w-25 p-3" roundedCircle />}
                            
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

function mapStateToProps({authedUser, users})
{
    return{
        user: users[authedUser]
    }
}

export default  connect(mapStateToProps)(NavigationBar)