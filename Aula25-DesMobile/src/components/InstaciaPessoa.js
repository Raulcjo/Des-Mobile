import { Component } from "react";
import Pessoa from "./Pessoa";
import { View } from "react-native";
import { Text } from "react-native";
import Estilo from "./Estilo";

class InstaciaPessoa extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const pessoa = new Pessoa('João', 25);

        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={Estilo.textMedium}>{pessoa.cumprimentar()}</Text>
            </View>
        )
    }
    
}

export default InstaciaPessoa;