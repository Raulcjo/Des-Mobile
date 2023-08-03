import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

export default function BotaoGrandeVerde({textoDoBotao}){
    return (
        //Conteúdo da função
        <View>
            <TouchableOpacity style={formatacao.botaoSecundario}>
                <View>
                <Text style={formatacao.textoBotaoSecundario}>{textoDoBotao}</Text> 
                </View>
            </TouchableOpacity>
        </View>
    )
}

const formatacao = StyleSheet.create({
    botaoSecundario: {
        marginTop: 15,
        backgroundColor: 'orange',
        height: 60,
        width: 300,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textoBotaoSecundario:{
        color: '#fff',
        fontSize: 20,
    }
})