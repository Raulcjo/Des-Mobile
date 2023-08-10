import { Text, View } from "react-native"
import estilo from "../estilo";

export default (props) => {

    const vl1 = parseInt(props.valor1);
    const vl2 = parseInt(props.valor2);
    let div = 0;

    if(vl2 == 0){
        console.warn("Divisão por 0 não aceita")
    }
    else{
        div = vl1/vl2
    }

    return (
        <View>
            <Text style={estilo.textoGrandePrincipal}>O valor da divisão é {div}</Text>
        </View>
    )
}