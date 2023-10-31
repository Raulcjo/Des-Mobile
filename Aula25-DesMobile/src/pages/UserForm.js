import { useContext, useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import Estilo from "../components/Estilo";
import UserContext from "../context/UserContext";
import { API_ENDPOINT } from "../config";


export default ({route, navigation}) => {
    //console.warn(Object.keys(props.route.params));
    const {dispatch} = useContext(UserContext)
    const [userParam, setUserParam] = useState(route.params ? route.params: {})

    const doPost = () => {
        //validações 

        const URL = API_ENDPOINT + 'usuario'
        const dadosParaEnviar = {
            id: userParam.id,
            user_name: userParam.user_name,
            email: userParam.email,
            avatarURL: userParam.avatarURL,
            login: userParam.login,
            passwd: userParam.passwd,
        }

        const options = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dadosParaEnviar)
        };

        fetch(URL, options)
        .then(
            (response)=>{
                if(!response.ok){
                    throw new Error('A solicitação via POST falhou!')
                }
                return response.json();
            }
        ).then(
            (dadosRecebidos) => {
                console.log('Resposta do servidor: ', dadosRecebidos)
                navigation.push('UserList')
            }
        ).catch(
            (error) => {
                console.error(error)
            }
        )
    }

    return(
        <>
            <View style={Estilo.formContainer}>
                <Text style={Estilo.formInputDescription}>Nome: </Text>
                <TextInput
                    style={Estilo.formInput} 
                    value={userParam.user_name}
                    onChangeText={ user_name => setUserParam({...userParam, user_name}) }
                />
                <Text style={Estilo.formInputDescription}>E-mail: </Text>
                <TextInput
                    style={Estilo.formInput} 
                    value={userParam.email}
                    
                    onChangeText={ email => setUserParam({...userParam, email}) }
                />
                <Text style={Estilo.formInputDescription}>AvatarURL: </Text>
                <TextInput
                    style={Estilo.formInput} 
                    value={userParam.avatarURL}
                    onChangeText={ avatarURL => setUserParam({...userParam, avatarURL}) }
                />
                <Text style={Estilo.formInputDescription}>Login: </Text>
                <TextInput
                    style={Estilo.formInput} 
                    value={userParam.login}
                    
                    onChangeText={ login => setUserParam({...userParam, login}) }
                />
                <Text style={Estilo.formInputDescription}>Senha: </Text>
                <TextInput
                    style={Estilo.formInput} 
                    value={userParam.passwd}
                    
                    onChangeText={ passwd => setUserParam({...userParam, passwd}) }
                />
                <Button 
                    style={Estilo.formButtonSubmit}
                    title="Salvar"
                    onPress={() => {
                        doPost();
                    }}
                />
                <Button 
                    style={Estilo.formButtonSubmit}
                    title="Voltar"
                    onPress={() => {
                        navigation.goBack()
                    }}
                />
            </View>
        </>
    )
}

