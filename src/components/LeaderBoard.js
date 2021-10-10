import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import LeaderCard from "./LeaderCard";

class LeaderBoard extends Component
{

    render()
    {
        const {users} = this.props
        Object.keys(users).map((id)=> {
            console.log(users[id].name)
            console.log(users[id].questions.length)
            console.log(Object.keys(users[id].answers).length)
        })
        return(
            <div>
                <ul>
                    {Object.keys(users).map((id)=> <li><LeaderCard name={users[id].name} score = {Object.keys(users[id].answers).length} NOQ={users[id].questions.length} URL={users[id].avatarURL}></LeaderCard> </li>)}
                </ul>
            </div>
        )
    }
}
function mapStateToProps({users})
{
    return{
        users
    }
}
export default connect(mapStateToProps)(LeaderBoard)