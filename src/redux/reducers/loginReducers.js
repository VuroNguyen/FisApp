import { SIGN_IN_SUCCESS, SIGN_IN_ERROR, POST_LOGIN, DID_LOGIN_ACTION } from '../action/actionTypes';
import { postLogin } from '../middleware/api/login';

const initialState = {
    login: [],
}

const loginReducers = (login = [], action, navigation) => {
    try {
        switch (action.type) {
            case POST_LOGIN:
                // const response =  postLogin(action.username, action.password)
                console.log('from loginReducer')
                const response = postLogin(action.username, action.password)
                console.log(login.concat(response), 'day la luc push')
                return login.concat(response);

            case SIGN_IN_SUCCESS:
                return action.response;

            case SIGN_IN_ERROR:
                return action.error;

            case DID_LOGIN_ACTION:
                return 0;

            default:
                return login
        }
    } catch (error) {
        console.log(error);
    }
}

export default loginReducers;