// AUTH STATE
import {createSlice} from "@reduxjs/toolkit";
import {
    SESSION_AUTHENTICATED,
    SESSION_AUTHENTICATING,
    SESSION_ERROR, SESSION_PAGE_PATH, SESSION_REDIRECT, SESSION_REDIRECT_ON, SESSION_REDIRECT_PATH, SESSION_STATE_KEY,
    SESSION_USER, SESSION_USER_MEDIA, SESSION_USER_MEDIA_COLLECTIONS, SESSION_USER_MEDIA_FILES
} from "../constants/session-constants";

const defaultState = {
    [SESSION_USER]: {},
    [SESSION_USER_MEDIA]: {
        [SESSION_USER_MEDIA_COLLECTIONS]: {},
        [SESSION_USER_MEDIA_FILES]: {}
    },
    [SESSION_AUTHENTICATED]: false,
    [SESSION_AUTHENTICATING]: true,
    [SESSION_PAGE_PATH]: null,
    [SESSION_REDIRECT]: {
        [SESSION_REDIRECT_ON]: false,
        [SESSION_REDIRECT_PATH]: "",
    },
    [SESSION_ERROR]: {}
};

const defaultReducers = {
    setSessionUser: (state, action) => {
        state[SESSION_USER] = action.payload;
    },
    setSessionUserMediaCollections: (state, action) => {
        state[SESSION_USER_MEDIA][SESSION_USER_MEDIA_COLLECTIONS] = action.payload;
    },
    setSessionUserMediaFiles: (state, action) => {
        state[SESSION_USER_MEDIA][SESSION_USER_MEDIA_FILES] = action.payload;
    },
    setSessionAuthenticated: (state, action) => {
        state[SESSION_AUTHENTICATED] = action.payload;
    },
    setSessionAuthenticating: (state, action) => {
        state[SESSION_AUTHENTICATING] = action.payload;
    },
    setSessionPagePath: (state, action) => {
        state[SESSION_PAGE_PATH] = action.payload;
    },
    setSessionRedirectOn: (state, action) => {
        state[SESSION_REDIRECT][SESSION_REDIRECT_ON] = action.payload;
    },
    setSessionRedirectPath: (state, action) => {
        state[SESSION_REDIRECT][SESSION_REDIRECT_PATH] = action.payload;
    },
    setSessionError: (state, action) => {
        state[SESSION_ERROR] = action.payload;
        console.error(state.error)
    },
};

export const sessionApiSlice = createSlice({
    name: SESSION_STATE_KEY,
    initialState: defaultState,
    reducers: defaultReducers,
});

export const sessionApiReducer = sessionApiSlice.reducer;
export const {
    setSessionUser,
    setSessionUserMediaCollections,
    setSessionUserMediaFiles,
    setSessionAuthenticated,
    setSessionAuthenticating,
    setSessionPagePath,
    setSessionRedirectPath,
    setSessionRedirectOn,
    setSessionError
} = sessionApiSlice.actions;