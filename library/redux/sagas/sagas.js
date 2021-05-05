import { all } from 'redux-saga/effects'
import {
    fetchUserSaga,
    setAnonSessionStateSaga,
    setSessionLocalStorageSaga,
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
        fetchUserSaga(),
        authLoginSaga(),
        authLoginSuccessSaga(),
        authValidationSaga(),
        setSessionLocalStorageSaga(),
        setAnonSessionStateSaga(),
        setSessionStateSaga(),
        authSignupSaga(),
        authSignupSuccessSaga(),
        authSignupFailSaga()
    ])
}