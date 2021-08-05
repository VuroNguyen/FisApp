import React, { useState, useEffect } from 'react';
import { View, Text, KeyboardAvoidingView, Button, StyleSheet, StatusBar, Dimensions, Image, ScrollView, FlatList, TouchableOpacity, ImageBackground } from 'react-native';

import MaterialsIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment';
import momentVI from 'moment/locale/vi';
moment().locale('vi', momentVI);
import images from './res/images/index';


const { height, width } = Dimensions.get('screen');
const HomeScreen = ({ navigation }) => {

    const content = [
        {
            id: 1,
            image: <Image source={images.ic_crm} style={styles.icon} />,
            text: 'CRM',
            status: 'new'
        },
        {
            id: 2,
            image: <Image source={images.ic_ba} style={styles.icon} />,
            text: 'BA Online',
            status: 'new'
        },
        {
            id: 3,
            image: <Image source={images.ic_etms} style={styles.icon} />,
            text: 'eTMS',
            status: 'new'
        },
        {
            id: 4,
            image: <Image source={images.ic_eleaning} style={styles.icon} />,
            text: 'eLearning',
            status: 'normal'
        },
        {
            id: 5,
            image: <Image source={images.ic_edu} style={styles.icon} />,
            text: 'Điểm danh đào tạo',
            status: 'normal'
        },
        {
            id: 6,
            image: <Image source={images.ic_fpt_contract} style={styles.icon} />,
            text: 'FPT.eContract',
            status: 'normal'
        },
        {
            id: 7,
            image: <Image source={images.ic_rmis} style={styles.icon} />,
            text: 'RMIS',
            status: 'normal'
        },
        {
            id: 8,
            image: <Image source={images.ic_epms} style={styles.icon} />,
            text: 'ePMS',
            status: 'normal'
        },
        {
            id: 9,
            image: <Image source={images.ic_ad} style={styles.icon} />,
            text: 'AD Online',
            status: 'normal'
        },
        {
            id: 10,
            image: <Image source={images.ic_erev} style={styles.icon} />,
            text: 'eRevenue',
            status: 'normal'
        },
        {
            id: 11,
            image: <Image source={images.ic_epucharse} style={styles.icon} />,
            text: 'ePurchase',
            status: 'normal'
        },
        {
            id: 12,
            image: <Image source={images.ic_work_place} style={styles.icon} />,
            text: 'Workplace',
            status: 'normal'
        },
        {
            id: 13,
            image: <Image source={images.ic_work_chat} style={styles.icon} />,
            text: 'Workplace Chat',
            status: 'normal'
        },
        {
            id: 14,
            image: <Image source={images.ic_tems} style={styles.icon} />,
            text: 'Teams',
            status: 'normal'
        },
        {
            id: 15,
            image: <Image source={images.ic_smp} style={styles.icon} />,
            text: 'SMPortal',
            status: 'normal'
        },
        {
            id: 16,
            image: <Image source={images.ic_dms} style={styles.icon} />,
            text: 'DMS',
            status: 'normal'
        },
        {
            id: 17,
            image: <Image source={images.ic_conflu} style={styles.icon} />,
            text: 'Confluence',
            status: 'normal'
        },
        {
            id: 18,
            image: <Image source={images.ic_okr} style={styles.icon} />,
            text: 'OKR',
            status: 'normal'
        },
        {
            id: 19,
            image: <Image source={images.ic_survey} style={styles.icon} />,
            text: 'Survey',
            status: 'normal'
        },
        {
            id: 20,
            image: <Image source={images.ic_decentralization} style={styles.icon} />,
            text: 'Phân quyền ủy quyền',
            status: 'normal'
        },
        {
            id: 21,
            image: <Image source={images.ic_epayment} style={styles.icon} />,
            text: 'ePayment',
            status: 'normal'
        },
        {
            id: 22,
            image: <Image source={images.ic_fis_lib} style={styles.icon} />,
            text: 'Thư viện tài liệu',
            status: 'normal'
        },
        {
            id: 23,
            image: <Image source={images.ic_email} style={styles.icon} />,
            text: 'Email',
            status: 'normal'
        },
        {
            id: 24,
            image: <Image source={images.ic_eiso} style={styles.icon} />,
            text: 'eISO',
            status: 'normal'
        },
        {
            id: 25,
            image: <Image source={images.ic_doc_hr} style={styles.icon} />,
            text: 'Tài liệu nhân sự',
            status: 'normal'
        },
        {
            id: 26,
            image: <Image source={images.ic_bank} style={styles.icon} />,
            text: 'Bank360',
            status: 'normal'
        },
        {
            id: 27,
            image: <Image source={images.ic_decentralization} style={styles.icon} />,
            text: 'Phần mềm nhân sự',
            status: 'normal'
        },
        {
            id: 28,
            image: <Image source={images.ic_jira} style={styles.icon} />,
            text: 'Jira',
            status: 'normal'
        },
    ]

    const [clockCount, setClockCount] = useState('');

    const getCurrentDate = () => {

        const date = moment().format('dddd')
        if (date === 'thứ hai') {
            return "thứ 2";
        } else if (date === 'thứ ba') {
            return "thứ 3";
        } else if (date === 'thứ tư') {
            return "thứ 4";
        } else if (date === 'thứ năm') {
            return "thứ 5";
        } else if (date === 'thứ sáu') {
            return "thứ 6";
        } else if (date === 'thứ bảy') {
            return "thứ 7";
        } else if (date === 'chủ nhật') {
            return "chủ nhật";
        }

        return date;
    };

    useEffect(() => {
        let timer = setInterval(() => {
            setClockCount(moment().format('LTS'))
        }, 1000)
        return () => {
            clearInterval(timer)
        }
    }, [])

    return (
        <View style={styles.container}>
            <View style={{ height: 18 }}>
                <Image source={require('./res/images/shadow_bottom.png')} style={styles.image} />
            </View>
            <View style={{ width: '90%' }}>
                <View style={styles.secion}>
                    <View style={[styles.rowComponent, { justifyContent: 'space-between' }]}>
                        <View style={styles.colComponent}>
                            <View style={styles.line}>
                                <View style={{ height: 20, width: 20 }}>
                                    <Image
                                        source={require('./res/images/ic_wifi.png')}
                                        color='#72ae98'
                                        size={18}
                                        style={[styles.icon, { marginLeft: -4 }]}
                                    />
                                </View>
                                <Text style={[styles.text, { marginLeft: 13 }]}>FIS.HCM</Text>
                            </View>
                            <View style={[styles.line, { marginTop: 10 }]}>
                                <FontAwesome
                                    name='calendar-alt'
                                    color='#acd826'
                                    size={20}
                                    solid
                                />
                                <Text style={{ marginLeft: 15, fontSize: 16.5, color: '#6d7c8c', fontWeight: 'bold', textTransform: 'capitalize' }}>{getCurrentDate()}, {moment().format('L')}</Text>
                            </View>
                        </View>

                        <View style={styles.clock}>
                            <Text style={styles.clockText}>{clockCount}</Text>
                        </View>
                    </View>
                </View>

                <View style={{ marginTop: 23, justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                    <View style={[styles.rowComponent, { justifyContent: 'space-between' }]}>

                        <ImageBackground
                            source={require('./res/images/bg_bt_request_late.png')}
                            style={{ height: 80, width: width * 0.44 }}
                            imageStyle={styles.borderRadius}
                        >
                            <View style={[styles.rowComponent, { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }]}>
                                <View style={{ height: 50, width: 50 }}>
                                    <Image
                                        source={require('./res/images/ic_request_late.png')}
                                        style={styles.icon}
                                    />
                                </View>
                                <Text style={styles.innerText}>Xin đi trễ</Text>
                            </View>
                        </ImageBackground>

                        <ImageBackground
                            source={require('./res/images/bg_bt_check_in.png')}
                            style={{ height: 80, width: width * 0.44, marginLeft: width * 0.03 }}
                            imageStyle={styles.borderRadius}
                        >
                            <View style={[styles.rowComponent, { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }]}>
                                <View style={{ height: 50, width: 50 }}>
                                    <Image
                                        source={require('./res/images/ic_check_in.png')}
                                        style={styles.icon}
                                    />
                                </View>
                                <Text style={styles.innerText}>Check In</Text>
                            </View>
                        </ImageBackground>
                    </View>
                </View>

                <View style={{ marginTop: 23 }}>
                    <View style={[styles.rowComponent, { justifyContent: 'space-between' }]}>
                        <View style={styles.colComponent}>
                            <View style={styles.line}>
                                <MaterialCommunityIcons
                                    name='alert'
                                    color='#fdd431'
                                    size={28}
                                />
                                <Text style={{ marginLeft: 15, fontSize: 16.5, color: '#7687a8', fontWeight: 'bold' }}>Bạn chưa check-in</Text>
                            </View>

                            <View style={styles.line}>
                                <MaterialCommunityIcons
                                    name='alert'
                                    color='#fdd431'
                                    size={28}
                                />
                                <Text style={{ marginLeft: 15, fontSize: 16.5, color: '#7687a8', fontWeight: 'bold' }}>Bạn chưa check-out</Text>
                            </View>
                        </View>

                        <View style={styles.icCalendarCheck}>
                            <MaterialCommunityIcons
                                name='calendar-check'
                                color='#71bde0'
                                size={35}
                            />
                        </View>
                    </View>
                </View>

                <View style={{ marginTop: 20, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={[styles.rowComponent, { justifyContent: 'space-between' }]}>

                        <ImageBackground
                            source={require('./res/images/bg_bt_wfh.png')}
                            style={{ height: 60, width: width * 0.44 }}
                            imageStyle={styles.borderRadius}
                        >
                            <View style={[styles.rowComponent, { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }]}>
                                <View style={{ height: 30, width: 30 }}>
                                    <Image
                                        source={require('./res/images/ic_wfh.png')}
                                        style={styles.icon}
                                    />
                                </View>
                                <Text style={styles.innerTextSmall}>WFH</Text>
                            </View>
                        </ImageBackground>

                        <ImageBackground
                            source={require('./res/images/bg_bt_onsite.png')}
                            style={{ height: 60, width: width * 0.44, marginLeft: width * 0.03 }}
                            imageStyle={styles.borderRadius}
                        >
                            <View style={[styles.rowComponent, { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }]}>
                                <View style={{ height: 30, width: 30 }}>
                                    <Image
                                        source={require('./res/images/ic_onsite.png')}
                                        style={styles.icon}
                                    />
                                </View>
                                <Text style={styles.innerTextSmall}>Onsite</Text>
                            </View>
                        </ImageBackground>
                    </View>
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 12 }}>
                    <ImageBackground
                        source={require('./res/images/bg_bt_custom.png')}
                        style={{ height: 60, width: '100%' }}
                        imageStyle={styles.borderRadius}
                    >
                        <View style={[styles.rowComponent, { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }]}>
                            <View style={{ height: 30, width: 30 }}>
                                <Image
                                    source={require('./res/images/ic_add.png')}
                                    style={styles.icon}
                                />
                            </View>
                            <Text style={styles.innerTextSmall}>Khai báo y tế</Text>
                        </View>
                    </ImageBackground>
                </View>
            </View>

            <View style={{ marginTop: 15, backgroundColor: '#e9f3ff', height: "100%",width: '100%' }}>
                <View style={{ height: 10 }}>
                    <Image source={require('./res/images/shadow_bottom.png')} />
                </View>
                <View style={{flexDirection: 'row' ,justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap'}}>
                <FlatList
                    data={content}
                    keyExtractor ={item => item.id}
                    renderItem = {({item}) => (
                        
                            <View style={styles.chooseList}>
                            <View style={{ height: 65, width: 65 }}>
                                {item.image}
                            </View>
                            <Text style={styles.chooseListText}>{item.text}</Text>
                            </View>
                        
                    )}
                />
                </View>

                {/* <View style={{ flexDirection: 'row',flexWrap: 'wrap',justifyContent: 'space-around'}}>
                    <View style={styles.chooseList}>
                        <View style={{ height: 65, width: 65 }}>
                            <Image
                                source={require('./res/images/ic_crm.png')}
                                style={styles.icon}
                            />
                        </View>
                        <Text style={styles.chooseListText}>CRM</Text>
                    </View>

                    <View style={styles.chooseList}>
                        <View style={{ height: 65, width: 65 }}>
                            <Image
                                source={require('./res/images/ic_ba.png')}
                                style={styles.icon}
                            />
                        </View>
                        <Text style={styles.chooseListText}>BA online</Text>
                    </View>

                    <View style={styles.chooseList}>
                        <View style={{ height: 65, width: 65 }}>
                            <Image
                                source={require('./res/images/ic_etms.png')}
                                style={styles.icon}
                            />
                        </View>
                        <Text style={styles.chooseListText}>eTMS</Text>
                    </View>

                    <View style={styles.chooseListM}>
                        <View style={{ height: 65, width: 65 }}>
                            <Image
                                source={require('./res/images/ic_eleaning.png')}
                                style={styles.icon}
                            />
                        </View>
                        <Text style={styles.chooseListText}>E-Learning</Text>
                    </View>

                    <View style={styles.chooseListM}>
                        <View style={{ height: 65, width: 65 }}>
                            <Image
                                source={require('./res/images/ic_edu.png')}
                                style={styles.icon}
                            />
                        </View>
                        <Text style={styles.chooseListText}>EDUCATION</Text>
                    </View>

                    <View style={styles.chooseListM}>
                        <View style={{ height: 65, width: 65 }}>
                            <Image
                                source={require('./res/images/ic_fpt_contract.png')}
                                style={styles.icon}
                            />
                        </View>
                        <Text style={styles.chooseListText}>Contact</Text>
                    </View>
                </View> */}
            </View>
        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    image: {
        flex: 1,
        height: null,
        resizeMode: 'contain',
    },
    icon: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain',
    },
    secion: {
        marginTop: 5
    },
    rowComponent: {
        flexDirection: 'row',
    },
    colComponent: {
        flexDirection: 'column',
    },
    line: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        color: '#2d70af',
        fontWeight: 'bold'
    },
    innerText: {
        fontSize: 23,
        color: 'white',
        marginLeft: 10,
        fontWeight: 'bold'
    },
    innerTextSmall: {
        fontSize: 16,
        color: 'white',
        marginLeft: 10,
        fontWeight: 'bold'
    },
    clock: {
        height: 60,
        width: 130,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.3,
        borderRadius: 10,
    },
    clockText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#f7a024'
    },
    icCalendarCheck: {
        height: 75,
        width: 75,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.3,
        borderRadius: 10,
    },
    borderRadius: {
        borderRadius: 10,
    },
    chooseList: {
        height: 120,
        width: 110,
        marginTop: 10,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        shadowOffset: {width: 2, height:2},
        shadowOpacity: 1,
        shadowRadius: 2,
        elevation: 10
    },
    chooseListM: {
        height: 120,
        width: 110,
        marginTop: 35,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        shadowOffset: {width: 2, height:2},
        shadowOpacity: 1,
        shadowRadius: 2,
        elevation: 10
    },
    chooseListText: {
        marginTop: 5,
        fontWeight: 'bold',
        fontSize: 18,
        color: '#355171'
    }
});