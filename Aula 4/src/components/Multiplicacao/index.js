import { Text, View } from "react-native"
import estilo from "../estilo";

export default ({valor1, valor2}) => { 

    //const vl1 = parseInt(props.valor1);
    //const vl2 = parseInt(props.valor2);
    //let mult = vl1 * vl2;

    let mult = valor1 * valor2;

    return (
        <View>
            <Text style={estilo.textoGrandePrincipal}>O valor da multiplicação é {mult}</Text>
        </View>
    )
}