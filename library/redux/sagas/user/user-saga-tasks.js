// worker Saga: will be fired on USER_FETCH_REQUESTED actions
import {call, put} from "redux-saga/effects";
import {fetchSessionUser, fileUploadApiRequest, postRequest} from "../../../api/middleware";
import {SESSION_USER_FETCH_FAILED, SESSION_USER_FETCH_SUCCEEDED} from "../session/session-sagas";
import {
    SESSION_USER_MEDIA_FETCH_FAILED,
    SESSION_USER_MEDIA_FETCH_SUCCEEDED,
    SESSION_USER_MEDIA_UPDATE_FAILED,
    SESSION_USER_MEDIA_UPDATE_SUCCEEDED,
    SESSION_USER_PROFILE_UPDATE_FAILED,
    SESSION_USER_PROFILE_UPDATE_SUCCEEDED
} from "./user-sagas";
import {apiConfig} from "../../../../config/api/config";
import {isSet} from "../../../helpers/utils-helper";
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

export function* updateMedia(action) {
    if (!checkUserInAction(action)) {
        return;
    }
    try {
        let responseData;
        const requestData = {
            endpoint: sprintf(apiConfig.endpoints.media, action),
            operation: "upload",
            requestData: action.payload
        };
        switch (action?.payload?.upload_type) {
            case "profile":
                responseData = yield call(fileUploadApiRequest, requestData);
                yield put({type: SESSION_USER_MEDIA_UPDATE_SUCCEEDED, data: responseData?.data?.data});
                break;
            case "media":
                responseData = yield call(fileUploadApiRequest, requestData);
                yield put({type: SESSION_USER_MEDIA_FETCH_SUCCEEDED, data: responseData?.data?.data});
                break;

            default:
                return
        }
    } catch (e) {
        yield put({type: SESSION_USER_MEDIA_UPDATE_FAILED, message: e.message});
    }
}
export function* fetchUserMedia(action) {
    if (!checkUserInAction(action)) {
        return;
    }
    try {
        let responseData = yield call(postRequest, {
            endpoint: sprintf(apiConfig.endpoints.media, action),
            operation: "fetch",
            requestData: action.payload
        });
        const {data} = responseData;
        yield put({type: SESSION_USER_MEDIA_FETCH_SUCCEEDED, data: data?.data});
    } catch (e) {
        yield put({type: SESSION_USER_MEDIA_FETCH_FAILED, message: e.message});
    }
}