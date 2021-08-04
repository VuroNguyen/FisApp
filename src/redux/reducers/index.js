import { combineReducers } from "redux";
import classReducers from "./classReducers";
import loginReducers from "./loginReducers";
import courseReducers from "./courseReducers";

const allReducers = combineReducers({
    classReducers,
    loginReducers,
    courseReducers,
});

export default allReducers;