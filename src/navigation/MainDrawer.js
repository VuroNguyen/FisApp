import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { NavigationContainer, CommonActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Badge } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import QLKHHome from '../components/home/QLKHHome';
import AddClass from '../components/home/AddClass';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LoginContainer from '../containers/LoginContainer'
import Home from '../Home';
import EditCourse from '../components/course/EditCourse'

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const LoginStack = ({ navigation }) => (
    <Stack.Navigator initialRouteName='login'>
        <Stack.Screen
            name='login'
            component={LoginContainer}
            options={{
                headerShown: false
            }}
        />
    </Stack.Navigator>
);

const CourseStack = ({ navigation }) => (
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
                    <View>
                        <TouchableOpacity onPress={() => navigation.openDrawer()}>
                            <View style={{ height: 25, width: 25, marginLeft: 18 }}>


                                <Image source={require('../res/images/ic_menu.png')} style={styles.image} />

                            </View>
                        </TouchableOpacity>
                    </View>
                ),
                headerRight: () => (
                    <View style={{ marginRight: 18 }}>

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
                    <TouchableOpacity onPress={() => { navigation.goBack() }}>
                        <View style={{ height: 25, width: 25, marginLeft: 18 }}>

                            <Image source={require('../res/images/arrow.png')} style={styles.image} />

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

        <Stack.Screen
            name='EditCourse'
            component={EditCourse}
            options={{
                title: 'SỬA KHOÁ HỌC',
                headerLeft: () => (
                    <TouchableOpacity onPress={() => { navigation.goBack() }}>
                        <View style={{ height: 25, width: 25, marginLeft: 18 }}>

                            <Image source={require('../res/images/arrow.png')} style={styles.image} />

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

const HomeStack = ({ navigation }) => {
    const { goBack } = useNavigation();
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
                name='Main'
                component={Home}
                options={{
                    title: 'FIS INSIGHT',
                    headerLeft: () => (
                        <View>
                            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                                <View style={{ height: 25, width: 25, marginLeft: 18, marginBottom: 15, marginTop: 10 }}>

                                    <Image source={require('../res/images/ic_menu.png')} style={styles.image} />

                                </View>
                            </TouchableOpacity>
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

export default class MainDrawerScreen extends React.Component {
    render() {
        return (

            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen
                    name="Home"
                    component={HomeStack}
                />
                <Drawer.Screen
                    name="Course"
                    component={CourseStack}
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