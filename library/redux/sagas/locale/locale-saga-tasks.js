import {call, put} from "redux-saga/effects";
import {fetchRequest} from "../../../api/middleware";
import {apiConfig} from "../../../../config/api/config";
import {COUNTRY_LIST_FETCH_FAILED, COUNTRY_LIST_FETCH_SUCCEEDED} from "./locale-sagas";

export function* fetchCountries(action) {
    try {
        console.log(action)
        const {data} = yield call(fetchRequest, {
            endpoint: apiConfig.endpoints.locale,
            operation: "country/list",
            data: action.payload
        });
        yield put({type: COUNTRY_LIST_FETCH_SUCCEEDED, data: data?.data});
        console.log(data)
    } catch (e) {
        console.error(e)
        yield put({type: COUNTRY_LIST_FETCH_FAILED, error: e});
    }
}