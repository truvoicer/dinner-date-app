import {SESSION_STATE_KEY, SESSION_USER} from "../redux/constants/session-constants";
import store from "../redux/store";

export const getUserProfileValue = (field) => {
    const userProfile = store.getState()[SESSION_STATE_KEY][SESSION_USER]?.user_profile;
    return userProfile[field] || "";
}