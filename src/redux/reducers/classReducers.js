import { ADD_NEW_CLASS, DELETE_CLASS, GET_ALL_COURSE } from "../action/actionTypes";
import { addNewCourse } from "../middleware/api/addcourse"

const initialState = {
    courses: []
}

const classReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_CLASS:
            let data = {
                courseName: action.className,
                trainer: action.teacherName,
                manager: action.manager,
                date: action.date,
                time: action.time,
                building: action.building,
                room: action.room
            }
            const response = fetch('http://localhost:5005/api/courses/add_course', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(data),

            }).then(response => response.json())
                .then(result => {
                    return result
                }).catch((error) => {
                    console.log(error);
                });
            // const response = addNewCourse(action.className, action.teacherName, action.manager, action.date, action.time, action.building, action.room)
            console.log(response, "day la response api add course")
            return state

        // case GET_ALL_COURSE:
        //     const res = fetch('http://localhost:5005/api/courses/getAll_course', {
        //         method: 'GET',
        //         headers,
        //         body,

        //     }).then(response => response.json())
        //         .then(result => {
        //             return result
        //         }).catch((error) => {
        //             console.log(error);
        //         });
        //     return {...state, courses: state.courses.concat(res)}

        default:
            return state
    }
}

export default classReducers;