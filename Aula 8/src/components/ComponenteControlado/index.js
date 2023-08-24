import { Text, TextInput } from "react-native"
import Estilo from "../Estilo"
import { useState } from "react";

//Componente Controlado: 
export default props => { 
    //let valorDigitado = "Valor inicial"
    //O 'useState' altera o estado do componente e não o ele em si
    [valorDigitado, setValorDigitado] = useState('Valor inicial');

    return (
        <>
            <Text style={Estilo.textoGrande}>{valorDigitado}</Text>
            <TextInput style={
                [Estilo.textoMedio, Estilo.centraliza]} 
                placeholder="Digite seu nome" 
                value={valorDigitado} 
                onChangeText={(valorDigitado)=>setValorDigitado(valorDigitado)
                }
            />
        </>

    )
}