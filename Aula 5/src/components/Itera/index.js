import { Text, Button } from "react-native";
import { useState } from "react";
import Estilo from "../Estilo";


export default props => {
    //[num, passo] = props;
    //let numero = props.num;
    [numero, setNumero] = useState(num); 

    //Hooks

    //const step = props.passo;
    const inc = () => setNumero(numero + passo)
    const dec = () => setNumero(numero - passo) 

    return (

        <>
            <Button title='+' onPress={inc}/>
            <Text style={Estilo.txtMedio}>{numero}</Text>
            <Button title="-" onPress={dec}/>
        </>
    )
}