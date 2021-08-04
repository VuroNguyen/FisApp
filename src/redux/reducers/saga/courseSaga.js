import {GET_COURSE_ERROR, GET_COURSE_SUCCESS, GET_ALL_COURSE} from "../../action/actionTypes"
import { takeEvery, takeLatest, put } from "redux-saga/effects";
import React from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { getAllCourse } from "../../middleware/api/getcourse";

function* fetchCourse() {
    const token = yield AsyncStorage.getItem("@userToken")
    console.log("user token",token)
    try {
        const getCourse = yield getAllCourse(token);
        // console.log("course",getCourse.data)
        yield put({type: GET_COURSE_SUCCESS, recievedCourse: getCourse.data})
    } catch (error) {
        yield put({type: GET_COURSE_ERROR, error});
    }
}

export function* watchGetCourse() {
    yield takeLatest(GET_ALL_COURSE, fetchCourse)
}