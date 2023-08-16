import { SafeAreaView, View, Text} from "react-native";
import Estilo from "../components/Estilo";
import ComponentePai from "../components/ComponentePai";
//import Itera from "../components/Itera";
//import ComunicacaoDireta from "../components/ComunicacaoDireta";


export default function Home() {
    return (
        <View style={Estilo.centralizada}>
            {/*<Text style={[Estilo.txtGrande, Estilo.txtVerde]}>Página inicial!</Text>*/}

            {/*<Itera num={0} passo={10}/>*/}

            {/*<ComunicacaoDireta informed={'Xpto'}/>*/}

            <ComponentePai />
        </View>
    )
}