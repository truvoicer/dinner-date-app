import {USER_PROFILE_UPDATE} from "./editable-fields-constants";
import {SESSION_USER_PROFILE_UPDATE_REQUESTED} from "../../../library/redux/sagas/user/user-sagas";
import {isSet} from "../../../library/helpers/utils-helper";

export const getEditableField = (name) => {
    if (!isSet(editableFieldsConfig[name])) {
        return false;
    }
    return editableFieldsConfig[name];
}
export const getEditableFieldAction = (name) => {
    const action = getEditableField(name)?.action;
    if(!action) {
        console.error(`Editable config ${name} doesn't  contain an action field`)
        return false;
    }
    return action;
}
export const getExtraFieldProps = (field) => {
    const props = {};
    if (isSet(field?.options)) {
        props.options = field.options;
    }
    return props;
}
export const editableFieldsConfig = {
    [USER_PROFILE_UPDATE]: {
        action: SESSION_USER_PROFILE_UPDATE_REQUESTED,
    }
}
