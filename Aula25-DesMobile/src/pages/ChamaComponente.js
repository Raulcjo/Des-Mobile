import { Text, View } from "react-native";
import Estilo from "../components/Estilo";
import Counter from "../components/Counter";
import InstaciaPessoa from "../components/InstaciaPessoa";


export default props => {
    return (
        <View style={{flex: 1, justifyContent: "center", alignItems: "center" }} >
            <Text style={Estilo.textMedium}>Tela que chama os componentes!</Text>

            {/*<Counter />*/}
            <InstaciaPessoa />

            <Button 
                title="Voltar"
                onPress={()=>props.navigation.goBack()}
            />

        </View>
    )
}