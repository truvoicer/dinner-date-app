import {
    SESSION_STATE_KEY,
    SESSION_USER,
    SESSION_USER_MEDIA,
    SESSION_USER_MEDIA_FILES
} from "../redux/constants/session-constants";
import store from "../redux/store";
import {isNotEmpty, isObject, isSet} from "./utils-helper";
import React from "react";
import {MEMBERS_SINGLE, MEMBERS_STATE_KEY} from "../redux/constants/members-constants";
import {setSessionUserMedia} from "../redux/reducers/session-reducer";
import {
    setSessionMediaCollectionFilesAction,
    setSessionMediaCollectionsAction, setSessionMediaCollectionsFilesAction, setSessionMediaCollectionsListsAction,
    setSessionMediaFilesAction
} from "../redux/actions/session-actions";
import {MEDIA_COLLECTION_FILES_TYPE, MEDIA_COLLECTION_LIST_TYPE} from "../redux/sagas/media/media-sagas";


export const getUserProfileValue = (field) => {
    const userState = store.getState()[SESSION_STATE_KEY][SESSION_USER];
    const userProfile = userState?.user_profile;
    return (isNotEmpty(userProfile) && isNotEmpty(userProfile[field])) ? userProfile[field] : "";
}

export const getSingleMemberProfileValue = (field) => {
    const memberState = store.getState()[MEMBERS_STATE_KEY][MEMBERS_SINGLE];
    const memberProfile = memberState?.user_profile;
    return (isSet(memberProfile) && isSet(memberProfile[field])) ? memberProfile[field] : "";
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


export const getValueLabel = ({field, value}) => {
    let valueLabel = [];
    if (!isObject(field)) {
        if (isObject(value) && isNotEmpty(value?.label)) {
            valueLabel.push(value.label)
        } else if (isObject(value) && isNotEmpty(value?.value)) {
            valueLabel.push(value.value)
        } else if (isObject(value)) {
            console.warn(`Field error, value object not set properly.`, value);
            valueLabel.push("Not Set")
        } else {
            valueLabel.push(value);
        }
    } else {
        Object.keys(field).map((key, index) => {
            if (!isSet(value)) {
                valueLabel.push(null);
            } else {
                valueLabel.push(value[key]);
            }
        });
    }
    return valueLabel;
}

export const getWeightValue = (weight, weight_unit) => {
    switch (weight_unit) {
        case "not_specified":
            return ""
        default:
            return weight;
    }
}

export const getWeightUnitValue = (weight_unit) => {
    switch (weight_unit) {
        case "not_specified":
            return ""
        default:
            return weight_unit;
    }
}

export const getHeightValue = (height, height_unit) => {
    switch (height_unit) {
        case "not_specified":
            return ""
        default:
            return height;
    }
}

export const getHeightUnitValue = (height_unit) => {
    switch (height_unit) {
        case "not_specified":
            return ""
        default:
            return height_unit;
    }
}

export const processUserMediaFiles = ({data}) => {
    setSessionMediaFilesAction({
        mediaData: data
    })
}
export const processUserMediaCollections = ({collectionFetchType, data}) => {
    switch (collectionFetchType) {
        case  MEDIA_COLLECTION_LIST_TYPE:
            setSessionMediaCollectionsListsAction({
                collections: data
            })
            break;
        case MEDIA_COLLECTION_FILES_TYPE:
            setSessionMediaCollectionsFilesAction({
                collectionData: data
            })
            break;
        default:
            console.error("Collection fetch type not set for collection fetch")
            return;
    }
}

export const getUserMediaListByCategory = (categories) => {
    const mediaState = {...store.getState()[SESSION_STATE_KEY][SESSION_USER_MEDIA][SESSION_USER_MEDIA_FILES]};
    if (!Array.isArray(categories)) {
        console.warn("Media category option is not an array.")
        return [];
    }
    let list = [];
    categories.forEach(category => {
        if (isSet(mediaState[category]) && Array.isArray(mediaState[category])) {
            list = [...list, ...mediaState[category]];
        }
    })
    return list;
}

export const checkUserInAction = (action) => {
    if (!isSet(action?.user)) {
        console.error("User request object invalid")
        return false;
    }
    return true;
}