import { takeEvery } from "redux-saga/effects";
import { ADD_NEW_CLASS } from "../../action/actionTypes";

function* addClass() {
    alert('bạn vừa add thành công');
}

export function* watchAddClass() {
    yield takeEvery(ADD_NEW_CLASS, addClass);
}