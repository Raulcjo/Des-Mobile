//Conecta o servidor com a API
import { useEffect, useState, useContext } from "react";
import UserContext from "../context/UserContext";
import { ActivityIndicator } from "react-native";

export default props => {
    const URL = 'http://10.133.32.169:3000/api/usuarios'
    const [userParam, setUserParam] = useState({})
    const {dispatch} = useContext(UserContext)
    const [dataLoaded, setDataLoaded] = useState(false)

    const getUsers = async () => {
        
        try{
            const response = await fecth(URL)
            if(!response.ok){
                throw new Error(`HTTP não ok! Status: ${response.status}`)
            }
            const json = await response.json()
            setUserParam(json)
            setDataLoaded(true)
        }
        catch(error){
            console.error("Erro na conexão com API!")
        }
    }

    useEffect(()=>{
        getUsers()
    }, [])

    useEffect(()=>{
        if(dataLoaded){
            dispatch({
                type: 'selesctUser',
                payload: userParam
            })
            props.natigation.push('UserList')
        }
    }, [dataLoaded, userParam])

    return(
        <ActivityIndicator size={80} color={'blue'}/>
    )
}