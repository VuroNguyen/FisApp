import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
//import AsyncStorage from '@react-native-community/async-storage';
import LoginContainer from "./containers/LoginContainer";
import MainDrawerScreen from "./components/home/MainDrawer";


const StackNavigator = createStackNavigator({
    Login: {
        screen: LoginContainer,
        navigationOptions: {
            headerShown: false
        }
    },  
    MainDrawerScreen: {
        screen: MainDrawerScreen,
        navigationOptions: {
            headerShown: false
        }
    },  
});

export default createAppContainer(StackNavigator);