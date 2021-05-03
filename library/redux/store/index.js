import {
    configureStore,
    applyMiddleware,
} from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga'

import {SESSION_STATE_KEY} from "../constants/session-constants";
import {sessionApiReducer} from "../reducers/session-reducer";
import {BREADCRUMBS_STATE_KEY} from "../constants/breadcrumbs-constants";
import {breadcrumbsApiReducer} from "../reducers/breadcrumbs-reducer";
import {GLOBAL_STATE_KEY} from "../constants/global-constants";
import {globalApiReducer} from "../reducers/global-reducer";
import mySaga from '../sagas/sagas'
const sagaMiddleware = createSagaMiddleware()

const reducer = {
    [SESSION_STATE_KEY]: sessionApiReducer,
    [BREADCRUMBS_STATE_KEY]: breadcrumbsApiReducer,
    [GLOBAL_STATE_KEY]: globalApiReducer,
}
const store = configureStore({
    reducer,
    middleware: [sagaMiddleware]
});
sagaMiddleware.run(mySaga)
export default store;