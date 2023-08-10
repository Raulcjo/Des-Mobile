import { View, Text } from "react-native"
import estilo from "../estilo";

export default (props) => { //props = propriedade
    const vl1 = parseInt(props.valor1);
    const vl2 = parseInt(props.valor2);
    const sub =  vl1 - vl2;

    return (
        <View>
            <Text style={estilo.textoGrandePrincipal}>O reseultado da subtração é {sub}</Text>
        </View>
    )
}