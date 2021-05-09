import {call, put, takeLatest} from "redux-saga/effects";
import {fetchRequest} from "../../../api/middleware";
import {
    MEMBERS_LIST_FETCH_FAILED,
    MEMBERS_LIST_FETCH_SUCCEEDED, MEMBERS_SINGLE_FETCH_FAILED,
    MEMBERS_SINGLE_FETCH_REQUESTED,
    MEMBERS_SINGLE_FETCH_SUCCEEDED
} from "./member-sagas";
import {apiConfig} from "../../../../config/api/config";

export function* fetchMembersList(action) {
    try {
        console.log(action)
        const {data} = yield call(fetchRequest, {
            endpoint: apiConfig.endpoints.member,
            operation: "list",
            data: action.payload
        });
        yield put({type: MEMBERS_LIST_FETCH_SUCCEEDED, data: data?.data});
        console.log(data)
    } catch (e) {
        console.error(e)
        yield put({type: MEMBERS_LIST_FETCH_FAILED, error: e});
    }
}
export function* fetchSingleMember(action) {
    try {
        console.log(action)
        const {data} = yield call(fetchRequest, {
            endpoint: apiConfig.endpoints.member,
            operation: `${action.payload.username}/detail`,
            data: action.payload
        });
        yield put({type: MEMBERS_SINGLE_FETCH_SUCCEEDED, data: data?.data});
        console.log(data)
    } catch (e) {
        console.error(e)
        yield put({type: MEMBERS_SINGLE_FETCH_FAILED, error: e});
    }
}