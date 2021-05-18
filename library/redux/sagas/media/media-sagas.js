import {all, takeLatest} from "redux-saga/effects";
import {processUserMediaCollections, processUserMediaFiles} from "../../../helpers/user-helper";
import {setSessionUserState} from "../../../api/session";
import {fetchUserMedia, mediaCollectionFetch, mediaCollectionRequest, updateMedia} from "./media-saga-tasks";

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

export const MEDIA_COLLECTION_FETCH_SUCCEEDED = "MEDIA_COLLECTION_FETCH_SUCCEEDED";
export const MEDIA_COLLECTION_FETCH_FAILED = "MEDIA_COLLECTION_FETCH_FAILED";
export const MEDIA_COLLECTION_FETCH_REQUESTED = "MEDIA_COLLECTION_FETCH_REQUESTED";

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
    yield takeLatest(USER_MEDIA_FETCH_SUCCEEDED, processUserMediaFiles);
}

function* newMediaCollectionRequestedSaga() {
    yield takeLatest(MEDIA_COLLECTION_REQUEST, mediaCollectionRequest);
}

function* newMediaCollectionSuccessSaga() {
    yield takeLatest(MEDIA_COLLECTION_REQUEST_SUCCEEDED, processUserMediaCollections);
}

function* mediaCollectionFetchRequestedSaga() {
    yield takeLatest(MEDIA_COLLECTION_FETCH_REQUESTED, mediaCollectionFetch);
}

function* mediaCollectionFetchSuccessSaga() {
    yield takeLatest(MEDIA_COLLECTION_FETCH_SUCCEEDED, processUserMediaCollections);
}

export default function* mediaSagas() {
    yield all([
        sessionUserMediaUpdateRequestedSaga(),
        sessionUserMediaUpdateSuccessSaga(),
        sessionUserMediaFetchRequestedSaga(),
        sessionUserMediaFetchSuccessSaga(),
        newMediaCollectionRequestedSaga(),
        newMediaCollectionSuccessSaga(),
        mediaCollectionFetchRequestedSaga(),
        mediaCollectionFetchSuccessSaga()
    ]);
}