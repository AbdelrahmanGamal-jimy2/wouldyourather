import {GET_USERS} from '../actions/users'

export default function users(state = {}, action)
{
    switch(action.type)
    {
        case GET_USERS:
            {
                console.log("here")
                return{
                    ...state,
                    ...action.users,
                }
            }

        default:
            {
                return state
            }
    }
}