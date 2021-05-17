import { all } from 'redux-saga/effects'
import sessionSagas from "./session/session-sagas";
import authSagas from "./auth/auth-sagas";
import userSagas from "./user/user-sagas";
import memberSagas from "./member/member-sagas";
import localeSagas from "./locale/locale-sagas";
import mediaSagas from "./media/media-sagas";

export default function* rootSaga() {
    yield all([
        authSagas(),
        sessionSagas(),
        userSagas(),
        memberSagas(),
        localeSagas(),
        mediaSagas()
    ])
}