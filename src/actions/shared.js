import { _getUsers } from "../utils/_DATA";
import { _getQuestions } from "../utils/_DATA";

import { getUsers } from "./users";
import { getQuestions } from "./questions";

export function handleIntialUsers()
{
    return(dispatch)=>
    {
        return _getUsers().then((users)=>{
            dispatch(getUsers(users))
        })
    }
}

export function handleIntialQuestions()
{
    return(dispatch)=>
    {
        return _getQuestions().then(({questions})=>{
            dispatch(getQuestions(questions))
        })
    }
}