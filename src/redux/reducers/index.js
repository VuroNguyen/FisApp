import { combineReducers } from "redux";
import classReducers from "./classReducers";
import loginReducers from "./loginReducers";

const allReducers = combineReducers({
    classReducers,
    loginReducers,
});

export default allReducers;