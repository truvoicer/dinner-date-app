import { all } from 'redux-saga/effects'
import {fetchUserSaga, setSessionSaga} from "./session/session-saga";
import {authLoginSaga, authLoginSuccessSaga} from "./session/auth-saga";

export default function* rootSaga() {
    yield all([
        fetchUserSaga(),
        authLoginSaga(),
        authLoginSuccessSaga(),
        setSessionSaga(),
    ])
}