
// worker Saga: will be fired on USER_FETCH_REQUESTED actions
import {call, put, takeEvery} from "redux-saga/effects";
import {fetchSessionUser} from "../../../api/middleware";
import {setAnonSessionState, setSessionState, setSessionUserState, setTokenStorage} from "../../../api/session";
import {setSessionPagePathAction} from "../../actions/session-actions";

export const SESSION_USER_FETCH_SUCCEEDED = "SESSION_USER_FETCH_SUCCEEDED";
export const SESSION_USER_FETCH_FAILED = "SESSION_USER_FETCH_FAILED";
export const SESSION_USER_FETCH_REQUESTED = "SESSION_USER_FETCH_REQUESTED";
export const SET_SESSION_LOCAL_STORAGE_REQUESTED = "SET_SESSION_LOCAL_STORAGE_REQUESTED";
export const SET_SESSION_STATE_REQUESTED = "SET_SESSION_STATE_REQUESTED";
export const SET_ANON_SESSION_STATE_REQUESTED = "SET_ANON_SESSION_STATE_REQUESTED";
export const SET_SESSION_PAGE_PATH = "SET_SESSION_PAGE_PATH";

export function* setSessionLocalStorageSaga() {
    yield takeEvery(SET_SESSION_LOCAL_STORAGE_REQUESTED, setTokenStorage);
}
export function* setSessionStateSaga() {
    yield takeEvery(SET_SESSION_STATE_REQUESTED, setSessionState);
}
export function* setAnonSessionStateSaga() {
    yield takeEvery(SET_ANON_SESSION_STATE_REQUESTED, setAnonSessionState);
}

function* fetchUser(action) {
    try {
        const {data} = yield call(fetchSessionUser);
        yield put({type: SESSION_USER_FETCH_SUCCEEDED, data: data?.data});
    } catch (e) {
        yield put({type: SESSION_USER_FETCH_FAILED, message: e.message});
    }
}

export function* fetchSessionUserSuccessSaga() {
    yield takeEvery(SESSION_USER_FETCH_SUCCEEDED, setSessionUserState);
}

export function* fetchSessionUserSaga() {
    yield takeEvery(SESSION_USER_FETCH_REQUESTED, fetchUser);
}

export function* setSessionPagePathSaga() {
    yield takeEvery(SET_SESSION_PAGE_PATH, setSessionPagePathAction);
}