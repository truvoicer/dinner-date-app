import {getSessionObject} from "./session";
import {buildRequestUrl} from "./helpers/api-helpers";
import {apiConfig} from "../../config/api/config";
import {isSet} from "../helpers/utils-helper";

const sprintf = require("sprintf-js").sprintf;
const axios = require("axios");

const apiRequest = axios.create({
    baseURL: apiConfig.baseUrl,
});

export const fetchSessionUser = async () => {
    const requestData = {
        method: "post",
        url: `${apiConfig.endpoints.session}/user/details`,
        headers: {'Authorization': sprintf("Bearer %s", getSessionObject().access_token)}
    }
    return await apiRequest.request(requestData);
}

export const getToken = ({requestData, onSuccess, onError}) => {
    const request = {
        method: "post",
        url: process.env.NEXT_PUBLIC_API_URL + apiConfig.endpoints.login,
        data: requestData,
    }
    responseHandler({
        promise: apiRequest.request(request),
        onError: onError,
        onSuccess: onSuccess
    })
}

export const fetchRequest = ({endpoint, operation = "", args = [], data={}, onSuccess, onError}) => {
    const request = {
        method: "get",
        url: buildRequestUrl({endpoint: endpoint, operation: operation, args: args}),
        params: data,
        headers: {'Authorization': sprintf("Bearer %s", getSessionObject().access_token)}
    }
    responseHandler({
        promise: apiRequest.request(request),
        onError: onError,
        onSuccess: onSuccess
    })
}

export const postRequest = ({endpoint, operation, requestData, args = [], method = "post", headers = {}, onSuccess, onError}) => {
    const request = {
        method: method,
        url: buildRequestUrl({endpoint: endpoint, operation: operation, args: args}),
        data: requestData,
        headers: {
            'Authorization': sprintf("Bearer %s", getSessionObject().access_token),
            ...headers
        }
    }
    responseHandler({
        promise: apiRequest.request(request),
        onError: onError,
        onSuccess: onSuccess
    })
}

export const responseHandler = ({promise, onSuccess, onError}) => {
    promise.then(response => {
        onSuccess(response.data)
    }).catch(error => {
        if (isSet(onError)) {
            onError(error)
        } else {
            // setErrorAlertAction({
            //     text: error?.response?.data?.message || error?.response?.message || "Error"
            // })
        }
        console.error(error)
    });
}