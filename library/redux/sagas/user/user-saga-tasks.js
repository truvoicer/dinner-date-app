// worker Saga: will be fired on USER_FETCH_REQUESTED actions
import {call, put} from "redux-saga/effects";
import {fetchSessionUser, postRequest} from "../../../api/middleware";
import {SESSION_USER_FETCH_FAILED, SESSION_USER_FETCH_SUCCEEDED} from "../session/session-sagas";
import {SESSION_USER_PROFILE_UPDATE_FAILED, SESSION_USER_PROFILE_UPDATE_SUCCEEDED} from "./user-sagas";
import {apiConfig} from "../../../../config/api/config";
import {checkUserInAction} from "../../../helpers/user-helper";

const sprintf = require("sprintf-js").sprintf;

export function* fetchUser(action) {
    try {
        const {data} = yield call(fetchSessionUser);
        yield put({type: SESSION_USER_FETCH_SUCCEEDED, data: data?.data});
    } catch (e) {
        yield put({type: SESSION_USER_FETCH_FAILED, message: e.message});
    }
}

export function* updateUserProfile(action) {
    if (!checkUserInAction(action)) {
        return;
    }
    try {
        const {data} = yield call(postRequest, {
            endpoint: sprintf(apiConfig.endpoints.user, action),
            operation: "profile/update",
            requestData: action.payload
        });
        yield put({type: SESSION_USER_PROFILE_UPDATE_SUCCEEDED, data: data?.data});
    } catch (e) {
        yield put({type: SESSION_USER_PROFILE_UPDATE_FAILED, message: e.message});
    }
}

