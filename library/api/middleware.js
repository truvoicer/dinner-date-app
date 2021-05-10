import {getSessionLocalStorage, getSessionObject} from "./session";
import {buildRequestUrl} from "./helpers/api-helpers";
import {apiConfig} from "../../config/api/config";
import {isSet} from "../helpers/utils-helper";
import store from "../redux/store";

const sprintf = require("sprintf-js").sprintf;
const axios = require("axios");

const apiRequest = axios.create({
    baseURL: apiConfig.baseUrl,
});

export const validateTokenRequest = () => {
    const requestData = {
        method: "get",
        url: `${apiConfig.endpoints.auth}/token/validate`,
        headers: {'Authorization': sprintf("Bearer %s", getSessionLocalStorage().access_token)}
    }
    return apiRequest.request(requestData);
}

export const fetchSessionUser = () => {
    const requestData = {
        method: "get",
        url: `${apiConfig.endpoints.session}/user/detail`,
        headers: {'Authorization': sprintf("Bearer %s", getSessionLocalStorage().access_token)}
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

export const fetchRequest = ({endpoint, operation = "", args = [], data={}, onSuccess, onError}) => {
    const request = {
        method: "get",
        url: buildRequestUrl({endpoint: endpoint, operation: operation, args: args}),
        params: data,
        headers: {'Authorization': sprintf("Bearer %s", getSessionLocalStorage().access_token)}
    }
    return apiRequest.request(request);
}

export const postRequest = ({endpoint, operation, requestData, args = [], headers = {}}) => {
    const request = {
        method: "post",
        url: buildRequestUrl({endpoint: endpoint, operation: operation, args: args}),
        data: requestData,
        headers: {
            'Authorization': sprintf("Bearer %s", getSessionLocalStorage().access_token),
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
            'Authorization': sprintf("Bearer %s", getSessionLocalStorage().access_token),
            'Content-Type': 'multipart/form-data',
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