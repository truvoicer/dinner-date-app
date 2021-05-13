import {getSessionLocalStorage, getSessionObject} from "./session";
import {buildRequestUrl} from "./helpers/api-helpers";
import {apiConfig} from "../../config/api/config";
import {isNotEmpty, isSet} from "../helpers/utils-helper";
import store from "../redux/store";
import {sessionLogoutHandler} from "../redux/actions/session-actions";

const sprintf = require("sprintf-js").sprintf;
const axios = require("axios");

const apiRequest = axios.create({
    baseURL: apiConfig.baseUrl,
});
const getAuthHeader = () => {
    let tokenProvider = getSessionLocalStorage()?.token_provider;
    if (!isNotEmpty(tokenProvider)) {
        sessionLogoutHandler()
        console.error("token provider invalid");
        return;
    }
    return {
        'Authorization': sprintf("Bearer %s", getSessionLocalStorage().access_token),
        'Token-Provider': tokenProvider
    };
}
export const validateTokenRequest = () => {
    const requestData = {
        method: "get",
        url: `${apiConfig.endpoints.auth}/token/validate`,
        headers: getAuthHeader()
    }
    return apiRequest.request(requestData);
}

export const fetchSessionUser = () => {
    const requestData = {
        method: "get",
        url: `${apiConfig.endpoints.session}/user/detail`,
        headers: getAuthHeader()
    }
    return apiRequest.request(requestData);
}

export const authLoginRequest = ({payload, type, errorAction}) => {
    const request = {
        method: "post",
        url: process.env.NEXT_PUBLIC_API_URL + apiConfig.endpoints.login,
        data: payload,
    }
    return apiRequest.request(request);
}

export const externalProviderAuthRequest = ({payload}) => {
    const request = {
        method: "post",
        url: process.env.NEXT_PUBLIC_API_URL + apiConfig.endpoints.auth + "/external/provider",
        data: payload,
    }
    return apiRequest.request(request);
}

export const fetchRequest = ({endpoint, operation = "", args = [], data={}, onSuccess, onError}) => {
    const request = {
        method: "get",
        url: buildRequestUrl({endpoint: endpoint, operation: operation, args: args}),
        params: data,
        headers: getAuthHeader()
    }
    return apiRequest.request(request);
}

export const postRequest = ({endpoint, operation, requestData, args = [], headers = {}}) => {
    const request = {
        method: "post",
        url: buildRequestUrl({endpoint: endpoint, operation: operation, args: args}),
        data: requestData,
        headers: {
            ...getAuthHeader(),
            ...headers
        }
    }
    return apiRequest.request(request);
}


export function fileUploadApiRequest({endpoint, operation, requestData = {}, args = [], headers = {}}) {
    let formValues = new FormData();
    Object.keys(requestData).map(key => {
        formValues.append(key, requestData[key]);
    })
    const request = {
        method: "post",
        url: buildRequestUrl({endpoint: endpoint, operation: operation, args: args}),
        data: formValues,
        headers: {
            ...getAuthHeader(),
            ...{'Content-Type': 'multipart/form-data'},
            ...headers
        }
    }
    return apiRequest.request(request);
}

export const responseHandler = ({promise, action, errorAction}) => {
    promise.then(response => {
        // onSuccess(response.data)
        store.dispatch({type: action, user: response.data})
    }).catch(error => {
        store.dispatch({type: action, message: error?.response?.data?.message || error?.response?.message || "Error"})
        // if (isSet(onError)) {
        //     onError(error)
        // } else {
            // setErrorAlertAction({
            //     text: error?.response?.data?.message || error?.response?.message || "Error"
            // })
        // }
        // console.error(error)
    });
}