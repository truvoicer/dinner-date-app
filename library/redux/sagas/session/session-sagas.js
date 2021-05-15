
// worker Saga: will be fired on USER_FETCH_REQUESTED actions
import {all, call, put, takeLatest} from "redux-saga/effects";
import {setSessionState, setTokenStorage} from "../../../api/session";
import {sessionLogoutHandler, setSessionRedirectPathAction} from "../../actions/session-actions";
import {setSessionRedirectPath} from "../../reducers/session-reducer";

export const SESSION_USER_FETCH_SUCCEEDED = "SESSION_USER_FETCH_SUCCEEDED";
export const SESSION_USER_FETCH_FAILED = "SESSION_USER_FETCH_FAILED";
export const SESSION_USER_FETCH_REQUESTED = "SESSION_USER_FETCH_REQUESTED";
export const SET_SESSION_LOCAL_STORAGE_REQUESTED = "SET_SESSION_LOCAL_STORAGE_REQUESTED";
export const SET_SESSION_STATE_REQUESTED = "SET_SESSION_STATE_REQUESTED";
export const SET_ANON_SESSION_STATE_REQUESTED = "SET_ANON_SESSION_STATE_REQUESTED";
export const SET_SESSION_PAGE_PATH = "SET_SESSION_PAGE_PATH";
export const SET_SESSION_REDIRECT_PATH = "SET_SESSION_REDIRECT_PATH";
export const SET_SESSION_REDIRECT_ON = "SET_SESSION_REDIRECT_ON";

function* setSessionLocalStorageSaga() {
    yield takeLatest(SET_SESSION_LOCAL_STORAGE_REQUESTED, setTokenStorage);
}
function* setSessionStateSaga() {
    yield takeLatest(SET_SESSION_STATE_REQUESTED, setSessionState);
}
function* setAnonSessionStateSaga() {
    yield takeLatest(SET_ANON_SESSION_STATE_REQUESTED, sessionLogoutHandler);
}

function* setSessionRedirectPathSaga() {
    yield takeLatest(SET_SESSION_REDIRECT_PATH, setSessionRedirectPathAction);
}

export default function* sessionSagas() {
    yield all([
        setSessionLocalStorageSaga(),
        setAnonSessionStateSaga(),
        setSessionStateSaga(),
        setSessionRedirectPathSaga()
    ]);
}