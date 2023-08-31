import { Button, View } from "react-native";


export default props => (
    <View style={{flex: 1}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            {
                props.voltar
                    ? <Button title="Voltar"
                        onPress={()=>{props.navigation.props.goBack()}}
                        />   
                    : false
            }
            {
                props.avancar  
                ? <Button title="Avançar"
                    //O navigate navega na pilha, só existe um elemento 
                    //onPress={()=>{props.navigation.navigate(props.avancar)}} 
                    //O push navega na pilha e empilha sobre o mesmo elemento
                    onPress={()=>{props.navigation.push(props.avancar, props.avancarParam || null)}} 
                     />
                : false
            }
        </View>
        <View style={{flex: 1}}>
            {props.children}
        </View>
    </View>
)