import { useState } from "react"
import { Button, Text, View } from "react-native"


export default props => {
    [id, setID] = useState();

    const doPost = () => {
        URL = 'http://10.133.32.170:3000/api/movie'
        const dadosParaEnviar = {
            id: 99,
            title: 'Avengers',
            releaseYear: 2021
        }

        const options = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dadosParaEnviar)
        };

        fetch(URL, options)
        .then(
            (response)=>{
                if(!response.ok){
                    throw new Error('A solicitação via POST falhou!')
                }
                return response.json();
            }
        ).then(
            (dadosRecebidos) => {
                console.log('Resposta do servidor: ', dadosRecebidos)
            }
        ).catch(
            (error) => {
                console.error(error)
            }
        )
    }

    return(
        <View>
            <Text>Exemplo POST</Text>
            <Button title="Fazer POST" onPress={() => doPost()} />
        </View>
    )
}