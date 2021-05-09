
// worker Saga: will be fired on USER_FETCH_REQUESTED actions
import {all, takeLatest} from "redux-saga/effects";
import {setSessionUserState} from "../../../api/session";
import {fetchMembersList, fetchSingleMember} from "./member-saga-tasks";
import {setMembersSearchResultsAction, setMembersSingleAction} from "../../actions/members-actions";

export const MEMBERS_LIST_FETCH_SUCCEEDED = "MEMBERS_LIST_FETCH_SUCCEEDED";
export const MEMBERS_LIST_FETCH_FAILED = "MEMBERS_LIST_FETCH_FAILED";
export const MEMBERS_LIST_FETCH_REQUESTED = "MEMBERS_LIST_FETCH_REQUESTED";

export const MEMBERS_SINGLE_FETCH_SUCCEEDED = "MEMBERS_SINGLE_FETCH_SUCCEEDED";
export const MEMBERS_SINGLE_FETCH_FAILED = "MEMBERS_SINGLE_FETCH_FAILED";
export const MEMBERS_SINGLE_FETCH_REQUESTED = "MEMBERS_SINGLE_FETCH_REQUESTED";

function* fetchMembersListSuccessSaga() {
    yield takeLatest(MEMBERS_LIST_FETCH_SUCCEEDED, setMembersSearchResultsAction);
}

function* fetchMembersListRequestedSaga() {
    yield takeLatest(MEMBERS_LIST_FETCH_REQUESTED, fetchMembersList);
}

function* fetchMembersSingleSuccessSaga() {
    yield takeLatest(MEMBERS_SINGLE_FETCH_SUCCEEDED, setMembersSingleAction);
}

function* fetchMembersSingleRequestedSaga() {
    yield takeLatest(MEMBERS_SINGLE_FETCH_REQUESTED, fetchSingleMember);
}

export default function* memberSagas() {
    yield all([
        fetchMembersListRequestedSaga(),
        fetchMembersListSuccessSaga(),
        fetchMembersSingleRequestedSaga(),
        fetchMembersSingleSuccessSaga(),
    ]);
}