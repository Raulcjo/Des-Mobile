import React, { createContext, useReducer } from "react";
import Users from "../data/Users";

const inicialState = {Users}
const UserContext = createContext({})

export const UserProvider = props => {
    function reducer(state, action){
        //console.warn(action)
        if(action.type === 'deleteUser'){
            const userReceive = action.payload
            console.warn("Entrou no Reducer")
            return {
                ...state,
                Users: state.Users.filter(U => U.id !== userReceive.id)
            }
        }

        return state
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