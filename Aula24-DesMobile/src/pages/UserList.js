import { View, FlatList, Alert, RefreshControl, Text } from "react-native";
import {Avatar, ListItem} from '@rneui/themed';
import { useContext, useState } from 'react';
import UserContext from '../context/UserContext';
import { Button } from "@rneui/base";
import { API_ENDPOINT } from "../config";
import Estilo from "../components/Estilo";

export default props => {
    const {state, dispatch} = useContext(UserContext)
    //console.warn(Object.keys(cont.state))
    const [isRefreshing, setIsRefreshing] = useState(false);

    const deleteUser = async (user) =>{
        const URL = API_ENDPOINT + 'usuario/' + user.id

        const options = {
            method: 'DELETE'
        }

        fetch(URL, options)
            .then(response => {
                if(!response.ok){
                    throw new Error('Erro na solicitação HTTP')
                }
                return response.json();
            })
            .then(responseData => {
                console.log("Resposta da requisição: ", responseData)
                Alert.alert(
                    'Exclusão!',
                    'Usuário excluído com sucesso!',
                    [
                        {
                            text: 'Ok',
                            onPress: () => props.navigation.push('UserList')
                        }
                    ]
                )
            })
            .catch(error => {
                console.error('Erro: ', error)
            })
    }

    function deleteConfirm(user){
        Alert.alert('Excluir usuário!', 'Tem certeza que deseja excluir o usuário?',
        [
            {
                text: "Sim",
                onPress(){
                    //console.warn("Excluido o id: " + user.id)
                    deleteUser(user)
                }
            },
            {
                text: "Não"
            }
        ]
        )
    }



    function getUserItem({item: user}){
        return(
            <ListItem

            >
                <Avatar 
                    rounded
                    source={{uri: user.avatarURL}}
                />
                <ListItem.Content>
                    <ListItem.Title>{user.user_name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron 
                    name="edit"
                    color="orange"
                    size={25}
                    onPress={()=>props.navigation.navigate("UserForm", user)}
                />
                <ListItem.Chevron 
                    name="delete"
                    color="red"
                    size={25}
                    onPress={()=> {deleteConfirm(user)}}
                />
            </ListItem>
        )
    }

    const atualiza = ()=>{
        setIsRefreshing(true)
        props.navigation.push("GetUsersAPI")
        setIsRefreshing(false)
    }

    return(
        <View>
            <Text style={Estilo.txtUserLogado}>Usuário Logado: {state.userLogado ? state.userLogado.user_name : null}</Text>
            <Button title="Adicionar usuário" onPress={ () => props.navigation.navigate("UserForm")} />
            <FlatList 
                data={state.users}
                keyExtractor={ user => user.id}
                renderItem={getUserItem}
                refreshControl={
                    <RefreshControl
                        onRefresh={atualiza}
                        refreshing={isRefreshing}
                    />
                }
            />
            <Button 
                title="Tela de CSS"
                onPress={() => props.navigation.navigate("TestaCSS")}
            />
            <Button 
                title="Logout"
                onPress={() => {
                    dispatch({
                        type:'loginUser',
                        payload: null
                    })
                    props.navigation.push("FormLogin");
                }}
                
            />
        </View>
    )
}

