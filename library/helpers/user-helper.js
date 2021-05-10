import {SESSION_STATE_KEY, SESSION_USER} from "../redux/constants/session-constants";
import store from "../redux/store";
import {isNotEmpty, isObject, isSet} from "./utils-helper";
import React from "react";
import {MEMBERS_SINGLE, MEMBERS_STATE_KEY} from "../redux/constants/members-constants";

export const getUserProfileValue = (field) => {
    const userState = store.getState()[SESSION_STATE_KEY][SESSION_USER];
    const userProfile = userState?.user_profile;
    return (isSet(userProfile) && isSet(userProfile[field])) ? userProfile[field] : "";
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
    // console.log(isObject(field), field, value)
    let valueLabel = [];
    if (!isObject(field)) {
        valueLabel.push(value);
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
