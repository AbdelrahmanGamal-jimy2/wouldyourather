import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Question from "./Question";
import { Redirect } from "react-router";


class Home extends Component
{
    
    generateUID () {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
      }
    render()
    {
        const {answeredQIDS} = this.props
        const {unansweredQIDS} = this.props
        if(this.props.authedUser === null)
        {
            return <Redirect to="/" ></Redirect>
        }
        return(
            <div>
                <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="home" title="Unanswered Questions ">
                        <ol>
                            {
                                unansweredQIDS.map((q)=> <li key={this.generateUID()}> <Question qID= {q}></Question></li>)
                            }
                        </ol>
                    </Tab>  
                    <Tab eventKey="profile" title="Answered Questions ">
                        <ol>
                            {
                                answeredQIDS.map((q)=> <li key={this.generateUID()}> <Question qID= {q}></Question></li>)
                            }
                        </ol>
                    </Tab>
                </Tabs>
            </div>
        )
    }
}   

function mapStateToProps({questions,authedUser, users})
{
    if(authedUser)
    {
        const answeredQIDS = Object.keys(questions).filter((id)=> users[authedUser].answers.hasOwnProperty(id)).sort((a,b) =>questions[b].timestamp -questions[a].timestamp )
        const unansweredQIDS = Object.keys(questions).filter((id)=> !users[authedUser].answers.hasOwnProperty(id)).sort((a,b) =>questions[b].timestamp -questions[a].timestamp )
        console.log("ANSWERED AND UNANSWERED ")
        console.log(answeredQIDS, unansweredQIDS)
        return{
            answeredQIDS,
            unansweredQIDS,
            authedUser
        }
    }
    else{
        return{
        answeredQIDS: null,
        unansweredQIDS: null,
        authedUser: null
        }

}
}
export default  connect(mapStateToProps)(Home)