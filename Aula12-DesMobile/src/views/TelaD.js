import { View } from "react-native"
import TextoCentral from "../components/TextoCentral"


export default props => {
    <View style={{flex: 1}}>
        <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
        <Button
            title='Menu'
            onPress={()=>{props.navigation.openDrawer()
            setTimeout(()=>{props.navigation.closeDrawer()}, 3 * 1000)
            }}
        />
        </View>
        <View style={{flex: 1}}>
            <TextoCentral corFundo='#12gh89'>
                Tela D
            </TextoCentral>
        </View>
    </View>

}