import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Stack from "./Stack";

export default props => (
    <SafeAreaView style={{flex: 1, paddingTop: 20}}>
        <NavigationContainer>
            <Stack />
        </NavigationContainer>
    </SafeAreaView>
)