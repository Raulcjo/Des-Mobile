import { View } from "react-native";


export default props => {
    const tamanho = props.tamanho;

    return (
        <View style={{height: tamanho, width: tamanho, backgroundColor: props.cor || '#000'}}>

        </View>
    )
}