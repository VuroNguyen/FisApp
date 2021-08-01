import { call, all } from 'redux-saga/effects';
import {watchLogin} from './loginSaga';
import { watchAddClass } from './classSaga';

export default function* rootSaga() {
    yield all([
        watchLogin(),
        watchAddClass(),
    ]);
}
