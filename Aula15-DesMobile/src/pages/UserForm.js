import { Text, TextInput, View, Button } from "react-native";
import { useState } from "react";
import Estilo from "../components/Estilo";


export default ({route, navigation}) => {
    //Object.keys() => Visualiza quais são as chaves que vem dentro dos parametros
    //console.warn(Object.keys(props.route.params)); 
    const [userParam, setUserParam] = useState(route.params ? route.params : {})
    return (
        <>
            <View style={Estilo.formContainer}>
                <Text stylr={Estilo.formInputDescription}>Nome: </Text>
                <TextInput style={Estilo.formInput} 
                    value={userParam.name}
                    onChangeText={name => setUserParam({...userParam, name})}
                />
                <Text stylr={Estilo.formInputDescription}>E-mail: </Text>
                <TextInput style={Estilo.formInput} 
                    value={userParam.email}
                    onChangeText={email => setUserParam({...userParam, email})}
                />
                <Text stylr={Estilo.formInputDescription}>Avatar URL: </Text>
                <TextInput style={Estilo.formInput} 
                    value={userParam.avatarURL}
                    onChangeText={avatarURL => setUserParam({...userParam, avatarURL})}
                />
                <Button 
                    style={Estilo.formButtonSubmit}
                    title="Salvar" 
                    onPress={() => navigation.goBack()}
                />
            </View>
        </>
    )
}
