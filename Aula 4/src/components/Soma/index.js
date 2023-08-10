import { Text, View } from "react-native";
import estilo from "../estilo";

export default (props) => {
    //console.log("Exibindo o LOG!");
    //console.warn("Exibindo o WARN!");

    console.warn(props.valor1);

    //var valor1 = 10;
    //var valor2 = 20;
    var somaDeValores = props.valor1 + props.valor2; 

    //console.warn(somaDeValores);

    return (
        <View>
            <Text style={estilo.textoGrandePrincipal}>O valor da soma é {somaDeValores}</Text>
        </View>
    )
}