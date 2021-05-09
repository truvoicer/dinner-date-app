import {SESSION_STATE_KEY, SESSION_USER} from "../redux/constants/session-constants";
import store from "../redux/store";
import {isNotEmpty, isSet} from "./utils-helper";

export const getUserProfileValue = (field, targetUser) => {
    console.log(field, targetUser)
    const userProfile = targetUser?.user_profile;
    return (isSet(userProfile) && isSet(userProfile[field]))? userProfile[field] : "";
}

export const getUserMediaValue = ({files, mediaCategory}) => {
    if (!Array.isArray(files) || files.length === 0) {
        return false;
    }
    const findMedia = files.find(file => file.media_category === mediaCategory);
    if (!isNotEmpty(findMedia)) {
        return false;
    }
    return findMedia?.public_url || false;
}