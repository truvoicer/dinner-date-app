import {all, takeEvery} from "redux-saga/effects";
import {processUserMediaCollections, processUserMediaFiles} from "../../../helpers/user-helper";
import {setSessionUserState} from "../../../api/session";
import {fetchUserMedia, mediaCollectionFetch, mediaCollectionRequest, updateMedia} from "./media-saga-tasks";

export const MEDIA_COLLECTION_ALL_TYPE = "MEDIA_COLLECTION_ALL_TYPE"
export const MEDIA_COLLECTION_LIST_TYPE = "MEDIA_COLLECTION_LIST_TYPE"
export const MEDIA_COLLECTION_FILES_TYPE = "MEDIA_COLLECTION_FILES_TYPE"

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
    yield takeEvery(USER_MEDIA_UPDATE_REQUESTED, updateMedia);
}

function* sessionUserMediaUpdateSuccessSaga() {
    yield takeEvery(USER_MEDIA_UPDATE_SUCCEEDED, setSessionUserState);
}

function* sessionUserMediaDeleteRequestedSaga() {
    yield takeEvery(USER_MEDIA_DELETE_REQUESTED, updateMedia);
}

function* sessionUserMediaDeleteSuccessSaga() {
    yield takeEvery(USER_MEDIA_UPDATE_SUCCEEDED, setSessionUserState);
}

function* sessionUserMediaFetchRequestedSaga() {
    yield takeEvery(USER_MEDIA_FETCH_REQUESTED, fetchUserMedia);
}

function* sessionUserMediaFetchSuccessSaga() {
    yield takeEvery(USER_MEDIA_FETCH_SUCCEEDED, processUserMediaFiles);
}

function* newMediaCollectionRequestedSaga() {
    yield takeEvery(MEDIA_COLLECTION_REQUEST, mediaCollectionRequest);
}

function* newMediaCollectionSuccessSaga() {
    yield takeEvery(MEDIA_COLLECTION_REQUEST_SUCCEEDED, processUserMediaCollections);
}

function* mediaCollectionFetchRequestedSaga() {
    yield takeEvery(MEDIA_COLLECTION_FETCH_REQUESTED, mediaCollectionFetch);
}

function* mediaCollectionFetchSuccessSaga() {
    yield takeEvery(MEDIA_COLLECTION_FETCH_SUCCEEDED, processUserMediaCollections);
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