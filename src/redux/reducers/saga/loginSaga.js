import { POST_LOGIN, SIGN_IN_SUCCESS, SIGN_IN_ERROR } from "../../action/actionTypes";
import { call, takeEvery, put, takeLatest } from "redux-saga/effects";
import { postLogin } from "../../middleware/api/login";



function* signInFlow(action) {
    try {
        const response = yield postLogin(action.username, action.password)

    console.log('from login Saga', response)

    if (response !== undefined) {
        if (response.resultCode === 1) {
            yield put({type: SIGN_IN_SUCCESS, response: response})
        }
        else {
            yield put({type: SIGN_IN_ERROR, error: response})
        }
    }
    else {
        yield put({type: SIGN_IN_ERROR, error})
    }
    } catch(error) {
        alert(error)
    }
    
}

export function* watchLogin() {
    yield takeLatest(POST_LOGIN, signInFlow);
}