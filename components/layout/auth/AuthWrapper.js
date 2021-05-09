import React, {useEffect, useState} from 'react';
import {
    SESSION_AUTHENTICATED,
    SESSION_AUTHENTICATING,
    SESSION_STATE_KEY,
    SESSION_USER
} from "../../../library/redux/constants/session-constants";
import {connect} from "react-redux";
import {isNotEmpty, isObjectEmpty} from "../../../library/helpers/utils-helper";
import {getRouteItem} from "../../../library/helpers/page-helper";
import {HOME_VIEW} from "../../../config/constants/views/view-constants";
import store from "../../../library/redux/store";
import {AUTH_LOGIN_REQUESTED, AUTH_VALIDATION_REQUESTED} from "../../../library/redux/sagas/auth/auth-sagas";
import {accessControlChecker} from "../../../library/helpers/access-control-helper";

const AuthWrapper = ({session, children, accessControlConfig}) => {
    const [isAllowed, setIsAllowed] = useState(false);

    useEffect(() => {
        if (
            session[SESSION_AUTHENTICATING] &&
            !session[SESSION_AUTHENTICATED]
        ) {
            store.dispatch({type: AUTH_VALIDATION_REQUESTED, payload: AUTH_VALIDATION_REQUESTED})
        }
    }, [session[SESSION_AUTHENTICATED], session[SESSION_AUTHENTICATING]])

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
