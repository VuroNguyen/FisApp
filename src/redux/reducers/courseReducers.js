import { ADD_NEW_CLASS, DELETE_CLASS, GET_ALL_COURSE, GET_COURSE_ERROR, GET_COURSE_SUCCESS } from "../action/actionTypes";


const courseReducers = (course = [], action, navigation) => {
    try {
        switch (action.type) {
            case GET_COURSE_SUCCESS:
                return action.recievedCourse

            case GET_COURSE_ERROR:
                return []

            default:
                return course
        }
    } catch (e) {
        alert(e)
    }
}

export default courseReducers;