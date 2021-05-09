
// worker Saga: will be fired on USER_FETCH_REQUESTED actions
import {call, put, takeLatest} from "redux-saga/effects";
import {authLoginRequest, postRequest, validateTokenRequest} from "../../../api/middleware";
import {
    SET_ANON_SESSION_STATE_REQUESTED,
    SET_SESSION_LOCAL_STORAGE_REQUESTED,
    SET_SESSION_STATE_REQUESTED
} from "../session/session-sagas";
import {isLocalStorageTokenValid} from "../../../api/session";
import {apiConfig} from "../../../../config/api/config";
import {AUTH_LOGIN_FAILED, AUTH_LOGIN_SUCCEEDED, AUTH_SIGNUP_FAILED, AUTH_SIGNUP_SUCCEEDED} from "./auth-sagas";

export function* authLogin(action) {
    try {
        const {data} = yield call(authLoginRequest, action);
        yield put({type: AUTH_LOGIN_SUCCEEDED, payload: data});
    } catch (e) {
        yield put({type: AUTH_LOGIN_FAILED, message: e.message});
        console.log("error", e.message)
    }
}

export function* authValidation(action) {
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

export function* authLoginSuccess({payload}) {
    yield put({type: SET_SESSION_LOCAL_STORAGE_REQUESTED, data: payload.data});
    yield put({type: SET_SESSION_STATE_REQUESTED, data: payload.data});
}

export function* authSignup(action) {
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
export function* authSignupSuccess({payload}) {
    yield put({type: SET_SESSION_LOCAL_STORAGE_REQUESTED, data: payload.data});
    yield put({type: SET_SESSION_STATE_REQUESTED, data: payload.data});
}

export function* authSignupFailed({payload}) {

}