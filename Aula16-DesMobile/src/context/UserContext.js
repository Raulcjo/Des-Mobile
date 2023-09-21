import React, { createContext, useReducer } from "react";
import Users from "../data/Users";

const inicialState = {Users}
const UserContext = createContext({})

const actions = {
    createUser(state, action){
        const newUser = action.payload
        newUser.id = Math.random()
        return{
            ...state,
            Users: [...state.Users, newUser]
        }
    },

    updateUser(state, action){
        const userUpdated = action.payload
        return{
            ...state,
            Users: state.Users.map(U => U.id === userUpdated.id ? userUpdated : U)
        }
    },

    deleteUser(state, action){
     const userReceive = action.payload
     return {
        ...state,
        Users: state.Users.filter(U => U.id !== userReceive.id)
     }
    },

    /*validaUser(state, action){
        const userValid = action.payload
        return{
            ...state,
            Users: state.Users.filter(U => U.login == userValid.login && U.password == userValid.password ? true : false)
        }
    }*/
}

export const UserProvider = props => {
    function reducer(state, action){
        //console.warn(action)
        const fn = actions[action.type]

        return fn ? fn(state, action) : state
    }

    const [state, dispatch] = useReducer(reducer, inicialState)

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

export default UserContext;