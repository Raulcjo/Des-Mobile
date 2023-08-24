import { Text, View } from "react-native";
import Estilo from "../components/Estilo";
//import ListaProdutos from '../components/Produtos/ListaProdutos';
//import ListaProdutosV3 from "../components/Produtos/ListaProdutosV3";
//import ComponenteControlado from "../components/ComponenteControlado";
//import FlexBox from "../components/FlexBox";
import FlexGrow from "../components/FlexGrow";

export default function Home(){
    return (
        <View style={{justifyContent: "center", alignItems: "center", flex: 1}}>
            <FlexGrow />
        </View>

    )
}