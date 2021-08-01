import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { NavigationContainer, CommonActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Badge } from 'react-native-elements'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import QLKHHome from './QLKHHome';
import AddClass from './AddClass';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LoginContainer from '../../containers/LoginContainer';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

// const AccountStack = ({ navigation }) => (
//     <Stack.Navigator>
//         <Stack.Screen
//             name='Account'
//             component={AccountScreen}
//             options={{
//                 headerShown: false
//             }}
//         />
//         <Stack.Screen
//             name='Profile'
//             component={ProfileScreen}
//             options={{
//                 headerTitle: 'Profile',
//                 headerTitleAlign: 'center',
//             }}
//         />

//     </Stack.Navigator>
// );

const HomeStack = ({ navigation }) => {
    return (
        <Stack.Navigator screenOptions={{
            headerTintColor: '#355171',
            headerTitleAlign: 'center',
            headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 25,
            },

        }}>
            <Stack.Screen
                name='QLKHHome'
                component={QLKHHome}
                options={{
                    title: 'QUẢN LÝ KHOÁ HỌC',
                    headerLeft: () => (
                        <View style={{ height: 25, width: 25, marginLeft: 18 }}>
                            <Image source={require('../../res/images/ic_menu.png')} style={styles.image} />
                        </View>
                    ),
                    headerRight: () => (
                        <View style={{ marginRight: 18}}>
                          
                            <FontAwesome
                                name='plus'
                                color='#d4d8de'
                                size={25}
                                onPress={() => navigation.navigate('AddClass')}
                            />
                          
                        </View>
                    ),
                    headerStyle: {
                        height: 65,
                        borderBottomWidth: 0.5
                    },
                    
                }}
            />

<Stack.Screen
                name='AddClass'
                component={AddClass}
                options={{
                    title: 'TẠO MỚI KHOÁ HỌC',
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <View style={{ height: 25, width: 25, marginLeft: 18 }}>
                            
                            <Image source={require('../../res/images/arrow.png')} style={styles.image} />
                            
                        </View>
                        </TouchableOpacity>
                    ),
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 20,
                    },
                    headerStyle: {
                        borderBottomWidth: 0
                    },
                }}
            />

        </Stack.Navigator>
    )
}

export default class MainDrawerScreen extends React.Component {
    render() {
        return (

            <Drawer.Navigator initialRouteName="login">
                <Drawer.Screen
                    name="login"
                    component={LoginContainer}
                />
                <Drawer.Screen
                    name="Home"
                    component={HomeStack}
                />
            </Drawer.Navigator>

        );
    }
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain',
    },
});