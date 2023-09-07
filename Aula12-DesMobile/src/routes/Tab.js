import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TelaA from "../views/TelaA";
import TelaB from "../views/TelaB";
import TelaC from "../views/TelaC";
import FontAwesome from "@expo/vector-icons/FontAwesome"
import Stack from './Stack';


const Tab = createBottomTabNavigator();

export default props => (
    <Tab.Navigator screenOptions={{
        tabBarLabelStyle: {fontSize: 28},
        tabBarActiveTintColor: 'green',     
        tabBarInactiveTintColor: "blue",
        headerShown: false,
        tabBarShownLabel: false
        }}>
        <Tab.Screen name="TelaA" component={TelaA} 
        options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
                <FontAwesome name="home" color={color} size={size}/>
            )
            }}/>
        <Tab.Screen name="TelaB" component={TelaB} options={{
            tabBarLabel: 'User',
            tabBarIcon: ({color, size}) => (
                <FontAwesome name="user-md" color={color} size={size}/>
            )
        }}/>
        <Tab.Screen name="TelaC" component={TelaC} options={{
            tabBarLabel: 'TelaC',
            tabBarIcon: ({color, size}) => (
                <FontAwesome name="power-off" color={color} size={size}/>
            )
        }}/>
        <Tab.Navigator name="Stack" component={Stack} options={{
            tabBarLabel: 'Stack',
            tabBarIcon: ({color, size}) => (
                <FontAwesome name="user" color={color} size={size}/>
            )
        }}

        />
    </Tab.Navigator>
)