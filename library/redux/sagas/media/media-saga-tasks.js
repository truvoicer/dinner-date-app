import {checkUserInAction} from "../../../helpers/user-helper";
import {apiConfig} from "../../../../config/api/config";
import {call, put} from "redux-saga/effects";
import {fetchRequest, fileUploadApiRequest, postRequest} from "../../../api/middleware";
import {
    MEDIA_COLLECTION_ALL_TYPE,
    MEDIA_COLLECTION_FETCH_FAILED,
    MEDIA_COLLECTION_FETCH_SUCCEEDED, MEDIA_COLLECTION_FILES_TYPE, MEDIA_COLLECTION_LIST_TYPE,
    MEDIA_COLLECTION_REQUEST_FAILED,
    MEDIA_COLLECTION_REQUEST_SUCCEEDED,
    USER_MEDIA_FETCH_FAILED,
    USER_MEDIA_FETCH_SUCCEEDED,
    USER_MEDIA_UPDATE_FAILED,
    USER_MEDIA_UPDATE_SUCCEEDED
} from "./media-sagas";

const sprintf = require("sprintf-js").sprintf;

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
                yield put({type: USER_MEDIA_UPDATE_SUCCEEDED, data: responseData?.data?.data});
                break;
            case "media":
                responseData = yield call(fileUploadApiRequest, requestData);
                yield put({type: USER_MEDIA_FETCH_SUCCEEDED, data: responseData?.data?.data});
                break;

            default:
                return
        }
    } catch (e) {
        yield put({type: USER_MEDIA_UPDATE_FAILED, message: e.message});
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
        yield put({type: USER_MEDIA_FETCH_SUCCEEDED, data: data?.data});
    } catch (e) {
        yield put({type: USER_MEDIA_FETCH_FAILED, message: e.message});
    }
}

export function* mediaCollectionRequest(action) {
    if (!checkUserInAction(action)) {
        return;
    }
    try {
        let responseData = yield call(postRequest, {
            endpoint: sprintf(apiConfig.endpoints.media, action),
            operation: "collection/create",
            requestData: action.payload
        });
        const {data} = responseData;
        yield put({type: MEDIA_COLLECTION_REQUEST_SUCCEEDED, data: data?.data});
    } catch (e) {
        yield put({type: MEDIA_COLLECTION_REQUEST_FAILED, message: e.message});
    }
}

export function* mediaCollectionFetch(action) {
    if (!checkUserInAction(action)) {
        return;
    }
    let endpoint, data;
    switch (action?.collectionFetchType) {
        case  MEDIA_COLLECTION_LIST_TYPE:
            if (!action?.payload?.collectionName) {
                console.error("Collection name not set for collection fetch")
                return;
            }
            endpoint = `collection/${action.payload.collectionName}/list`;
            break;
        case MEDIA_COLLECTION_FILES_TYPE:
            if (!action?.payload?.userCollectionName) {
                console.error("User collection name not set for collection fetch")
                return;
            }
            endpoint = `collection/${action.payload.userCollectionName}/file/list`;
            break;
        default:
            console.error("Collection fetch type not set for collection fetch")
            return;
    }
    try {
        let responseData = yield call(fetchRequest, {
            endpoint: sprintf(apiConfig.endpoints.media, action),
            operation: endpoint,
            data: action.payload
        });
        const {data} = responseData;
        yield put({type: MEDIA_COLLECTION_FETCH_SUCCEEDED, data: data?.data});
    } catch (e) {
        yield put({type: MEDIA_COLLECTION_FETCH_FAILED, message: e.message});
    }
}