import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Badge } from 'react-native-elements'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import HomeScreen from './Home';

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
                fontSize: 20,
                marginBottom: 15,
                marginTop: 10,
            },
            headerStyle: {
                height: 72,

            }
        }}>
            <Stack.Screen
                name='Home'
                component={HomeScreen}
                options={{
                    title: 'FIS INSIGHT',
                    headerLeft: () => (
                        <View style={{ height: 25, width: 25, marginLeft: 18, marginBottom: 15, marginTop: 10 }}>
                            <Image source={require('./res/images/ic_menu.png')} style={styles.image} />
                        </View>
                    ),
                    headerRight: () => (
                        <View style={{ marginRight: 18, marginBottom: 15, marginTop: 10 }}>
                            <FontAwesome
                                name='bell-o'
                                color='#d4d8de'
                                size={25}
                            />

                            <Badge
                                value='29'
                                status="success"
                                containerStyle={{ position: 'absolute', top: -7, right: -10 }}
                            />
                        </View>
                    )
                }}
            />

        </Stack.Navigator>
    )
}

export default class MainTabScreen extends React.Component {
    render() {
        return (

            <Drawer.Navigator initialRouteName="Home">
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