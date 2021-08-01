import React from "react";
import Login from "../Login";
import {loginAction} from '../redux/action/index';
import { connect } from "react-redux";

class LoginContainer extends React.Component {
    render() {
        return(
            <Login {...this.props}/>
        )
    }
}

const mapStateToProp = state => {
    return {
        account: state.loginReducers
    }
}

const mapDispatchToProp = (dispatch) => {
    console.log('day la login container');
    return {
        login: (username,password) => {
            dispatch(loginAction(username,password))
        }
    }
}

export default LoginContainer = connect(mapStateToProp, mapDispatchToProp)(LoginContainer);