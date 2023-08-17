import { Text, View } from "react-native"
import Estilo from "../Estilo";

export default props => {
    <View>
        <Text style={Estilo.txtMedio}>O número é: </Text>
        {props.numero % 2 === 0? <Text>Par</Text>:<Text>Impar</Text>}

    </View>

    /*if(props.numero % 2 === 0){
        return (
            <>
                <Text style={Estilo.txtMedio}>O número é: </Text>
                <Text style={Estilo.txtPequeno}>par</Text>
            </>
        )
    }else{
        return (
            <>
                <Text style={Estilo.txtMedio}>O número é: </Text>
                <Text style={Estilo.txtPequeno}>impar</Text>
            </>
        )
    }*/
}