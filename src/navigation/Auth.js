import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginContainer from '../containers/LoginContainer';
import MainDrawer from './MainDrawer';

const Auth = createStackNavigator();
const AuthNavigator = () => {
    return (
        <Auth.Navigator initialRouteName = 'login'>
        <Auth.Screen
            name = 'login'
            component={LoginContainer}
            options={{
                headerShown: false
            }}
        />
        <Auth.Screen
            name = 'Drawer'
            component={MainDrawer}
            options={{
                headerShown: false
            }}
        />
    </Auth.Navigator>
    )
}

export default AuthNavigator;