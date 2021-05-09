
// worker Saga: will be fired on USER_FETCH_REQUESTED actions
import {call, put, takeEvery} from "redux-saga/effects";
import {fetchSessionUser} from "../../../api/middleware";
import {SESSION_USER_FETCH_FAILED, SESSION_USER_FETCH_SUCCEEDED} from "../user/user-sagas";