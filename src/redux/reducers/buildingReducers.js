import {
    GET_BUILDING,
    GET_BUILDING_SUCCESS,
    GET_BUILDING_ERROR
} from '../action/actionTypes'

const buildingReducers = (building = [], action, navigation) => {
    try {
        switch (action.type) {
            case GET_BUILDING_SUCCESS:
                return action.recievedBuilding

            case GET_BUILDING_ERROR:
                return []

            default:
                return building
        }
    } catch (e) {
        alert(e)
    }
}

export default buildingReducers;