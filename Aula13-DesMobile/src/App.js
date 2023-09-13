import { Text, View } from "react-native";
import Estilo from "./components/Estilo";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import FormLogin from "./pages/FormLogin";

const Stack = createNativeStackNavigator();

export default props => (
    <NavigationContainer>
        <Stack.Navigator inicialRouteName="FormLogin" screenOptions={{headerShown: false}}>
            <Stack.Screen 
                name="FormLogin"
                component={FormLogin}
            />
        </Stack.Navigator>
    </NavigationContainer>

)