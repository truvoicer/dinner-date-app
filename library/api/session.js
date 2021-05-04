import React from 'react'
import {
    setSessionAuthenticatedAction, setSessionAuthenticatingAction,
    setSessionLoginRedirectAction,
    setSessionUserAction
} from "../redux/actions/session-actions";
import {setSessionAuthenticating} from "../redux/reducers/session-reducer";

export const setTokenStorage = (data) => {
    setSessionLocalStorage(data);
}
export const setSessionState = (data) => {
    setSessionAuthenticatedAction(true);
    setSessionAuthenticatingAction(false);
    setSessionUserAction(data.user);
}

// Sets user details in localStorage
export const setSessionLocalStorage = ({access_token, expires_at}) => {
    // Set the time that the access token will expire at
    let expiresAt = JSON.stringify((expires_at * 1000) + new Date().getTime());
    localStorage.setItem('access_token', access_token);
    localStorage.setItem('expires_at', expiresAt);
    // navigate to the home route
}

// removes user details from localStorage
export const logout = (redirectUrl) => {
    // Clear access token and ID token from local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('expires_at');
    setSessionLoginRedirectAction(redirectUrl);
    localStorage.setItem("redirect_url", redirectUrl);
    console.log(redirectUrl)
}

export const getSessionLocalStorage = () => {
    return {
        access_token: localStorage.getItem('access_token'),
        expires_at: JSON.parse(localStorage.getItem('expires_at'))
    }
}


export const checkAccessControl = (routeItem, userData) => {
  let check =  userData.roles.filter((userRole) => {
      let access = routeItem.access_control.filter((routeRole) => userRole === routeRole);
      return access.length > 0;
  })
    return check.length > 0;
};