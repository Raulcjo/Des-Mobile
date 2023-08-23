import { Text, View } from "react-native";
import Estilo from "../components/Estilo";
//import ListaProdutos from '../components/Produtos/ListaProdutos';
//import ListaProdutosV3 from "../components/Produtos/ListaProdutosV3";
import ComponenteControlado from "../components/ComponenteControlado";

export default function Home(){
    return (
        <View style={Estilo.centraliza}>
            <Text style={[Estilo.textoGrande, Estilo.centraliza]}>Página inicial</Text>

            {/*<ListaProdutos />*/}

            {/*<ListaProdutosV3 />*/}

            <ComponenteControlado />

            
        </View>
    )
}