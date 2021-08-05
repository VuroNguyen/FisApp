import React, { useState, useEffect } from 'react';
import { ActivityIndicator, View, Text, KeyboardAvoidingView, Button, StyleSheet, StatusBar, Dimensions, Image, ScrollView, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import { data } from '../../models/data';
import Card from '../../component/Card';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCourse } from '../../redux/action/index'

const QLKHHome = ({navigation}) => {
    // const userInfo = useSelector(state => state.loginReducers)
    const dispatch = useDispatch();
    const getCourse = () => dispatch(getAllCourse());
    const courses = useSelector(state => state.courseReducers)

    const [course, setCourse] = useState(null)
    const [initialData, setInitialData] = useState(null)
    const [page, setPage] = useState(0)
    const [flag, setFlag] = useState(false)

    const [fetchData, setFetchData] = useState(null)

    const getData = () => {
        getCourse()
    }

    const addData = (page) => {
        const newRecords = []
        for (var i = page * 10, il = (page + 1) * 10; i < il && i <
            courses.length; i++) {
            newRecords.push(course[i]);
        }

        setFetchData(fetchData.concat(newRecords))
    }

    const addInitialData = () => {
        const initialData = []
        for (var i = 0, il = 10; i < il ; i++) {
            initialData.push(courses[i]);
        }

        setInitialData(initialData)
    }

    const onScrollHandler = () => {
        setPage(page + 1)
        addData(page)
    }

    useEffect(() => {
        console.log("enter useEffect", courses)
            getData()
            setFlag(true)
           
            //         console.log("enter useEffect", fetchData)
            // getData()
            //         setCourse(courses)
            //     console.log(courses, "courses")
            //     console.log(course,  "course")
            //     const newRecords = []
            // for (var i = 0, il = 10; i < il; i++) {
            //     newRecords.push(courses[i]);
            // }
            // setFetchData(newRecords)
    }, [])
    
//     useEffect(() => {
        
// }, [])

    // const courses = useSelector(state => state.classReducers.courses)
    const renderItem = ({ item }) => {
        return (
            <Card
                itemData={item}
                onPress = {() => {navigation.navigate('EditCourse', {
                    courseData: item
                })}}
            />
        );
    };

    // const renderKey = ({ item }) => {
    //     if (courses) {
    //        return item.course_id
    //     }
    // }
    return (
        <>
        <View style={styles.container}>
            {/* {fetchData ? (fetchData.course_id !== undefined && fetchData.course_id !== null) ? */}
            {flag? 
                <FlatList
            data={courses}
            renderItem={renderItem}
            keyExtractor={item => item.course_id}
            style={{ width: '95%' }}
            // onEndReached={onScrollHandler}
            onEndThreshold={0}
        />
        // {/* // <TouchableOpacity onPress={console.log(fetchData, "fetchdata")}>
        // //         <Text>Test</Text>
        // //     </TouchableOpacity> */}
        // {/* :
        // <ActivityIndicator size="large" color="primary"/>  */}
        :
        <ActivityIndicator size="large" color="primary"/>    
        }
            

        </View>
        </>
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