import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TelaA from "../views/TelaA";
import TelaB from "../views/TelaB";
import TelaC from "../views/TelaC";
import PassoStack from "../components/PassoStack";

const Stack = createNativeStackNavigator();

export default props => (
    <Stack.Navigator initialRouteName="TelaA">
        <Stack.Screen name="TelaA" screenOptions={{headerShown: false}} component={TelaA}>
            {
                props => (
                    <PassoStack {...props} avancar="TelaB">
                        <TelaA />
                    </PassoStack>
                )
            }
        </Stack.Screen>
        <Stack.Screen name="TelaB" component={TelaB}>
            {
                props => (
                    <PassoStack {...props} voltar avancar="TelaC">
                        <TelaB />
                    </PassoStack>
                )
            }
        </Stack.Screen>
        <Stack.Screen name="TelaC" component={TelaC}>
            {
                props => (
                    <PassoStack {...props} voltar>
                        <TelaC />
                    </PassoStack>
                )
            }
        </Stack.Screen>
    </Stack.Navigator>
)