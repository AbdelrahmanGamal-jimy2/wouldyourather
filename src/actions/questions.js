import { _saveQuestion } from "../utils/_DATA"
import { _saveQuestionAnswer } from "../utils/_DATA"

export const GET_QUESTIONS = "GET_QUESTIONS"
export const ADD_QUESTION = "ADD_QUESTION"
export const ADD_ANSWER = "ADD_ANSWER"



export function getQuestions(questions)
{
    return{
        type: GET_QUESTIONS,
        questions
    }
}
export function addQuestion(question)
{
    return{
        type: ADD_QUESTION,
        question
    }
}
export function addAnswer({authedUser, qid, answer})
{
    return{
        type: ADD_ANSWER,
    }
}
export function addQuestionToAPI(option1, option2)
{
    
    return ((dispatch, getState)=>
    {
        const {authedUser} = getState()
        return _saveQuestion({optionOneText: option1,
            optionTwoText: option2,
            author: authedUser
         }).then((question)=> dispatch(addQuestion(question)))
    }
    )
}

export function addAnswerToAPI(autherID, qID, answer)
{
    
    return ((dispatch)=>
    {
        return _saveQuestionAnswer({
            authedUser: autherID,
            qid: qID,
            answer: answer
         }).then(()=> dispatch(addAnswer({
            authedUser: autherID,
            qid: qID,
            answer: answer
         })))
    }
    )
}