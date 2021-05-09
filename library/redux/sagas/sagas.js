import { all } from 'redux-saga/effects'
import sessionSagas from "./session/session-sagas";
import authSagas from "./auth/auth-sagas";
import userSagas from "./user/user-sagas";

export default function* rootSaga() {
    yield all([
        authSagas(),
        sessionSagas(),
        userSagas()
    ])
}