
// worker Saga: will be fired on USER_FETCH_REQUESTED actions
import {call, put, takeEvery} from "redux-saga/effects";
import {authLoginRequest, fetchSessionUser, postRequest, validateTokenRequest} from "../../../api/middleware";
import {
    SET_ANON_SESSION_STATE_REQUESTED,
    SET_SESSION_LOCAL_STORAGE_REQUESTED,
    SET_SESSION_STATE_REQUESTED
} from "./session-saga";
import {getSessionLocalStorage, isLocalStorageTokenValid} from "../../../api/session";
import {apiConfig} from "../../../../config/api/config";
export const AUTH_SIGNUP_REQUESTED = "AUTH_SIGNUP_REQUESTED";
export const AUTH_SIGNUP_SUCCEEDED = "AUTH_LOGIN_SUCCEEDED";
export const AUTH_SIGNUP_FAILED = "AUTH_SIGNUP_FAILED";
export const AUTH_LOGIN_SUCCEEDED = "AUTH_LOGIN_SUCCEEDED";
export const AUTH_LOGIN_REQUESTED = "AUTH_LOGIN_REQUESTED";
export const AUTH_LOGIN_FAILED = "AUTH_LOGIN_FAILED";
export const AUTH_VALIDATION_REQUESTED = "AUTH_VALIDATION_REQUESTED";

function* authLogin(action) {
    try {
        const {data} = yield call(authLoginRequest, action);
        yield put({type: AUTH_LOGIN_SUCCEEDED, payload: data});
    } catch (e) {
        yield put({type: AUTH_LOGIN_FAILED, message: e.message});
        console.log("error", e.message)
    }
}

function* authValidation(action) {
    try {
        if (isLocalStorageTokenValid()) {
            const {data} = yield call(validateTokenRequest);
            yield put({type: SET_SESSION_STATE_REQUESTED, data: data.data});
        } else {
            yield put({type: SET_ANON_SESSION_STATE_REQUESTED});
        }
    } catch (e) {
        yield put({type: SET_ANON_SESSION_STATE_REQUESTED});
        console.error("error", e.message)
    }
}

function* authLoginSuccess({payload}) {
    yield put({type: SET_SESSION_LOCAL_STORAGE_REQUESTED, data: payload.data});
    yield put({type: SET_SESSION_STATE_REQUESTED, data: payload.data});
}

export function* authLoginSaga() {
    yield takeEvery(AUTH_LOGIN_REQUESTED, authLogin);
}

export function* authLoginSuccessSaga() {
    yield takeEvery(AUTH_LOGIN_SUCCEEDED, authLoginSuccess);
}
export function* authValidationSaga() {
    yield takeEvery(AUTH_VALIDATION_REQUESTED, authValidation);
}

function* authSignup(action) {
    try {
        const {data} = yield call(postRequest, {
            endpoint: apiConfig.endpoints.auth,
            operation: "user/create",
            requestData: action.payload
        });
        yield put({type: AUTH_SIGNUP_SUCCEEDED, payload: data});
    } catch (e) {
        yield put({type: AUTH_SIGNUP_FAILED, message: e.message});
        console.error(e)
    }
}
function* authSignupSuccess({payload}) {
    yield put({type: SET_SESSION_LOCAL_STORAGE_REQUESTED, data: payload.data});
    yield put({type: SET_SESSION_STATE_REQUESTED, data: payload.data});
}
function* authSignupFailed({payload}) {

}
export function* authSignupSaga() {
    yield takeEvery(AUTH_SIGNUP_REQUESTED, authSignup);
}
export function* authSignupSuccessSaga() {
    yield takeEvery(AUTH_SIGNUP_SUCCEEDED, authSignupSuccess);
}
export function* authSignupFailSaga() {
    yield takeEvery(AUTH_LOGIN_FAILED, authSignupFailed);
}