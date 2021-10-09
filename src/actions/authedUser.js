const SET_Authed_USER = "SET_Authed_USER"
const REMOVE_AUTHED_USER = "REMOVE_AUTHED_USER"

export function setAuthed(id)
{
    return
    {
        SET_Authed_USER,
        id
    }
}

export function removedAuthed()
{
    return
    {
        REMOVE_AUTHED_USER
    }
}