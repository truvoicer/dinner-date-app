
// worker Saga: will be fired on USER_FETCH_REQUESTED actions
import {all, call, put, takeLatest} from "redux-saga/effects";
import {setSessionUserState} from "../../../api/session";
import {fetchUser, updateMedia, updateUserProfile} from "./user-saga-tasks";

export const SESSION_USER_FETCH_SUCCEEDED = "SESSION_USER_FETCH_SUCCEEDED";
export const SESSION_USER_FETCH_FAILED = "SESSION_USER_FETCH_FAILED";
export const SESSION_USER_FETCH_REQUESTED = "SESSION_USER_FETCH_REQUESTED";

export const SESSION_USER_PROFILE_UPDATE_SUCCEEDED = "SESSION_USER_PROFILE_UPDATE_SUCCEEDED";
export const SESSION_USER_PROFILE_UPDATE_FAILED = "SESSION_USER_PROFILE_UPDATE_FAILED";
export const SESSION_USER_PROFILE_UPDATE_REQUESTED = "SESSION_USER_PROFILE_UPDATE_REQUESTED";

export const SESSION_USER_PROFILE_MEDIA_SUCCEEDED = "SESSION_USER_PROFILE_MEDIA_SUCCEEDED";
export const SESSION_USER_PROFILE_MEDIA_FAILED = "SESSION_USER_PROFILE_MEDIA_FAILED";
export const SESSION_USER_PROFILE_MEDIA_REQUESTED = "SESSION_USER_PROFILE_MEDIA_REQUESTED";

function* fetchSessionUserSuccessSaga() {
    yield takeLatest(SESSION_USER_FETCH_SUCCEEDED, setSessionUserState);
}

function* fetchSessionUserSaga() {
    yield takeLatest(SESSION_USER_FETCH_REQUESTED, fetchUser);
}

function* sessionUserUpdateSaga() {
    yield takeLatest(SESSION_USER_PROFILE_UPDATE_REQUESTED, updateUserProfile);
}
function* sessionUserUpdateSuccessSaga() {
    yield takeLatest(SESSION_USER_PROFILE_UPDATE_SUCCEEDED, setSessionUserState);
}

function* sessionUserMediaRequestedSaga() {
    yield takeLatest(SESSION_USER_PROFILE_MEDIA_REQUESTED, updateMedia);
}
function* sessionUserMediaSuccessSaga() {
    yield takeLatest(SESSION_USER_PROFILE_MEDIA_SUCCEEDED, setSessionUserState);
}

export default function* userSagas() {
    yield all([
       fetchSessionUserSaga(),
       fetchSessionUserSuccessSaga(),
        sessionUserUpdateSaga(),
        sessionUserUpdateSuccessSaga(),
        sessionUserMediaRequestedSaga(),
        sessionUserMediaSuccessSaga(),
    ]);
}