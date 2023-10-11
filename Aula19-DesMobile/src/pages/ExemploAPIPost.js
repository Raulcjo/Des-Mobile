import { View, Text, Button } from "react-native";



export default props => {

    const doPost = () => {
        URL = ''
        const dadosParaEnviar = {
            id: 99, 
            title: 'Avengers',
            releaseYear: 2021
        }

        const options = {
            method: 'POST',
            headers: {
                'Content-Type' : 'aplication/json',

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
        )
        .then(
            (dadosRecebidos) => {
              console.log('Resposta do servidor: ', dadosRecebidos)  
            }
        )
        .catch(
            (error) => {
                console.error(error)
            }
        )
    }

    return(
        <View>
            <Text>Exemplo Post</Text>
            <Button title="Fazer POST" onPress={() => doPost()}/>
        </View>
    )
}