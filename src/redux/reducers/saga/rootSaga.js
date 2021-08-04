import { call, all } from 'redux-saga/effects';
import {watchLogin} from './loginSaga';
import { watchAddClass } from './classSaga';
import {watchGetCourse} from './courseSaga'

export default function* rootSaga() {
    yield all([
        watchLogin(),
        watchAddClass(),
        watchGetCourse(),
    ]);
}
