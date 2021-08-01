import React, { useState, useEffect } from 'react';
import { View, Text, KeyboardAvoidingView, Button, StyleSheet, StatusBar, Dimensions, Image, ScrollView, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import { data } from '../../models/data';
import Card from '../../component/Card';
import { useDispatch, useSelector } from 'react-redux';


const QLKHHome = () => {
    const userInfo = useSelector(state => state.loginReducers)

    const [course, setCourse] = useState([])
    const [page, setPage] = useState(0)

    const [fetchData, setFetchData] = useState([])

    const getData = async () => {

            fetch('http://118.69.123.51:5000/fis/api/edu/get_all_course', {
                method: 'GET',
                headers: {
                    "Authorization": "Bearer " + userInfo.data.token
                },
            }).then(response => response.json())
                .then(result => {
                    // console.log(result.data)
                    setCourse(result.data)
                    setPage(0)
                    addData(0)
                })
            // console.log(res)

            console.log(fetchData)
            console.log(course.length)
            console.log(userInfo.data.token)
    }

    const addData = (page) => {
        const newRecords = []
        for (var i = page * 10, il = (page + 1) * 10; i < il && i <
            course.length; i++) {
            newRecords.push(course[i]);
        }

        setFetchData(newRecords)
    }

    const onScrollHandler = () => {
        setPage(page + 1 )
        addData(page)
    }

    useEffect(() => {
        getData()
        // let timer = setInterval(() => {
            console.log(fetchData)
        //     getData()
        // }, 1000)
        // return () => {
        //     clearInterval(timer)
        // }
    }, [])

    // const courses = useSelector(state => state.classReducers.courses)
    const renderItem = ({ item }) => {
        return (
            <Card
                itemData={item}
            />
        );
    };
    return (
        <View style={styles.container}>
            <FlatList
                data={fetchData}
                renderItem={renderItem}
                keyExtractor={item => item.course_id}
                style={{ width: '95%' }}
                onEndReached={onScrollHandler}
                onEndThreshold={0}
            />
        </View>
    )
};

export default QLKHHome;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center'
    }
})