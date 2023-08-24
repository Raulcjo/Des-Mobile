import { View, StyleSheet } from "react-native";
import Quadrado from "./Quadrado";


export default props => {
    return (
        <View style={estilo.flexContainer}>
            <Quadrado cor = 'red' tamanho={20}/>
            <Quadrado cor = 'green' tamanho={30}/>
            <Quadrado cor = 'yellow' tamanho={40}/>
            <Quadrado cor = 'blue' tamanho={50}/>
            <Quadrado cor = 'pink' tamanho={60}/>
        </View>
    )
}

const estilo = StyleSheet.create({
    flexContainer:{
        backgroundColor: '#000',
        height: 650,
        flexGrow: 1,
        width: '100%',
        flexDirection: "row", 
        justifyContent: "space-evenly", //Sempre para o eixo principal
        alignItems: "baseline"
    },
    flexContainer2:{
        backgroundColor: '#000',
        flexGrow: 1,
        justityContent: "space-evenly",
        width: '100%',
        alignItems: "center",
    },
})