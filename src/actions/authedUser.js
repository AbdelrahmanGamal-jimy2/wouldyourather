export const SET_AUTHED_USER = "SET_AUTHED_USER"
export const REMOVE_AUTHED_USER = "REMOVE_AUTHED_USER"

export function setAuthed(id)
{
    console.log("at action")
    return{
        type: SET_AUTHED_USER,
        id
    }
}

export function removedAuthed()
{
    return{
        type: REMOVE_AUTHED_USER
    }
}