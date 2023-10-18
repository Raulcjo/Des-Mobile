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
    },

    /*createUser(state, action){
        const newUser = action.payload
        newUser.id = Math.random()
        return{
            ...state,
            users: [...state.users, newUser]
        }
    },

    updateUser(state, action){
        const userUpdated = action.payload
        return{
            ...state,
            users: state.users.map(u => u.id === userUpdated.id ? userUpdated: u )
        }
    },
    
    deleteUser(state, action){
        const  userReceive = action.payload
        return {
            ...state,
            users: state.users.filter(u => u.id !== userReceive.id)
        }
    }*/
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