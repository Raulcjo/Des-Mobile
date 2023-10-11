import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import Estilo from "../components/Estilo";


export default props => {
    [titulo, setTitulo] = useState("Título inicial");
    [titulo2, setTitulo2] = useState("Título 2 init");

    useEffect(()=>{
        console.warn(`Alterar o titulo para ${titulo}`)
        setTitulo2("Título2 alterado em cascata")
    }, [titulo])

    return (
        <>
            <View>
                <Text>Exemplo use Effect</Text>
                <Text style={Estilo.textMedium}>{titulo}</Text>
                <Button title="Alterar titulo" onPress={ () => setTitulo("Titulo alterado!")} />
                <Text style={Estilo.textMedium}>{titulo2}</Text>
            </View>
        </>
    )
}