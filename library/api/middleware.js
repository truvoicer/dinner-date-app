import {getSessionObject} from "./session";
import {buildRequestUrl} from "./helpers/api-helpers";
import {apiConfig} from "../../config/api/config";
import {isSet} from "../helpers/utils-helper";
import store from "../redux/store";

const sprintf = require("sprintf-js").sprintf;
const axios = require("axios");

const apiRequest = axios.create({
    baseURL: apiConfig.baseUrl,
});

export const fetchSessionUser = () => {
    const requestData = {
        method: "get",
        url: `${apiConfig.endpoints.session}/user/detail`,
        headers: {'Authorization': sprintf("Bearer %s", getSessionObject().access_token)}
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
    // return responseHandler({
    //     promise: apiRequest.request(request),
    // })
}

export const fetchRequest = ({endpoint, operation = "", args = [], data={}, onSuccess, onError}) => {
    const request = {
        method: "get",
        url: buildRequestUrl({endpoint: endpoint, operation: operation, args: args}),
        params: data,
        headers: {'Authorization': sprintf("Bearer %s", getSessionObject().access_token)}
    }
    return apiRequest.request(request);
    // responseHandler({
    //     promise: apiRequest.request(request),
    // })
}

// export const postRequest = ({endpoint, operation, requestData, args = [], method = "post", headers = {}, onSuccess, onError}) => {
//     const request = {
//         method: method,
//         url: buildRequestUrl({endpoint: endpoint, operation: operation, args: args}),
//         data: requestData,
//         headers: {
//             'Authorization': sprintf("Bearer %s", getSessionObject().access_token),
//             ...headers
//         }
//     }
//     responseHandler({
//         promise: apiRequest.request(request),
//         onError: onError,
//         onSuccess: onSuccess
//     })
// }
export const postRequest = ({endpoint, operation, requestData, args = [], headers = {}}) => {
    const request = {
        method: "post",
        url: buildRequestUrl({endpoint: endpoint, operation: operation, args: args}),
        data: requestData,
        headers: {
            'Authorization': sprintf("Bearer %s", getSessionObject().access_token),
            ...headers
        }
    }
    responseHandler({
        promise: apiRequest.request(request)
    })
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