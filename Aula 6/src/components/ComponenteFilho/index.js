import { Button, Text } from "react-native"


export default (props) => {
    function geraNumero(min, max){
        const fator = (max - min) + 1
        return parseInt(Math.random() * fator) + 1
    }

    //Função CallBack

    return(
        <>
            <Button 
                title="Gera número aleatório"  
                onPress={function(){
                    const n = geraNumero(props.min, props.max)
                    props.funcao(n)
                }}
            />
        </>
    )
}