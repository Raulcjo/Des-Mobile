import React, { createContext, useReducer } from 'react';
//import users from '../data/users';

const initialState = {}
const UserContext = createContext({})

const actions = {
    selectUser(state, action){
        const userReciveid = action.payload
        return{
            ...state,
            users: userReciveid
        }
    }
}

export const UserProvider = props => {
    function reducer(state, action){
        const fn = actions[action.type]

        return fn ? fn(state, action) : state
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <UserContext.Provider
            value={{
                state,
                dispatch
            }}
        >
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContext