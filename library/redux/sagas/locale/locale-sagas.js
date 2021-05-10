
// worker Saga: will be fired on USER_FETCH_REQUESTED actions
import {all, takeLatest} from "redux-saga/effects";
import {fetchCountries} from "./locale-saga-tasks";
import {setLocaleCountriesAction} from "../../actions/locale-actions";

export const COUNTRY_LIST_FETCH_SUCCEEDED = "COUNTRY_LIST_FETCH_SUCCEEDED";
export const COUNTRY_LIST_FETCH_FAILED = "COUNTRY_LIST_FETCH_FAILED";
export const COUNTRY_LIST_FETCH_REQUESTED = "COUNTRY_LIST_FETCH_REQUESTED";

function* fetchCountryListSuccessSaga() {
    yield takeLatest(COUNTRY_LIST_FETCH_SUCCEEDED, setLocaleCountriesAction);
}

function* fetchCountryListRequestedSaga() {
    yield takeLatest(COUNTRY_LIST_FETCH_REQUESTED, fetchCountries);
}

export default function* localeSagas() {
    yield all([
        fetchCountryListSuccessSaga(),
        fetchCountryListRequestedSaga(),
    ]);
}