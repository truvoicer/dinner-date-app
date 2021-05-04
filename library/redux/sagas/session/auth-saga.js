
// worker Saga: will be fired on USER_FETCH_REQUESTED actions
import {call, put, takeEvery} from "redux-saga/effects";
import {authLoginRequest, fetchSessionUser} from "../../../api/middleware";
import {SET_SESSION_REQUESTED} from "./session-saga";

export const AUTH_LOGIN_SUCCEEDED = "AUTH_LOGIN_SUCCEEDED";
export const AUTH_LOGIN_REQUESTED = "AUTH_LOGIN_REQUESTED";
export const AUTH_LOGIN_FAILED = "AUTH_LOGIN_FAILED";

function* authLogin(action) {
    try {
        const {data} = yield call(authLoginRequest, action);
        yield put({type: AUTH_LOGIN_SUCCEEDED, payload: data});
    } catch (e) {
        yield put({type: AUTH_LOGIN_FAILED, message: e.message});
        console.log("error", e.message)
    }
}

function* authLoginSuccess({payload}) {
    yield put({type: SET_SESSION_REQUESTED, payload: payload});
}

export function* authLoginSaga() {
    yield takeEvery(AUTH_LOGIN_REQUESTED, authLogin);
}

export function* authLoginSuccessSaga() {
    yield takeEvery(AUTH_LOGIN_SUCCEEDED, authLoginSuccess);
}