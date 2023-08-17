import { Platform, Text } from "react-native"
import Estilo from "../Estilo"


export default () => <Text style={Estilo.txtMedio}>{(Platform.OS === 'android') ? 'É Android' : 'É IOS' }</Text>
    

    /*if(Platform.OS === 'android'){
        return <Text>É android</Text>
    }
    else if (Plataform.OS === 'ios'){
        return <Text>É IOS</Text>
    }else{
        return <Text>Vishi!</Text>
    }*/
    