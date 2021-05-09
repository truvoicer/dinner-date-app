
// worker Saga: will be fired on USER_FETCH_REQUESTED actions
import {all, call, put, takeEvery} from "redux-saga/effects";
import {setSessionUserState} from "../../../api/session";
import {fetchUser, updateUserProfile} from "./user-saga-tasks";

export const SESSION_USER_FETCH_SUCCEEDED = "SESSION_USER_FETCH_SUCCEEDED";
export const SESSION_USER_FETCH_FAILED = "SESSION_USER_FETCH_FAILED";
export const SESSION_USER_FETCH_REQUESTED = "SESSION_USER_FETCH_REQUESTED";

export const SESSION_USER_PROFILE_UPDATE_SUCCEEDED = "SESSION_USER_PROFILE_UPDATE_SUCCEEDED";
export const SESSION_USER_PROFILE_UPDATE_FAILED = "SESSION_USER_PROFILE_UPDATE_FAILED";
export const SESSION_USER_PROFILE_UPDATE_REQUESTED = "SESSION_USER_PROFILE_UPDATE_REQUESTED";

function* fetchSessionUserSuccessSaga() {
    yield takeEvery(SESSION_USER_FETCH_SUCCEEDED, setSessionUserState);
}

function* fetchSessionUserSaga() {
    yield takeEvery(SESSION_USER_FETCH_REQUESTED, fetchUser);
}

function* sessionUserUpdateSaga() {
    yield takeEvery(SESSION_USER_PROFILE_UPDATE_REQUESTED, updateUserProfile);
}
function* sessionUserUpdateSuccessSaga() {
    yield takeEvery(SESSION_USER_PROFILE_UPDATE_SUCCEEDED, setSessionUserState);
}

export default function* userSagas() {
    yield all([
       fetchSessionUserSaga(),
       fetchSessionUserSuccessSaga(),
        sessionUserUpdateSaga(),
        sessionUserUpdateSuccessSaga()
    ]);
}