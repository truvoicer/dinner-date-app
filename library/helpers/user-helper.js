import {SESSION_STATE_KEY, SESSION_USER} from "../redux/constants/session-constants";
import store from "../redux/store";
import {isSet} from "./utils-helper";

export const getUserProfileValue = (field) => {
    const userProfile = store.getState()[SESSION_STATE_KEY][SESSION_USER]?.user_profile;
    return (isSet(userProfile) && isSet(userProfile[field]))? userProfile[field] : "";
}