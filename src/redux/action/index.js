import {
    ADD_NEW_CLASS, 
    DELETE_CLASS, 
    POST_LOGIN, 
    DID_LOGIN_ACTION, 
    SIGN_IN_SUCCESS, 
    SIGN_IN_ERROR, 
    GET_ALL_COURSE, 
    GET_COURSE_ERROR,
    GET_COURSE_SUCCESS,
    GET_BUILDING,
    GET_BUILDING_SUCCESS,
    GET_BUILDING_ERROR
} from "./actionTypes";

let newClassId = 0;
export const addNewClass = (inputClassName, inputTeacherName, inputManager, inputDate, inputTime, inputBuilding, inputRoom) => {
    return {
        type: ADD_NEW_CLASS,
        className: inputClassName,
        teacherName: inputTeacherName,
        manager: inputManager,
        date: inputDate,
        time: inputTime,
        building: inputBuilding,
        room: inputRoom
    }

}

export const deleteClass = (classId) => {
    return {
        type: ADD_NEW_CLASS,
        classId: classId,
    }

}

export const loginAction = (username, password) => {
    return {
        type: POST_LOGIN,
        username,
        password,
    }
}

export const signInSuccess = (response) => {
    return {
        type: SIGN_IN_SUCCESS,
        response
    }
}

export const signInError = (error) => {
    return {
        type: SIGN_IN_ERROR,
        error
    }
}

export const getAllCourse = () => {
    return {
        type: GET_ALL_COURSE
    }
}

export const getCourseSuccess = (recievedCourse) => {
    return {
        type: GET_COURSE_SUCCESS,
        recievedCourse
    }
}

export const getCourseFailure = (error) => {
    return {
        type: GET_COURSE_ERROR,
        error
    }
}

export const getBuilding = () => {
    return {
        type: GET_BUILDING
    }
}

export const getBuildingSuccess = (recievedBuilding) => {
    return {
        type: GET_BUILDING_SUCCESS,
        recievedBuilding
    }
}

export const getBuildingFailure = (error) => {
    return {
        type: GET_BUILDING_ERROR,
        error
    }
}