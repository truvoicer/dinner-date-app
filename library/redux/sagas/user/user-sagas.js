
// worker Saga: will be fired on USER_FETCH_REQUESTED actions
import {all, call, put, takeLatest} from "redux-saga/effects";
import {setSessionUserState} from "../../../api/session";
import {fetchUser, fetchUserMedia, updateMedia, updateUserProfile} from "./user-saga-tasks";
import {processUserMedia} from "../../../helpers/user-helper";

export const SESSION_USER_FETCH_SUCCEEDED = "SESSION_USER_FETCH_SUCCEEDED";
export const SESSION_USER_FETCH_FAILED = "SESSION_USER_FETCH_FAILED";
export const SESSION_USER_FETCH_REQUESTED = "SESSION_USER_FETCH_REQUESTED";

export const SESSION_USER_PROFILE_UPDATE_SUCCEEDED = "SESSION_USER_PROFILE_UPDATE_SUCCEEDED";
export const SESSION_USER_PROFILE_UPDATE_FAILED = "SESSION_USER_PROFILE_UPDATE_FAILED";
export const SESSION_USER_PROFILE_UPDATE_REQUESTED = "SESSION_USER_PROFILE_UPDATE_REQUESTED";

export const SESSION_USER_MEDIA_UPDATE_SUCCEEDED = "SESSION_USER_PROFILE_MEDIA_SUCCEEDED";
export const SESSION_USER_MEDIA_UPDATE_FAILED = "SESSION_USER_PROFILE_MEDIA_FAILED";
export const SESSION_USER_MEDIA_UPDATE_REQUESTED = "SESSION_USER_PROFILE_MEDIA_REQUESTED";

export const SESSION_USER_MEDIA_DELETE_SUCCEEDED = "SESSION_USER_MEDIA_DELETE_SUCCEEDED";
export const SESSION_USER_MEDIA_DELETE_FAILED = "SESSION_USER_MEDIA_DELETE_FAILED";
export const SESSION_USER_MEDIA_DELETE_REQUESTED = "SESSION_USER_MEDIA_DELETE_REQUESTED";

export const SESSION_USER_MEDIA_FETCH_SUCCEEDED = "SESSION_USER_MEDIA_FETCH_SUCCEEDED";
export const SESSION_USER_MEDIA_FETCH_FAILED = "SESSION_USER_MEDIA_FETCH_FAILED";
export const SESSION_USER_MEDIA_FETCH_REQUESTED = "SESSION_USER_MEDIA_FETCH_REQUESTED";

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

function* sessionUserMediaUpdateRequestedSaga() {
    yield takeLatest(SESSION_USER_MEDIA_UPDATE_REQUESTED, updateMedia);
}
function* sessionUserMediaUpdateSuccessSaga() {
    yield takeLatest(SESSION_USER_MEDIA_UPDATE_SUCCEEDED, setSessionUserState);
}

function* sessionUserMediaDeleteRequestedSaga() {
    yield takeLatest(SESSION_USER_MEDIA_DELETE_REQUESTED, updateMedia);
}
function* sessionUserMediaDeleteSuccessSaga() {
    yield takeLatest(SESSION_USER_MEDIA_UPDATE_SUCCEEDED, setSessionUserState);
}

function* sessionUserMediaFetchRequestedSaga() {
    yield takeLatest(SESSION_USER_MEDIA_FETCH_REQUESTED, fetchUserMedia);
}
function* sessionUserMediaFetchSuccessSaga() {
    yield takeLatest(SESSION_USER_MEDIA_FETCH_SUCCEEDED, processUserMedia);
}

export default function* userSagas() {
    yield all([
       fetchSessionUserSaga(),
       fetchSessionUserSuccessSaga(),
        sessionUserUpdateSaga(),
        sessionUserUpdateSuccessSaga(),
        sessionUserMediaUpdateRequestedSaga(),
        sessionUserMediaUpdateSuccessSaga(),
        sessionUserMediaFetchRequestedSaga(),
        sessionUserMediaFetchSuccessSaga()
    ]);
}