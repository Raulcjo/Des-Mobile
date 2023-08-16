import { Text, Button } from "react-native";

export default (props) => {
    let numero = 0;
    function geraNumero(min, max){
        const fator = (max - min) + 1;
        return parseInt(Math.random() * fator) + 1;
    }

    return (
        <>
            {/*<Text>{numero}</Text>*/}
            <Button title="Gera número aleatório" 
            onPress={function(){ 
                const n = geraNumero(props.min, props.max)
                props.funcao(n);
            }}
            />
        </>
    )
}