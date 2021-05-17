import {all, takeLatest} from "redux-saga/effects";
import {processUserMedia} from "../../../helpers/user-helper";
import {setSessionUserState} from "../../../api/session";
import {fetchUserMedia, mediaCollectionRequest, updateMedia} from "./media-saga-tasks";

export const USER_MEDIA_UPDATE_SUCCEEDED = "USER_MEDIA_UPDATE_SUCCEEDED";
export const USER_MEDIA_UPDATE_FAILED = "USER_MEDIA_UPDATE_FAILED";
export const USER_MEDIA_UPDATE_REQUESTED = "USER_MEDIA_UPDATE_REQUESTED";

export const USER_MEDIA_DELETE_SUCCEEDED = "USER_MEDIA_DELETE_SUCCEEDED";
export const USER_MEDIA_DELETE_FAILED = "USER_MEDIA_DELETE_FAILED";
export const USER_MEDIA_DELETE_REQUESTED = "USER_MEDIA_DELETE_REQUESTED";

export const USER_MEDIA_FETCH_SUCCEEDED = "USER_MEDIA_FETCH_SUCCEEDED";
export const USER_MEDIA_FETCH_FAILED = "USER_MEDIA_FETCH_FAILED";
export const USER_MEDIA_FETCH_REQUESTED = "USER_MEDIA_FETCH_REQUESTED";

export const MEDIA_COLLECTION_REQUEST_SUCCEEDED = "MEDIA_COLLECTION_REQUEST_SUCCEEDED";
export const MEDIA_COLLECTION_REQUEST_FAILED = "MEDIA_COLLECTION_REQUEST_FAILED";
export const MEDIA_COLLECTION_REQUEST = "MEDIA_COLLECTION_REQUEST";

function* sessionUserMediaUpdateRequestedSaga() {
    yield takeLatest(USER_MEDIA_UPDATE_REQUESTED, updateMedia);
}

function* sessionUserMediaUpdateSuccessSaga() {
    yield takeLatest(USER_MEDIA_UPDATE_SUCCEEDED, setSessionUserState);
}

function* sessionUserMediaDeleteRequestedSaga() {
    yield takeLatest(USER_MEDIA_DELETE_REQUESTED, updateMedia);
}

function* sessionUserMediaDeleteSuccessSaga() {
    yield takeLatest(USER_MEDIA_UPDATE_SUCCEEDED, setSessionUserState);
}

function* sessionUserMediaFetchRequestedSaga() {
    yield takeLatest(USER_MEDIA_FETCH_REQUESTED, fetchUserMedia);
}

function* sessionUserMediaFetchSuccessSaga() {
    yield takeLatest(USER_MEDIA_FETCH_SUCCEEDED, processUserMedia);
}

function* newMediaCollectionRequestedSaga() {
    yield takeLatest(MEDIA_COLLECTION_REQUEST, mediaCollectionRequest);
}

function* newMediaCollectionSuccessSaga() {
    yield takeLatest(MEDIA_COLLECTION_REQUEST_SUCCEEDED, processUserMedia);
}

export default function* mediaSagas() {
    yield all([
        sessionUserMediaUpdateRequestedSaga(),
        sessionUserMediaUpdateSuccessSaga(),
        sessionUserMediaFetchRequestedSaga(),
        sessionUserMediaFetchSuccessSaga(),
        newMediaCollectionRequestedSaga(),
        newMediaCollectionSuccessSaga()
    ]);
}