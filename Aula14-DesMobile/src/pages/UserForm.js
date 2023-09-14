import { Text, TextInput, View } from "react-native";
import { useState } from "react";
import Estilo from "../components/Estilo";


export default ({route, navigation}) => {
    //Object.keys() => Visualiza quais são as chaves que vem dentro dos parametros
    //console.warn(Object.keys(props.route.params)); 
    const [userParam, setUserParam] = useState(route.params ? route.params : {})
    return (
        <>
            <View>
                <Text>Nome: </Text>
                <TextInput 
                    value={userParam.name}
                    onChangeText={name => setUserParam({...userParam, name})}
                />
            </View>
        </>
    )
}
