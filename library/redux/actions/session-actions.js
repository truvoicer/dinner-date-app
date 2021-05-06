import store from "../store"
import {
    setSessionAuthenticated,
    setSessionAuthenticating,
    setSessionError, setSessionLoginRedirect, setSessionPagePath,
    setSessionUser
} from "../reducers/session-reducer";
import {
    SESSION_AUTHENTICATED,
    SESSION_AUTHENTICATING,
    SESSION_PAGE_PATH,
    SESSION_STATE_KEY
} from "../constants/session-constants";
import {logout, setAnonSessionState} from "../../api/session";

export function isAuthenticated() {
    const sessionState = store.getState()[SESSION_STATE_KEY];
    return (!sessionState[SESSION_AUTHENTICATING] && sessionState[SESSION_AUTHENTICATED]);
}
export function setSessionUserAction(user) {
    store.dispatch(setSessionUser(user))
}
export function setSessionAuthenticatedAction(status) {
    store.dispatch(setSessionAuthenticated(status))
}
export function setSessionAuthenticatingAction(status) {
    store.dispatch(setSessionAuthenticating(status))
}
export function setSessionPagePathAction({path}) {
    store.dispatch(setSessionPagePath(path))
}
export function setSessionErrorAction(error) {
    store.dispatch(setSessionError(error))
}

export const sessionLogoutHandler = () => {
    const sessionState = store.getState()[SESSION_STATE_KEY];
    setAnonSessionState();
    logout(sessionState[SESSION_PAGE_PATH])
}

