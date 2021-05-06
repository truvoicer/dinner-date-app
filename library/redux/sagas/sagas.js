import { all } from 'redux-saga/effects'
import {
    fetchSessionUserSaga, fetchSessionUserSuccessSaga,
    setAnonSessionStateSaga,
    setSessionLocalStorageSaga, setSessionPagePathSaga,
    setSessionStateSaga
} from "./session/session-saga";
import {
    authLoginSaga,
    authLoginSuccessSaga, authSignupFailSaga,
    authSignupSaga,
    authSignupSuccessSaga,
    authValidationSaga
} from "./session/auth-saga";

export default function* rootSaga() {
    yield all([
        fetchSessionUserSaga(),
        authLoginSaga(),
        authLoginSuccessSaga(),
        authValidationSaga(),
        setSessionLocalStorageSaga(),
        setAnonSessionStateSaga(),
        setSessionStateSaga(),
        authSignupSaga(),
        authSignupSuccessSaga(),
        authSignupFailSaga(),
        fetchSessionUserSuccessSaga(),
        setSessionPagePathSaga(),
    ])
}