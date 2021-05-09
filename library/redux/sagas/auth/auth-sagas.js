
// worker Saga: will be fired on USER_FETCH_REQUESTED actions
import {all, call, put, takeLatest} from "redux-saga/effects";
import {
    authLogin,
    authLoginSuccess,
    authSignup,
    authSignupFailed,
    authSignupSuccess,
    authValidation
} from "./auth-saga-tasks";
export const AUTH_SIGNUP_REQUESTED = "AUTH_SIGNUP_REQUESTED";
export const AUTH_SIGNUP_SUCCEEDED = "AUTH_LOGIN_SUCCEEDED";
export const AUTH_SIGNUP_FAILED = "AUTH_SIGNUP_FAILED";
export const AUTH_LOGIN_SUCCEEDED = "AUTH_LOGIN_SUCCEEDED";
export const AUTH_LOGIN_REQUESTED = "AUTH_LOGIN_REQUESTED";
export const AUTH_LOGIN_FAILED = "AUTH_LOGIN_FAILED";
export const AUTH_VALIDATION_REQUESTED = "AUTH_VALIDATION_REQUESTED";

function* authLoginSaga() {
    yield takeLatest(AUTH_LOGIN_REQUESTED, authLogin);
}

function* authLoginSuccessSaga() {
    yield takeLatest(AUTH_LOGIN_SUCCEEDED, authLoginSuccess);
}

function* authValidationSaga() {
    yield takeLatest(AUTH_VALIDATION_REQUESTED, authValidation);
}

function* authSignupSaga() {
    yield takeLatest(AUTH_SIGNUP_REQUESTED, authSignup);
}
function* authSignupSuccessSaga() {
    yield takeLatest(AUTH_SIGNUP_SUCCEEDED, authSignupSuccess);
}
function* authSignupFailSaga() {
    yield takeLatest(AUTH_LOGIN_FAILED, authSignupFailed);
}
export default function* authSagas() {
    yield all([
        authLoginSaga(),
        authLoginSuccessSaga(),
        authValidationSaga(),
        authSignupSaga(),
        authSignupSuccessSaga(),
        authSignupFailSaga(),
    ]);
}