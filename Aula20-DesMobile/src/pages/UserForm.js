import { useContext, useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import Estilo from "../components/Estilo";
import UserContext from "../context/UserContext";


export default ({route, navigation}) => {
    //console.warn(Object.keys(props.route.params));
    const {dispatch} = useContext(UserContext)
    const [userParam, setUserParam] = useState(route.params ? route.params: {})
    return(
        <>
            <View style={Estilo.formContainer}>
                <Text style={Estilo.formInputDescription}>Nome: </Text>
                <TextInput
                    style={Estilo.formInput} 
                    value={userParam.name}
                    onChangeText={ name => setUserParam({...userParam, name}) }
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
                <Button 
                    style={Estilo.formButtonSubmit}
                    title="Salvar"
                    onPress={() => {
                        dispatch({
                            type: userParam.id ? 'updateUser' : 'createUser',
                            payload: userParam
                        })
                        navigation.goBack()
                    }}
                />
            </View>
        </>
    )
}

