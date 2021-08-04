import React from 'react';
import { Text, StyleSheet, View, Image, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { height, width } = Dimensions.get('screen');
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'LongNH69',
            password: 'Passtaikhoanfpt123',
            check_textInputChange: false,
            secureTextEntry: true,
            logined: false,
        }
    }

    secureTextEntryChange = () => {
        this.setState({
            secureTextEntry: !this.state.secureTextEntry
        })
    }

    // handleSubmit = () => {

    //     console.log(this.props.account,'day la handle submit')
    //     console.log(this.props.account.resultCode,'day la result submit')
    //     if (this.props.account.resultCode === -1) {
    //                     alert(this.props.account.message)

    //                 }

    //                 if(this.props.account.resultCode === 1) {

    //                     this.props.navigation.navigate('Home')
    //                 }
    // }

    storeToken = async () => {
        try {
            await AsyncStorage.setItem("@userToken",this.props.account.data.token)
        } catch (e) {
            console.log(e)
        }
    }

    componentDidUpdate() {
        this.storeToken()
        // let timer = setInterval(() => {
        console.log(this.props.account.data.token, 'login page')
        console.log(this.props.account.resultCode, 'day la result submit')

        if (this.props.account.resultCode === -1) {
            alert(this.props.account.message)

        }

        if (this.props.account.resultCode === 1) {

            this.props.navigation.navigate('Drawer')
        }
        // }, 1000)
        // return () => {
        //     clearInterval(timer)
        // }
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={require('./res/images/ic_fpt_is.png')} />
                <View style={styles.section}>
                    <Text
                        style={styles.section,
                        {
                            fontSize: 25,
                            fontWeight: 'bold',
                            color: '#355171'
                        }}>
                        FIS INSIGHT PORTAL
                    </Text>

                </View>
                <View style={{ height: 10, width: 125 }}>
                    <Image source={require('./res/images/stripe.png')} style={styles.image} />
                </View>

                <View style={styles.section}>
                    <Text style={{ fontSize: 23, color: '#ff9434', fontWeight: 'bold' }}>ĐĂNG NHẬP HỆ THỐNG</Text>
                </View>

                <View style={styles.textInput}>
                    <FontAwesome    //Icon
                        name='user'
                        color='#b2bcc6'
                        size={20}
                        style={styles.icon}
                    />

                    <TextInput
                        placeholder="TÊN ĐĂNG NHẬP"
                        style={styles.inner_textInput}
                        onChangeText={(text) => this.setState({
                            username: text
                        })}
                        value={this.state.username}
                    />
                </View>

                <View style={styles.textInput}>
                    <FontAwesome    //Icon
                        name='lock'
                        color='#b2bcc6'
                        size={20}
                        style={styles.icon}
                    />

                    {this.state.secureTextEntry ?
                        <TextInput
                            placeholder="MẬT KHẨU"
                            secureTextEntry={true}
                            style={styles.inner_textInput}
                            value={this.state.password}
                            onChangeText={(text) => this.setState({
                                password: text
                            })}
                        />
                        :
                        <TextInput
                            placeholder="MẬT KHẨU"
                            style={styles.inner_textInput}
                            value={this.state.password}
                            onChangeText={(text) => this.setState({
                                password: text
                            })}
                        />
                    }

                    <TouchableOpacity
                        onPress={() => this.secureTextEntryChange()}>
                        {this.state.secureTextEntry ?
                            <Feather
                                name='eye-off'
                                color='gray'
                                size={20}
                            />
                            :
                            <Feather
                                name='eye'
                                color='gray'
                                size={20}
                            />
                        }
                    </TouchableOpacity>
                </View>

                <View style={[styles.section, { flexDirection: 'row', width: width * 0.7 }]}>
                    <MaterialCommunityIcons
                        name='face-recognition'
                        color='#ff9434'
                        size={20}
                    />
                    <Text style={styles.text}>Đăng nhập bằng khuôn mặt</Text>
                </View>

                <View style={styles.section}>
                    <TouchableOpacity style={styles.button} onPress={() => { this.props.login(this.state.username, this.state.password)}}>
                        <Text style={styles.buttonText}>ĐĂNG NHẬP</Text>
                    </TouchableOpacity>
                </View>

                <View style={[styles.section, { height: 125, width: width * 0.6 }]}>
                    <Image source={require('./res/images/swipe.png')} style={styles.image} />
                </View>

                <View style={{ marginTop: 35 }}>
                    <Text style={{ color: '#c3c9d2' }}>Copyright @ 2019 FPT Information System</Text>
                </View>
            </View>
        );
    }
}



export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f8fb',
        justifyContent: 'center',
        alignItems: 'center',
    },
    section: {
        marginTop: 15,
    },
    image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain',
    },
    text: {
        color: '#ff9434',
        marginLeft: 15,
        fontStyle: 'italic'
    },
    textInput: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        paddingBottom: 5,
        backgroundColor: '#e6eaed',
        height: 50,
        width: width * 0.75
    },
    icon: {
        marginLeft: 15,
    },
    inner_textInput: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#355171',
        width: '80%',
        fontSize: 16,
    },
    button: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#ff9434',
        alignItems: 'center',
        width: width * 0.75,
    },
    buttonText: {
        fontSize: 18,
        color: 'white'
    }
});