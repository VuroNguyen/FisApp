import React, { useContext, useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Button, Dimensions } from 'react-native';
import MaterialsIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from 'react-native-popup-menu';
import moment from 'moment';
import momentVI from 'moment/locale/vi';
moment().locale('vi', momentVI);
import {useNavigation} from '@react-navigation/native'

const { height, width } = Dimensions.get('screen');
const Card = ({ itemData, onDelete, onPress}) => {
    const {navigate} = useNavigation();
    return (

        <View style={styles.card}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 5 }}>
                <View style={{ width: width * 0.6, marginLeft: 15 }}>
                    <Text numberOfLines={2} style={{ color: '#345171', fontSize: 20, fontWeight: 'bold' }}>{itemData.courseName ? itemData.courseName : null}</Text>
                </View>
                <Menu>
                    <MenuTrigger>
                        <FontAwesome
                            name='ellipsis-v'
                            color='#afafaf'
                            size={20}
                            style={{ marginRight: 15 }}
                        />
                    </MenuTrigger>
                    <MenuOptions>
                        <MenuOption onSelect={onPress} text='Edit' />
                        <MenuOption onSelect={() => alert(`Delete`)} >
                            <Text style={{ color: 'red' }}>Delete</Text>
                        </MenuOption>
                    </MenuOptions>
                </Menu>
            </View>

            <View style={{ marginTop: 15 }}>
                <View style={styles.rowComponent}>
                    <View style={{ width: 30 }}>
                        <MaterialCommunityIcons
                            name='account-tie'
                            color='#ffd237'
                            size={27}
                        />
                    </View>
                    <Text style={styles.textName}>Giảng viên:</Text>
                    <Text numberOfLines={1} style={{ marginLeft: 5, fontSize: 18, fontWeight: 'bold', color: '#0a8dc3' }}>{itemData.trainer ? itemData.trainer : null}</Text>
                </View>
            </View>

            <View style={{ marginTop: 3 }}>
                <View style={styles.rowComponent}>
                    <View style={{ width: 30 }}>
                        <MaterialCommunityIcons
                            name='card-account-details-outline'
                            color='#40304d'
                            size={27}
                        />
                    </View>
                    <Text style={styles.textName}>Cán bộ quản lý:</Text>
                    <Text style={{ marginLeft: 5, fontSize: 18, fontWeight: 'bold', color: '#f0943f' }}>{itemData.created_by ? itemData.created_by : null}</Text>
                </View>
            </View>

            <View style={{ marginTop: 3 }}>
                <View style={styles.rowComponent}>
                    <View style={{ width: 30 }}>
                        <FontAwesome
                            name='calendar-check'
                            color='#ff9126'
                            size={27}
                        />
                    </View>
                    <Text style={styles.textName}>Ngày:</Text>
                    <Text style={{ marginLeft: 5, fontSize: 18, fontWeight: 'bold', color: '#345171' }}>{itemData ? moment(itemData.startedDate).format('L') && moment(itemData.endedDate).format('L') : null}</Text>
                </View>
            </View>

            <View style={{ marginTop: 3 }}>
                <View style={styles.rowComponent}>
                    <View style={{ width: 30 }}>
                        <MaterialCommunityIcons
                            name='clock'
                            color='red'
                            size={27}
                        />
                    </View>
                    <Text style={styles.textName}>Thời gian:</Text>
                    <Text style={{ marginLeft: 5, fontSize: 18, fontWeight: 'bold', color: '#345171' }}>{itemData.time ? itemData.time : null}</Text>
                </View>
            </View>

            <View style={{ marginTop: 3 }}>
                <View style={styles.rowComponent}>
                    <View style={{ width: 30 }}>
                        <MaterialCommunityIcons
                            name='office-building'
                            color='#0090d7'
                            size={27}
                        />
                    </View>
                    <Text style={styles.textName}>Toà Nhà:</Text>
                    <Text style={{ marginLeft: 5, fontSize: 18, fontWeight: 'bold', color: '#345171' }}>{itemData.buildingName ? itemData.buildingName : null}</Text>
                </View>
            </View>

            <View style={{ marginTop: 3 }}>
                <View style={styles.rowComponent}>
                    <View style={{ width: 30 }}>
                        <FontAwesome
                            name='chalkboard-teacher'
                            color='#ff9126'
                            size={20}
                        />
                    </View>
                    <Text style={styles.textName}>Phòng:</Text>
                    <Text style={{ marginLeft: 5, fontSize: 18, fontWeight: 'bold', color: '#345171' }}>{itemData.roomName ? itemData.roomName : null}</Text>
                </View>
            </View>
        </View>
    )
}

export default Card;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    card: {
        height: width * 0.65,
        marginVertical: 10,
        borderWidth: 0.2,
        borderRadius: 10,
    },
    rowComponent: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 15
    },
    textName: {
        marginLeft: 10,
        fontSize: 17
    }
})