import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import FormLogin from "./pages/FormLogin";
import UserList from "./pages/UserList";
import UserForm from "./pages/UserForm";
import {Button, Icon} from '@rneui/base';
import { UserProvider } from './context/UserContext';
import GetUsersAPI from './components/GetUsersAPI';
import ChamaComponente from './pages/ChamaComponente';

const Stack = createNativeStackNavigator();

export default props => (
    <UserProvider>
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="FormLogin"
                //screenOptions={{headerShown: false}}
                screenOptions={minhaScreenOptions}
            >
                <Stack.Screen>
                    name="ChamaComponente"
                    component={ChamaComponente}
                </Stack.Screen>
                <Stack.Screen 
                    name="FormLogin"
                    component={FormLogin}
                />
                <Stack.Screen 
                    name="GetUsersAPI"
                    component={GetUsersAPI}
                />
                <Stack.Screen
                    name="UserList"
                    component={UserList}
                    options={
                        ({navigation}) => {
                            return{
                                title: 'Lista de usuários',
                                headerRight: () =>(
                                    <Button 
                                        type='clear'
                                        icon={<Icon name="add" size={25} color="white" />}
                                        onPress={ ()=> navigation.navigate("ChamaComponente") }
                                    />
                                )
                            }
                        }
                    }
                />
                <Stack.Screen
                    name="UserForm"
                    component={UserForm}
                    options={{title: 'Cadastro de usuários'}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    </UserProvider>

)

const minhaScreenOptions = {
    headerShown: false,
    headerStyle:{
        backgroundColor: '#003f5c'
    },
    headerTintColor: '#fff',
    headerTitleStyle:{
        fontWeight: 'bold'
    }
}