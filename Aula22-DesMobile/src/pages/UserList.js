import { View, FlatList, Alert, Button, RefreshControl } from "react-native";
import {Avatar, ListItem} from '@rneui/themed';
import { useContext } from 'react';
import UserContext from '../context/UserContext';

export default props => {
    const {state, dispatch} = useContext(UserContext)
    //console.warn(Object.keys(cont.state))
    const [isRefreshing, setIsRefreshing] = (false);

    const deleteUser = async (user) => {
        const URL = 'http://10.133.32.170:3000/api/usuario/' + user.id

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
                    'Usuário excluido com sucesso!'
                    [
                        {
                            text: 'ok',
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
                    deleteUser(user);
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
                    <ListItem.Title>{user.name}</ListItem.Title>
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
            <Button title="Adicionar usuário" onPress={ () => props.navigation.push('UserList')} />
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

        </View>
    )
}

