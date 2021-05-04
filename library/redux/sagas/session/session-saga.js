
// worker Saga: will be fired on USER_FETCH_REQUESTED actions
import {call, put, takeEvery} from "redux-saga/effects";
import {fetchSessionUser} from "../../../api/middleware";
import {setSessionState, setTokenStorage} from "../../../api/session";

export const USER_FETCH_SUCCEEDED = "USER_FETCH_SUCCEEDED";
export const USER_FETCH_FAILED = "USER_FETCH_FAILED";
export const USER_FETCH_REQUESTED = "USER_FETCH_REQUESTED";
export const SET_SESSION_REQUESTED = "SET_SESSION_REQUESTED";

function* fetchUser(action) {
    console.log(action)
    try {
        const user = yield call(fetchSessionUser);
        yield put({type: USER_FETCH_SUCCEEDED, user: user});
    } catch (e) {
        yield put({type: USER_FETCH_FAILED, message: e.message});
    }
}

function* setSession({payload}) {
    setTokenStorage(payload.data)
    setSessionState(payload.data)
}

export function* fetchUserSaga() {
    yield takeEvery(USER_FETCH_REQUESTED, fetchUser);
}
export function* setSessionSaga() {
    yield takeEvery(SET_SESSION_REQUESTED, setSession);
}