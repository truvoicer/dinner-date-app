import React, {useContext} from 'react';
import {
    SESSION_AUTHENTICATED,
    SESSION_AUTHENTICATING,
    SESSION_STATE_KEY
} from "../../library/redux/constants/session-constants";
import {isAnonymousAccessAllowed, showLoginModal} from "../../library/helpers/access-control-helper";
import {GlobalContext} from "../contexts/GlobalContext";
import AuthLoginFormBlock from "../blocks/auth/AuthLoginFormBlock";
import store from "../../library/redux/store";
import {isSet} from "../../library/helpers/utils-helper";
import {useRouter} from "next/router";

export const InternalLink = React.forwardRef(({ onClick, href, children, targetRouteConfig}, ref) => {
    const router = useRouter();
    const session = store.getState()[SESSION_STATE_KEY];
    const globalContext = useContext(GlobalContext);

    const clickHandler = (e) => {
        if (
            !session[SESSION_AUTHENTICATING] &&
            !session[SESSION_AUTHENTICATED] &&
            !isAnonymousAccessAllowed({accessControlConfig: targetRouteConfig?.access_control})
        ) {
            e.preventDefault()
            showLoginModal(globalContext)
        }
        if (isSet(targetRouteConfig?.override) && typeof targetRouteConfig.override === "function") {
            e.preventDefault()
            targetRouteConfig.override(router, globalContext, e);
        }
        onClick(e)
    }
    return (
        <a href={href} onClick={clickHandler} ref={ref}>
            {children}
        </a>
    )
})