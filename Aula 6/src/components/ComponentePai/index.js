import { Text } from "react-native"
import ComponenteFilho from "../ComponenteFilho"
import { useState } from "react";
import Estilo from "../Estilo";


export default function ComponentePai(){
    [valorAleatorio, setValorAletorio] = useState(0);
    
    function exibeValor(numero){
        setValorAletorio(numero)
    }
    
    return(
        <>
            <Text style={Estilo.txtGrande}>{valorAleatorio}</Text>
            <ComponenteFilho min={1} max={100} funcao={exibeValor} />        
        </>

    )
}