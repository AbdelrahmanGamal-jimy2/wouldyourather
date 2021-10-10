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
export function addAnswer(answer)
{
    return{
        type: ADD_ANSWER,
        answer
    }
}