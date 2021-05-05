import store from "../store"
import {
    setSessionAuthenticated,
    setSessionAuthenticating,
    setSessionError, setSessionLoginRedirect,
    setSessionUser
} from "../reducers/session-reducer";
import {SESSION_AUTHENTICATED, SESSION_AUTHENTICATING, SESSION_STATE_KEY} from "../constants/session-constants";

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
export function setSessionLoginRedirectAction(url) {
    store.dispatch(setSessionLoginRedirect(url))
}
export function setSessionErrorAction(error) {
    store.dispatch(setSessionError(error))
}

