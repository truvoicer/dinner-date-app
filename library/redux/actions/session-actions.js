import store from "../store"
import {
    setSessionAuthenticated,
    setSessionAuthenticating,
    setSessionError,
    setSessionRedirectOn,
    setSessionRedirectPath,
    setSessionUserMediaCollections,
    setSessionUserMediaFiles,
    setSessionUser
} from "../reducers/session-reducer";
import {
    SESSION_AUTHENTICATED,
    SESSION_AUTHENTICATING,
    SESSION_PAGE_PATH,
    SESSION_STATE_KEY, SESSION_USER_MEDIA, SESSION_USER_MEDIA_COLLECTIONS, SESSION_USER_MEDIA_FILES
} from "../constants/session-constants";
import {logout, setAnonSessionState} from "../../api/session";
import produce from "immer";
import {isNotEmpty, isSet} from "../../helpers/utils-helper";

export function isAuthenticated() {
    const sessionState = store.getState()[SESSION_STATE_KEY];
    return (!sessionState[SESSION_AUTHENTICATING] && sessionState[SESSION_AUTHENTICATED]);
}
export function setSessionUserAction(user) {
    store.dispatch(setSessionUser(user))
}

export function setSessionMediaFilesAction({mediaData = []}) {
    const mediaState = {...store.getState()[SESSION_STATE_KEY][SESSION_USER_MEDIA][SESSION_USER_MEDIA_FILES]};
    const nextState = produce(mediaState, (draftState) => {
        mediaData.forEach(file => {
            if (!Array.isArray(draftState[file.media_category])) {
                draftState[file.media_category] = [];
            }
            draftState[file.media_category].push(file);
        })
    })
    store.dispatch(setSessionUserMediaFiles(nextState))
}

export function setSessionMediaCollectionsAction({collections = []}) {
    const collectionState = {...store.getState()[SESSION_STATE_KEY][SESSION_USER_MEDIA][SESSION_USER_MEDIA_COLLECTIONS]};
    const nextState = produce(collectionState, (draftState) => {
        draftState = {};
        collections.forEach(collection => {
            if (!Array.isArray(draftState[collection.media_collection.name])) {
                draftState[collection.media_collection.name] = [];
            }
            console.log(collection)
            draftState[collection.media_collection.name].push(collection);
        })
        console.log(draftState)
        return draftState;
    })
    store.dispatch(setSessionUserMediaCollections(nextState))
}

export function setSessionAuthenticatedAction(status) {
    store.dispatch(setSessionAuthenticated(status))
}
export function setSessionAuthenticatingAction(status) {
    store.dispatch(setSessionAuthenticating(status))
}
export function setSessionRedirectPathAction({path}) {
    store.dispatch(setSessionRedirectPath(path))
}
export function setSessionRedirectOnAction(on) {
    store.dispatch(setSessionRedirectOn(on))
}
export function setSessionErrorAction(error) {
    store.dispatch(setSessionError(error))
}

export const sessionLogoutHandler = () => {
    const sessionState = store.getState()[SESSION_STATE_KEY];
    setAnonSessionState();
    logout(sessionState[SESSION_PAGE_PATH])
}

