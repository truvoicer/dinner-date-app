import {isNotEmpty} from "../../helpers/utils-helper";

const vsprintf = require("sprintf-js").vsprintf;

export const buildRequestUrl = ({endpoint = "", operation = "", args = []}) => {
    if (args.length > 0) {
        endpoint = vsprintf(endpoint, args)
    }
    return `${endpoint}/${operation}`;
}
export const validateResponse = (requiredFields, object, type) => {
    const requestData = {};
    for (let i = 0; i < requiredFields.length; i++) {
        let key = requiredFields[i];
        if (isNotEmpty(object[key])) {
            requestData[key] = object[key];
        } else {
            console.error(`${type} field [${key}] not valid`);
            return false;
        }
    }
    return requestData;
}