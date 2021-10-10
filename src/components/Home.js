import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Question from "./Question";

class Home extends Component
{
    
    render()
    {
        const {answeredQIDS} = this.props
        const {unansweredQIDS} = this.props
        console.log(answeredQIDS)
        console.log(unansweredQIDS)
        return(
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="home" title="Unanswered Questions ">
                    <ul>
                        {
                            answeredQIDS.map((q)=> <li key={q}> <Question qID= {q}></Question></li>)
                        }
                    </ul>
                </Tab>
                <Tab eventKey="profile" title="Answered Questions ">
                     <ul>
                        {
                            unansweredQIDS.map((q)=> <li key={q}> <Question qID= {q}></Question></li>)
                        }
                    </ul>
                </Tab>
            </Tabs>

        )
    }
}   

function mapStateToProps({questions,authedUser, users})
{
    const answeredQIDS = Object.keys(questions).filter((id)=> users[authedUser].answers.hasOwnProperty(id))
    const unansweredQIDS = Object.keys(questions).filter((id)=> !users[authedUser].answers.hasOwnProperty(id))
    return{
        answeredQIDS,
        unansweredQIDS
    }
}
export default  connect(mapStateToProps)(Home)