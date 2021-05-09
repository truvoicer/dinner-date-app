
// AUTH STATE
import {createSlice} from "@reduxjs/toolkit";
import {
    MEMBERS_ERROR,
    MEMBERS_SEARCH,
    MEMBERS_SEARCH_RESULTS,
    MEMBERS_SINGLE,
    MEMBERS_STATE_KEY
} from "../constants/members-constants";

const defaultState = {
    [MEMBERS_SEARCH]: {
        [MEMBERS_SEARCH_RESULTS]: []
    },
    [MEMBERS_SINGLE]: {},
    [MEMBERS_ERROR]: {}
};

const defaultReducers = {
    setMembersSearchResults: (state, action) => {
        state[MEMBERS_SEARCH][MEMBERS_SEARCH_RESULTS] = action.payload;
    },
    setMembersSingle: (state, action) => {
        state[MEMBERS_SINGLE] = action.payload;
    },
    setMembersError: (state, action) => {
        state[MEMBERS_ERROR] = action.payload;
        console.error(state.error)
    },
};

export const membersSlice = createSlice({
    name: MEMBERS_STATE_KEY,
    initialState: defaultState,
    reducers: defaultReducers,
});

export const membersReducer = membersSlice.reducer;
export const { setMembersSearchResults, setMembersSingle, setMembersError } = membersSlice.actions;