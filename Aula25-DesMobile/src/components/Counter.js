import { Component } from "react";
import { Text } from "react-native";
import { View } from "react-native";
import Estilo from "./Estilo";
import { Button } from "react-native";

//Criando uma classe utilizando herança
class Counter extends Component{
    //Criando o construtor da classe
    constructor(props){
        super(props);
        this.state = {
            count : 0,

        }
    }

    incrementCounter = () => {
        this.setState({count: this.state.count + 1})
    }

    decrementCounter = () => {
        (this.state.count <= 0) ? null : this.setState({count: this.state.count - 1})
    }

    render(){
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Button title="+" onPress={this.incrementCounter}/>
                <Text style={Estilo.textMedium}>Contador: {this.state.count}</Text>
                <Button title="1" onPress={this.decrementCounter}/>
            </View>
        )
    }

}

export default Counter;