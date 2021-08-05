import { combineReducers } from "redux";
import classReducers from "./classReducers";
import loginReducers from "./loginReducers";
import courseReducers from "./courseReducers";
import buildingReducers from "./buildingReducers";

const allReducers = combineReducers({
    classReducers,
    loginReducers,
    courseReducers,
    buildingReducers,
});

export default allReducers;