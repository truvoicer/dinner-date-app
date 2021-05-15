import React, {useEffect, useState} from 'react';
import {
    SESSION_AUTHENTICATED,
    SESSION_AUTHENTICATING, SESSION_REDIRECT, SESSION_REDIRECT_ON, SESSION_REDIRECT_PATH,
    SESSION_STATE_KEY,
    SESSION_USER
} from "../../../library/redux/constants/session-constants";
import {connect} from "react-redux";
import {isNotEmpty, isObjectEmpty} from "../../../library/helpers/utils-helper";
import {getRouteItem} from "../../../library/helpers/page-helper";
import {HOME_VIEW, LOGIN_VIEW} from "../../../config/constants/views/view-constants";
import store from "../../../library/redux/store";
import {AUTH_LOGIN_REQUESTED, AUTH_VALIDATION_REQUESTED} from "../../../library/redux/sagas/auth/auth-sagas";
import {accessControlChecker, isAnonymousAccessAllowed} from "../../../library/helpers/access-control-helper";
import {useRouter} from "next/router";
import {setSessionRedirectOnAction, setSessionRedirectPathAction} from "../../../library/redux/actions/session-actions";
import {setSessionRedirectPath} from "../../../library/redux/reducers/session-reducer";

const AuthWrapper = ({session, children, accessControlConfig}) => {
    const router = useRouter()
    const [isAllowed, setIsAllowed] = useState(false);

    useEffect(() => {
        if (
            session[SESSION_AUTHENTICATING] &&
            !session[SESSION_AUTHENTICATED]
        ) {
            store.dispatch({type: AUTH_VALIDATION_REQUESTED, payload: AUTH_VALIDATION_REQUESTED})
        } else if (
            !session[SESSION_AUTHENTICATING] &&
            !session[SESSION_AUTHENTICATED] &&
            !isAnonymousAccessAllowed({accessControlConfig: accessControlConfig})
        ) {
            setSessionRedirectOnAction(true)
            setSessionRedirectPathAction({path: getRouteItem(LOGIN_VIEW).href})
        }
    }, [session[SESSION_AUTHENTICATED], session[SESSION_AUTHENTICATING]])

    useEffect(() => {
        if (session[SESSION_REDIRECT][SESSION_REDIRECT_ON]) {
            router.replace(getRouteItem(LOGIN_VIEW).href);
            return () => {
                setSessionRedirectOnAction(false);
            };
        }
    }, [session[SESSION_REDIRECT][SESSION_REDIRECT_ON]]);


    useEffect(() => {
        if (!isObjectEmpty(session[SESSION_USER]) && isNotEmpty(accessControlConfig)) {
            setIsAllowed(
                accessControlChecker({
                    accessControlConfig: accessControlConfig,
                    user: session[SESSION_USER]
                })
            );
        }
    }, [session[SESSION_USER]]);

    return (
        <>
            {isAllowed && children}
        </>
    );
};
function mapStateToProps(state) {
    return {
        session: state[SESSION_STATE_KEY]
    };
}
export default connect(
    mapStateToProps,
    null
)(AuthWrapper);
