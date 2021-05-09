
// worker Saga: will be fired on USER_FETCH_REQUESTED actions
import {all, call, put, takeEvery} from "redux-saga/effects";
import {setSessionState, setTokenStorage} from "../../../api/session";
import {sessionLogoutHandler, setSessionPagePathAction} from "../../actions/session-actions";

export const SESSION_USER_FETCH_SUCCEEDED = "SESSION_USER_FETCH_SUCCEEDED";
export const SESSION_USER_FETCH_FAILED = "SESSION_USER_FETCH_FAILED";
export const SESSION_USER_FETCH_REQUESTED = "SESSION_USER_FETCH_REQUESTED";
export const SET_SESSION_LOCAL_STORAGE_REQUESTED = "SET_SESSION_LOCAL_STORAGE_REQUESTED";
export const SET_SESSION_STATE_REQUESTED = "SET_SESSION_STATE_REQUESTED";
export const SET_ANON_SESSION_STATE_REQUESTED = "SET_ANON_SESSION_STATE_REQUESTED";
export const SET_SESSION_PAGE_PATH = "SET_SESSION_PAGE_PATH";

function* setSessionLocalStorageSaga() {
    yield takeEvery(SET_SESSION_LOCAL_STORAGE_REQUESTED, setTokenStorage);
}
function* setSessionStateSaga() {
    yield takeEvery(SET_SESSION_STATE_REQUESTED, setSessionState);
}
function* setAnonSessionStateSaga() {
    yield takeEvery(SET_ANON_SESSION_STATE_REQUESTED, sessionLogoutHandler);
}

function* setSessionPagePathSaga() {
    yield takeEvery(SET_SESSION_PAGE_PATH, setSessionPagePathAction);
}

export default function* sessionSagas() {
    yield all([
        setSessionLocalStorageSaga(),
        setAnonSessionStateSaga(),
        setSessionStateSaga(),
        setSessionPagePathSaga()
    ]);
}