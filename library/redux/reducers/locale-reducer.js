
// AUTH STATE
import {createSlice} from "@reduxjs/toolkit";
import {LOCALE_COUNTRIES, LOCALE_ERROR, LOCALE_STATE_KEY} from "../constants/locale-constants";

const defaultState = {
    [LOCALE_COUNTRIES]: [],
    [LOCALE_ERROR]: {}
};

const defaultReducers = {
    setLocaleCountries: (state, action) => {
        state[LOCALE_COUNTRIES] = action.payload;
    },
    setLocaleError: (state, action) => {
        state[LOCALE_ERROR] = action.payload;
        console.error(state.error)
    },
};

export const localeSlice = createSlice({
    name: LOCALE_STATE_KEY,
    initialState: defaultState,
    reducers: defaultReducers,
});

export const localeReducer = localeSlice.reducer;
export const { setLocaleCountries, setLocaleError } = localeSlice.actions;