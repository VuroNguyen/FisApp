import {
    GET_BUILDING,
    GET_BUILDING_SUCCESS,
    GET_BUILDING_ERROR
} from '../action/actionTypes';
import { takeEvery, takeLatest, put } from "redux-saga/effects";
import React from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

