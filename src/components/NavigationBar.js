import React from "react";
import { Component } from "react";

import { Alert, Container } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar'
import { NavLink, Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav'
import Button from "react-bootstrap/Button";
import Image from 'react-bootstrap/Image'

import {connect} from 'react-redux'

import {removedAuthed} from '../actions/authedUser'
import { Redirect } from "react-router";


class NavigationBar extends Component
{

    
    handleLogOut = (e)=>
    {
        console.log("logOut")
        if(this.props.user!== undefined )
        {
            this.props.dispatch(removedAuthed(this.props.user.id))
        }
        else
        {
            console.log("Already logged out")
        }
        
    }
    onNavigate =(e)=>
    {
        
    }
    render()
    {  
        const {user} = this.props
        return(
            <div>
                <Navbar>
                    <Container>
                    <Navbar.Brand as={Link} to="/">Would You Rather?</Navbar.Brand>
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Toggle />
                            <Nav className="me-auto">
                                <Nav.Link as={NavLink} to="/" exact >Home</Nav.Link>
                                <Nav.Link as={NavLink} to="new">New Question</Nav.Link>
                                <Nav.Link as={NavLink} to="/leader">Leaderboard</Nav.Link>
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