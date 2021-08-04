import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, Image, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DropDownPicker from 'react-native-dropdown-picker';
import moment from 'moment';
import momentVI from 'moment/locale/vi';
moment().locale('vi', momentVI);
import { useDispatch, useSelector } from 'react-redux';

const { height, width } = Dimensions.get('screen');
const EditCourse = ({route}) => {
    const title = route.params.title;
    console.log(title);
    const [localData, setLocalData] = useState({
        class: '',
        teacherName: '',
        time:'',
        isBuilding: false,
        isClass: false,
        isRoom: false,
        isClass: false,
        isTeacher: false,
        isDisplayDate: false,

    });

    const [openBuilding, setOpenBuilding] = useState(false);
    const [valueBuilding, setValueBuilding] = useState(null);
    const [itemsBuilding, setItemsBuilding] = useState([
        { label: 'keangnam', value: 'keangnam' },
        { label: 'Tân Thuận 3', value: 'Tân Thuận 3' }
    ]);

    const [openRoom, setOpenRoom] = useState(false);
    const [valueRoom, setValueRoom] = useState(null);
    const [itemsRoom, setItemsRoom] = useState([
        { label: 'Chương Dương - Tầng 5', value: 'Chương Dương - Tầng 5' },
        { label: 'Tràng An - Tầng 20', value: 'Tràng An - Tầng 20' }
    ]);

    const [fromDateValue, setFromDate] = useState('');
    const [toDateValue, setToDate] = useState('');

    const getFromCurrentDate = () => {
        const fromDate = moment().format('L');
        setFromDate(fromDate);
    }

    const getToCurrentDate = () => {
        const toDate = moment().format('L');
        setToDate(toDate);
    }

    useEffect(() => {
        // setLocalData({
        //     ...localData,
        //     class: courseName,
        //     teacherName: trainer,
        // })
        // setFromDate(startedDate)
        // setToDate(endedDate)
        // setValueBuilding(buildingName)
        // setValueRoom(roomName)
    }, [])

    const [isFromDatePickerVisible, setFromDatePickerVisibility] = useState(false);
    const [isToDatePickerVisible, setToDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

    const showFromDatePicker = () => {
        setFromDatePickerVisibility(true);
    };

    const showToDatePicker = () => {
        setToDatePickerVisibility(true);
    };

    const showTimePicker = () => {
        setTimePickerVisibility(true);
    }

    const hideFromDatePicker = () => {
        setFromDatePickerVisibility(false);
    };

    const hideToDatePicker = () => {
        setToDatePickerVisibility(false);
    };

    const hideTimePicker = () => {
        setTimePickerVisibility(false);
    }

    const handleFromDateConfirm = (ngay) => {
        alert("Đã chọn: " + moment(ngay).format('L'));
        console.log(moment(ngay).format('L'))
        setFromDate(moment(ngay).format('L'));
        hideFromDatePicker();
    };

    const handleToDateConfirm = (ngay) => {
        alert("Đã chọn: " + moment(ngay).format('L'));
        console.log(moment(ngay).format('L'))
        setToDate(moment(ngay).format('L'));
        hideFromDatePicker();
    };

    const handleTimeConfirm = (time) => {
        alert('Đã chọn' + moment(time).format('LT'));
        setLocalData({
            ...localData,
            time: moment(time).format('LT')
        })
    }

    const getCurrentMonth = () => {

        const month = moment().format('MMMM')
        if (month === 'tháng 1') {
            return "1";
        } else if (month === 'tháng 2') {
            return "2";
        } else if (month === 'tháng 3') {
            return "3";
        } else if (month === 'tháng 4') {
            return "4";
        } else if (month === 'tháng 5') {
            return "5";
        } else if (month === 'tháng 6') {
            return "6";
        } else if (month === 'tháng 7') {
            return "7";
        } else if (month === 'tháng 8') {
            return "8";
        } else if (month === 'tháng 9') {
            return "9";
        } else if (month === 'tháng 10') {
            return "10";
        } else if (month === 'tháng 11') {
            return "11";
        } else if (month === 'tháng 12') {
            return "12";
        }

        return month;
    };

    const getFromDateMonth = (fromdate) => {

        const fdmonth = moment(fromdate, 'DDMMYYYY').format('MMMM')
        if (fdmonth === 'tháng 1') {
            return "1";
        } else if (fdmonth === 'tháng 2') {
            return "2";
        } else if (fdmonth === 'tháng 3') {
            return "3";
        } else if (fdmonth === 'tháng 4') {
            return "4";
        } else if (fdmonth === 'tháng 5') {
            return "5";
        } else if (fdmonth === 'tháng 6') {
            return "6";
        } else if (fdmonth === 'tháng 7') {
            return "7";
        } else if (fdmonth === 'tháng 8') {
            return "8";
        } else if (fdmonth === 'tháng 9') {
            return "9";
        } else if (fdmonth === 'tháng 10') {
            return "10";
        } else if (fdmonth === 'tháng 11') {
            return "11";
        } else if (fdmonth === 'tháng 12') {
            return "12";
        }

        return fdmonth;
    };

    return (
        <View style={styles.container}>
            <View style={{ width: '90%' }}>
                <View style={{ marginTop: 15, }}>
                    <Text style={styles.text}>Tên khoá </Text>
                </View>
                <View style={styles.section}>
                    <TextInput
                        placeholder='Nhập tên khoá học'
                        style={styles.textInput}
                        value={localData.class}
                        onChangeText={(text) => { setLocalData({ ...localData, class: text }) }}
                    />

                </View>

                <View style={styles.section}>
                    <Text style={styles.text}>Giảng viên</Text>
                </View>
                <View style={styles.section}>
                    <TextInput
                        placeholder='Nhập tên giảng viên'
                        style={styles.textInput}
                        value={localData.teacherName}
                        onChangeText={(text) => { setLocalData({ ...localData, teacherName: text }) }}
                    />

                </View>

                <View style={[styles.section, { flexDirection: 'row', justifyContent: 'space-between' }]}>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={styles.text}>Từ ngày</Text>
                        <TouchableOpacity onPress={showFromDatePicker}>
                            <View style={styles.picker}>
                                <Text style={styles.inner_picker}>{fromDateValue ? fromDateValue : moment().format('L')}</Text>
                                <View style={{ alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                                    <FontAwesome
                                        name='sort-down'
                                        color="gray"
                                        size={20}
                                        style={{ left: 25, top: -4 }}
                                    />
                                </View>
                            </View>
                        </TouchableOpacity>
                        <DateTimePickerModal
                            isVisible={isFromDatePickerVisible}
                            mode="date"
                            locale='vi'
                            minimumDate={new Date(moment().format('YYYY'), getCurrentMonth() - 1, moment().format('Do'))}
                            onConfirm={handleFromDateConfirm}
                            onCancel={hideFromDatePicker}
                        />
                    </View>

                    <View style={{ flexDirection: 'column' }}>
                        <Text style={styles.text}>Đến ngày</Text>
                        <TouchableOpacity onPress={showToDatePicker}>
                            <View style={styles.picker}>
                                <Text style={styles.inner_picker}>{toDateValue ? toDateValue : moment().format('L')}</Text>
                                <View>
                                    <FontAwesome
                                        name='sort-down'
                                        color="gray"
                                        size={20}
                                        style={{ left: 25, top: -4 }}
                                    />
                                </View>
                            </View>
                        </TouchableOpacity>
                        <DateTimePickerModal
                            isVisible={isToDatePickerVisible}
                            mode="date"
                            locale='vi'
                            minimumDate={new Date(moment(fromDateValue, 'DDMMYYYY').format('YYYY'), getFromDateMonth(fromDateValue) - 1, moment(fromDateValue, 'DDMMYYYY').format('Do'))}
                            onConfirm={handleToDateConfirm}
                            onCancel={hideToDatePicker}
                        />
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.text}>Thời gian</Text>
                </View>
                <View style={styles.section}>
                    <TouchableOpacity onPress={showTimePicker}>
                        <View style={{
                            width: '100%',
                            borderWidth: 0.5,
                            borderRadius: 3,
                            height: 40,
                            justifyContent: 'center'
                        }}>
                            <Text style={{fontSize: 18, color: 'gray', marginLeft: 20}}>{localData.time? localData.time : 'Chọn thời gian'}</Text>
                        </View>
                        
                    </TouchableOpacity>
                    <DateTimePickerModal
                            isVisible={isTimePickerVisible}
                            mode="time"
                            locale='vi'
                            onConfirm={handleTimeConfirm}
                            onCancel={hideTimePicker}
                        />
                </View>

                <View style={styles.section}>
                    <Text style={styles.text}>Toà nhà</Text>
                </View>
                <View style={styles.section}>
                    <DropDownPicker
                        zIndex={3000}
                        zIndexInverse={2000}
                        open={openBuilding}
                        value={valueBuilding}
                        items={itemsBuilding}
                        placeholder='Chọn toà nhà'
                        setOpen={setOpenBuilding}
                        setValue={setValueBuilding}
                        setItems={setItemsBuilding}
                        style={{ borderWidth: 0.3 }}
                        placeholderStyle={{ fontSize: 20, color: 'gray' }}
                    />
                </View>

                <View style={styles.section}>
                    <Text style={styles.text}>Phòng</Text>
                </View>
                <View style={styles.section}>
                    <DropDownPicker
                        zIndex={2000}
                        zIndexInverse={3000}
                        open={openRoom}
                        value={valueRoom}
                        items={itemsRoom}
                        placeholder='Chọn toà nhà'
                        setOpen={setOpenRoom}
                        setValue={setValueRoom}
                        setItems={setItemsRoom}
                        style={{ borderWidth: 0.3 }}
                        placeholderStyle={{ fontSize: 20, color: 'gray' }}
                    />

                </View>

                <View style={{ alignItems: 'flex-end', marginTop: 20 }}>
                    <TouchableOpacity onPress={() => {navigation.navigate('QLKHHome') }}>
                        <View style={styles.button}>
                            <FontAwesome
                                name='save'
                                color='white'
                                size={18}
                            />
                            <Text style={{ color: 'white', fontSize: 20, marginLeft: 10 }}>SỬA</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => {
                    console.log(localData),
                    console.log(currentDate),
                    console.log(valueBuilding),
                    console.log(valueRoom),
                    console.log(fromDateValue),
                    console.log(moment('05/07/2021', 'DDMMYYYY').format('MMMM')),
                    console.log(login.data.username),
                    navigation.navigate('Home')
                }}>
                    <Text>Test button</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}

export default EditCourse;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    section: {
        marginTop: 5,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#345173'
    },
    textInput: {
        borderWidth: 0.2,
        borderRadius: 3,
        fontSize: 18,
    },
    picker: {
        width: width * 0.43,
        borderWidth: 0.5,
        borderRadius: 3,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    inner_picker: {
        fontSize: 18,
        color: '#345173'
    },
    button: {
        flexDirection: 'row',
        width: width * 0.4,
        height: 50,
        backgroundColor: '#ff9434',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    }
})