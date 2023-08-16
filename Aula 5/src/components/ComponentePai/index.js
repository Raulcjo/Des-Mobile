import { Text } from "react-native";
import ComunicacaoFilho from "../ComunicacaoFilho";
import { useState } from "react";
import Estilo from "../Estilo";

export default () => {
    [valorAleatorio, setValorAleatorio] = useState(0);
    function exibeValor(numero){
        setValorAleatorio(numero);
    }

    return (
        <>
        <Text style={Estilo.txtGrande}>{valorAleatorio}</Text>
        <ComunicacaoFilho min={1} max={100} funcao={exibeValor}/>
        </>


    )
}